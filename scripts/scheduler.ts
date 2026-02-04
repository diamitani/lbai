import { exec } from "child_process";
import path from "path";

// Configuration
const SYNC_TIME_HOUR = 6; // 6 AM
const SYNC_TIME_MINUTE = 0;

function runSync() {
    console.log(`[${new Date().toISOString()}] Starting RSS sync...`);
    const scriptPath = path.resolve(__dirname, "sync-rss.ts");

    // We use tsx to run the typescript file directly
    exec(`npx tsx "${scriptPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`[${new Date().toISOString()}] Error running sync:`, error);
            return;
        }
        if (stderr) {
            console.error(`[${new Date().toISOString()}] Sync stderr:`, stderr);
        }
        console.log(`[${new Date().toISOString()}] Sync output:\n`, stdout);
        console.log(`[${new Date().toISOString()}] Sync completed successfully.`);
    });
}

function scheduleNextSync() {
    const now = new Date();
    const nextSync = new Date();

    // Set to today's 6 AM
    nextSync.setHours(SYNC_TIME_HOUR, SYNC_TIME_MINUTE, 0, 0);

    // If 6 AM has already passed today, schedule for tomorrow
    if (now > nextSync) {
        nextSync.setDate(nextSync.getDate() + 1);
    }

    const timeUntilNextSync = nextSync.getTime() - now.getTime();
    const hoursUntil = Math.floor(timeUntilNextSync / (1000 * 60 * 60));
    const minutesUntil = Math.floor((timeUntilNextSync % (1000 * 60 * 60)) / (1000 * 60));

    console.log(`[${new Date().toISOString()}] Next sync scheduled for ${nextSync.toLocaleString()} (in ~${hoursUntil}h ${minutesUntil}m)`);

    setTimeout(() => {
        runSync();
        // After running, schedule the next one (daily loop)
        scheduleNextSync();
    }, timeUntilNextSync);
}

// Start the process
console.log("Starting RSS Feed Scheduler...");
console.log("--------------------------------");

// Run once on startup to ensure fresh data immediately (optional, but good for UX)
// User asked to "start with all articles now", which we did manually. 
// But a fresh start of the scheduler could also trigger one or just wait.
// Let's trigger one immediately if the user wants "fresh" data on start, 
// but to respect the "daily at 6am" strictness, maybe we just wait.
// However, standard cron behavior often implies "run on schedule", but for a dev tool, 
// often people want "run now AND schedule". 
// Given I just ran it manually, I will just schedule the next one.

scheduleNextSync();
