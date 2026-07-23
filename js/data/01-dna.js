/* Unit 1 — DNA. Source: "02 - DNA" (K. Kobow), Introduction to Molecular Biology. */
(function () {
  var lecture = {
    id: 'dna', title: 'DNA', order: 1,
    source: 'Lecture 02 – DNA (K. Kobow)',
    topicIds: ['dna-structure', 'dna-packaging', 'dna-cellcycle', 'dna-replication',
               'dna-damage-repair', 'dna-pcr', 'dna-genome-content']
  };

  var topics = [
    {
      id: 'dna-structure', lectureId: 'dna', title: 'Structure, nucleotides & complementarity',
      explanation: "DNA is a double-stranded, antiparallel helix. Each strand is a chain of nucleotides — a deoxyribose sugar, a phosphate group, and one of four bases (A, T, C, G) — joined by a sugar-phosphate backbone that gives the molecule its stability. Watson and Crick's 1953 model, built on Rosalind Franklin's X-ray diffraction data, showed that A pairs with T and G pairs with C via hydrogen bonds. Because each strand specifies the sequence of its partner, complementarity is what makes DNA both a stable long-term information store and a template that can be copied with high fidelity.",
      keyTerms: [
        {term: 'Nucleotide', def: 'Sugar (deoxyribose) + phosphate + nitrogenous base; the monomer of DNA.'},
        {term: 'Antiparallel strands', def: 'The two strands run in opposite 5′→3′ orientations.'},
        {term: 'Complementarity', def: 'A pairs with T, G pairs with C, via hydrogen bonds.'},
        {term: 'Sugar-phosphate backbone', def: 'Deoxyribose-phosphate chain that gives DNA chemical stability.'},
        {term: 'Watson, Crick & Franklin', def: 'Nobel Prize 1962 (Watson & Crick) for the double-helix model built on Franklin’s X-ray diffraction data.'}
      ],
      traps: [
        'The two strands are complementary, not identical — a common slip is to assume both strands carry the same sequence.',
        'Base pairing is specific (A-T, G-C); "A pairs with G" or similar mismatches are not standard Watson-Crick pairing.',
        'G-C pairs form three hydrogen bonds versus two for A-T, making G-C-rich DNA more thermally stable — easy to invert in exam traps.'
      ],
      visual: {type: 'compare', columns: ['Base pair', 'Hydrogen bonds', 'Relative stability'],
        rows: [['A – T', '2', 'Lower melting temperature'], ['G – C', '3', 'Higher melting temperature']]},
      relatedTopicIds: ['rna-central-dogma', 'dna-genome-content']
    },
    {
      id: 'dna-packaging', lectureId: 'dna', title: 'Chromatin packaging & chromosome territories',
      explanation: "A nucleus only ~5–6 µm across must fit roughly two metres of DNA per cell, so DNA is packaged hierarchically. First, DNA wraps around histones to form nucleosomes (“beads on a string”); this fibre zigzags into a more compact chromatin fibre, then folds into irregular and condensed loops, eventually forming the visible, highly condensed chromosomes seen at mitosis. Chromosomes are not scattered randomly inside the nucleus — they occupy probabilistic, non-random radial “territories,” and repositioning regions into proximity can be functionally relevant for gene activity, but can also cause harmful translocations, such as the Philadelphia chromosome (a 9;22 translocation associated with chronic myelogenous leukemia).",
      keyTerms: [
        {term: 'Nucleosome', def: 'DNA wrapped around a histone core — the first level of packaging ("beads on a string").'},
        {term: 'Chromatin', def: 'The DNA-histone complex in its various levels of condensation.'},
        {term: 'Chromosome territory', def: 'The defined, non-random nuclear region a given chromosome occupies.'},
        {term: 'Translocation', def: 'Exchange of segments between chromosomes; can disrupt genes or create fusion genes.'},
        {term: 'Philadelphia chromosome', def: 'A 9;22 translocation causally linked to chronic myelogenous leukemia.'}
      ],
      traps: [
        'Chromosome territories are probabilistic tendencies, not fixed, rigid addresses.',
        'Packaging is hierarchical (nucleosome → zigzag fibre → loops → chromosome) — questions may scramble the order.',
        'Translocations are a packaging/positioning-adjacent risk, not a replication error per se.'
      ],
      visual: {type: 'steps', steps: [
        {title: 'Beads on a string', detail: 'DNA wraps around histone octamers to form nucleosomes.'},
        {title: 'Zigzag chromatin fibre', detail: 'Nucleosomes stack into a more condensed fibre.'},
        {title: 'Irregular loops', detail: 'The fibre folds into uncondensed, irregular loops.'},
        {title: 'Condensed loops/coils', detail: 'Loops further condense toward the mitotic chromosome.'},
        {title: 'Chromosome', detail: 'Fully condensed, visible structure occupying a nuclear territory.'}
      ]},
      relatedTopicIds: ['dna-cellcycle', 'cell-nucleus']
    },
    {
      id: 'dna-cellcycle', lectureId: 'dna', title: 'The cell cycle & mitosis',
      explanation: "Cells pass through a repeating cycle to divide: growth and DNA synthesis phases are followed by mitosis, which is itself subdivided into prophase, anaphase, metaphase, and telophase (commonly ordered as prophase → metaphase → anaphase → telophase). Copying a chromosome faithfully requires three specialized sites: an origin of replication (where copying begins), a centromere (where sister chromatids attach and separate), and telomeres (protective chromosome ends). Checkpoints monitor synthesis, growth, and mitosis so that the cycle only proceeds — or repeats/exits — once each stage has completed correctly.",
      keyTerms: [
        {term: 'Origin of replication', def: 'Specific DNA sequence where replication begins.'},
        {term: 'Centromere', def: 'Site required for sister-chromatid attachment and segregation.'},
        {term: 'Telomere', def: 'Protective structure at chromosome ends.'},
        {term: 'Checkpoint', def: 'Cell-cycle control point ensuring a stage completed correctly before proceeding.'},
        {term: 'Mitosis stages', def: 'Prophase, metaphase, anaphase, telophase.'}
      ],
      traps: [
        'Mitosis order is prophase → metaphase → anaphase → telophase, not alphabetical or random.',
        'The centromere is about sister-chromatid attachment/segregation, not where replication starts (that’s the origin of replication).',
        'Checkpoints can trigger repeat or exit, not just "pass" — a binary pass/fail framing is a simplification trap.'
      ],
      visual: {type: 'steps', steps: [
        {title: 'Prophase', detail: 'Chromatin condenses into visible chromosomes.'},
        {title: 'Metaphase', detail: 'Chromosomes align at the cell equator.'},
        {title: 'Anaphase', detail: 'Sister chromatids separate toward opposite poles.'},
        {title: 'Telophase', detail: 'Nuclear envelopes reform; cell division completes.'}
      ]},
      relatedTopicIds: ['dna-packaging', 'cell-cellcycle']
    },
    {
      id: 'dna-replication', lectureId: 'dna', title: 'Replication mechanism',
      explanation: "Replication proceeds in four phases. In initiation, initiator proteins bind replication origins and recruit helicases, which unwind the double helix and form replication bubbles. In elongation, primase lays down RNA primers so DNA polymerase can extend DNA 5’→3’ — continuously on the leading strand, discontinuously (as Okazaki fragments) on the lagging strand. In termination, replication forks meet, RNA primers are removed and replaced, and DNA ligase seals the remaining nicks. Finally, DNA polymerase proofreads the new strand. Unwinding the helix ahead of the fork creates torsional stress (the “winding problem”), which topoisomerases relieve.",
      keyTerms: [
        {term: 'Helicase', def: 'Unwinds the double helix ahead of the replication fork.'},
        {term: 'Primase', def: 'Synthesizes RNA primers that DNA polymerase extends from.'},
        {term: 'Leading vs lagging strand', def: 'Leading strand synthesized continuously; lagging strand made discontinuously as Okazaki fragments.'},
        {term: 'DNA ligase', def: 'Joins Okazaki fragments after RNA primers are removed and gaps filled.'},
        {term: 'Proofreading', def: 'DNA polymerase’s error-checking activity during/after synthesis.'}
      ],
      traps: [
        'DNA polymerase always synthesizes 5’→3’ — it cannot extend a strand 3’→5’.',
        'Only the lagging strand needs repeated priming and Okazaki fragments; the leading strand is continuous after its single primer.',
        'The "winding problem" is resolved by topoisomerases, not by helicase (which only unwinds, it doesn’t relieve supercoiling).'
      ],
      visual: {type: 'steps', steps: [
        {title: '1. Initiation', detail: 'Initiator proteins bind origins; helicase unwinds DNA, forming replication bubbles.'},
        {title: '2. Elongation', detail: 'Primase adds RNA primers; polymerase extends leading strand continuously, lagging strand discontinuously.'},
        {title: '3. Termination', detail: 'Forks meet; primers are removed and replaced; ligase seals Okazaki fragments.'},
        {title: '4. Proofreading', detail: 'DNA polymerase checks and corrects newly added bases.'}
      ]},
      relatedTopicIds: ['dna-damage-repair', 'dna-pcr']
    },
    {
      id: 'dna-damage-repair', lectureId: 'dna', title: 'Mutation, damage & repair',
      explanation: "DNA is chemically fragile: spontaneous oxidative damage, hydrolytic attack, and methylation continuously erode its primary structure, and replication itself introduces occasional errors that increase genetic variability (sometimes even producing detectable mosaicism — “one brain, many genomes”). Dedicated repair pathways counter this decay; the 2015 Nobel Prize in Chemistry recognized base-excision repair (Lindahl), nucleotide-excision repair of UV/mutagen damage (Sancar), and mismatch repair of replication errors (Modrich), the last of which alone reduces the replication error rate roughly a thousand-fold.",
      keyTerms: [
        {term: 'Oxidative damage', def: 'Chemical damage to DNA bases/backbone from reactive oxygen species.'},
        {term: 'Hydrolytic attack', def: 'Spontaneous chemical bond breakage/base loss from water attack.'},
        {term: 'Base-excision repair', def: 'Removes and replaces damaged single bases (Lindahl, Nobel 2015).'},
        {term: 'Nucleotide-excision repair', def: 'Removes bulky lesions such as UV damage (Sancar, Nobel 2015).'},
        {term: 'Mismatch repair', def: 'Corrects replication errors, cutting the error rate ~1000-fold (Modrich, Nobel 2015).'}
      ],
      traps: [
        'Three different 2015 Nobel laureates map to three different repair pathways — don’t merge them into one mechanism.',
        'Replication errors and spontaneous chemical damage (oxidative/hydrolytic/methylation) are distinct sources of mutation.',
        'Mismatch repair corrects replication errors specifically; it is not the same as repairing UV damage.'
      ],
      visual: {type: 'compare', columns: ['Scientist', 'Repair pathway', 'Targets'],
        rows: [['Tomas Lindahl', 'Base-excision repair', 'Spontaneous base damage/decay'],
               ['Aziz Sancar', 'Nucleotide-excision repair', 'UV and mutagen-induced damage'],
               ['Paul Modrich', 'Mismatch repair', 'Replication errors (~1000x error reduction)']]},
      relatedTopicIds: ['dna-replication', 'genomics-variation']
    },
    {
      id: 'dna-pcr', lectureId: 'dna', title: 'PCR: amplifying DNA in vitro',
      explanation: "The Polymerase Chain Reaction (Kary Mullis, Nobel Prize in Chemistry 1993) exponentially amplifies a target DNA sequence in vitro using repeated cycles of heating and cooling (denaturation, primer annealing around 55–60°C, and extension) with a heat-stable DNA polymerase. Because it borrows the same core chemistry as cellular replication — primers, a polymerase, and template-directed synthesis — PCR turns a natural repair/copying mechanism into a laboratory tool for detection, cloning, and sequencing workflows.",
      keyTerms: [
        {term: 'PCR', def: 'In vitro method to exponentially amplify a specific DNA sequence.'},
        {term: 'Kary Mullis', def: 'Developed PCR; awarded the 1993 Nobel Prize in Chemistry.'},
        {term: 'Annealing temperature', def: 'Roughly 55–60°C, where primers bind template DNA.'},
        {term: 'Heat-stable polymerase', def: 'Withstands repeated high-temperature denaturation steps.'}
      ],
      traps: [
        'PCR amplifies DNA in vitro; it is not itself a sequencing method (though it commonly feeds into sequencing workflows).',
        'PCR reuses replication chemistry (primers + polymerase) but does not require a cell.'
      ],
      visual: {type: 'steps', steps: [
        {title: 'Denaturation', detail: 'Heat separates the double helix into single strands.'},
        {title: 'Annealing', detail: 'Primers bind complementary sequences (~55–60°C).'},
        {title: 'Extension', detail: 'Heat-stable polymerase synthesizes new complementary strands.'},
        {title: 'Repeat', detail: 'Cycles repeat, doubling the target sequence exponentially.'}
      ]},
      relatedTopicIds: ['dna-replication', 'genomics-basics']
    },
    {
      id: 'dna-genome-content', lectureId: 'dna', title: 'Genome content & DNA as information storage',
      explanation: "Only about 1% of the human genome is protein-coding — the rest is regulatory, structural, or of unclear function, and genomes evolve over time as this information accumulates changes across lineages (reflected in our phylogeny). Because DNA is fundamentally just a durable, chemically stable sequence of symbols from a 4-letter alphabet, it can also be read as a general-purpose information medium — an idea explored directly in DNA computing and DNA data storage research as an alternative to conventional electronic storage.",
      keyTerms: [
        {term: 'Protein-coding fraction', def: 'Only ~1% of the human genome directly encodes protein.'},
        {term: 'Phylogeny', def: 'Evolutionary relationships among organisms reflected in genome differences.'},
        {term: 'DNA as a storage medium', def: 'DNA’s 4-letter, chemically stable code can store arbitrary digital information.'}
      ],
      traps: [
        'A small coding fraction does not mean the rest of the genome is "useless" — much of it is regulatory or structural.',
        'DNA data storage repurposes DNA’s stability and information density; it is not the same as the biological function of a genome.'
      ],
      visual: {type: 'facts', items: [
        {label: '~1%', detail: 'of the human genome is protein-coding sequence.'},
        {label: '~99%', detail: 'is non-coding: regulatory elements, structural DNA, and sequence of unclear function.'},
        {label: 'Emerging use', detail: 'DNA’s density and stability motivate its use as a digital data-storage medium.'}
      ]},
      relatedTopicIds: ['genomics-basics']
    }
  ];

  var flashcards = [
    {id: 'dna-structure-f1', topicId: 'dna-structure', front: 'What three components make up a single DNA nucleotide?', back: 'A deoxyribose sugar, a phosphate group, and one of four nitrogenous bases (A, T, C, or G).', tags: ['structure']},
    {id: 'dna-structure-f2', topicId: 'dna-structure', front: 'Which base pairs with which, and via what bond type?', back: 'A pairs with T, G pairs with C, held together by hydrogen bonds between antiparallel strands.', tags: ['structure', 'pairing']},
    {id: 'dna-packaging-f1', topicId: 'dna-packaging', front: 'What is the first level of DNA packaging inside the nucleus?', back: 'The nucleosome: DNA wrapped around a histone core, giving a "beads on a string" appearance.', tags: ['packaging']},
    {id: 'dna-packaging-f2', topicId: 'dna-packaging', front: 'What causes chronic myelogenous leukemia at the chromosome level?', back: 'The Philadelphia chromosome — a translocation between chromosomes 9 and 22.', tags: ['packaging', 'disease']},
    {id: 'dna-cellcycle-f1', topicId: 'dna-cellcycle', front: 'Name the three sites a chromosome needs to be copied and segregated correctly.', back: 'Origin of replication, centromere, and telomeres.', tags: ['cell cycle']},
    {id: 'dna-cellcycle-f2', topicId: 'dna-cellcycle', front: 'Put the mitotic stages in order.', back: 'Prophase → metaphase → anaphase → telophase.', tags: ['cell cycle', 'order']},
    {id: 'dna-replication-f1', topicId: 'dna-replication', front: 'Why is the lagging strand synthesized as Okazaki fragments?', back: 'DNA polymerase only synthesizes 5’→3’, so on the strand running the "wrong way" relative to the fork, synthesis must restart repeatedly from new RNA primers.', tags: ['replication']},
    {id: 'dna-replication-f2', topicId: 'dna-replication', front: 'What enzyme seals the gaps between Okazaki fragments?', back: 'DNA ligase, after RNA primers are removed and the gaps filled.', tags: ['replication']},
    {id: 'dna-damage-repair-f1', topicId: 'dna-damage-repair', front: 'Match Lindahl, Sancar, and Modrich to their repair pathways.', back: 'Lindahl → base-excision repair; Sancar → nucleotide-excision repair (UV damage); Modrich → mismatch repair (replication errors).', tags: ['repair', 'nobel']},
    {id: 'dna-damage-repair-f2', topicId: 'dna-damage-repair', front: 'Name three spontaneous chemical sources of DNA damage.', back: 'Oxidative damage, hydrolytic attack, and methylation.', tags: ['repair']},
    {id: 'dna-pcr-f1', topicId: 'dna-pcr', front: 'What three steps repeat in every PCR cycle?', back: 'Denaturation (heat), annealing (~55–60°C, primers bind), extension (polymerase synthesizes new strand).', tags: ['pcr']},
    {id: 'dna-pcr-f2', topicId: 'dna-pcr', front: 'Who developed PCR and when was it recognized by the Nobel committee?', back: 'Kary Mullis; Nobel Prize in Chemistry, 1993.', tags: ['pcr', 'nobel']},
    {id: 'dna-genome-content-f1', topicId: 'dna-genome-content', front: 'What fraction of the human genome is protein-coding?', back: 'About 1%.', tags: ['genome']},
    {id: 'dna-genome-content-f2', topicId: 'dna-genome-content', front: 'Why is DNA an attractive medium for digital data storage?', back: 'It is a chemically stable, information-dense 4-letter code that can persist far longer than conventional electronic media.', tags: ['genome', 'storage']}
  ];

  var questions = [
    {id: 'dna-structure-q1', topicIds: ['dna-structure'], stem: 'What holds the two strands of the DNA double helix together?',
      options: [
        {text: 'Covalent bonds between backbone phosphates of opposite strands', correct: false, rationale: 'The backbone is held together by covalent phosphodiester bonds within a strand, not between strands.'},
        {text: 'Hydrogen bonds between complementary base pairs', correct: true, rationale: 'Correct — A-T and G-C pairs are held together by hydrogen bonds, allowing the strands to separate and re-pair during replication and transcription.'},
        {text: 'Ionic bonds between sugar rings', correct: false, rationale: 'Sugars are not ionically bonded to each other; the sugar-phosphate backbone is covalent.'},
        {text: 'Van der Waals forces between phosphate groups', correct: false, rationale: 'Phosphate groups are negatively charged and repel each other; they are not the source of strand pairing.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'dna-structure-q2', topicIds: ['dna-structure'], stem: 'Which base pair is more thermally stable, and why?',
      options: [
        {text: 'A-T, because adenine and thymine are larger molecules', correct: false, rationale: 'Size is not the relevant factor here; bond count is.'},
        {text: 'G-C, because it forms three hydrogen bonds versus two for A-T', correct: true, rationale: 'Correct — three hydrogen bonds make G-C pairs harder to separate than the two-bonded A-T pairs.'},
        {text: 'A-T, because it forms three hydrogen bonds versus two for G-C', correct: false, rationale: 'This reverses the actual bond counts — G-C has three bonds, A-T has two.'},
        {text: 'Neither — all base pairs have identical stability', correct: false, rationale: 'Stability differs measurably by hydrogen-bond count and stacking.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'dna-packaging-q1', topicIds: ['dna-packaging'], stem: 'What is the first step in DNA packaging inside the nucleus?',
      options: [
        {text: 'Formation of the mitotic chromosome', correct: false, rationale: 'This is the last, most condensed step, not the first.'},
        {text: 'Wrapping DNA around histones to form nucleosomes', correct: true, rationale: 'Correct — this "beads on a string" arrangement is the first level of packaging.'},
        {text: 'Formation of condensed loops and coils', correct: false, rationale: 'This is a later step, after the zigzag chromatin fibre has formed.'},
        {text: 'Chromosome territory assignment', correct: false, rationale: 'Territory positioning happens at the level of whole condensed chromosomes, not as the first packaging step.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'dna-packaging-q2', topicIds: ['dna-packaging'], stem: 'The Philadelphia chromosome, associated with chronic myelogenous leukemia, results from what event?',
      options: [
        {text: 'A point mutation in a tumor suppressor gene', correct: false, rationale: 'This is a chromosome-level rearrangement, not a single point mutation.'},
        {text: 'A translocation between chromosomes 9 and 22', correct: true, rationale: 'Correct — this reciprocal translocation is a textbook example of how repositioning genome regions can be pathogenic.'},
        {text: 'Loss of an entire chromosome (aneuploidy)', correct: false, rationale: 'This is a translocation, not a numerical chromosome loss.'},
        {text: 'A telomere shortening event', correct: false, rationale: 'Telomere shortening is unrelated to this specific translocation.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'dna-cellcycle-q1', topicIds: ['dna-cellcycle'], stem: 'Which structure is required for sister chromatids to attach and segregate correctly?',
      options: [
        {text: 'Telomere', correct: false, rationale: 'Telomeres protect chromosome ends; they are not the attachment site for segregation machinery.'},
        {text: 'Origin of replication', correct: false, rationale: 'This is where copying begins, not where chromatids attach for segregation.'},
        {text: 'Centromere', correct: true, rationale: 'Correct — the centromere is the site of sister-chromatid attachment and segregation.'},
        {text: 'Nucleosome', correct: false, rationale: 'Nucleosomes are a packaging unit, unrelated to segregation machinery attachment.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'dna-cellcycle-q2', topicIds: ['dna-cellcycle'], stem: 'What is the correct order of mitotic stages?',
      options: [
        {text: 'Metaphase → prophase → telophase → anaphase', correct: false, rationale: 'This scrambles the true order.'},
        {text: 'Prophase → metaphase → anaphase → telophase', correct: true, rationale: 'Correct — chromosomes condense (prophase), align (metaphase), separate (anaphase), then nuclei reform (telophase).'},
        {text: 'Telophase → anaphase → metaphase → prophase', correct: false, rationale: 'This is the reverse of the correct order.'},
        {text: 'Prophase → anaphase → metaphase → telophase', correct: false, rationale: 'Anaphase and metaphase are swapped here.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'dna-replication-q1', topicIds: ['dna-replication'], stem: 'Why does the lagging strand require Okazaki fragments?',
      options: [
        {text: 'Because DNA polymerase can only synthesize 5’→3’, so this strand must be made discontinuously', correct: true, rationale: 'Correct — the lagging strand runs antiparallel to the fork’s direction of travel, forcing repeated priming and short-fragment synthesis.'},
        {text: 'Because the lagging strand has a different chemical composition', correct: false, rationale: 'Both strands are chemically identical DNA; the issue is directionality, not composition.'},
        {text: 'Because helicase only unwinds one strand at a time', correct: false, rationale: 'Helicase unwinds both strands together, forming a replication bubble.'},
        {text: 'Because the lagging strand lacks a sugar-phosphate backbone', correct: false, rationale: 'Both strands have a sugar-phosphate backbone.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'dna-replication-q2', topicIds: ['dna-replication'], stem: 'What resolves the torsional stress ("winding problem") created by unwinding DNA ahead of the replication fork?',
      options: [
        {text: 'DNA ligase', correct: false, rationale: 'Ligase joins fragments; it does not relieve supercoiling.'},
        {text: 'Primase', correct: false, rationale: 'Primase lays down RNA primers; it does not address torsional stress.'},
        {text: 'Topoisomerases', correct: true, rationale: 'Correct — topoisomerases cut and rejoin DNA strands to relieve supercoiling ahead of the fork.'},
        {text: 'DNA polymerase proofreading', correct: false, rationale: 'Proofreading corrects base-pairing errors, not mechanical torsional stress.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'dna-damage-repair-q1', topicIds: ['dna-damage-repair'], stem: 'Which 2015 Nobel laureate’s work explains how replication errors are corrected, reducing the error rate ~1000-fold?',
      options: [
        {text: 'Tomas Lindahl (base-excision repair)', correct: false, rationale: 'Lindahl’s work concerns repair of spontaneous base damage, not replication-error correction specifically.'},
        {text: 'Aziz Sancar (nucleotide-excision repair)', correct: false, rationale: 'Sancar’s work concerns repair of UV/mutagen-induced damage.'},
        {text: 'Paul Modrich (mismatch repair)', correct: true, rationale: 'Correct — Modrich showed how mismatch repair corrects replication errors, cutting the error rate roughly 1000-fold.'},
        {text: 'Kary Mullis (PCR)', correct: false, rationale: 'Mullis’s Nobel (Chemistry 1993) was for developing PCR, an unrelated in vitro amplification method.'}
      ], difficulty: 'hard', topicCheck: false},
    {id: 'dna-damage-repair-q2', topicIds: ['dna-damage-repair'], stem: 'Which of the following is NOT listed as a spontaneous source of DNA damage in this course?',
      options: [
        {text: 'Oxidative damage', correct: false, rationale: 'This is one of the three listed spontaneous damage sources.'},
        {text: 'Hydrolytic attack', correct: false, rationale: 'This is one of the three listed spontaneous damage sources.'},
        {text: 'Methylation', correct: false, rationale: 'This is one of the three listed spontaneous damage sources.'},
        {text: 'Cosmic ray bombardment', correct: true, rationale: 'Correct — this course lists oxidative damage, hydrolytic attack, and methylation as spontaneous damage sources, not cosmic radiation.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'dna-pcr-q1', topicIds: ['dna-pcr'], stem: 'What is the role of the annealing step in a PCR cycle?',
      options: [
        {text: 'Separating the double helix into single strands', correct: false, rationale: 'That is the denaturation step, which uses high heat.'},
        {text: 'Allowing primers to bind their complementary template sequences', correct: true, rationale: 'Correct — annealing (~55–60°C) lets primers hybridize before polymerase extends them.'},
        {text: 'Synthesizing the new complementary strand', correct: false, rationale: 'That is the extension step, carried out by the heat-stable polymerase.'},
        {text: 'Ligating Okazaki fragments', correct: false, rationale: 'PCR does not involve Okazaki fragments or ligation; that is cellular lagging-strand replication.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'dna-pcr-q2', topicIds: ['dna-pcr'], stem: 'PCR is best described as:',
      options: [
        {text: 'An in vitro method to exponentially amplify a specific DNA sequence', correct: true, rationale: 'Correct — repeated denaturation/annealing/extension cycles double the target sequence exponentially.'},
        {text: 'A sequencing technology that reads nucleotide order directly', correct: false, rationale: 'PCR amplifies DNA; it does not by itself read out sequence.'},
        {text: 'A method for repairing DNA damage in living cells', correct: false, rationale: 'PCR is an in vitro amplification technique, not a cellular repair pathway.'},
        {text: 'A technique for packaging DNA into nucleosomes', correct: false, rationale: 'Nucleosome packaging is unrelated to PCR.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'dna-genome-content-q1', topicIds: ['dna-genome-content'], stem: 'Approximately what fraction of the human genome is protein-coding?',
      options: [
        {text: '~1%', correct: true, rationale: 'Correct — only about 1% of the human genome directly encodes protein.'},
        {text: '~25%', correct: false, rationale: 'This overstates the coding fraction considerably.'},
        {text: '~50%', correct: false, rationale: 'Roughly half is far too high for protein-coding sequence.'},
        {text: '~99%', correct: false, rationale: 'This is close to the inverse of the true figure — ~99% is non-coding.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'dna-genome-content-q2', topicIds: ['dna-genome-content'], stem: 'Why is DNA being explored as a digital data-storage medium?',
      options: [
        {text: 'It is a chemically stable, extremely dense 4-symbol code that can persist for very long timescales', correct: true, rationale: 'Correct — these properties make DNA attractive as an alternative, ultra-dense archival medium.'},
        {text: 'It is cheaper to synthesize than to manufacture a hard drive today', correct: false, rationale: 'As of the course material, DNA synthesis/sequencing cost is a limitation, not an advantage, of current DNA storage.'},
        {text: 'It can be read at electronic speeds comparable to RAM', correct: false, rationale: 'DNA read/write speeds are far slower than electronic memory; density and longevity are the appeal, not speed.'},
        {text: 'It naturally uses a binary (2-symbol) code, matching computer architectures', correct: false, rationale: 'DNA uses a 4-letter code (A/T/C/G), not binary; encoding schemes must convert between the two.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'dna-structure-q3', topicIds: ['dna-structure'], stem: 'What sugar forms part of the DNA backbone?',
      options: [
        {text: 'Deoxyribose', correct: true, rationale: 'Correct — DNA’s backbone is built from 2′-deoxyribose; the “D” in DNA stands for deoxyribose.'},
        {text: 'Ribose', correct: false, rationale: 'Ribose is the sugar in RNA — it carries an extra 2′-hydroxyl group that DNA lacks.'},
        {text: 'Glucose', correct: false, rationale: 'Glucose is a metabolic fuel and a building block of polysaccharides, not the nucleic-acid backbone sugar.'},
        {text: 'Sucrose', correct: false, rationale: 'Sucrose is a disaccharide (table sugar), unrelated to the nucleotide backbone.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'dna-structure-q4', topicIds: ['dna-structure'], stem: 'Beyond being the monomers of DNA, nucleotides also serve which cellular role?',
      options: [
        {text: 'Carrying chemical energy, as in ATP', correct: true, rationale: 'Correct — the course stresses that nucleotides have many functions beyond DNA, including energy transfer (ATP) and cell signalling.'},
        {text: 'Forming the catalytic core of every enzyme', correct: false, rationale: 'Most enzymes are proteins; nucleotides are not the general catalytic core of enzymes.'},
        {text: 'Building the fibres of the cytoskeleton', correct: false, rationale: 'The cytoskeleton is made of proteins such as actin and tubulin, not nucleotides.'},
        {text: 'Making up the phospholipid bilayer', correct: false, rationale: 'Membranes are built from lipids; nucleotides are not lipids.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'dna-packaging-q3', topicIds: ['dna-packaging'], stem: 'Which sequence correctly orders DNA packaging from least to most condensed?',
      options: [
        {text: 'Nucleosomes (“beads on a string”) → zigzag chromatin fibre → looped domains → condensed chromosome', correct: true, rationale: 'Correct — packaging is hierarchical, from nucleosomes up to the fully condensed mitotic chromosome.'},
        {text: 'Condensed chromosome → looped domains → zigzag fibre → nucleosomes', correct: false, rationale: 'This is the reverse order — most-condensed to least-condensed.'},
        {text: 'Zigzag fibre → nucleosomes → condensed chromosome → looped domains', correct: false, rationale: 'Nucleosomes form before the zigzag fibre, and loops precede the fully condensed chromosome.'},
        {text: 'Looped domains → nucleosomes → condensed chromosome → zigzag fibre', correct: false, rationale: 'Nucleosomes are the first level of packaging, not looped domains.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'dna-cellcycle-q3', topicIds: ['dna-cellcycle'], stem: 'What is the primary role of telomeres?',
      options: [
        {text: 'To protect the ends of chromosomes', correct: true, rationale: 'Correct — telomeres cap and protect chromosome ends; their erosion is linked to ageing and disease.'},
        {text: 'To attach sister chromatids for segregation', correct: false, rationale: 'That is the centromere’s role, not the telomere’s.'},
        {text: 'To mark where replication begins', correct: false, rationale: 'Replication starts at origins of replication, not at telomeres.'},
        {text: 'To wrap DNA around histone octamers', correct: false, rationale: 'DNA–histone wrapping forms nucleosomes; telomeres are chromosome-end structures.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'dna-cellcycle-q4', topicIds: ['dna-cellcycle'], stem: 'What is the function of cell-cycle checkpoints?',
      options: [
        {text: 'They verify that a stage completed correctly before the cycle proceeds, and can trigger repeat or exit', correct: true, rationale: 'Correct — checkpoints monitor synthesis, growth and mitosis, allowing progression, repeat, or exit rather than a simple pass/fail.'},
        {text: 'They physically pull sister chromatids apart', correct: false, rationale: 'Chromatid separation is carried out by the spindle in anaphase, not by checkpoints.'},
        {text: 'They synthesize the RNA primers needed for replication', correct: false, rationale: 'That is primase’s job during replication, unrelated to checkpoint control.'},
        {text: 'They shorten telomeres at each division', correct: false, rationale: 'Telomere shortening is a consequence of end-replication, not a checkpoint function.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'dna-replication-q3', topicIds: ['dna-replication'], stem: 'What does primase contribute to DNA replication?',
      options: [
        {text: 'It synthesizes short RNA primers that give DNA polymerase a starting point', correct: true, rationale: 'Correct — DNA polymerase cannot start a strand from scratch, so primase lays down RNA primers to extend from (repeatedly on the lagging strand).'},
        {text: 'It unwinds the double helix ahead of the fork', correct: false, rationale: 'Unwinding is done by helicase, not primase.'},
        {text: 'It seals the gaps between Okazaki fragments', correct: false, rationale: 'Sealing nicks between fragments is DNA ligase’s role.'},
        {text: 'It relieves the supercoiling ahead of the fork', correct: false, rationale: 'Relieving torsional stress is the job of topoisomerases.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'dna-damage-repair-q3', topicIds: ['dna-damage-repair'], stem: 'The course slide “one brain – many genomes” points to which phenomenon?',
      options: [
        {text: 'Somatic mutations accumulate so cells within one individual are not all genetically identical', correct: true, rationale: 'Correct — replication errors and DNA damage over a lifetime create somatic mosaicism, so even neurons in one brain can differ genetically.'},
        {text: 'Every person carries genomes from two different species', correct: false, rationale: 'Mosaicism concerns variation among an individual’s own cells, not inter-species genomes.'},
        {text: 'The brain uses RNA instead of DNA as its genome', correct: false, rationale: 'All human somatic cells, neurons included, use DNA as their genome.'},
        {text: 'Each neuron deletes its genome as it matures', correct: false, rationale: 'Neurons retain their genome; they do not discard it.'}
      ], difficulty: 'hard', topicCheck: false},
    {id: 'dna-genome-content-q3', topicIds: ['dna-genome-content'], stem: 'If only ~1% of the human genome codes for protein, what best describes most of the remaining ~99%?',
      options: [
        {text: 'Regulatory and structural sequence, plus sequence of unclear function', correct: true, rationale: 'Correct — the non-coding majority includes gene-regulatory elements and structural DNA; “non-coding” is not the same as “useless”.'},
        {text: 'Entirely non-functional “junk” with no biological role', correct: false, rationale: 'A classic trap — much non-coding DNA is regulatory or structural, so dismissing all of it as junk is wrong.'},
        {text: 'Extra identical copies of every protein-coding gene', correct: false, rationale: 'The non-coding fraction is not simply duplicated coding genes.'},
        {text: 'Sequence that is chemically different from the coding 1%', correct: false, rationale: 'Coding and non-coding DNA share the same chemistry; they differ in function, not chemical make-up.'}
      ], difficulty: 'medium', topicCheck: false}
  ];

  MOLBIO.registerLecture(lecture, topics, flashcards, questions);
})();
