export interface Trend {
  topic: string
  count: number
  sentiment: "positive" | "negative" | "neutral"
  threads: { title: string; url: string; score: number }[]
}

export const trends: Trend[] = [
  {
    "topic": "Https",
    "count": 52,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "DeepMind released mindblowing paper today",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qphlej/deepmind_released_mindblowing_paper_today/",
        "score": 694
      },
      {
        "title": "DeepMind released mindblowing paper today",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qphlej/deepmind_released_mindblowing_paper_today/",
        "score": 694
      },
      {
        "title": "Rogue AI agents found each other on social media, and are working together to improve their own memory.",
        "url": "https://reddit.com/r/singularity/comments/1qqh1zm/rogue_ai_agents_found_each_other_on_social_media/",
        "score": 329
      }
    ]
  },
  {
    "topic": "Gpt",
    "count": 49,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "OpenAI will retire GPT-4o, GPT-4.1, GPT-4.1 mini, and o4-mini from ChatGPT on February 13",
        "url": "https://reddit.com/r/singularity/comments/1qqlmgq/openai_will_retire_gpt4o_gpt41_gpt41_mini_and/",
        "score": 153
      },
      {
        "title": "OpenAI will retire GPT-4o, GPT-4.1, GPT-4.1 mini, and o4-mini from ChatGPT on February 13",
        "url": "https://reddit.com/r/singularity/comments/1qqlmgq/openai_will_retire_gpt4o_gpt41_gpt41_mini_and/",
        "score": 153
      },
      {
        "title": "OpenAI will retire GPT-4o, GPT-4.1, GPT-4.1 mini, and o4-mini from ChatGPT on February 13",
        "url": "https://reddit.com/r/singularity/comments/1qqlmgq/openai_will_retire_gpt4o_gpt41_gpt41_mini_and/",
        "score": 153
      }
    ]
  },
  {
    "topic": "Models",
    "count": 48,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "LingBot-World achieves the \"Holy Grail\" of video generation: Emergent Object Permanence without a 3D engine",
        "url": "https://reddit.com/r/singularity/comments/1qq7ddv/lingbotworld_achieves_the_holy_grail_of_video/",
        "score": 987
      },
      {
        "title": "LingBot-World outperforms Genie 3 in dynamic simulation and is fully Open Source",
        "url": "https://reddit.com/r/LocalLLaMA/comments/1qqj51h/lingbotworld_outperforms_genie_3_in_dynamic/",
        "score": 205
      },
      {
        "title": "OpenAI will retire GPT-4o, GPT-4.1, GPT-4.1 mini, and o4-mini from ChatGPT on February 13",
        "url": "https://reddit.com/r/singularity/comments/1qqlmgq/openai_will_retire_gpt4o_gpt41_gpt41_mini_and/",
        "score": 153
      }
    ]
  },
  {
    "topic": "World",
    "count": 41,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "LingBot-World achieves the \"Holy Grail\" of video generation: Emergent Object Permanence without a 3D engine",
        "url": "https://reddit.com/r/singularity/comments/1qq7ddv/lingbotworld_achieves_the_holy_grail_of_video/",
        "score": 987
      },
      {
        "title": "LingBot-World achieves the \"Holy Grail\" of video generation: Emergent Object Permanence without a 3D engine",
        "url": "https://reddit.com/r/singularity/comments/1qq7ddv/lingbotworld_achieves_the_holy_grail_of_video/",
        "score": 987
      },
      {
        "title": "LingBot-World achieves the \"Holy Grail\" of video generation: Emergent Object Permanence without a 3D engine",
        "url": "https://reddit.com/r/singularity/comments/1qq7ddv/lingbotworld_achieves_the_holy_grail_of_video/",
        "score": 987
      }
    ]
  },
  {
    "topic": "Com",
    "count": 33,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "DeepMind released mindblowing paper today",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qphlej/deepmind_released_mindblowing_paper_today/",
        "score": 694
      },
      {
        "title": "DeepMind released mindblowing paper today",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qphlej/deepmind_released_mindblowing_paper_today/",
        "score": 694
      },
      {
        "title": "Rogue AI agents found each other on social media, and are working together to improve their own memory.",
        "url": "https://reddit.com/r/singularity/comments/1qqh1zm/rogue_ai_agents_found_each_other_on_social_media/",
        "score": 329
      }
    ]
  },
  {
    "topic": "Model",
    "count": 32,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "LingBot-World achieves the \"Holy Grail\" of video generation: Emergent Object Permanence without a 3D engine",
        "url": "https://reddit.com/r/singularity/comments/1qq7ddv/lingbotworld_achieves_the_holy_grail_of_video/",
        "score": 987
      },
      {
        "title": "LingBot-World achieves the \"Holy Grail\" of video generation: Emergent Object Permanence without a 3D engine",
        "url": "https://reddit.com/r/singularity/comments/1qq7ddv/lingbotworld_achieves_the_holy_grail_of_video/",
        "score": 987
      },
      {
        "title": "Google launched Project Genie built on their model Genie 3, available now for AI ultra plans",
        "url": "https://reddit.com/r/singularity/comments/1qqeg3a/google_launched_project_genie_built_on_their/",
        "score": 221
      }
    ]
  },
  {
    "topic": "Just",
    "count": 30,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "LingBot-World achieves the \"Holy Grail\" of video generation: Emergent Object Permanence without a 3D engine",
        "url": "https://reddit.com/r/singularity/comments/1qq7ddv/lingbotworld_achieves_the_holy_grail_of_video/",
        "score": 987
      },
      {
        "title": "DeepMind released mindblowing paper today",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qphlej/deepmind_released_mindblowing_paper_today/",
        "score": 694
      },
      {
        "title": "DeepMind released mindblowing paper today",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qphlej/deepmind_released_mindblowing_paper_today/",
        "score": 694
      }
    ]
  },
  {
    "topic": "Openai",
    "count": 23,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "Nearly half of the Mag 7 are reportedly betting big on OpenAI’s path to AGI",
        "url": "https://reddit.com/r/OpenAI/comments/1qpxz9k/nearly_half_of_the_mag_7_are_reportedly_betting/",
        "score": 288
      },
      {
        "title": "Nearly half of the Mag 7 are reportedly betting big on OpenAI’s path to AGI",
        "url": "https://reddit.com/r/OpenAI/comments/1qpxz9k/nearly_half_of_the_mag_7_are_reportedly_betting/",
        "score": 288
      },
      {
        "title": "Nearly half of the Mag 7 are reportedly betting big on OpenAI’s path to AGI",
        "url": "https://reddit.com/r/OpenAI/comments/1qpxz9k/nearly_half_of_the_mag_7_are_reportedly_betting/",
        "score": 288
      }
    ]
  },
  {
    "topic": "Data",
    "count": 22,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "Amazon found \"high volume\" of child sex material in its AI training data",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qqdjlw/amazon_found_high_volume_of_child_sex_material_in/",
        "score": 274
      },
      {
        "title": "Amazon found \"high volume\" of child sex material in its AI training data",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qqdjlw/amazon_found_high_volume_of_child_sex_material_in/",
        "score": 274
      },
      {
        "title": "Amazon found \"high volume\" of child sex material in its AI training data",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qqdjlw/amazon_found_high_volume_of_child_sex_material_in/",
        "score": 274
      }
    ]
  },
  {
    "topic": "Training",
    "count": 21,
    "sentiment": "neutral",
    "threads": [
      {
        "title": "Amazon found \"high volume\" of child sex material in its AI training data",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qqdjlw/amazon_found_high_volume_of_child_sex_material_in/",
        "score": 274
      },
      {
        "title": "Amazon found \"high volume\" of child sex material in its AI training data",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qqdjlw/amazon_found_high_volume_of_child_sex_material_in/",
        "score": 274
      },
      {
        "title": "Amazon found \"high volume\" of child sex material in its AI training data",
        "url": "https://reddit.com/r/ArtificialInteligence/comments/1qqdjlw/amazon_found_high_volume_of_child_sex_material_in/",
        "score": 274
      }
    ]
  }
]
