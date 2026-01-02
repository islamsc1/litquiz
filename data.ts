import { Section } from './types';

// Helper to create options easily
// Note: Based on the OCR provided, the correct answers were identified by bold text.
// Only a subset of questions are implemented here for demonstration and performance.
// You can add the rest following this pattern.

export const QUIZ_DATA: Section[] = [
  {
    id: 'simone',
    title: 'Simone',
    description: 'Questions 56-89 covering Beauvoir’s views on women, marriage, and society.',
    questions: [
      {
        id: 56,
        text: "… defines the figure that the human female takes on in society, …",
        options: [
          "psychic, feminine",
          "civilization, feminine",
          "economic, feminine",
          "biological, feminine"
        ],
        correctAnswerIndex: 1
      },
      {
        id: 57,
        text: "Beauvoir suggests that the institution of marriage relies on…….",
        options: [
          "partnership",
          "friendship",
          "equality",
          "imposition"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 58,
        text: "Beauvoir writes “to keep men dominant,….. is socialized and not inherent.”",
        options: [
          "femininity",
          "partnership",
          "equality",
          "none"
        ],
        correctAnswerIndex: 0
      },
      {
        id: 59,
        text: "Beauvoir believes that girls are brought to ……their appearance.",
        options: [
          "condemn",
          "value",
          "understand",
          "compromise"
        ],
        correctAnswerIndex: 1
      },
      {
        id: 60,
        text: "According to Beauvoir, a woman’s physiological role is achieved through……",
        options: [
          "marriage",
          "work",
          "motherhood",
          "education"
        ],
        correctAnswerIndex: 2
      },
      {
        id: 61,
        text: "Beauvoir describes married women of her age as ...",
        options: [
          "independent",
          "religious",
          "parasites",
          "selfish"
        ],
        correctAnswerIndex: 2
      },
      {
        id: 62,
        text: "Beauvoir condemns that Consequences resulting from…..are not perceived, while those of…..are comprehended as seriously threatening.",
        options: [
          "forced motherhood, abortion",
          "abortion, forced mother hood",
          "marriage, abortion",
          "abortion, divorce"
        ],
        correctAnswerIndex: 0
      },
      {
        id: 63,
        text: "Beauvoir explains that ... relation with ... is ... since a man can have salves or mistresses.",
        options: [
          "Jalil’s, Nana, tolerated",
          "Omran, gypsy, condemned",
          "Rasheed, Mariam, marriage",
          "all of the previous"
        ],
        correctAnswerIndex: 0
      },
      {
        id: 64,
        text: "Women have been called……",
        options: [
          "objects",
          "the other",
          "derivatives",
          "all of the previous"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 65,
        text: "In marrying, a wife is …. to her husband’s universe.",
        options: [
          "abated",
          "given",
          "annexed",
          "extended"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: 'suns',
    title: 'A Thousand Splendid Suns',
    description: 'Questions 90-150 covering the novel and "A Cloudy Day on the Western Mainland".',
    questions: [
      {
        id: 90,
        text: "Mariam and Laila grow up during … regimes, yet Mariam was ... into marriage.",
        options: [
          "not oppressive, forced",
          "oppressive, given",
          "relieving, chosen",
          "tyrannical, coerced"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 91,
        text: "For Rashid, sexual life is a……. as Beauvoir describes in the Married Woman.",
        options: [
          "relation",
          "job",
          "love action",
          "none"
        ],
        correctAnswerIndex: 1
      },
      {
        id: 92,
        text: "In A Thousand Splendid Suns, Mariam is nicknamed ……. before her birth.",
        options: [
          "Jalil’s daughter",
          "an illegitimate",
          "harami",
          "Nana’s girl"
        ],
        correctAnswerIndex: 2
      },
      {
        id: 93,
        text: "Beauvoir argues “A woman is not guaranteed equal dignity in marriage,” which is perfectly presented by…….",
        options: [
          "Omran",
          "Jalil",
          "Rasheed",
          "all of the previous"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 94,
        text: "Beauvoir argues “A woman is not guaranteed equal dignity in marriage,” which is perfectly presented by…….",
        options: [
          "Jalil and Nana",
          "Rashid and Mariam",
          "Hakim and Fariba",
          "a and b"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 95,
        text: "… to…“I thought about you all the time. I used to pray that you would live to be a hundred years old. I did not know. I didn’t know that you were ashamed of me.”",
        options: [
          "Ayisha, Moktar",
          "Nana, Jalil",
          "Mariam to Jalil",
          "Ayisha, Carter"
        ],
        correctAnswerIndex: 1
      },
      {
        id: 96,
        text: "In A Thousand Splendid Suns…….. is a clear illustration that girls are judged by what they have not done",
        options: [
          "Mariam",
          "Nana",
          "Laila",
          "Nour"
        ],
        correctAnswerIndex: 0
      },
      {
        id: 97,
        text: "In A Thousand Splendid Suns, Mariam is……..by her society, she is called…..",
        options: [
          "accepted, a bastard",
          "rejected, Nana’s girl",
          "challenged, illegitimate",
          "condemned, a bastard"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 98,
        text: "Mariam’s marriage stands for what Beauvoir calls……",
        options: [
          "marriage",
          "miserable marriage",
          "submissive relation",
          "legal rape"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 99,
        text: "Beauvoir discusses cases of married women like Mariam, who suffer because they live to……..",
        options: [
          "produce kids",
          "keep home",
          "work",
          "a and b"
        ],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    id: 'freud',
    title: 'Analysis of Freud',
    description: 'Questions 1-159 covering Beauvoir’s analysis of Psychoanalysis.',
    questions: [
      {
        id: 1,
        text: "In marrying, a wife ... her husband’s name, joins his religion, ... into his class, and belongs to his family.",
        options: [
          "takes, falls",
          "refuses, integrates",
          "confirms, gets",
          "takes, integrates"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 2,
        text: "In marrying, a wife is …. to her husband’s universe.",
        options: [
          "annexed",
          "abated",
          "given",
          "extended"
        ],
        correctAnswerIndex: 0
      },
      {
        id: 3,
        text: "Law and costumes …… a wife’s obedience to her husband.",
        options: [
          "accept",
          "ask",
          "regret",
          "demand"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 4,
        text: "Law and costumes confer man as the …..",
        options: [
          "responsible",
          "producer",
          "destined",
          "desired"
        ],
        correctAnswerIndex: 1
      },
      {
        id: 5,
        text: "… and … bestow upon man the role to build future for the society.",
        options: [
          "law, costumes",
          "law, religion",
          "religion, costumes",
          "religion, culture"
        ],
        correctAnswerIndex: 0
      },
      {
        id: 6,
        text: "Law and costumes grant man great ……",
        options: [
          "authority",
          "destiny",
          "chance",
          "family"
        ],
        correctAnswerIndex: 0
      },
      {
        id: 7,
        text: "Men’s existence is to maintain …..; women are destined to maintain the ….",
        options: [
          "species, society",
          "species, family",
          "society, species",
          "family, society"
        ],
        correctAnswerIndex: 2
      },
      {
        id: 8,
        text: "For man, ….. provides the perfect synthesis of life and work.",
        options: [
          "family",
          "business",
          "sports",
          "marriage"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 9,
        text: "For men, marriage ….. him to establish a home, settles down.",
        options: [
          "grants",
          "gives",
          "denies",
          "allows"
        ],
        correctAnswerIndex: 3
      },
      {
        id: 10,
        text: "Freud argues …… are the components of human’s existence.",
        options: [
          "ego, id",
          "id, super ego",
          "super ego",
          "a&c"
        ],
        correctAnswerIndex: 3
      }
    ]
  }
];