export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "bayberry",
    "name": "Bayberry",
    "h1": "Hydro Jetting in Bayberry, Clay NY",
    "title": "Hydro Jetting in Bayberry, Clay | Clay Hydro Jetting Pros",
    "description": "Hydro jetting in Bayberry, Clay NY: how a mid-1950s planned neighborhood shapes drain line questions and how a cleaning gets planned. Call (877) 761-0283.",
    "intro": "Bayberry was planned in the mid-1950s as a neighborhood with sanitary sewers from the start. Age and a recurring clog are separate questions, and the line itself answers the second one.",
    "heroPs": [
      "Bayberry's mid-century homes can develop slow drains from decades of kitchen grease, scale and roots reaching in from mature yard trees. Hydro jetting can scour that buildup from a sound line when an inspection shows it is the right method. Tell the crew which fixtures are slow and what changed after the last cleaning."
    ],
    "bodyH2": "Hydro Jetting for Bayberry Properties",
    "bodyPs": [
      "Bayberry was planned in the mid-1950s, and the town historian records that the first sales office opened in 1956. The original plans included sanitary sewers along with water and storm drainage. That is useful context, because it means the neighborhood was laid out around a sewer system rather than retrofitted to one.",
      "A neighborhood that old has had decades for things to happen underground. Lines settle, roots find joints, and households add grease, wipes and mineral buildup to the pipe wall year after year. Hydro jetting clears a line with a high-pressure stream of water, and on a sound pipe it removes residue that a snake only punches through.",
      "Planning history does not tell you what a particular private line is made of or what shape it is in. Past repairs, a replaced section or a renovation can change the picture from one house to the next, which is why the inspection comes before the cleaning."
    ],
    "considerations": [
      "Which fixtures are slow, and whether the whole house is affected",
      "Any past cleanings, repairs or replaced sections of the sewer line",
      "Mature trees near the path of the lateral",
      "Cooking and disposal habits in the kitchen",
      "Where the cleanout is, and whether it is easy to reach",
      "Whether the problem sits in the private lateral or the public sewer"
    ],
    "svcH2": "Hydro Jetting Services in Bayberry",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "Decades of kitchen use can leave a hardened grease layer inside a mid-century line.",
      "tree-root-intrusions": "Established yard trees are common in older neighborhoods, and roots follow moisture to pipe joints.",
      "recurring-clogs-and-slow-drains": "A drain that slows again soon after clearing is holding onto something the clearing left behind.",
      "mineral-and-scale-deposits": "Scale narrows a line gradually and can build up at bends and joints over many years.",
      "preventative-maintenance": "A planned cleaning after an inspection can keep a small finding from becoming a backup."
    },
    "appsH2": "Hydro Jetting Situations in a Mid-Century Neighborhood",
    "apps": [
      {
        "h": "Kitchen lines that keep slowing",
        "ps": [
          "A kitchen line in a home that has been cooking in the same pipe for decades can carry a thick layer of grease. Jetting strips the layer from the wall instead of opening a narrow channel through it."
        ]
      },
      {
        "h": "Roots from mature yard trees",
        "ps": [
          "Bayberry's established yards mean established roots. If a line clears and then slows again, roots entering at a joint are a common reason, and an inspection can confirm it."
        ]
      },
      {
        "h": "Lines with a repair history",
        "ps": [
          "Over many years a lateral may have been patched or partly replaced. Mixed sections change how a cleaning should be done, so share whatever repair history you know."
        ]
      },
      {
        "h": "Planned upkeep before a backup",
        "ps": [
          "Once a line has clogged twice, the pattern is information. A planned cleaning timed before the next recurrence tends to beat another urgent call."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Bayberry",
    "implPs": [
      "Mid-century homes bring a familiar set of questions about material, history and access. None of them can be answered from the street.",
      "The points below shape the work in a neighborhood planned in the 1950s."
    ],
    "impl": [
      {
        "h": "Material is a question for the camera",
        "ps": [
          "Pipe from this era may be clay, cast iron or a newer replacement, and one home can have more than one. Condition decides whether high pressure is a good idea."
        ],
        "bullets": [
          "Share any repair or replacement records",
          "Expect an inspection before any cleaning"
        ]
      },
      {
        "h": "Roots and joints",
        "ps": [
          "Older joints give roots a way in, and clearing the roots does not repair the opening. Ask what the inspection shows about the joint itself."
        ],
        "bullets": [
          "Note trees close to the line",
          "Ask whether a repair assessment makes sense after clearing"
        ]
      },
      {
        "h": "Private line, public main",
        "ps": [
          "The town sewer system is separate from your lateral. Where the blockage sits decides who is responsible for it."
        ],
        "bullets": [
          "Describe whether the backup is limited to your home",
          "Ask the town about the public side if neighbors are affected too"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Bayberry",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Locate the cleanout",
        "d": "Find the access point so the crew can reach the line directly, and note trees or additions near its path."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Bayberry, Clay NY",
    "mapIntro": "Clay Hydro Jetting Pros takes requests in Bayberry and across Clay. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Bayberry, Clay, NY",
    "mapTitle": "Map of Bayberry, Clay, NY",
    "nearbyH2": "Serving Bayberry and Nearby Clay Neighborhoods",
    "nearbyP": "Clay Hydro Jetting Pros serves Bayberry and the rest of Clay, including Belgium - Clay Side. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Bayberry",
    "faqs": [
      {
        "q": "Does a neighborhood planned in the 1950s mean old pipes?",
        "a": "Not necessarily. The plan dates the neighborhood, not any one house's lateral. A line may be original, patched or replaced, and only records and an inspection can say which."
      },
      {
        "q": "Why does my kitchen drain keep slowing down?",
        "a": "Grease and soap residue can harden on the pipe wall over many years. If clearing it only helps for a short time, the layer is probably still there, and hydro jetting is built to remove it."
      },
      {
        "q": "Can roots be the cause even if my trees are small?",
        "a": "Roots travel, and they follow moisture. A camera inspection can show whether roots are present and how far they have entered."
      },
      {
        "q": "Will cleaning fix a cracked pipe?",
        "a": "No. Cleaning removes an obstruction and does not rebuild a damaged pipe. Ask whether the inspection shows a repair issue along with the blockage."
      },
      {
        "q": "How do I know if the problem is mine or the town's?",
        "a": "If one home is affected, the private lateral is the usual place to look. If several neighbors see backups at once, report it to the town as well."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Bayberry Hydro Jetting Project With Clay Hydro Jetting Pros",
    "ctaPs": [
      "Mid-century neighborhoods give a line plenty of time to collect buildup, and the cause is rarely visible from the surface. Clear notes on symptoms and past work point the inspection in the right direction.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  },
  {
    "slug": "belgium-clay-side",
    "name": "Belgium - Clay Side",
    "h1": "Hydro Jetting in Belgium - Clay Side, Clay NY",
    "title": "Hydro Jetting in Belgium - Clay Side, Clay | Clay Hydro Jetting Pros",
    "description": "Hydro jetting in Belgium, Clay side, NY: how a riverside hamlet setting shapes drain line questions and how a cleaning gets planned. Call (877) 761-0283.",
    "intro": "The east side of the Belgium hamlet sits in Clay, near the Seneca River where early settlement began. A riverside setting is context, not a diagnosis.",
    "heroPs": [
      "Homes on the Clay side of Belgium can develop slow drains from grease and sludge, mineral buildup or roots, the same as anywhere. Hydro jetting can clear buildup from a sound line when an inspection shows it fits, and a riverside location alone does not tell you what the line needs. Describe which fixtures are affected and whether the problem is new."
    ],
    "bodyH2": "Hydro Jetting for Belgium - Clay Side Properties",
    "bodyPs": [
      "The Belgium hamlet is split by a town line, and the town historian places its east side in Clay. This page covers the Clay side only. Early settlement here grew up along the Seneca River, which gives the area its character and its low, open feel.",
      "A waterside location raises questions people reasonably ask. Is groundwater getting into the line, are the roots worse near water, is the ground soft? An inspection can answer those for a specific line. The setting alone cannot.",
      "Hydro jetting is a high-pressure water cleaning method that can remove grease, scale and root growth from a sound pipe wall. Whether it suits a given home depends on the line's condition, material and access, which a camera shows far better than a guess."
    ],
    "considerations": [
      "Which fixtures are slow, and whether any backups reach the lowest drains",
      "Whether the home uses a public sewer connection or another system",
      "Trees and shrubs along the path of the lateral",
      "Any past cleanings, repairs or replaced sections",
      "Where the cleanout is, and whether the yard grade makes it hard to reach",
      "Whether wet weather makes the problem worse"
    ],
    "svcH2": "Hydro Jetting Services in Belgium - Clay Side",
    "svcLead": "These five pages cover the problems people call about most. Start with the one closest to what you are seeing.",
    "svcNotes": {
      "severe-grease-and-sludge": "Kitchen grease behaves the same near a river as anywhere, and it hardens in the line over time.",
      "tree-root-intrusions": "Roots seek moisture, and a lateral in a damp setting can attract them to joints.",
      "recurring-clogs-and-slow-drains": "A line that keeps slowing after cleaning needs a diagnosis, not a repeat of the same fix.",
      "mineral-and-scale-deposits": "Scale builds gradually on the pipe wall and narrows the line at bends.",
      "preventative-maintenance": "A planned cleaning, paired with an inspection, can catch a problem before it backs up."
    },
    "appsH2": "Hydro Jetting Situations Near the River",
    "apps": [
      {
        "h": "Wet-weather symptoms",
        "ps": [
          "If drains slow mainly after heavy rain, mention it. That pattern can point an inspection toward groundwater or a joint problem rather than only a clog."
        ]
      },
      {
        "h": "Roots in damp ground",
        "ps": [
          "Moist soil draws roots toward any opening in a line. Jetting can clear roots from a sound pipe, though the entry point may still need attention afterward."
        ]
      },
      {
        "h": "Grease buildup in family kitchens",
        "ps": [
          "A home that cooks daily can coat the kitchen line within years. The layer comes off the wall when jetting is done on a pipe that can take it."
        ]
      },
      {
        "h": "Staying ahead of a repeat",
        "ps": [
          "A line that has backed up before will usually tell you when it is due again. Planned cleaning after an inspection gets ahead of that date."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Belgium - Clay Side",
    "implPs": [
      "Homes near water carry a few extra questions, and each one has a practical answer.",
      "These are the points that shape the work on the Clay side of Belgium."
    ],
    "impl": [
      {
        "h": "Know your connection",
        "ps": [
          "Some properties near the river use a public sewer connection and others may not. Confirm which applies before arranging any cleaning."
        ],
        "bullets": [
          "Check your records or ask the town",
          "Tell the crew what you find"
        ]
      },
      {
        "h": "Wet ground and access",
        "ps": [
          "Soft or sloped ground can make a cleanout hard to reach and a visit harder to plan."
        ],
        "bullets": [
          "Clear the area around the cleanout",
          "Mention any standing water or grade changes"
        ]
      },
      {
        "h": "Cleaning versus repair",
        "ps": [
          "Clearing a line does not mend a crack or a shifted joint. A good inspection tells the two apart."
        ],
        "bullets": [
          "Ask to see the camera findings",
          "Plan for a repair assessment if one is recommended"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Belgium - Clay Side",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Confirm the connection",
        "d": "Check whether the home uses a public sewer connection, and find the cleanout so the crew can reach the line."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Belgium - Clay Side, Clay NY",
    "mapIntro": "Clay Hydro Jetting Pros takes requests in Belgium - Clay Side and across Clay. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Belgium, Clay, NY",
    "mapTitle": "Map of Belgium - Clay Side, Clay, NY",
    "nearbyH2": "Serving Belgium - Clay Side and Nearby Clay Neighborhoods",
    "nearbyP": "Clay Hydro Jetting Pros serves Belgium - Clay Side and the rest of Clay, including Bayberry. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Belgium - Clay Side",
    "faqs": [
      {
        "q": "Is this page about the whole Belgium hamlet?",
        "a": "No. It covers the Clay side only. The hamlet is split by a town line, and the town historian places the east side in Clay."
      },
      {
        "q": "Does living near the river mean my line is damaged?",
        "a": "No. A riverside setting is context and nothing more. Only an inspection can say anything about the condition of a particular line."
      },
      {
        "q": "Why do my drains slow after heavy rain?",
        "a": "It may point to groundwater entering the line or to a blockage that shows up when flows rise. Tell the crew when it happens so the inspection can look for the right cause."
      },
      {
        "q": "Can hydro jetting clear roots?",
        "a": "On a sound pipe, yes, it can cut and flush root growth. The opening where the roots entered may still need repair, and the inspection should say so."
      },
      {
        "q": "Should I confirm sewer or septic before calling?",
        "a": "Yes. Knowing whether the property has a public sewer connection helps the crew plan, and it is worth settling before the visit."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Belgium - Clay Side Hydro Jetting Project With Clay Hydro Jetting Pros",
    "ctaPs": [
      "A waterfront setting can make people assume the worst about a line, and the facts are usually simpler. A clear description of the symptoms and a good inspection get you to the answer.",
      "Use the request form on this page or call (877) 761-0283 to describe what you are seeing."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
