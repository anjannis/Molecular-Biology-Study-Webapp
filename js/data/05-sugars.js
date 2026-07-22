/* Unit 5 — Sugars. Source: "06 - Sugars" lecture notes/transcript, Introduction to Molecular Biology. */
(function () {
  var lecture = {
    id: 'sugars', title: 'Sugars', order: 5,
    source: 'Lecture 06 – Sugars (K. Kobow)',
    topicIds: ['sugars-monosaccharides', 'sugars-stereochemistry', 'sugars-glycosidic-bonds',
               'sugars-polysaccharides', 'sugars-metabolism-recognition']
  };

  var topics = [
    {
      id: 'sugars-monosaccharides', lectureId: 'sugars', title: 'Monosaccharides: structure & ring formation',
      explanation: "Sugars (carbohydrates) are built from carbon, hydrogen, and oxygen, with the monosaccharide as the basic unit. Monosaccharides are classified by carbon-chain length (hexoses have 6 carbons, e.g., glucose; pentoses have 5, e.g., ribose) and by functional group (aldoses carry an aldehyde group, ketoses carry a ketone group). In aqueous solution, most monosaccharides exist as rings rather than open chains: glucose forms a six-membered ring, ribose a five-membered ring. Open-chain structures are drawn as Fischer projections, ring structures as Haworth projections; no atoms are lost during ring closure, they are simply rearranged.",
      keyTerms: [
        {term: 'Monosaccharide', def: 'Basic sugar unit, made of C, H, and O.'},
        {term: 'Hexose vs pentose', def: 'Hexose: 6-carbon sugar (e.g., glucose). Pentose: 5-carbon sugar (e.g., ribose).'},
        {term: 'Aldose vs ketose', def: 'Aldose: carries an aldehyde group. Ketose: carries a ketone group.'},
        {term: 'Fischer vs Haworth projection', def: 'Fischer: open-chain drawing. Haworth: ring-form drawing.'}
      ],
      traps: [
        'Glucose forms a 6-membered ring; ribose forms a 5-membered ring — reversing these is a common trap.',
        'Aldoses and ketoses differ by functional group (aldehyde vs ketone), not by carbon count.',
        'Ring closure rearranges atoms without losing any — the reaction is intramolecular, not a loss of mass.'
      ],
      visual: {type: 'compare', columns: ['Classification', 'Basis', 'Example'],
        rows: [
          ['Hexose', 'Carbon chain length (6C)', 'Glucose'],
          ['Pentose', 'Carbon chain length (5C)', 'Ribose'],
          ['Aldose', 'Functional group (aldehyde)', 'Glucose'],
          ['Ketose', 'Functional group (ketone)', 'Fructose']
        ]},
      relatedTopicIds: ['sugars-stereochemistry', 'dna-structure']
    },
    {
      id: 'sugars-stereochemistry', lectureId: 'sugars', title: 'Stereochemistry: enantiomers, epimers & anomers',
      explanation: "Sugars frequently exist as stereoisomers — same formula, different spatial arrangement, different biological properties. Enantiomers are exact mirror images (like left and right hands), giving the D- and L- isoforms of a sugar. Epimers share the same formula but differ in hydroxyl-group arrangement at just one or two carbons (glucose, galactose, and mannose are epimers of one another). Anomers differ only at the new chiral center created during ring closure — the alpha and beta forms of the same sugar.",
      keyTerms: [
        {term: 'Enantiomer', def: 'Mirror-image isomer (D/L forms); analogous to left/right hands.'},
        {term: 'Epimer', def: 'Isomer differing in hydroxyl arrangement at one or two carbons (e.g., glucose/galactose/mannose).'},
        {term: 'Anomer', def: 'Isomer differing only at the chiral center formed upon ring closure (alpha/beta forms).'}
      ],
      traps: [
        'Epimers differ at only one or two carbons, not throughout the whole molecule — this is what distinguishes them from generic stereoisomers.',
        'Anomers arise specifically from ring closure (the new chiral center), not from a pre-existing difference in the open-chain form.',
        'Glucose, galactose, and mannose are epimers of each other, not enantiomers — they are not mirror images of one another.'
      ],
      visual: {type: 'compare', columns: ['Term', 'Definition', 'Example'],
        rows: [
          ['Enantiomer', 'Exact mirror image', 'D-glucose vs L-glucose'],
          ['Epimer', 'Differ at 1–2 carbons', 'Glucose, galactose, mannose'],
          ['Anomer', 'Differ at the ring-closure chiral center', 'Alpha- vs beta-glucose']
        ]},
      relatedTopicIds: ['sugars-monosaccharides', 'sugars-glycosidic-bonds']
    },
    {
      id: 'sugars-glycosidic-bonds', lectureId: 'sugars', title: 'Glycosidic bonds & disaccharides',
      explanation: "Monosaccharides link together via glycosidic bonds, formed in a condensation reaction (releasing water) between the aldehyde/ketone carbon of one sugar and a hydroxyl group on another. This is how disaccharides such as maltose, lactose, and sucrose form from two monosaccharide units.",
      keyTerms: [
        {term: 'Glycosidic bond', def: 'Covalent bond linking two monosaccharides, formed by condensation (loses water).'},
        {term: 'Disaccharide', def: 'Two monosaccharides joined by a glycosidic bond (e.g., maltose, lactose, sucrose).'}
      ],
      traps: [
        'Glycosidic-bond formation is a condensation reaction that releases water — it is not a hydrolysis reaction (that is the reverse, bond-breaking, direction).',
        'Maltose, lactose, and sucrose are disaccharides, not monosaccharides or polysaccharides.'
      ],
      visual: {type: 'steps', steps: [
        {title: 'Two monosaccharides approach', detail: 'E.g., glucose + glucose, glucose + galactose, or glucose + fructose.'},
        {title: 'Condensation reaction', detail: 'The aldehyde/ketone carbon of one reacts with a hydroxyl of the other.'},
        {title: 'Water is released', detail: 'A glycosidic bond forms, producing a disaccharide.'}
      ]},
      relatedTopicIds: ['sugars-polysaccharides', 'sugars-stereochemistry']
    },
    {
      id: 'sugars-polysaccharides', lectureId: 'sugars', title: 'Polysaccharides: storage vs structural sugars',
      explanation: "Oligo- and polysaccharides are chains of sugars whose function depends on linkage type and branching. Glycogen — the animal energy-storage polysaccharide, produced in the liver and stored in muscle — features long chains of glucose linked by alpha-1,4 glycosidic bonds with alpha-1,6 branching; branching increases solubility and accessibility for rapid energy release. Cellulose, by contrast, is the most abundant biopolymer on Earth: a linear chain of up to several thousand glucose units that forms microfibrils giving plant cell walls their structural integrity. Animals lack the enzymes to digest cellulose.",
      keyTerms: [
        {term: 'Glycogen', def: 'Branched (alpha-1,4 + alpha-1,6) glucose storage polymer; liver-made, muscle-stored.'},
        {term: 'Cellulose', def: 'Linear glucose polymer; most abundant biopolymer on Earth; plant structural component.'},
        {term: 'Branching (alpha-1,6)', def: 'Increases solubility/accessibility of glycogen for rapid glucose release.'}
      ],
      traps: [
        'Glycogen is branched (alpha-1,4 backbone + alpha-1,6 branches); cellulose is linear — reversing this is a common trap.',
        'Animals cannot digest cellulose because they lack the necessary enzymes, even though it is made of the same glucose subunits as glycogen.',
        'Glycogen is an energy-storage molecule; cellulose is a structural molecule — same building block (glucose), different linkage and function.'
      ],
      visual: {type: 'compare', columns: ['Polysaccharide', 'Linkage', 'Function', 'Organism'],
        rows: [
          ['Glycogen', 'Alpha-1,4 (+ alpha-1,6 branches)', 'Energy storage', 'Animals (liver/muscle)'],
          ['Cellulose', 'Linear glucose chain', 'Structural (cell wall)', 'Plants']
        ]},
      relatedTopicIds: ['sugars-glycosidic-bonds', 'sugars-metabolism-recognition']
    },
    {
      id: 'sugars-metabolism-recognition', lectureId: 'sugars', title: 'Sugar metabolism, glycans & biological recognition',
      explanation: "Carbohydrate metabolism runs through glycolysis, feeding into the citric acid cycle and oxidative phosphorylation to produce ATP — the central energy currency of the cell. Beyond metabolism, sugars decorate cell surfaces and drive recognition: they mediate cell-cell adhesion and communication, participate in pathogen recognition and immune modulation, and — famously — define the ABO blood group system via specific sugars (e.g., galactose, fucose) on red blood cells. Finally, sugars are structural: ribose and deoxyribose form the backbone of RNA and DNA, respectively.",
      keyTerms: [
        {term: 'Glycolysis', def: 'Breakdown pathway of carbohydrates, feeding the citric acid cycle and oxidative phosphorylation.'},
        {term: 'ABO blood group', def: 'Blood types defined by specific sugars (e.g., galactose, fucose) on red blood cells.'},
        {term: 'Glycan recognition', def: 'Surface sugars mediate cell adhesion, communication, and pathogen/immune recognition.'},
        {term: 'Sugar-phosphate backbone', def: 'Ribose (RNA) / deoxyribose (DNA) as structural backbone sugars.'}
      ],
      traps: [
        'ABO blood types are defined by sugar molecules on red blood cells, not by protein antigens alone.',
        'Glycolysis feeds into the citric acid cycle and oxidative phosphorylation — it is an early stage, not the entire energy-production pathway.',
        'Sugars have both a metabolic role (energy) and a completely separate structural/recognition role (backbones, glycans) — a question can test either.'
      ],
      visual: {type: 'steps', steps: [
        {title: 'Glycolysis', detail: 'Breaks down glucose in the cytoplasm.'},
        {title: 'Citric acid cycle', detail: 'Further oxidizes metabolic intermediates.'},
        {title: 'Oxidative phosphorylation', detail: 'Produces the bulk of cellular ATP.'}
      ]},
      relatedTopicIds: ['sugars-polysaccharides', 'cell-mitochondria']
    }
  ];

  var flashcards = [
    {id: 'sugars-monosaccharides-f1', topicId: 'sugars-monosaccharides', front: 'What ring size does glucose form, and what about ribose?', back: 'Glucose forms a 6-membered ring; ribose forms a 5-membered ring.', tags: ['sugars']},
    {id: 'sugars-monosaccharides-f2', topicId: 'sugars-monosaccharides', front: 'What is the difference between an aldose and a ketose?', back: 'Aldoses carry an aldehyde group; ketoses carry a ketone group.', tags: ['sugars']},
    {id: 'sugars-stereochemistry-f1', topicId: 'sugars-stereochemistry', front: 'Glucose, galactose, and mannose are examples of what kind of isomer relationship?', back: 'Epimers — they differ in hydroxyl-group arrangement at only one or two carbons.', tags: ['stereochemistry']},
    {id: 'sugars-stereochemistry-f2', topicId: 'sugars-stereochemistry', front: 'What creates the alpha vs beta anomer distinction?', back: 'The new chiral center formed when the sugar ring closes.', tags: ['stereochemistry']},
    {id: 'sugars-glycosidic-bonds-f1', topicId: 'sugars-glycosidic-bonds', front: 'What kind of reaction forms a glycosidic bond, and what byproduct is released?', back: 'A condensation reaction, releasing water.', tags: ['glycosidic bonds']},
    {id: 'sugars-glycosidic-bonds-f2', topicId: 'sugars-glycosidic-bonds', front: 'Name three common disaccharides.', back: 'Maltose, lactose, and sucrose.', tags: ['glycosidic bonds']},
    {id: 'sugars-polysaccharides-f1', topicId: 'sugars-polysaccharides', front: 'What glycosidic linkages define glycogen’s structure?', back: 'Alpha-1,4 glycosidic bonds in chains, with alpha-1,6 branching.', tags: ['polysaccharides']},
    {id: 'sugars-polysaccharides-f2', topicId: 'sugars-polysaccharides', front: 'Why can’t animals digest cellulose?', back: 'They lack the enzymes needed to break its linear glucose-glucose linkages.', tags: ['polysaccharides']},
    {id: 'sugars-metabolism-recognition-f1', topicId: 'sugars-metabolism-recognition', front: 'What three stages take glucose to ATP?', back: 'Glycolysis → citric acid cycle → oxidative phosphorylation.', tags: ['metabolism']},
    {id: 'sugars-metabolism-recognition-f2', topicId: 'sugars-metabolism-recognition', front: 'What determines ABO blood type?', back: 'Specific sugar molecules (e.g., galactose, fucose) on the surface of red blood cells.', tags: ['recognition']}
  ];

  var questions = [
    {id: 'sugars-monosaccharides-q1', topicIds: ['sugars-monosaccharides'], stem: 'Which projection type is used to represent the open-chain form of a monosaccharide?',
      options: [
        {text: 'Haworth projection', correct: false, rationale: 'Haworth projections represent the ring (closed) form.'},
        {text: 'Fischer projection', correct: true, rationale: 'Correct — Fischer projections represent open/linear sugar structures.'},
        {text: 'Newman projection', correct: false, rationale: 'This is not the projection type used for sugars in this course.'},
        {text: 'Wedge-dash projection', correct: false, rationale: 'Not the terminology used in this course for sugar structures.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'sugars-monosaccharides-q2', topicIds: ['sugars-monosaccharides'], stem: 'Glucose and fructose differ primarily in that:',
      options: [
        {text: 'Glucose is a pentose and fructose is a hexose', correct: false, rationale: 'Both glucose and fructose are hexoses (6 carbons).'},
        {text: 'Glucose is an aldose and fructose is a ketose', correct: true, rationale: 'Correct — glucose carries an aldehyde group; fructose carries a ketone group.'},
        {text: 'Glucose forms a 5-membered ring and fructose a 6-membered ring', correct: false, rationale: 'Glucose forms a 6-membered ring; ring size is not the distinguishing feature described here.'},
        {text: 'Only fructose exists in ring form in solution', correct: false, rationale: 'Both glucose and fructose predominantly exist in ring form in aqueous solution.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'sugars-stereochemistry-q1', topicIds: ['sugars-stereochemistry'], stem: 'D-glucose and L-glucose are related as:',
      options: [
        {text: 'Epimers', correct: false, rationale: 'Epimers differ at one or two carbons only, not as full mirror images.'},
        {text: 'Anomers', correct: false, rationale: 'Anomers differ at the ring-closure chiral center specifically, not as D/L mirror forms.'},
        {text: 'Enantiomers', correct: true, rationale: 'Correct — D and L forms are mirror images of each other, the definition of enantiomers.'},
        {text: 'Identical molecules', correct: false, rationale: 'D- and L-glucose are stereoisomers, not identical.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'sugars-stereochemistry-q2', topicIds: ['sugars-stereochemistry'], stem: 'What distinguishes an epimer from a generic stereoisomer in this course’s terminology?',
      options: [
        {text: 'Epimers differ at every chiral carbon in the molecule', correct: false, rationale: 'This is the opposite — epimers differ at only one or two carbons.'},
        {text: 'Epimers differ in hydroxyl arrangement at just one or two specific carbons', correct: true, rationale: 'Correct — glucose, galactose, and mannose illustrate this narrow difference.'},
        {text: 'Epimers have different molecular formulas', correct: false, rationale: 'Epimers share the same molecular formula; only spatial arrangement differs.'},
        {text: 'Epimers are only found in ring form, never open-chain', correct: false, rationale: 'Epimerism concerns spatial hydroxyl arrangement, independent of open vs ring form.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'sugars-glycosidic-bonds-q1', topicIds: ['sugars-glycosidic-bonds'], stem: 'Forming a glycosidic bond between two monosaccharides is a:',
      options: [
        {text: 'Hydrolysis reaction that consumes water', correct: false, rationale: 'Hydrolysis breaks glycosidic bonds; formation is the reverse (condensation) reaction.'},
        {text: 'Condensation reaction that releases water', correct: true, rationale: 'Correct — a hydroxyl and an aldehyde/ketone react, releasing water and forming the bond.'},
        {text: 'Oxidation reaction that adds oxygen atoms', correct: false, rationale: 'This is not the reaction type involved in glycosidic bond formation.'},
        {text: 'Phosphorylation reaction', correct: false, rationale: 'No phosphate group is involved in forming a glycosidic bond.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'sugars-glycosidic-bonds-q2', topicIds: ['sugars-glycosidic-bonds'], stem: 'Which of the following is a disaccharide?',
      options: [
        {text: 'Glucose', correct: false, rationale: 'Glucose is a monosaccharide.'},
        {text: 'Cellulose', correct: false, rationale: 'Cellulose is a polysaccharide, made of many glucose units.'},
        {text: 'Lactose', correct: true, rationale: 'Correct — lactose is a disaccharide formed from glucose and galactose.'},
        {text: 'Glycogen', correct: false, rationale: 'Glycogen is a branched polysaccharide, not a disaccharide.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'sugars-polysaccharides-q1', topicIds: ['sugars-polysaccharides'], stem: 'What structural feature makes glycogen well-suited for rapid energy release?',
      options: [
        {text: 'Its purely linear, unbranched glucose chain', correct: false, rationale: 'Glycogen is branched, not purely linear (that describes cellulose).'},
        {text: 'Alpha-1,6 branching, which increases solubility and accessibility', correct: true, rationale: 'Correct — branching creates many chain ends where glucose can be released quickly.'},
        {text: 'Its resistance to enzymatic digestion', correct: false, rationale: 'Glycogen is readily digestible by animal enzymes — that is the point of using it for energy.'},
        {text: 'Its beta-1,4 linkages, as in cellulose', correct: false, rationale: 'This describes cellulose’s linkage type, not glycogen’s.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'sugars-polysaccharides-q2', topicIds: ['sugars-polysaccharides'], stem: 'Why can’t animals use cellulose as an energy source, despite it being made of glucose?',
      options: [
        {text: 'Animals lack the enzymes to break cellulose’s specific linkages', correct: true, rationale: 'Correct — cellulose’s linkage type is not cleavable by animal digestive enzymes.'},
        {text: 'Cellulose contains no glucose at all', correct: false, rationale: 'Cellulose is in fact a linear polymer of glucose units.'},
        {text: 'Cellulose is toxic to animal cells', correct: false, rationale: 'Cellulose is not toxic; it is simply indigestible without the right enzymes.'},
        {text: 'Animals lack ribosomes needed to process cellulose', correct: false, rationale: 'Ribosomes are for protein synthesis and are unrelated to carbohydrate digestion.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'sugars-metabolism-recognition-q1', topicIds: ['sugars-metabolism-recognition'], stem: 'Which sequence of processes correctly leads from glucose to ATP?',
      options: [
        {text: 'Oxidative phosphorylation → citric acid cycle → glycolysis', correct: false, rationale: 'This reverses the correct order.'},
        {text: 'Glycolysis → citric acid cycle → oxidative phosphorylation', correct: true, rationale: 'Correct — this is the standard order of carbohydrate energy metabolism.'},
        {text: 'Citric acid cycle → glycolysis → oxidative phosphorylation', correct: false, rationale: 'Glycolysis must occur first, before the citric acid cycle.'},
        {text: 'Glycolysis → oxidative phosphorylation → citric acid cycle', correct: false, rationale: 'Oxidative phosphorylation occurs after, not before, the citric acid cycle.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'sugars-metabolism-recognition-q2', topicIds: ['sugars-metabolism-recognition'], stem: 'ABO blood types are determined by:',
      options: [
        {text: 'Specific sugar molecules on the surface of red blood cells', correct: true, rationale: 'Correct — sugars like galactose and fucose define the ABO blood group system.'},
        {text: 'Differences in hemoglobin protein sequence', correct: false, rationale: 'ABO typing in this course is explicitly tied to surface sugars, not hemoglobin variants.'},
        {text: 'Differences in mitochondrial DNA', correct: false, rationale: 'mtDNA variation is unrelated to ABO blood typing.'},
        {text: 'The presence or absence of a nucleus in red blood cells', correct: false, rationale: 'This is unrelated to ABO blood group determination.'}
      ], difficulty: 'medium', topicCheck: true}
  ];

  MOLBIO.registerLecture(lecture, topics, flashcards, questions);
})();
