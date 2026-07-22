/* Unit 6 — The cell and its organelles. Source: "07 - The cell and its organelles" (K. Kobow). */
(function () {
  var lecture = {
    id: 'cell', title: 'Cell & Organelles', order: 6,
    source: 'Lecture 07 – The cell and its organelles (K. Kobow)',
    topicIds: ['cell-organization', 'cell-nucleus', 'cell-cellcycle', 'cell-er-golgi',
               'cell-mitochondria', 'cell-lysosomes']
  };

  var topics = [
    {
      id: 'cell-organization', lectureId: 'cell', title: 'Prokaryotic vs eukaryotic organization',
      explanation: "Eukaryotic cells (animal and plant) show substantial variability and specialization, optimizing structure for function, and contain membrane-bound organelles including a true nucleus. Bacterial (prokaryotic) cells lack this internal membrane-bound compartmentalization. Across both, cells are dynamic, multipurpose machines that continuously respond to intrinsic and environmental cues, and eukaryotic cell types specialize their organelle composition and shape to their particular job.",
      keyTerms: [
        {term: 'Eukaryotic cell', def: 'Cell with a true, membrane-bound nucleus and internal organelle compartmentalization.'},
        {term: 'Prokaryotic (bacterial) cell', def: 'Cell lacking a membrane-bound nucleus and internal organelle compartmentalization.'},
        {term: 'Cellular specialization', def: 'Eukaryotic cells adapt structure/organelle composition to optimize a specific function.'}
      ],
      traps: [
        'Bacterial cells lack a true, membrane-bound nucleus — a defining prokaryote/eukaryote distinction.',
        'Specialization means different cell types emphasize different organelles, not that all eukaryotic cells are structurally identical.'
      ],
      visual: {type: 'compare', columns: ['Feature', 'Prokaryotic (bacterial)', 'Eukaryotic'],
        rows: [['Nucleus', 'Absent', 'Present, membrane-bound'], ['Membrane-bound organelles', 'Absent', 'Present (ER, Golgi, mitochondria, etc.)']]},
      relatedTopicIds: ['cell-nucleus', 'genomics-basics']
    },
    {
      id: 'cell-nucleus', lectureId: 'cell', title: 'Nucleus, nucleolus & nuclear lamina',
      explanation: "The nucleus houses the cell's genetic material as chromatin within a gel-like nucleoplasm, is the site of replication and transcription, and is bounded by a two-layer nuclear envelope continuous with the ER. Nuclear pores, guarded by the nuclear pore complex, control what enters and exits. Inside, the nucleolus is where ribosomal RNA is transcribed, processed, and assembled into ribosomal subunits (40S and 60S). The nuclear lamina — a protein meshwork of lamins lining the inner nuclear envelope — maintains nuclear shape, anchors chromatin (via lamina-associated domains, LADs), and influences gene expression and DNA replication.",
      keyTerms: [
        {term: 'Nucleoplasm', def: 'Gel-like substance inside the nucleus where chromatin is stored.'},
        {term: 'Nucleolus', def: 'Site of rRNA transcription/processing and ribosome subunit (40S/60S) assembly.'},
        {term: 'Nuclear envelope', def: 'Two membrane layers surrounding the nucleus, continuous with the ER.'},
        {term: 'Nuclear lamina', def: 'Lamin protein meshwork maintaining nuclear shape and anchoring chromatin (LADs).'},
        {term: 'Nuclear pore complex', def: 'Guards nuclear pores, controlling molecular traffic in/out of the nucleus.'}
      ],
      traps: [
        'The nucleolus makes ribosomal subunits (40S/60S); it does not assemble complete ribosomes (final assembly/activation occurs in the cytoplasm).',
        'The nuclear envelope has two membrane layers and is continuous with the ER — it is not a single membrane.',
        'Lamina-associated domains (LADs) link the nuclear lamina to specific chromatin regions, influencing gene expression — the lamina is not purely a passive scaffold.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Nucleoplasm', detail: 'Gel-like interior; holds chromatin.'},
        {label: 'Nucleolus', detail: 'rRNA transcription/processing; ribosome subunit assembly.'},
        {label: 'Nuclear lamina', detail: 'Lamin scaffold; shape, chromatin anchoring, gene expression influence.'}
      ]},
      relatedTopicIds: ['dna-packaging', 'cell-organization']
    },
    {
      id: 'cell-cellcycle', lectureId: 'cell', title: 'The eukaryotic cell cycle & mitotic spindle',
      explanation: "The eukaryotic cell cycle has four phases (G1, S, G2, and M), with interphase (G1+S+G2, roughly 23 hours) far longer than M-phase (roughly 1 hour) in a typical cycle. During M-phase, a bipolar array of microtubules — the mitotic spindle, a cytoskeletal structure — drives chromosome segregation. Cyclin-dependent kinases (CDKs) and cyclins regulate progression through the cycle in a highly conserved mechanism; the 2001 Nobel Prize in Physiology or Medicine recognized Leland Hartwell (CDC genes, the checkpoint concept), Paul Nurse (CDKs), and Tim Hunt (cyclins) for these discoveries.",
      keyTerms: [
        {term: 'G1, S, G2, M phases', def: 'The four phases of the eukaryotic cell cycle; interphase (G1+S+G2) plus mitosis (M).'},
        {term: 'Mitotic spindle', def: 'Bipolar microtubule array (cytoskeleton) that segregates chromosomes during M-phase.'},
        {term: 'CDK (cyclin-dependent kinase)', def: 'Conserved kinase that, paired with cyclins, drives cell-cycle progression.'},
        {term: 'Cyclin', def: 'Regulatory protein that binds and activates CDKs; ~10 human cyclins known.'}
      ],
      traps: [
        'Interphase (G1+S+G2) occupies the large majority of the cell cycle (~23h), while M-phase is comparatively brief (~1h) — a commonly underestimated ratio.',
        'Hartwell, Nurse, and Hunt each contributed a distinct discovery (checkpoints/CDC genes, CDKs, cyclins respectively) — don’t merge them into one finding.',
        'The mitotic spindle is a cytoskeletal (microtubule) structure, not a membrane-bound organelle.'
      ],
      visual: {type: 'compare', columns: ['Scientist', 'Discovery'],
        rows: [['Leland Hartwell', 'CDC genes; introduced the "checkpoint" concept'], ['Paul Nurse', 'Identified CDKs as key cell-cycle regulators'], ['Tim Hunt', 'Discovered cyclins']]},
      relatedTopicIds: ['dna-cellcycle', 'cell-nucleus']
    },
    {
      id: 'cell-er-golgi', lectureId: 'cell', title: 'ER, Golgi & vesicular trafficking',
      explanation: "The endoplasmic reticulum (ER) maintains cellular homeostasis and is a major Ca²⁺ store; rough ER (studded with ribosomes) handles protein synthesis and folding, while smooth ER handles fatty-acid synthesis and lipid production (including phospholipids and cholesterol/steroids). Neither is present in red blood cells or spermatozoa. The Golgi apparatus receives ER-derived vesicles, then organizes, modifies (e.g., glycosylation), packages, and tags them for transport within the cell or export via exocytosis; it also produces lysosomes. Cells maintain constant vesicular flow in (endocytosis) and out (exocytosis) to support this trafficking.",
      keyTerms: [
        {term: 'Rough ER', def: 'Ribosome-studded ER; protein synthesis and folding.'},
        {term: 'Smooth ER', def: 'Ribosome-free ER; fatty acid/lipid synthesis, Ca²⁺ storage.'},
        {term: 'Golgi apparatus', def: 'Modifies, packages, and tags ER-derived vesicles; glycosylation; produces lysosomes.'},
        {term: 'Endocytosis / exocytosis', def: 'Vesicular uptake into / release out of the cell.'}
      ],
      traps: [
        'Protein synthesis/folding is a rough-ER function; lipid/fatty-acid synthesis is a smooth-ER function — these are commonly swapped.',
        'The Golgi modifies and packages proteins already made in the ER; it does not itself synthesize proteins from scratch.',
        'A glycosylation-pathway defect (e.g., in a galactose transporter) can cause disease such as a brain malformation and epilepsy — trafficking defects have direct clinical relevance.'
      ],
      visual: {type: 'compare', columns: ['Organelle', 'Key function'],
        rows: [['Rough ER', 'Protein synthesis & folding'], ['Smooth ER', 'Lipid/fatty-acid synthesis, Ca²⁺ storage'], ['Golgi apparatus', 'Modification, packaging, tagging, export; makes lysosomes']]},
      relatedTopicIds: ['cell-lysosomes', 'lipids-membrane-lipids']
    },
    {
      id: 'cell-mitochondria', lectureId: 'cell', title: 'Mitochondria, chloroplasts & endosymbiosis',
      explanation: "Mitochondria produce ATP via the citric acid (TCA) cycle and electron transport chain/oxidative phosphorylation, and also regulate calcium homeostasis, iron metabolism, apoptosis, ammonia detoxification, and heat production. Mitochondrial DNA (mtDNA) is a circular, ~16.5 kb molecule encoding 13 oxidative-phosphorylation proteins, 22 tRNAs, and 2 rRNAs; it replicates continuously and independently of the cell cycle, and is inherited maternally. Because mtDNA molecules coexist and can differ within a cell (heteroplasmy — a mix of normal and mutated mtDNA), heteroplasmy levels can shift over time. Chloroplasts, found in plants and algae, convert light into chemical energy via photosynthesis and also carry their own DNA. Both organelles are explained by the endosymbiotic theory, positing bacterial ancestry for each.",
      keyTerms: [
        {term: 'Endosymbiotic theory', def: 'Mitochondria and chloroplasts derive from ancient free-living bacteria engulfed by a host cell.'},
        {term: 'mtDNA', def: 'Circular, ~16.5 kb, maternally inherited mitochondrial genome (13 proteins, 22 tRNA, 2 rRNA).'},
        {term: 'Heteroplasmy', def: 'Coexistence of two or more mtDNA variants within the same cell/tissue/individual.'},
        {term: 'Chloroplast', def: 'Photosynthetic organelle in plants/algae; converts light to chemical energy; has its own DNA.'}
      ],
      traps: [
        'mtDNA is inherited maternally, not from both parents equally — a frequently missed detail.',
        'Chloroplasts perform photosynthesis (light → chemical energy); mitochondria perform cellular respiration (chemical energy → ATP) — these are complementary, not identical, processes.',
        'mtDNA replication is continuous and cell-cycle-independent, unlike nuclear DNA which replicates exactly once per cycle.'
      ],
      visual: {type: 'compare', columns: ['Feature', 'Chloroplast', 'Mitochondrion'],
        rows: [
          ['Function', 'Photosynthesis', 'Cellular respiration'],
          ['Energy conversion', 'Light → chemical (glucose)', 'Glucose → ATP'],
          ['Found in', 'Plants and algae', 'Almost all eukaryotic cells'],
          ['Key products', 'Glucose, O2', 'ATP, CO2, H2O']
        ]},
      relatedTopicIds: ['cell-er-golgi', 'genomics-inheritance']
    },
    {
      id: 'cell-lysosomes', lectureId: 'cell', title: 'Lysosomes, vacuoles & autophagy',
      explanation: "Lysosomes, produced by the Golgi apparatus, contain lytic enzymes that clear damaged proteins and cellular debris. Plant/protist vacuoles carry out related but broader roles: storing waste, maintaining an acidic internal pH, holding small molecules, exporting unwanted substances, storing water and maintaining turgor pressure in plant cells, and (in protists) storing food. Autophagy is the cell's bulk degradation and recycling system, especially active under stress, clearing out whole damaged components — complementing the more selective, ubiquitin-tagged proteasomal degradation used for individual proteins.",
      keyTerms: [
        {term: 'Lysosome', def: 'Golgi-derived organelle containing lytic (digestive) enzymes.'},
        {term: 'Vacuole', def: 'Storage/waste/pressure-regulation organelle, prominent in plant and protist cells.'},
        {term: 'Autophagy', def: 'Bulk, stress-induced degradation and recycling of cellular components.'},
        {term: 'Turgor pressure', def: 'Internal hydrostatic pressure maintained by the plant vacuole against the cell wall.'}
      ],
      traps: [
        'Autophagy is bulk/non-selective, while proteasomal (ubiquitin-tagged) degradation is selective for individual proteins — do not conflate the two.',
        'Vacuoles are especially prominent and multifunctional in plant/protist cells, more so than in typical animal cells.',
        'Lysosomes are produced by the Golgi apparatus, not directly by the ER.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Lysosome', detail: 'Lytic enzymes; Golgi-derived; clears damaged material.'},
        {label: 'Vacuole', detail: 'Waste, pH, pressure, storage — especially in plants/protists.'},
        {label: 'Autophagy', detail: 'Bulk recycling under stress; complements targeted proteasomal degradation.'}
      ]},
      relatedTopicIds: ['cell-er-golgi', 'proteins-folding-qc']
    }
  ];

  var flashcards = [
    {id: 'cell-organization-f1', topicId: 'cell-organization', front: 'What key structural feature distinguishes eukaryotic from prokaryotic (bacterial) cells?', back: 'A true, membrane-bound nucleus (and other membrane-bound organelles), which prokaryotes lack.', tags: ['cell']},
    {id: 'cell-organization-f2', topicId: 'cell-organization', front: 'What does "cellular specialization" mean in eukaryotic cells?', back: 'Different cell types adapt their structure and organelle composition to optimize a specific function.', tags: ['cell']},
    {id: 'cell-nucleus-f1', topicId: 'cell-nucleus', front: 'What does the nucleolus produce?', back: 'Ribosomal RNA (rRNA) and the 40S/60S ribosomal subunits.', tags: ['nucleus']},
    {id: 'cell-nucleus-f2', topicId: 'cell-nucleus', front: 'What is the nuclear lamina made of, and what does it do?', back: 'Lamins and lamin-associated proteins; maintains nuclear shape, anchors chromatin (LADs), influences gene expression.', tags: ['nucleus']},
    {id: 'cell-cellcycle-f1', topicId: 'cell-cellcycle', front: 'Roughly how long is interphase compared to M-phase in a typical cell cycle?', back: 'Interphase (~23h) is far longer than M-phase (~1h).', tags: ['cell cycle']},
    {id: 'cell-cellcycle-f2', topicId: 'cell-cellcycle', front: 'Who discovered cyclins, and who identified CDKs?', back: 'Tim Hunt discovered cyclins; Paul Nurse identified CDKs (both Nobel Prize 2001, with Leland Hartwell).', tags: ['cell cycle', 'nobel']},
    {id: 'cell-er-golgi-f1', topicId: 'cell-er-golgi', front: 'What distinguishes rough ER from smooth ER functionally?', back: 'Rough ER: protein synthesis/folding (ribosome-studded). Smooth ER: lipid/fatty-acid synthesis, Ca2+ storage.', tags: ['ER', 'Golgi']},
    {id: 'cell-er-golgi-f2', topicId: 'cell-er-golgi', front: 'What organelle does the Golgi apparatus produce?', back: 'Lysosomes.', tags: ['Golgi']},
    {id: 'cell-mitochondria-f1', topicId: 'cell-mitochondria', front: 'How is mitochondrial DNA typically inherited?', back: 'Maternally.', tags: ['mitochondria']},
    {id: 'cell-mitochondria-f2', topicId: 'cell-mitochondria', front: 'What theory explains the bacterial origin of mitochondria and chloroplasts?', back: 'The endosymbiotic theory.', tags: ['mitochondria', 'chloroplast']},
    {id: 'cell-lysosomes-f1', topicId: 'cell-lysosomes', front: 'What is the key functional difference between autophagy and proteasomal degradation?', back: 'Autophagy is bulk/non-selective recycling under stress; proteasomal degradation selectively destroys ubiquitin-tagged individual proteins.', tags: ['autophagy']},
    {id: 'cell-lysosomes-f2', topicId: 'cell-lysosomes', front: 'Name three functions of a plant cell vacuole.', back: 'Any three of: waste storage, acidic pH maintenance, small-molecule storage, exocytosis of unwanted substances, water storage/turgor pressure.', tags: ['vacuole']}
  ];

  var questions = [
    {id: 'cell-organization-q1', topicIds: ['cell-organization'], stem: 'Which feature is absent in bacterial (prokaryotic) cells but present in eukaryotic cells?',
      options: [
        {text: 'A cell membrane', correct: false, rationale: 'Both prokaryotic and eukaryotic cells have a cell membrane.'},
        {text: 'A true, membrane-bound nucleus', correct: true, rationale: 'Correct — this is a defining structural difference between the two cell types.'},
        {text: 'DNA', correct: false, rationale: 'Both cell types contain DNA; the distinction is about nuclear compartmentalization, not DNA presence.'},
        {text: 'Ribosomes', correct: false, rationale: 'Both prokaryotes and eukaryotes have ribosomes (of different sizes).'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'cell-organization-q2', topicIds: ['cell-organization'], stem: 'Cellular specialization in eukaryotes means:',
      options: [
        {text: 'All eukaryotic cell types have identical organelle composition', correct: false, rationale: 'This directly contradicts the concept of specialization.'},
        {text: 'Cells adapt their structure/organelle emphasis to optimize a specific function', correct: true, rationale: 'Correct — e.g., secretory cells emphasize ER/Golgi, muscle cells emphasize mitochondria.'},
        {text: 'Only bacterial cells can specialize', correct: false, rationale: 'Specialization is a eukaryotic multicellular phenomenon described in this course.'},
        {text: 'Specialization only affects the nucleus', correct: false, rationale: 'Specialization affects overall cell structure and organelle emphasis, not only the nucleus.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'cell-nucleus-q1', topicIds: ['cell-nucleus'], stem: 'What is the primary function of the nucleolus?',
      options: [
        {text: 'DNA replication', correct: false, rationale: 'DNA replication occurs throughout the nucleoplasm, not specifically in the nucleolus.'},
        {text: 'rRNA transcription/processing and ribosome subunit assembly', correct: true, rationale: 'Correct — this is the nucleolus’s defining role.'},
        {text: 'Lipid synthesis', correct: false, rationale: 'Lipid synthesis is a smooth-ER function, unrelated to the nucleolus.'},
        {text: 'Protein degradation', correct: false, rationale: 'Protein degradation occurs via proteasomes/lysosomes, not the nucleolus.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'cell-nucleus-q2', topicIds: ['cell-nucleus'], stem: 'The nuclear lamina is composed mainly of:',
      options: [
        {text: 'Lamins and lamin-associated proteins', correct: true, rationale: 'Correct — this protein meshwork lines the inner nuclear envelope.'},
        {text: 'Ribosomal RNA', correct: false, rationale: 'rRNA is a nucleolar product, not a lamina component.'},
        {text: 'Cellulose microfibrils', correct: false, rationale: 'Cellulose is a plant cell-wall component, unrelated to the nuclear lamina.'},
        {text: 'Histones', correct: false, rationale: 'Histones package DNA into chromatin; they are distinct from the lamin-based nuclear lamina.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'cell-cellcycle-q1', topicIds: ['cell-cellcycle'], stem: 'Approximately how does the duration of interphase compare to M-phase in a typical eukaryotic cell cycle?',
      options: [
        {text: 'Interphase is much longer (e.g., ~23h vs ~1h)', correct: true, rationale: 'Correct — the vast majority of the cell cycle is spent in interphase (G1, S, G2).'},
        {text: 'M-phase is much longer than interphase', correct: false, rationale: 'This reverses the actual relationship.'},
        {text: 'They are approximately equal in duration', correct: false, rationale: 'Interphase is substantially longer, not roughly equal.'},
        {text: 'M-phase does not have a defined duration', correct: false, rationale: 'M-phase has a defined, comparatively short duration (~1h).'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'cell-cellcycle-q2', topicIds: ['cell-cellcycle'], stem: 'The 2001 Nobel Prize in Physiology or Medicine recognized discoveries of which cell-cycle regulators?',
      options: [
        {text: 'DNA repair enzymes', correct: false, rationale: 'That describes the 2015 Chemistry Nobel (Lindahl, Sancar, Modrich), a different prize.'},
        {text: 'CDC genes, CDKs, and cyclins', correct: true, rationale: 'Correct — Hartwell (CDC genes/checkpoints), Nurse (CDKs), and Hunt (cyclins) shared this prize.'},
        {text: 'RNA polymerase subunits', correct: false, rationale: 'This is unrelated to the 2001 cell-cycle Nobel Prize.'},
        {text: 'CRISPR/Cas machinery', correct: false, rationale: 'That is the 2020 Chemistry Nobel (Charpentier, Doudna), a different discovery.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'cell-er-golgi-q1', topicIds: ['cell-er-golgi'], stem: 'Which organelle is primarily responsible for protein synthesis and folding via ribosome-studded membranes?',
      options: [
        {text: 'Smooth ER', correct: false, rationale: 'Smooth ER lacks ribosomes and focuses on lipid synthesis, not protein synthesis.'},
        {text: 'Rough ER', correct: true, rationale: 'Correct — ribosomes studding the rough ER carry out protein synthesis and folding there.'},
        {text: 'Golgi apparatus', correct: false, rationale: 'The Golgi modifies/packages proteins already synthesized elsewhere; it does not synthesize them.'},
        {text: 'Lysosome', correct: false, rationale: 'Lysosomes degrade material; they do not synthesize proteins.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'cell-er-golgi-q2', topicIds: ['cell-er-golgi'], stem: 'Which organelle produces lysosomes?',
      options: [
        {text: 'Rough ER', correct: false, rationale: 'Rough ER synthesizes proteins but does not itself produce lysosomes.'},
        {text: 'Golgi apparatus', correct: true, rationale: 'Correct — the Golgi packages and produces lysosomes among its trafficking functions.'},
        {text: 'Mitochondrion', correct: false, rationale: 'Mitochondria produce ATP; they do not produce lysosomes.'},
        {text: 'Nucleolus', correct: false, rationale: 'The nucleolus produces ribosomal subunits, not lysosomes.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'cell-mitochondria-q1', topicIds: ['cell-mitochondria'], stem: 'Mitochondrial DNA (mtDNA) is typically inherited:',
      options: [
        {text: 'Equally from both parents', correct: false, rationale: 'Nuclear DNA is inherited biparentally, but mtDNA specifically is not.'},
        {text: 'Maternally', correct: true, rationale: 'Correct — mtDNA is passed down through the maternal line.'},
        {text: 'Paternally', correct: false, rationale: 'This reverses the actual inheritance pattern described in this course.'},
        {text: 'Randomly from either parent with equal probability', correct: false, rationale: 'mtDNA inheritance is specifically maternal, not random.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'cell-mitochondria-q2', topicIds: ['cell-mitochondria'], stem: 'What theory explains the evolutionary origin of both mitochondria and chloroplasts?',
      options: [
        {text: 'The RNA world hypothesis', correct: false, rationale: 'This concerns the origin of early catalytic/genetic RNA, unrelated to organelle ancestry.'},
        {text: 'The endosymbiotic theory', correct: true, rationale: 'Correct — both organelles are thought to derive from engulfed free-living bacteria.'},
        {text: 'The central dogma', correct: false, rationale: 'This describes information flow (DNA→RNA→protein), not organelle evolutionary origin.'},
        {text: 'The fluid mosaic model', correct: false, rationale: 'This describes membrane structure, not organelle evolutionary origin.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'cell-lysosomes-q1', topicIds: ['cell-lysosomes'], stem: 'Which best distinguishes autophagy from proteasomal degradation?',
      options: [
        {text: 'Autophagy is selective for single ubiquitin-tagged proteins; proteasomal degradation is bulk and stress-induced', correct: false, rationale: 'This reverses the actual roles of the two systems.'},
        {text: 'Autophagy is bulk/non-selective and stress-induced; proteasomal degradation selectively targets ubiquitin-tagged proteins', correct: true, rationale: 'Correct — the two systems complement each other at different scales of specificity.'},
        {text: 'Both systems are functionally identical', correct: false, rationale: 'They differ meaningfully in selectivity and scale.'},
        {text: 'Autophagy only degrades DNA', correct: false, rationale: 'Autophagy degrades cellular components broadly (organelles, proteins, etc.), not specifically DNA.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'cell-lysosomes-q2', topicIds: ['cell-lysosomes'], stem: 'Which of the following is a described function of the plant cell vacuole?',
      options: [
        {text: 'Maintaining turgor pressure via water storage', correct: true, rationale: 'Correct — the vacuole stores water and helps maintain hydrostatic (turgor) pressure.'},
        {text: 'Synthesizing ATP via oxidative phosphorylation', correct: false, rationale: 'This is a mitochondrial function, not a vacuolar one.'},
        {text: 'Transcribing rRNA', correct: false, rationale: 'This is a nucleolar function, not a vacuolar one.'},
        {text: 'Forming the mitotic spindle', correct: false, rationale: 'The spindle is a cytoskeletal (microtubule) structure, unrelated to the vacuole.'}
      ], difficulty: 'easy', topicCheck: true}
  ];

  MOLBIO.registerLecture(lecture, topics, flashcards, questions);
})();
