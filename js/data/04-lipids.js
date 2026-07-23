/* Unit 4 — Lipids. Source: "05 - Lipids" (K. Kobow), Introduction to Molecular Biology. */
(function () {
  var lecture = {
    id: 'lipids', title: 'Lipids', order: 4,
    source: 'Lecture 05 – Lipids (K. Kobow)',
    topicIds: ['lipids-categories', 'lipids-membrane-lipids', 'lipids-membrane-structure',
               'lipids-cholesterol', 'lipids-glycolipids-asymmetry', 'lipids-signaling']
  };

  var topics = [
    {
      id: 'lipids-categories', lectureId: 'lipids', title: 'Lipid categories & biological roles',
      explanation: "Lipids are one of the four major classes of biomolecules and serve many roles at once: triglycerides (glycerol plus three fatty acids) store energy and are metabolized as an energy source; steroid hormones act as cell-to-cell messengers; phospholipids, sphingolipids, and cholesterol build biological membranes; fat-soluble vitamins (A, E, D, K) depend on lipid solubility; and lipids cushion/insulate organs and form protective waxy coatings. Fatty acids themselves are saturated (no double bonds, typically solid at room temperature) or unsaturated (one or more double bonds, typically liquid at room temperature); omega-3 and omega-6 fatty acids are essential, meaning the body cannot synthesize them and must obtain them from food.",
      keyTerms: [
        {term: 'Triglyceride', def: 'Glycerol plus three fatty acids; the most common fat in the body, stored in fat cells.'},
        {term: 'Saturated fatty acid', def: 'No carbon-carbon double bonds; typically solid at room temperature.'},
        {term: 'Unsaturated fatty acid', def: 'Contains one or more double bonds; typically liquid at room temperature.'},
        {term: 'Essential fatty acids', def: 'Omega-3 and omega-6 fatty acids the body cannot synthesize and must obtain from diet.'}
      ],
      traps: [
        'Saturated fats are typically solid at room temperature; unsaturated fats are typically liquid — reversing this is a common trap.',
        '"Essential" fatty acids means the body cannot make them, not that they are simply "important" in a generic sense.',
        'Triglycerides are an energy-storage lipid, distinct from structural membrane lipids like phospholipids.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Triglycerides', detail: 'Energy storage; glycerol + 3 fatty acids.'},
        {label: 'Steroid hormones', detail: 'Cell-signaling messengers.'},
        {label: 'Phospholipids / sphingolipids / cholesterol', detail: 'Structural membrane components.'},
        {label: 'Vitamins A, D, E, K', detail: 'Fat-soluble vitamins.'}
      ]},
      relatedTopicIds: ['lipids-membrane-lipids', 'sugars-metabolism-recognition']
    },
    {
      id: 'lipids-membrane-lipids', lectureId: 'lipids', title: 'Membrane lipids: phospholipids & sphingolipids',
      explanation: "The main membrane-forming lipids in animal cells are glycerophospholipids (phosphoglycerides) and sphingolipids, with glycerophospholipids the most abundant in mammalian membranes. Phospholipids have hydrophilic head groups and hydrophobic fatty-acid tails (commonly 14–24 carbons); differences in tail length and degree of saturation change how tightly the molecules pack together, directly affecting membrane fluidity — longer, more saturated tails pack more tightly (less fluid), while shorter, unsaturated tails pack more loosely (more fluid).",
      keyTerms: [
        {term: 'Glycerophospholipid', def: 'Most abundant membrane phospholipid class in mammalian cells.'},
        {term: 'Sphingolipid', def: 'Alternative membrane lipid class alongside glycerophospholipids.'},
        {term: 'Phospholipid tail length/saturation', def: 'Longer and more saturated tails decrease fluidity; shorter and unsaturated tails increase it.'}
      ],
      traps: [
        'More unsaturation (more double-bond kinks) increases membrane fluidity; more saturation decreases it — a frequently reversed fact.',
        'Glycerophospholipids and sphingolipids are both membrane-building lipids, but they are distinct classes, not synonyms.'
      ],
      visual: {type: 'compare', columns: ['Tail property', 'Packing', 'Membrane fluidity'],
        rows: [['Long, saturated', 'Tight packing', 'Lower fluidity'], ['Short, unsaturated', 'Loose packing', 'Higher fluidity']]},
      relatedTopicIds: ['lipids-membrane-structure', 'lipids-categories']
    },
    {
      id: 'lipids-membrane-structure', lectureId: 'lipids', title: 'Membrane structure & dynamics',
      explanation: "The fluid mosaic model describes the plasma membrane as a flexible, dynamic mosaic of phospholipids and proteins embedded within a lipid bilayer, allowing lateral movement of molecules and communication across the cell boundary. Fluidity is tuned by fatty-acid tail length/saturation and by cholesterol content. Within this fluid membrane, lipid rafts form as temporary, specialized microdomains where proteins can self-assemble, become tethered to macromolecule assemblies inside or outside the cell, or interact with proteins on neighboring cells; the underlying cytoskeleton further “corrals” membrane components, restricting their free diffusion into defined zones.",
      keyTerms: [
        {term: 'Fluid mosaic model', def: 'Membrane as a dynamic mosaic of lipids and proteins, allowing movement and communication.'},
        {term: 'Lipid raft', def: 'Temporary, specialized membrane microdomain organizing specific proteins.'},
        {term: 'Membrane corralling', def: 'Cytoskeleton restricts free diffusion of membrane components into zones.'}
      ],
      traps: [
        'The fluid mosaic model emphasizes dynamic movement, not a static, rigid arrangement of membrane components.',
        'Lipid rafts are temporary/dynamic microdomains, not permanent fixed membrane structures.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Fluid mosaic model', detail: 'Dynamic mosaic of lipids + proteins in a bilayer.'},
        {label: 'Lipid rafts', detail: 'Temporary microdomains organizing specific proteins.'},
        {label: 'Cytoskeletal corralling', detail: 'Restricts membrane component diffusion into zones.'}
      ]},
      relatedTopicIds: ['lipids-membrane-lipids', 'lipids-cholesterol']
    },
    {
      id: 'lipids-cholesterol', lectureId: 'lipids', title: 'Cholesterol & steroid hormones',
      explanation: "Cholesterol, built from four fused carbon rings, is the structural basis for all steroid hormones (e.g., testosterone, estrogen), which act as cell-signaling messengers. Within membranes, cholesterol is inserted among the phospholipids and modulates fluidity, generally making membranes less fluid/more rigid at moderate-to-high temperatures while also preventing them from becoming too rigid at low temperatures.",
      keyTerms: [
        {term: 'Sterol', def: 'Four-fused-ring lipid class; cholesterol is the prototypical example.'},
        {term: 'Steroid hormone', def: 'Signaling molecule derived from cholesterol (e.g., testosterone, estrogen).'},
        {term: 'Cholesterol & fluidity', def: 'Modulates membrane fluidity by inserting between phospholipid tails.'}
      ],
      traps: [
        'Cholesterol is a modulator of membrane fluidity, not simply a structural filler with no functional role.',
        'Steroid hormones are lipid-derived signaling molecules, distinct from protein-based hormones.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Cholesterol', detail: 'Four fused carbon rings; membrane fluidity modulator; hormone precursor.'},
        {label: 'Steroid hormones', detail: 'Testosterone, estrogen, and other cholesterol-derived messengers.'}
      ]},
      relatedTopicIds: ['lipids-membrane-structure', 'lipids-signaling']
    },
    {
      id: 'lipids-glycolipids-asymmetry', lectureId: 'lipids', title: 'Glycolipids, lipid asymmetry & the glycocalyx',
      explanation: "Glycolipids (sugar-containing lipids) make up about 5% of outer-membrane lipids and are essential for how a cell interacts with its surroundings — they protect against lytic enzymes, and charged glycolipids like gangliosides influence membrane potential and cell adhesion (recognized by lectins). Membranes are also asymmetric: the lipid composition of the inner and outer leaflets differs, which supports specific protein binding and helps distinguish live cells from dead/dying ones. The glycocalyx, a carbohydrate-rich coat built largely from these surface glycolipids and glycoproteins, protects cells against mechanical and chemical damage.",
      keyTerms: [
        {term: 'Glycolipid', def: 'Sugar-containing membrane lipid; ~5% of outer-membrane lipids.'},
        {term: 'Ganglioside', def: 'Charged glycolipid relevant to membrane potential and cell adhesion.'},
        {term: 'Lipid asymmetry', def: 'Different lipid composition between inner and outer membrane leaflets.'},
        {term: 'Glycocalyx', def: 'Carbohydrate-rich cell-surface coat protecting against mechanical/chemical damage.'}
      ],
      traps: [
        'Glycolipids are found mainly on the outer leaflet, contributing directly to membrane asymmetry — they are not evenly distributed on both sides.',
        'Lipid asymmetry has functional consequences (e.g., cell-death signaling), it is not incidental.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Glycolipids', detail: '~5% of outer membrane lipids; protective and adhesive roles.'},
        {label: 'Lipid asymmetry', detail: 'Differs between inner/outer leaflets; distinguishes live vs dead cells.'},
        {label: 'Glycocalyx', detail: 'Protective carbohydrate coat on the cell surface.'}
      ]},
      relatedTopicIds: ['sugars-metabolism-recognition', 'lipids-membrane-structure']
    },
    {
      id: 'lipids-signaling', lectureId: 'lipids', title: 'Lipid-derived signaling & functional molecules',
      explanation: "Beyond membranes and energy storage, lipids give rise to important signaling and functional molecules: prostaglandins are involved in inflammation, bile salts (e.g., cholic acid) aid digestion, and fat-soluble vitamins A, D, E, and K depend on lipid solubility for absorption and transport.",
      keyTerms: [
        {term: 'Prostaglandin', def: 'Lipid-derived signaling molecule involved in inflammation.'},
        {term: 'Bile salt', def: 'Lipid-derived molecule (e.g., cholic acid) that aids digestion.'},
        {term: 'Fat-soluble vitamins', def: 'Vitamins A, D, E, K; require lipid solubility for absorption.'}
      ],
      traps: [
        'Prostaglandins are signaling molecules involved in inflammation, not structural membrane components.',
        'Fat-soluble vitamins (A, D, E, K) are distinguished from water-soluble vitamins by their dependence on lipid solubility.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Prostaglandins', detail: 'Inflammation signaling.'},
        {label: 'Bile salts', detail: 'Aid digestion (e.g., cholic acid).'},
        {label: 'Vitamins A, D, E, K', detail: 'Fat-soluble vitamins.'}
      ]},
      relatedTopicIds: ['lipids-categories', 'lipids-cholesterol']
    }
  ];

  var flashcards = [
    {id: 'lipids-categories-f1', topicId: 'lipids-categories', front: 'What makes a fatty acid "essential"?', back: 'The body cannot synthesize it, so it must be obtained from the diet (e.g., omega-3, omega-6).', tags: ['lipids']},
    {id: 'lipids-categories-f2', topicId: 'lipids-categories', front: 'What are the two components of a triglyceride?', back: 'Glycerol plus three fatty acids.', tags: ['lipids']},
    {id: 'lipids-membrane-lipids-f1', topicId: 'lipids-membrane-lipids', front: 'Which two lipid classes are the main membrane-forming lipids in animal cells?', back: 'Glycerophospholipids (most abundant) and sphingolipids.', tags: ['membrane']},
    {id: 'lipids-membrane-lipids-f2', topicId: 'lipids-membrane-lipids', front: 'How does fatty-acid tail saturation affect membrane fluidity?', back: 'More saturation (fewer double bonds) decreases fluidity; more unsaturation increases it.', tags: ['membrane', 'fluidity']},
    {id: 'lipids-membrane-structure-f1', topicId: 'lipids-membrane-structure', front: 'What does the fluid mosaic model describe?', back: 'The plasma membrane as a dynamic mosaic of phospholipids and proteins within a lipid bilayer.', tags: ['membrane']},
    {id: 'lipids-membrane-structure-f2', topicId: 'lipids-membrane-structure', front: 'What restricts free diffusion of membrane components into defined zones?', back: 'The underlying cytoskeleton ("corralling").', tags: ['membrane']},
    {id: 'lipids-cholesterol-f1', topicId: 'lipids-cholesterol', front: 'What is cholesterol the structural basis for?', back: 'All steroid hormones (e.g., testosterone, estrogen).', tags: ['cholesterol']},
    {id: 'lipids-cholesterol-f2', topicId: 'lipids-cholesterol', front: 'How many fused carbon rings make up a sterol like cholesterol?', back: 'Four.', tags: ['cholesterol']},
    {id: 'lipids-glycolipids-asymmetry-f1', topicId: 'lipids-glycolipids-asymmetry', front: 'What roughly percentage of outer-membrane lipids are glycolipids?', back: 'About 5%.', tags: ['glycolipids']},
    {id: 'lipids-glycolipids-asymmetry-f2', topicId: 'lipids-glycolipids-asymmetry', front: 'What is the glycocalyx, and what does it protect against?', back: 'A carbohydrate-rich cell-surface coat that protects against mechanical and chemical damage.', tags: ['glycocalyx']},
    {id: 'lipids-signaling-f1', topicId: 'lipids-signaling', front: 'Which lipid-derived molecules are involved in inflammation?', back: 'Prostaglandins.', tags: ['signaling']},
    {id: 'lipids-signaling-f2', topicId: 'lipids-signaling', front: 'Name the four fat-soluble vitamins.', back: 'Vitamins A, D, E, and K.', tags: ['vitamins']}
  ];

  var questions = [
    {id: 'lipids-categories-q1', topicIds: ['lipids-categories'], stem: 'Saturated fatty acids, compared to unsaturated ones, are typically:',
      options: [
        {text: 'Liquid at room temperature', correct: false, rationale: 'This describes unsaturated fatty acids, not saturated ones.'},
        {text: 'Solid at room temperature', correct: true, rationale: 'Correct — the absence of double-bond kinks lets saturated fatty acids pack tightly, raising melting point.'},
        {text: 'Unable to be metabolized for energy', correct: false, rationale: 'Both saturated and unsaturated fatty acids can be metabolized as an energy source.'},
        {text: 'Only found in plant oils', correct: false, rationale: 'Saturated fats are common in animal fats; this is not an accurate distinction.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'lipids-categories-q2', topicIds: ['lipids-categories'], stem: 'Omega-3 and omega-6 fatty acids are called "essential" because:',
      options: [
        {text: 'They are the most abundant fatty acids in the body', correct: false, rationale: 'Abundance is not what "essential" refers to here.'},
        {text: 'The body cannot synthesize them, so they must come from the diet', correct: true, rationale: 'Correct — this is the defining meaning of "essential" nutrients.'},
        {text: 'They are only used for membrane structure, never for energy', correct: false, rationale: 'This is not the defining feature of "essential" fatty acids.'},
        {text: 'They are synthetic and not found in nature', correct: false, rationale: 'Omega-3/6 fatty acids are natural dietary components, not synthetic.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'lipids-membrane-lipids-q1', topicIds: ['lipids-membrane-lipids'], stem: 'Which change to a phospholipid’s fatty-acid tails would increase membrane fluidity?',
      options: [
        {text: 'Increasing tail length and saturation', correct: false, rationale: 'This would decrease fluidity by allowing tighter packing.'},
        {text: 'Decreasing tail length and increasing unsaturation', correct: true, rationale: 'Correct — shorter, more unsaturated (kinked) tails pack more loosely, increasing fluidity.'},
        {text: 'Removing the phosphate head group entirely', correct: false, rationale: 'This is not how fluidity is regulated in the course material; head-group chemistry is a separate consideration from tail packing.'},
        {text: 'Adding more hydrogen bonds between head groups', correct: false, rationale: 'This is not the described mechanism for tuning membrane fluidity.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'lipids-membrane-lipids-q2', topicIds: ['lipids-membrane-lipids'], stem: 'Which lipid class is described as the most abundant in mammalian cell membranes?',
      options: [
        {text: 'Sphingolipids', correct: false, rationale: 'Sphingolipids are present but not the most abundant class described.'},
        {text: 'Glycerophospholipids', correct: true, rationale: 'Correct — these are the most abundant membrane phospholipids in mammalian cells.'},
        {text: 'Triglycerides', correct: false, rationale: 'Triglycerides are storage lipids, not primary membrane components.'},
        {text: 'Glycolipids', correct: false, rationale: 'Glycolipids are a smaller fraction (~5%) of outer membrane lipids.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'lipids-membrane-structure-q1', topicIds: ['lipids-membrane-structure'], stem: 'The fluid mosaic model describes the plasma membrane as:',
      options: [
        {text: 'A rigid, static crystal lattice of lipids', correct: false, rationale: 'This contradicts the "fluid" and "dynamic" character central to the model.'},
        {text: 'A dynamic mosaic of lipids and proteins that allows movement and communication', correct: true, rationale: 'Correct — this is the essence of the fluid mosaic model.'},
        {text: 'A single continuous protein sheet with no lipids', correct: false, rationale: 'The model explicitly includes both lipids and proteins.'},
        {text: 'A purely carbohydrate-based structure', correct: false, rationale: 'Carbohydrates (glycocalyx) decorate the membrane but are not its primary structural basis.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'lipids-membrane-structure-q2', topicIds: ['lipids-membrane-structure'], stem: 'What restricts membrane proteins/lipids to specific zones, limiting their free lateral diffusion?',
      options: [
        {text: 'The underlying cytoskeleton ("corralling")', correct: true, rationale: 'Correct — cytoskeletal attachments partition the membrane into diffusion-restricted zones.'},
        {text: 'The nuclear envelope', correct: false, rationale: 'The nuclear envelope is a separate membrane system, unrelated to plasma-membrane corralling.'},
        {text: 'Ribosomes attached to the rough ER', correct: false, rationale: 'Ribosomes are involved in protein synthesis, not membrane corralling.'},
        {text: 'DNA methylation', correct: false, rationale: 'This is an epigenetic mechanism, unrelated to membrane organization.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'lipids-cholesterol-q1', topicIds: ['lipids-cholesterol'], stem: 'Cholesterol serves as the structural basis for which class of molecules?',
      options: [
        {text: 'Steroid hormones (e.g., testosterone, estrogen)', correct: true, rationale: 'Correct — steroid hormones are built from the cholesterol scaffold.'},
        {text: 'Fat-soluble vitamins only', correct: false, rationale: 'Vitamins A, D, E, K are a separate category, though some are related to lipid solubility.'},
        {text: 'Prostaglandins', correct: false, rationale: 'Prostaglandins are derived from fatty acids, not from the cholesterol ring system.'},
        {text: 'Glycolipids', correct: false, rationale: 'Glycolipids are sugar-lipid conjugates, structurally distinct from cholesterol-derived steroids.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'lipids-cholesterol-q2', topicIds: ['lipids-cholesterol'], stem: 'How many fused carbon rings define the basic sterol structure of cholesterol?',
      options: [
        {text: 'Two', correct: false, rationale: 'This understates the ring count.'},
        {text: 'Three', correct: false, rationale: 'This understates the ring count.'},
        {text: 'Four', correct: true, rationale: 'Correct — cholesterol’s core is four fused carbon rings.'},
        {text: 'Six', correct: false, rationale: 'This overstates the ring count.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'lipids-glycolipids-asymmetry-q1', topicIds: ['lipids-glycolipids-asymmetry'], stem: 'What does membrane "lipid asymmetry" refer to?',
      options: [
        {text: 'Different lipid compositions between the inner and outer membrane leaflets', correct: true, rationale: 'Correct — this asymmetry supports protein binding and helps mark cell state (e.g., live vs dead).'},
        {text: 'Uneven distribution of cholesterol between different organelles', correct: false, rationale: 'This is not what "lipid asymmetry" specifically refers to in this context.'},
        {text: 'Random, functionally irrelevant variation in lipid tail length', correct: false, rationale: 'Lipid asymmetry is functionally significant, not random or irrelevant.'},
        {text: 'The difference between plant and animal membrane lipids', correct: false, rationale: 'This describes a cross-species difference, not leaflet asymmetry within one membrane.'}
      ], difficulty: 'hard', topicCheck: false},
    {id: 'lipids-glycolipids-asymmetry-q2', topicIds: ['lipids-glycolipids-asymmetry'], stem: 'What is the primary function of the glycocalyx?',
      options: [
        {text: 'Generating ATP at the cell surface', correct: false, rationale: 'ATP generation is a mitochondrial function, unrelated to the glycocalyx.'},
        {text: 'Protecting the cell against mechanical and chemical damage', correct: true, rationale: 'Correct — the carbohydrate-rich glycocalyx forms a protective surface coat.'},
        {text: 'Replicating the cell’s DNA', correct: false, rationale: 'DNA replication occurs in the nucleus, unrelated to the glycocalyx.'},
        {text: 'Catalyzing peptide bond formation', correct: false, rationale: 'This is a ribosomal (rRNA) function, unrelated to the glycocalyx.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'lipids-signaling-q1', topicIds: ['lipids-signaling'], stem: 'Which lipid-derived molecules are primarily involved in inflammation?',
      options: [
        {text: 'Bile salts', correct: false, rationale: 'Bile salts primarily aid digestion, not inflammation signaling.'},
        {text: 'Prostaglandins', correct: true, rationale: 'Correct — prostaglandins are lipid-derived signaling molecules involved in inflammation.'},
        {text: 'Glycolipids', correct: false, rationale: 'Glycolipids are primarily structural/adhesive membrane components.'},
        {text: 'Triglycerides', correct: false, rationale: 'Triglycerides are energy-storage lipids, not inflammatory signaling molecules.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'lipids-signaling-q2', topicIds: ['lipids-signaling'], stem: 'Which vitamins require lipid solubility for absorption and transport?',
      options: [
        {text: 'B and C vitamins', correct: false, rationale: 'B and C vitamins are water-soluble, not fat-soluble.'},
        {text: 'Vitamins A, D, E, and K', correct: true, rationale: 'Correct — these are the classic fat-soluble vitamins.'},
        {text: 'Only vitamin C', correct: false, rationale: 'Vitamin C is water-soluble.'},
        {text: 'All vitamins equally', correct: false, rationale: 'Vitamins differ meaningfully in solubility; not all are fat-soluble.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'lipids-categories-q3', topicIds: ['lipids-categories'], stem: 'What is the molecular make-up of a triglyceride, the body’s main energy-storage fat?',
      options: [
        {text: 'A glycerol backbone joined to three fatty acids', correct: true, rationale: 'Correct — triglycerides are glycerol esterified to three fatty-acid tails and are the most common fat stored for energy.'},
        {text: 'A glycerol backbone joined to a phosphate head group', correct: false, rationale: 'That describes a phospholipid, a membrane lipid, not a triglyceride.'},
        {text: 'Four fused carbon rings', correct: false, rationale: 'Four fused rings define a sterol such as cholesterol, not a triglyceride.'},
        {text: 'A chain of amino acids', correct: false, rationale: 'Amino-acid chains are proteins, not lipids.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'lipids-membrane-lipids-q3', topicIds: ['lipids-membrane-lipids'], stem: 'Why do phospholipids spontaneously form a bilayer in water?',
      options: [
        {text: 'They are amphipathic — hydrophilic heads face the water while hydrophobic tails cluster inward', correct: true, rationale: 'Correct — having both a water-loving head and water-avoiding tails drives phospholipids to self-assemble into a bilayer.'},
        {text: 'They are entirely hydrophobic and repel each other', correct: false, rationale: 'If they were entirely hydrophobic they would not orient heads toward water; the dual nature is the key.'},
        {text: 'They are entirely hydrophilic and dissolve completely', correct: false, rationale: 'Fully hydrophilic molecules would just dissolve rather than form a membrane.'},
        {text: 'They form covalent bonds linking every lipid into a sheet', correct: false, rationale: 'The bilayer is held by the hydrophobic effect and weak interactions, not covalent cross-links.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'lipids-membrane-structure-q3', topicIds: ['lipids-membrane-structure'], stem: 'What are lipid rafts?',
      options: [
        {text: 'Temporary, specialized microdomains that organize certain lipids and proteins within the membrane', correct: true, rationale: 'Correct — lipid rafts are dynamic microdomains that concentrate specific lipids/proteins as a membrane-organizing principle.'},
        {text: 'Permanent covalent patches that never move', correct: false, rationale: 'Rafts are dynamic and transient, not permanent fixed patches.'},
        {text: 'Gaps in the membrane where there is no lipid', correct: false, rationale: 'Rafts are lipid-rich domains, not holes in the bilayer.'},
        {text: 'Vesicles that have fully detached from the cell', correct: false, rationale: 'Rafts are regions within an intact membrane, not free vesicles.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'lipids-cholesterol-q3', topicIds: ['lipids-cholesterol'], stem: 'Besides being a hormone precursor, what structural role does cholesterol play in membranes?',
      options: [
        {text: 'It modulates membrane fluidity', correct: true, rationale: 'Correct — cholesterol inserts among phospholipids and buffers fluidity, keeping membranes from becoming too fluid or too rigid.'},
        {text: 'It carries the cell’s genetic information', correct: false, rationale: 'Genetic information is carried by DNA, not cholesterol.'},
        {text: 'It catalyzes peptide-bond formation', correct: false, rationale: 'Peptide bonds are made by the ribosome; cholesterol is not catalytic here.'},
        {text: 'It forms the sugar coat of the glycocalyx', correct: false, rationale: 'The glycocalyx is built from glycolipids and glycoproteins, not cholesterol.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'lipids-glycolipids-asymmetry-q3', topicIds: ['lipids-glycolipids-asymmetry'], stem: 'Glycolipids sit in the outer membrane leaflet and are important for:',
      options: [
        {text: 'Cell adhesion and recognition (they can be bound by lectins)', correct: true, rationale: 'Correct — these sugar-bearing lipids project outward and mediate cell–cell adhesion and recognition, and are recognized by lectins.'},
        {text: 'Copying DNA during replication', correct: false, rationale: 'DNA replication is unrelated to membrane glycolipids.'},
        {text: 'Generating ATP in the mitochondrial matrix', correct: false, rationale: 'ATP synthesis is a mitochondrial process, not a glycolipid function.'},
        {text: 'Splicing pre-mRNA in the nucleus', correct: false, rationale: 'Splicing is carried out by the spliceosome, unrelated to glycolipids.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'lipids-signaling-q3', topicIds: ['lipids-signaling'], stem: 'What is the main physiological role of bile salts such as cholic acid?',
      options: [
        {text: 'Aiding the digestion (emulsification) of dietary fats', correct: true, rationale: 'Correct — bile salts are lipid-derived molecules that emulsify fats to aid their digestion and absorption.'},
        {text: 'Triggering inflammation', correct: false, rationale: 'That is the role of prostaglandins, not bile salts.'},
        {text: 'Acting as fat-soluble vitamins', correct: false, rationale: 'Fat-soluble vitamins are A, D, E and K; bile salts are a separate class of molecule.'},
        {text: 'Storing energy in fat cells', correct: false, rationale: 'Energy storage is the role of triglycerides, not bile salts.'}
      ], difficulty: 'medium', topicCheck: false}
  ];

  MOLBIO.registerLecture(lecture, topics, flashcards, questions);
})();
