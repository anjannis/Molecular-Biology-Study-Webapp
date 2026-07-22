/* Unit 3 — Proteins. Sources: "04 - Protein" and translation-recap slides of "05 - Lipids" (K. Kobow). */
(function () {
  var lecture = {
    id: 'proteins', title: 'Proteins', order: 3,
    source: 'Lecture 04 – Protein (K. Kobow)',
    topicIds: ['proteins-genetic-code', 'proteins-translation', 'proteins-structure',
               'proteins-folding-qc', 'proteins-function', 'proteins-regulation']
  };

  var topics = [
    {
      id: 'proteins-genetic-code', lectureId: 'proteins', title: 'The genetic code, tRNA & aminoacyl-tRNA synthetases',
      explanation: "The genetic code is a degenerate, triplet code: 4 RNA bases in groups of 3 give 4×4×4 = 64 codons, of which 61 specify one of the 20 amino acids and 3 are stop codons. This redundancy is partly explained by “wobble” — flexible, non-standard base pairing at the third codon position — which lets a single tRNA recognize multiple codons, so organisms need fewer than 61 distinct tRNAs. Because several tRNAs can carry the same amino acid (isoacceptor tRNAs), specificity is enforced one level up: aminoacyl-tRNA synthetases are generally one specific enzyme per amino acid, correctly “charging” every isoacceptor tRNA for that amino acid with its matching amino acid.",
      keyTerms: [
        {term: 'Codon', def: 'Triplet of RNA bases specifying one amino acid or a stop signal.'},
        {term: 'Wobble', def: 'Flexible base pairing at the third codon position, letting one tRNA read multiple codons.'},
        {term: 'Isoacceptor tRNAs', def: 'Chemically different tRNAs charged with the same amino acid.'},
        {term: 'Aminoacyl-tRNA synthetase', def: 'Enzyme that "charges" a tRNA with its correct amino acid; generally one enzyme per amino acid.'},
        {term: 'Inosine', def: 'Modified base that can pair with U, C, or A, contributing to wobble flexibility.'}
      ],
      traps: [
        'The redundancy is 61 codons → 20 amino acids, not 64 → 20 (3 of the 64 are stop codons, not amino-acid codons).',
        'Wobble occurs at the third codon position, not the first — reversing this is a common exam trap.',
        'Synthetase specificity is per amino acid, not per tRNA — one enzyme correctly charges every isoacceptor tRNA for its amino acid.'
      ],
      visual: {type: 'facts', items: [
        {label: '64', detail: 'total codons (4³ combinations of 4 bases in triplets).'},
        {label: '61', detail: 'codons specify one of the 20 standard amino acids.'},
        {label: '3', detail: 'codons are stop codons (no amino acid).'}
      ]},
      relatedTopicIds: ['proteins-translation', 'rna-classes']
    },
    {
      id: 'proteins-translation', lectureId: 'proteins', title: 'Translation: from mRNA to polypeptide',
      explanation: "Translation is catalyzed by the ribosome, which cycles a charged tRNA through three sites: the A site (where a new charged tRNA binds, matching the current codon), the P site (holding the tRNA attached to the growing peptide chain, where the peptide bond forms and the chain shifts from the P-site tRNA onto the A-site tRNA), and the E site (where the deacylated tRNA is ejected after large- and small-subunit translocation resets the ribosome for the next cycle). The growing polypeptide is synthesized from its N-terminus to its C-terminus, with each amino acid linked via its carboxyl group to the next, releasing water in each condensation step.",
      keyTerms: [
        {term: 'A site', def: 'Ribosomal site where an incoming charged tRNA binds.'},
        {term: 'P site', def: 'Ribosomal site holding the tRNA attached to the growing peptide chain.'},
        {term: 'E site', def: 'Ribosomal site where the spent, uncharged tRNA is ejected.'},
        {term: 'Translocation', def: 'Movement of the ribosome (large then small subunit) relative to the mRNA after each peptide bond forms.'},
        {term: 'N-to-C synthesis', def: 'Polypeptide chains are built from the N-terminus toward the C-terminus.'}
      ],
      traps: [
        'The cycle order is A site (binding) → P site (peptide bond forms, chain shifts) → E site (tRNA ejected) — not the reverse.',
        'Peptide bond formation moves the growing chain from the P-site tRNA onto the A-site tRNA, not the other way around.',
        'Proteins are synthesized N-terminus to C-terminus; reversing this direction is a classic trap.'
      ],
      visual: {type: 'steps', steps: [
        {title: '1. A-site binding', detail: 'A charged tRNA matching the current codon binds the A site.'},
        {title: '2. Peptide bond formation', detail: 'The peptide chain shifts from the P-site tRNA onto the A-site tRNA.'},
        {title: '3. Large subunit translocation', detail: 'The large subunit shifts, preserving the reading frame.'},
        {title: '4. Small subunit translocation', detail: 'The spent tRNA moves to the E site and is ejected; ribosome resets.'}
      ]},
      relatedTopicIds: ['proteins-genetic-code', 'proteins-structure']
    },
    {
      id: 'proteins-structure', lectureId: 'proteins', title: 'Protein structure: primary to quaternary',
      explanation: "A protein's primary structure is its linear amino-acid sequence, linked by planar peptide bonds that restrict rotation and constrain the chain's geometry. Secondary structure arises from local hydrogen bonding into two main motifs — alpha helices (e.g., channels, transporters, filaments) and beta sheets (rigid, parallel or antiparallel strands). The chain then folds into a tertiary structure organized into modular domains, and many proteins further assemble into quaternary structures — homo- or hetero-multimers — for extra stability, shape, or function. Folding itself is driven by many weak, non-covalent bonds that are individually weak but collectively strong.",
      keyTerms: [
        {term: 'Primary structure', def: 'Linear amino-acid sequence of a polypeptide.'},
        {term: 'Secondary structure', def: 'Local folding into alpha helices or beta sheets via hydrogen bonding.'},
        {term: 'Tertiary structure', def: 'Overall 3D fold of a single polypeptide, organized into domains.'},
        {term: 'Quaternary structure', def: 'Assembly of multiple polypeptide subunits into one functional complex.'},
        {term: 'Protein domain', def: 'Modular, semi-independent structural/functional unit within tertiary structure.'}
      ],
      traps: [
        'Alpha helices and beta sheets are both secondary structure, not different levels of structure (helix ≠ tertiary, sheet ≠ quaternary).',
        'Quaternary structure requires multiple separate polypeptide chains; a single, complexly folded chain is still only tertiary structure.',
        'Peptide bonds are planar and do not rotate freely — flexibility comes from the bonds on either side of it, not the peptide bond itself.'
      ],
      visual: {type: 'compare', columns: ['Level', 'Description', 'Example'],
        rows: [
          ['Primary', 'Linear amino acid sequence', 'Polypeptide chain'],
          ['Secondary', 'Local folding via H-bonds', 'Alpha helix, beta sheet'],
          ['Tertiary', 'Overall 3D fold, domains', 'A single folded protein'],
          ['Quaternary', 'Multi-subunit assembly', 'Hemoglobin-like multimers']
        ]},
      relatedTopicIds: ['proteins-folding-qc', 'proteins-translation']
    },
    {
      id: 'proteins-folding-qc', lectureId: 'proteins', title: 'Folding, chaperones & quality control',
      explanation: "Chaperones (proteins themselves) assist correct protein folding. When proteins are damaged or misfolded, cells apply two complementary quality-control strategies: proteasomal degradation, a fine-tuned, selective process in which proteins tagged with ubiquitin are precisely destroyed (like removing specific pages from a manual), and autophagy, a bulk degradation and recycling process — especially active under stress — that clears out larger cellular components wholesale (like clearing entire rooms). When these systems fail, misfolded-protein aggregates accumulate, as seen in Alzheimer's disease (neurofibrillary tangles of p-Tau and beta-amyloid plaques) and Parkinson's disease (alpha-synuclein deposits in dopaminergic neurons of the substantia nigra).",
      keyTerms: [
        {term: 'Chaperone', def: 'Protein that assists correct folding of other proteins.'},
        {term: 'Ubiquitin', def: 'Small protein tag marking a target for selective proteasomal degradation.'},
        {term: 'Proteasomal degradation', def: 'Selective, targeted destruction of specific ubiquitin-tagged proteins.'},
        {term: 'Autophagy', def: 'Bulk degradation/recycling of cellular components, especially under stress.'},
        {term: 'Alzheimer’s vs Parkinson’s', def: 'Alzheimer’s: tau tangles + amyloid plaques. Parkinson’s: alpha-synuclein deposits in dopaminergic neurons.'}
      ],
      traps: [
        'Proteasomal degradation is selective/targeted; autophagy is bulk/non-selective — mixing these up is a common trap.',
        'Alzheimer’s involves both tau tangles AND amyloid plaques, not just one; Parkinson’s specifically involves alpha-synuclein, not amyloid.',
        'Chaperones assist folding — they do not by themselves degrade proteins.'
      ],
      visual: {type: 'compare', columns: ['System', 'Scope', 'Analogy'],
        rows: [
          ['Proteasomal degradation', 'Selective, single proteins (ubiquitin-tagged)', '"Precision editor" removing specific pages'],
          ['Autophagy', 'Bulk, whole components, stress-induced', '"Recycling crew" clearing entire rooms']
        ]},
      relatedTopicIds: ['proteins-structure', 'cell-lysosomes']
    },
    {
      id: 'proteins-function', lectureId: 'proteins', title: 'Protein function & diversity',
      explanation: "All proteins function by binding other molecules — small molecules, other proteins, or nucleic acids — via specific binding sites. Enzymes are a major functional class, lowering the activation energy of reactions and often relying on vitamin-derived cofactors (e.g., derivatives of B3, B5, B6, B7, B9). Antibodies illustrate the extreme end of protein diversity: their Y-shaped structure has two identical antigen-binding sites, and near-limitless diversity is generated combinatorially — via germline V/D/J gene segment libraries, combinatorial V-D-J joining, junctional flexibility, somatic hypermutation, heavy/light chain pairing, and class switching.",
      keyTerms: [
        {term: 'Enzyme', def: 'Protein that lowers the activation energy of a biochemical reaction.'},
        {term: 'Cofactor', def: 'Non-protein helper molecule (often vitamin-derived) required for enzyme activity.'},
        {term: 'V(D)J recombination', def: 'Combinatorial joining of gene segments generating antibody diversity.'},
        {term: 'Somatic hypermutation', def: 'Mutation of antibody genes in activated B cells, further increasing diversity.'},
        {term: 'Class switching', def: 'Changing an antibody’s constant region to alter its class/type.'}
      ],
      traps: [
        'Antibody diversity comes from many combined mechanisms (V(D)J joining, junctional flexibility, somatic hypermutation, chain pairing, class switching) — not from a single source.',
        'Enzymes lower activation energy; they do not change a reaction’s overall thermodynamics (its ΔG).',
        'Cofactors are frequently vitamin-derived but are not proteins themselves.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Germline segments', detail: 'A library of V, D, and J gene segments.'},
        {label: 'Combinatorial joining', detail: 'Different V-D-J combinations, plus imprecise junctional joining.'},
        {label: 'Somatic hypermutation', detail: 'Further mutation of antibody genes in activated B cells.'},
        {label: 'Class switching', detail: 'Changes the constant region to alter antibody class.'}
      ]},
      relatedTopicIds: ['proteins-structure', 'proteins-regulation']
    },
    {
      id: 'proteins-regulation', lectureId: 'proteins', title: 'Regulating protein activity & epigenetic recap',
      explanation: "Protein activity is tuned post-translationally through mechanisms such as allosteric activation/inhibition (binding at a site other than the active site changes conformation and activity) and phosphorylation, which can trigger a major conformational change, create a docking surface recognized by other proteins (e.g., an SH2 domain), or mask a binding site — as seen throughout MAP kinase signaling cascades. Post-translational modifications (PTMs) act like “sticky notes with functional instructions,” where type, position, combination, and timing of modifications all matter. At the DNA/chromatin level, similar combinatorial logic applies: DNA methylation (typically silencing, stable/heritable) and the histone code (over 150 combinatorial marks, e.g., H3K4me3 = active, H3K27me3 = repressed) both shape gene readout from the same underlying genome.",
      keyTerms: [
        {term: 'Allosteric regulation', def: 'Binding at a non-active site changes protein conformation/activity (activation or inhibition).'},
        {term: 'Phosphorylation', def: 'Addition of a phosphate group; can change conformation, create docking motifs, or mask binding sites.'},
        {term: 'Post-translational modification (PTM)', def: 'Chemical modification after translation that regulates protein function; effects depend on type, position, combination, and timing.'},
        {term: 'Histone code', def: 'Combinatorial histone marks (e.g., H3K4me3 = active, H3K27me3 = repressed) controlling chromatin accessibility.'},
        {term: 'DNA methylation', def: 'Methyl marks on CpG dinucleotides, typically silencing gene expression; stable and heritable.'}
      ],
      traps: [
        'H3K4me3 marks active genes while H3K27me3 marks repressed genes — reversing these is a common trap.',
        'Phosphorylation can have multiple distinct downstream effects (conformational change, docking-site creation, or masking) — it is not a single fixed mechanism.',
        'DNA methylation is typically associated with silencing, not activation, of gene expression.'
      ],
      visual: {type: 'compare', columns: ['Mechanism', 'Typical effect'],
        rows: [
          ['DNA methylation (CpG)', 'Silences gene expression; stable, heritable'],
          ['H3K4me3', 'Marks active genes'],
          ['H3K27me3', 'Marks repressed genes'],
          ['Chromatin remodeling (ATP-dependent)', 'Repositions nucleosomes, opens/closes DNA access'],
          ['miRNA / lncRNA', 'Post-transcriptional / scaffolding regulation']
        ]},
      relatedTopicIds: ['rna-regulation', 'proteins-function']
    }
  ];

  var flashcards = [
    {id: 'proteins-genetic-code-f1', topicId: 'proteins-genetic-code', front: 'How many codons exist, how many code for amino acids, and how many are stop codons?', back: '64 total codons; 61 code for the 20 amino acids; 3 are stop codons.', tags: ['genetic code']},
    {id: 'proteins-genetic-code-f2', topicId: 'proteins-genetic-code', front: 'What is "wobble" and where does it occur?', back: 'Flexible, non-standard base pairing at the third codon position, letting one tRNA recognize multiple codons.', tags: ['genetic code', 'wobble']},
    {id: 'proteins-translation-f1', topicId: 'proteins-translation', front: 'Name the three ribosomal tRNA-binding sites in order of the translation cycle.', back: 'A site (binding) → P site (peptide bond formation) → E site (tRNA ejection).', tags: ['translation']},
    {id: 'proteins-translation-f2', topicId: 'proteins-translation', front: 'From which terminus to which is a polypeptide synthesized?', back: 'From the N-terminus to the C-terminus.', tags: ['translation']},
    {id: 'proteins-structure-f1', topicId: 'proteins-structure', front: 'Name the two main secondary-structure motifs.', back: 'Alpha helices and beta sheets.', tags: ['structure']},
    {id: 'proteins-structure-f2', topicId: 'proteins-structure', front: 'What distinguishes quaternary structure from tertiary structure?', back: 'Quaternary structure involves multiple separate polypeptide chains assembling together; tertiary structure is the 3D fold of a single chain.', tags: ['structure']},
    {id: 'proteins-folding-qc-f1', topicId: 'proteins-folding-qc', front: 'What tag marks a protein for selective proteasomal degradation?', back: 'Ubiquitin.', tags: ['folding', 'degradation']},
    {id: 'proteins-folding-qc-f2', topicId: 'proteins-folding-qc', front: 'Which neurodegenerative disease involves alpha-synuclein deposits, and which involves tau tangles + amyloid plaques?', back: 'Parkinson’s disease: alpha-synuclein. Alzheimer’s disease: tau tangles (neurofibrillary) and beta-amyloid plaques.', tags: ['disease']},
    {id: 'proteins-function-f1', topicId: 'proteins-function', front: 'What do enzymes do to activation energy?', back: 'They lower it, speeding up reactions without changing the reaction’s overall thermodynamics.', tags: ['enzymes']},
    {id: 'proteins-function-f2', topicId: 'proteins-function', front: 'Name two mechanisms that generate antibody diversity.', back: 'Any two of: combinatorial V-D-J joining, junctional flexibility, somatic hypermutation, heavy/light chain pairing, class switching.', tags: ['antibodies']},
    {id: 'proteins-regulation-f1', topicId: 'proteins-regulation', front: 'What does H3K4me3 typically indicate about a gene?', back: 'The gene is active (H3K27me3, by contrast, marks repression).', tags: ['epigenetics']},
    {id: 'proteins-regulation-f2', topicId: 'proteins-regulation', front: 'Name three possible consequences of a protein being phosphorylated.', back: 'Conformational change, creation of a docking motif for other proteins (e.g., SH2 domain), or masking of a binding site.', tags: ['phosphorylation']}
  ];

  var questions = [
    {id: 'proteins-genetic-code-q1', topicIds: ['proteins-genetic-code'], stem: 'The "wobble" phenomenon in translation refers to:',
      options: [
        {text: 'Flexible base pairing at the first codon position', correct: false, rationale: 'Wobble specifically occurs at the third codon position, not the first.'},
        {text: 'Flexible base pairing at the third codon position, allowing one tRNA to read multiple codons', correct: true, rationale: 'Correct — this reduces the number of distinct tRNAs an organism needs.'},
        {text: 'The random insertion of stop codons during translation', correct: false, rationale: 'This is not what wobble describes; wobble concerns codon-anticodon pairing flexibility.'},
        {text: 'Variability in the number of codons per amino acid across species', correct: false, rationale: 'The genetic code’s degeneracy is essentially universal; wobble is about pairing flexibility, not code variation across species.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'proteins-genetic-code-q2', topicIds: ['proteins-genetic-code'], stem: 'Aminoacyl-tRNA synthetase specificity is generally organized as:',
      options: [
        {text: 'One synthetase per isoacceptor tRNA (many enzymes per amino acid)', correct: false, rationale: 'This reverses the actual organization — specificity is per amino acid, not per individual isoacceptor tRNA.'},
        {text: 'One synthetase per amino acid, correctly charging all of its isoacceptor tRNAs', correct: true, rationale: 'Correct — generally one enzyme recognizes one amino acid and all tRNAs that accept it.'},
        {text: 'One synthetase for all 20 amino acids combined', correct: false, rationale: 'Specificity is much finer-grained than a single universal enzyme.'},
        {text: 'No relationship between synthetases and specific amino acids', correct: false, rationale: 'Synthetases are highly amino-acid-specific, not random.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'proteins-translation-q1', topicIds: ['proteins-translation'], stem: 'During translation, where does peptide bond formation occur?',
      options: [
        {text: 'Between the tRNAs in the A and P sites', correct: true, rationale: 'Correct — the growing chain on the P-site tRNA is transferred onto the amino acid on the A-site tRNA.'},
        {text: 'Between the tRNAs in the P and E sites', correct: false, rationale: 'The E site only holds the spent tRNA awaiting ejection; no bond formation happens there.'},
        {text: 'Outside the ribosome, in the cytoplasm', correct: false, rationale: 'Peptide bond formation is catalyzed within the ribosome (by rRNA, a ribozyme).'},
        {text: 'In the nucleus, before mRNA export', correct: false, rationale: 'Translation occurs in the cytoplasm on ribosomes, not in the nucleus.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'proteins-translation-q2', topicIds: ['proteins-translation'], stem: 'A polypeptide chain is synthesized in which direction?',
      options: [
        {text: 'C-terminus to N-terminus', correct: false, rationale: 'This reverses the correct synthesis direction.'},
        {text: 'N-terminus to C-terminus', correct: true, rationale: 'Correct — each new amino acid is added via its carboxyl group, extending the chain toward the C-terminus.'},
        {text: 'From the middle outward in both directions', correct: false, rationale: 'Synthesis is strictly directional, not bidirectional from a midpoint.'},
        {text: 'Randomly, with no fixed directionality', correct: false, rationale: 'Translation direction is fixed and enzymatically enforced.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'proteins-structure-q1', topicIds: ['proteins-structure'], stem: 'Alpha helices and beta sheets are examples of which level of protein structure?',
      options: [
        {text: 'Primary structure', correct: false, rationale: 'Primary structure is just the linear amino-acid sequence.'},
        {text: 'Secondary structure', correct: true, rationale: 'Correct — both arise from local hydrogen bonding patterns within the backbone.'},
        {text: 'Tertiary structure', correct: false, rationale: 'Tertiary structure is the overall 3D fold of the whole chain, built from secondary elements.'},
        {text: 'Quaternary structure', correct: false, rationale: 'Quaternary structure requires multiple separate polypeptide chains.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'proteins-structure-q2', topicIds: ['proteins-structure'], stem: 'A protein made of two separate polypeptide chains assembled together exhibits:',
      options: [
        {text: 'Only tertiary structure', correct: false, rationale: 'Tertiary structure describes a single chain’s fold; a two-chain assembly goes beyond this.'},
        {text: 'Quaternary structure', correct: true, rationale: 'Correct — quaternary structure specifically describes multi-subunit assemblies.'},
        {text: 'Only secondary structure', correct: false, rationale: 'Secondary structure describes local folding motifs, not whole-chain assembly.'},
        {text: 'Only primary structure', correct: false, rationale: 'Primary structure is just sequence; it says nothing about assembly.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'proteins-folding-qc-q1', topicIds: ['proteins-folding-qc'], stem: 'Which protein quality-control system is selective, tagging specific proteins with ubiquitin for destruction?',
      options: [
        {text: 'Autophagy', correct: false, rationale: 'Autophagy is a bulk, non-selective process for larger-scale recycling, especially under stress.'},
        {text: 'Proteasomal degradation', correct: true, rationale: 'Correct — ubiquitin tagging targets specific proteins for precise proteasomal destruction.'},
        {text: 'Chaperone-mediated folding', correct: false, rationale: 'Chaperones assist correct folding; they do not degrade proteins.'},
        {text: 'Alternative splicing', correct: false, rationale: 'Splicing is an RNA-processing step, unrelated to protein degradation.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'proteins-folding-qc-q2', topicIds: ['proteins-folding-qc'], stem: 'Alpha-synuclein deposits in dopaminergic neurons of the substantia nigra are characteristic of:',
      options: [
        {text: 'Alzheimer’s disease', correct: false, rationale: 'Alzheimer’s is characterized by tau tangles and amyloid plaques, not alpha-synuclein.'},
        {text: 'Parkinson’s disease', correct: true, rationale: 'Correct — alpha-synuclein deposits and dopaminergic neuron loss are hallmarks of Parkinson’s disease.'},
        {text: 'Chronic myelogenous leukemia', correct: false, rationale: 'This is a blood cancer linked to a chromosomal translocation, unrelated to protein misfolding disease.'},
        {text: 'Dravet syndrome', correct: false, rationale: 'Dravet syndrome is linked to an SCN1A splicing defect, not protein misfolding.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'proteins-function-q1', topicIds: ['proteins-function'], stem: 'What is the primary effect of an enzyme on a chemical reaction?',
      options: [
        {text: 'It changes the overall energy difference (ΔG) between reactants and products', correct: false, rationale: 'Enzymes do not change the thermodynamics of a reaction, only its rate.'},
        {text: 'It lowers the activation energy required for the reaction', correct: true, rationale: 'Correct — this speeds up the reaction without altering its overall energetics.'},
        {text: 'It permanently consumes itself in the reaction', correct: false, rationale: 'Enzymes are catalysts and are not consumed by the reactions they catalyze.'},
        {text: 'It only functions outside of cells', correct: false, rationale: 'Enzymes function within cells (and can also function in vitro).'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'proteins-function-q2', topicIds: ['proteins-function'], stem: 'Antibody diversity arises from which combination of mechanisms?',
      options: [
        {text: 'A single fixed gene sequence with no recombination', correct: false, rationale: 'This is the opposite of how antibody diversity is generated.'},
        {text: 'Combinatorial V-D-J joining, junctional flexibility, somatic hypermutation, chain pairing, and class switching', correct: true, rationale: 'Correct — antibody diversity is generated combinatorially across several independent mechanisms.'},
        {text: 'Alternative splicing of a single antibody gene only', correct: false, rationale: 'Splicing contributes to some diversity mechanisms but is not the sole source described.'},
        {text: 'Random point mutations in ribosomal RNA', correct: false, rationale: 'Antibody diversity involves antibody gene mechanisms, not rRNA mutation.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'proteins-regulation-q1', topicIds: ['proteins-regulation'], stem: 'Which histone mark is typically associated with active gene expression?',
      options: [
        {text: 'H3K27me3', correct: false, rationale: 'This mark is associated with gene repression, not activation.'},
        {text: 'H3K4me3', correct: true, rationale: 'Correct — H3K4me3 is a well-known active-gene mark.'},
        {text: 'CpG methylation', correct: false, rationale: 'DNA methylation at CpG sites is typically silencing, not activating.'},
        {text: 'Ubiquitination of histones only silences transcription', correct: false, rationale: 'This overgeneralizes; the course frames ubiquitin mainly in the context of protein degradation tagging, not a blanket silencing histone mark.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'proteins-regulation-q2', topicIds: ['proteins-regulation'], stem: 'Phosphorylation can regulate a protein by all of the following EXCEPT:',
      options: [
        {text: 'Causing a major conformational change', correct: false, rationale: 'This is one of the described effects of phosphorylation.'},
        {text: 'Creating a docking site recognized by domains like SH2', correct: false, rationale: 'This is one of the described effects of phosphorylation.'},
        {text: 'Masking a binding site and disrupting protein-protein interactions', correct: false, rationale: 'This is one of the described effects of phosphorylation.'},
        {text: 'Permanently altering the protein’s amino-acid sequence', correct: true, rationale: 'Correct — phosphorylation is a reversible post-translational modification; it does not change the underlying amino-acid sequence.'}
      ], difficulty: 'medium', topicCheck: true}
  ];

  MOLBIO.registerLecture(lecture, topics, flashcards, questions);
})();
