/* Unit 2 — RNA. Source: "03 - RNA" (K. Kobow), Introduction to Molecular Biology. */
(function () {
  var lecture = {
    id: 'rna', title: 'RNA', order: 2,
    source: 'Lecture 03 – RNA (K. Kobow)',
    topicIds: ['rna-central-dogma', 'rna-classes', 'rna-transcription', 'rna-processing',
               'rna-catalysis', 'rna-regulation', 'rna-reverse-transcription']
  };

  var topics = [
    {
      id: 'rna-central-dogma', lectureId: 'rna', title: 'Central dogma & RNA vs DNA',
      explanation: "The classical central dogma describes one-way information flow: DNA → RNA → protein. RNA is a linear polymer like DNA but differs in several key respects — it uses ribose instead of deoxyribose, is usually single-stranded and folds into secondary/tertiary structures rather than a stable double helix, pairs U with A instead of T with A, is chemically less stable, and (in eukaryotes) is mainly found in the cytoplasm rather than the nucleus. Unlike DNA, most RNA is synthesized from a DNA template (transcription) rather than self-replicating, and RNA — not DNA — carries an actual reading frame for translation.",
      keyTerms: [
        {term: 'Central dogma', def: 'DNA → RNA → protein; the classical direction of genetic information flow.'},
        {term: 'Ribose vs deoxyribose', def: 'RNA’s sugar (ribose) has a 2′-OH group that DNA’s deoxyribose lacks.'},
        {term: 'Uracil vs thymine', def: 'RNA uses U where DNA uses T.'},
        {term: 'Single- vs double-stranded', def: 'RNA is typically single-stranded and folds into secondary/tertiary structure; DNA is a double helix.'},
        {term: 'Reading frame', def: 'RNA (specifically mRNA) has a reading frame for translation; DNA does not.'}
      ],
      traps: [
        'RNA is generally less stable than DNA (more prone to hydrolysis), not more — a frequent reversal trap.',
        'DNA is "self-replicating" via its own polymerase; RNA is synthesized from DNA by transcription, it does not typically replicate itself.',
        'Only mRNA is "coding" in the translation sense; many RNA classes are non-coding, unlike DNA where both strands can carry coding information.'
      ],
      visual: {type: 'compare', columns: ['Property', 'DNA', 'RNA'],
        rows: [
          ['Sugar', 'Deoxyribose', 'Ribose'],
          ['Strandedness', 'Double-stranded helix', 'Single-stranded, folds into structure'],
          ['Bases', 'A, T, G, C', 'A, U, G, C'],
          ['Stability', 'More stable', 'Less stable (hydrolysis-prone)'],
          ['Location (eukaryotes)', 'Mostly nucleus', 'Mainly cytoplasm (translation)'],
          ['Reading frame', 'No', 'Yes'],
          ['Synthesis enzyme', 'DNA polymerase', 'RNA polymerase'],
          ['Replication', 'Self-replicating', 'Synthesized from DNA (transcription)']
        ]},
      relatedTopicIds: ['dna-structure', 'rna-classes']
    },
    {
      id: 'rna-classes', lectureId: 'rna', title: 'RNA classes & non-coding RNA',
      explanation: "The human genome has roughly 20,000 protein-coding genes but around 25,000 genes whose final product is a non-coding RNA — so most genes, by count, do not encode protein. Beyond messenger RNA (mRNA, the coding class translated into protein), major classes include ribosomal RNA (rRNA, ~80% of cellular RNA, structural and catalytic core of ribosomes), transfer RNA (tRNA, adaptors that deliver amino acids during translation), microRNA (miRNA, gene-silencing regulators), and long non-coding RNA (lncRNA, >200 nt regulatory transcripts). Genes are also read with different efficiencies, so the presence of a gene does not guarantee uniform expression.",
      keyTerms: [
        {term: 'mRNA', def: 'Messenger RNA; the coding class translated into protein.'},
        {term: 'rRNA', def: 'Ribosomal RNA; ~80% of cellular RNA; catalytic core of the ribosome.'},
        {term: 'tRNA', def: 'Transfer RNA; adaptor molecule delivering amino acids during translation.'},
        {term: 'miRNA', def: 'MicroRNA (~22 nt); silences genes, often one-to-many and many-to-one.'},
        {term: 'lncRNA', def: 'Long non-coding RNA (>200 nt); scaffold, decoy, guide, or enhancer functions.'}
      ],
      traps: [
        'More human genes produce non-coding RNA as their final product than produce protein — a frequently underestimated fact.',
        'rRNA, not mRNA, makes up the bulk (~80%) of total cellular RNA — mRNA is a small fraction (~3–5%).',
        'miRNA relationships are not strictly one gene silences one target; the same miRNA can target many mRNAs and vice versa.'
      ],
      visual: {type: 'facts', items: [
        {label: '~20,000', detail: 'protein-coding genes in the human genome.'},
        {label: '~25,000', detail: 'genes whose ultimate product is a non-coding RNA.'},
        {label: '~80–90%', detail: 'of cellular RNA is rRNA; mRNA is only ~3–5%.'}
      ]},
      relatedTopicIds: ['rna-catalysis', 'rna-regulation']
    },
    {
      id: 'rna-transcription', lectureId: 'rna', title: 'Transcription mechanism',
      explanation: "Eukaryotic transcription by RNA polymerase II proceeds through initiation (Pol II is recruited to a promoter, DNA melts to expose the template strand, and the first nucleotides are synthesized), elongation (a full RNA-DNA hybrid forms and Pol II extends the transcript), and termination (Pol II and the nascent RNA are released). As with replication, translocating RNA polymerase creates torsional stress ahead of and behind it; topoisomerase I (ATP-independent, single-strand break) and topoisomerase II (ATP-dependent, double-strand break) relieve this tension. Compared to DNA polymerase, RNA polymerase does not need a primer, has only limited proofreading, and tolerates a substantially higher error rate because its products are transient rather than permanent genetic material.",
      keyTerms: [
        {term: 'RNA polymerase II', def: 'Synthesizes most protein-coding (mRNA) transcripts in eukaryotes.'},
        {term: 'Promoter', def: 'DNA sequence where Pol II is recruited to begin transcription.'},
        {term: 'Topoisomerase I vs II', def: 'Topo I: ATP-independent, single-strand break; Topo II: ATP-dependent, double-strand break.'},
        {term: 'No primer needed', def: 'Unlike DNA polymerase, RNA polymerase initiates synthesis de novo.'},
        {term: 'Error rate', def: 'RNA polymerase: ~1 error per 10⁴ nt; DNA polymerase: ~1 error per 10⁷ nt.'}
      ],
      traps: [
        'RNA polymerase does NOT require a primer — this is a key contrast with DNA polymerase, which does.',
        'Topoisomerase I cuts one strand and needs no ATP; topoisomerase II cuts both strands and requires ATP — these are easy to swap.',
        'RNA polymerase’s higher error rate is tolerated because RNA is transient, not because it lacks importance.'
      ],
      visual: {type: 'compare', columns: ['Feature', 'DNA polymerase', 'RNA polymerase'],
        rows: [
          ['Substrate', 'dNTPs', 'NTPs'],
          ['Primer required?', 'Yes', 'No (de novo initiation)'],
          ['Proofreading', "3'→5' exonuclease", 'Limited (backtracking/excision)'],
          ['Error rate', '~1 per 10⁷ nt', '~1 per 10⁴ nt'],
          ['Function', 'Replication', 'Transcription']
        ]},
      relatedTopicIds: ['rna-processing', 'dna-replication']
    },
    {
      id: 'rna-processing', lectureId: 'rna', title: 'RNA processing: capping, tailing & splicing',
      explanation: "Newly made eukaryotic mRNA is quality-checked and matured before export and translation: a 7-methylguanosine cap is added at the 5′ end (marking it as mRNA and enabling export/translation), and a poly-A tail is added at the 3′ end. Introns are removed and exons joined by the spliceosome, and alternative splicing — which affects roughly 95% of human genes — lets a single gene produce multiple tissue-specific transcript isoforms, tightly linking transcription to processing.",
      keyTerms: [
        {term: '5′ cap', def: '7-methylguanosine cap added to the 5′ end of eukaryotic mRNA.'},
        {term: 'Poly-A tail', def: 'Chain of adenine nucleotides added to the mRNA 3′ end.'},
        {term: 'Splicing', def: 'Removal of introns and joining of exons by the spliceosome.'},
        {term: 'Alternative splicing', def: 'Differential exon inclusion producing multiple isoforms from one gene; affects ~95% of genes.'}
      ],
      traps: [
        'The cap is added at the 5′ end and the poly-A tail at the 3′ end — reversing these is a common mix-up.',
        'Alternative splicing affects the vast majority (~95%) of human genes, not a rare minority.',
        'Splicing is not merely "cleanup" — it actively generates transcript diversity across tissues.'
      ],
      visual: {type: 'steps', steps: [
        {title: '5′ capping', detail: 'A 7-methylguanosine cap marks the transcript as mRNA.'},
        {title: 'Splicing', detail: 'Spliceosome removes introns, joins exons; alternative splicing yields isoforms.'},
        {title: '3′ polyadenylation', detail: 'A poly-A tail is added, supporting stability/export.'},
        {title: 'Export & translation', detail: 'Mature mRNA leaves the nucleus for ribosomal translation.'}
      ]},
      relatedTopicIds: ['rna-transcription', 'transcriptomics-splicing']
    },
    {
      id: 'rna-catalysis', lectureId: 'rna', title: 'Ribozymes & the RNA world hypothesis',
      explanation: "The 1989 Nobel Prize in Chemistry recognized that RNA, not just protein, can be catalytic — a ribozyme. Concretely: the spliceosome’s snRNAs catalyze splicing; self-splicing group I/II introns catalyze their own excision without any protein; the large ribosomal subunit’s rRNA (not a protein) performs peptidyl transfer during translation, making the ribosome itself a ribozyme; and RNase P uses an RNA moiety to cleave precursor tRNA. These findings support the RNA world hypothesis (Crick, 1968) — that early life used RNA as both hereditary material and catalyst — though RNA was likely superseded by DNA as the genetic material because its reactive 2′-OH group promotes spontaneous degradation, and cytosine's tendency to deaminate to uracil is especially problematic when C and U are both part of the normal genetic alphabet.",
      keyTerms: [
        {term: 'Ribozyme', def: 'RNA molecule with catalytic (enzyme-like) activity.'},
        {term: 'Spliceosome', def: 'RNP complex whose snRNAs catalyze intron removal.'},
        {term: 'Self-splicing introns', def: 'Group I/II introns that catalyze their own excision, no protein required.'},
        {term: 'Ribosome as ribozyme', def: 'Peptidyl transferase activity resides in rRNA, not ribosomal proteins.'},
        {term: 'RNA world hypothesis', def: 'Proposal that early life used RNA as both genetic material and catalyst.'}
      ],
      traps: [
        'Transcription itself is NOT a ribozyme-catalyzed process — it is catalyzed by RNA polymerase, a protein enzyme.',
        'The ribosome’s catalytic activity resides in its rRNA, not in ribosomal proteins — a frequently inverted fact.',
        'RNA’s 2′-OH group (absent in DNA) is exactly what makes RNA more chemically reactive and less stable.'
      ],
      visual: {type: 'compare', columns: ['Process', 'Ribozyme activity?', 'Detail'],
        rows: [
          ['Transcription', 'No', 'Catalyzed by RNA polymerase, a protein.'],
          ['Splicing', 'Yes', 'snRNAs of the spliceosome catalyze the reaction.'],
          ['Self-splicing introns', 'Yes', 'Autocatalytic, no protein required.'],
          ['Translation', 'Yes', 'rRNA performs peptidyl transfer in the ribosome.'],
          ['tRNA processing (RNase P)', 'Yes', 'RNA moiety catalyzes precursor tRNA cleavage.']
        ]},
      relatedTopicIds: ['rna-classes', 'rna-reverse-transcription']
    },
    {
      id: 'rna-regulation', lectureId: 'rna', title: 'Regulation: epigenetics, miRNA & lncRNA',
      explanation: "Beyond transcription factors, cells regulate gene expression epigenetically — through active, reversible mechanisms (proteins that write, read, and erase chemical marks) that create a kind of molecular memory without changing the underlying DNA sequence, and which can be modulated by metabolites acting as cofactors for epigenetic enzymes. Non-coding RNAs contribute directly: microRNAs (miRNA) silence genes post-transcriptionally in one-to-many/many-to-one relationships, while long non-coding RNAs (lncRNA) act as scaffolds (recruiting proteins), decoys (competing for binding), guides (directing transcription factors to specific loci), or enhancers of gene expression, and are involved in processes such as X-inactivation and cell-identity maintenance.",
      keyTerms: [
        {term: 'Epigenetics', def: 'Reversible regulation of gene expression without changing DNA sequence; a form of molecular memory.'},
        {term: 'miRNA silencing', def: 'microRNAs degrade or block translation of target mRNAs.'},
        {term: 'lncRNA roles', def: 'Scaffold, decoy, guide, and enhancer functions in gene regulation.'},
        {term: 'Metabolite cofactors', def: 'Small metabolites can serve as essential cofactors for epigenetic enzymes.'}
      ],
      traps: [
        'Epigenetic marks are reversible and dynamic, not permanent changes to the DNA sequence.',
        'lncRNAs have several distinct mechanistic roles (scaffold/decoy/guide/enhancer) — treating them as one uniform mechanism is a trap.',
        'miRNA regulation is not strictly 1:1 — a single miRNA can regulate many mRNAs, and one mRNA can be targeted by multiple miRNAs.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Scaffold', detail: 'lncRNA recruits proteins to a location.'},
        {label: 'Decoy', detail: 'lncRNA competes with other molecules for binding.'},
        {label: 'Guide', detail: 'lncRNA directs transcription factors to specific genomic loci.'},
        {label: 'Enhancer', detail: 'lncRNA supports activation of nearby gene expression.'}
      ]},
      relatedTopicIds: ['rna-classes', 'proteins-regulation']
    },
    {
      id: 'rna-reverse-transcription', lectureId: 'rna', title: 'Reverse transcription & challenges to the dogma',
      explanation: "Reverse transcription synthesizes DNA from an RNA template, reversing the “classical” direction of the central dogma. It occurs naturally in several contexts: retroviruses reverse-transcribe their RNA genome for integration into the host genome; retrotransposons ('jumping genes') use an RNA intermediate to insert new DNA copies elsewhere in the genome; and telomerase (TERT) uses an internal RNA template to elongate and maintain eukaryotic chromosome ends. More recently, an unusual bacterial defense system was found to use its own amino acids (not just nucleotides) as a template for DNA synthesis, further complicating a strictly one-directional view of genetic information flow.",
      keyTerms: [
        {term: 'Reverse transcription', def: 'Synthesis of DNA from an RNA template.'},
        {term: 'Retrovirus', def: 'Virus that reverse-transcribes its RNA genome for host genome integration.'},
        {term: 'Retrotransposon', def: '"Jumping gene" that reverse-transcribes an RNA intermediate to insert new DNA copies.'},
        {term: 'Telomerase (TERT)', def: 'Uses an RNA template to elongate and maintain telomeres.'}
      ],
      traps: [
        'Reverse transcription is a normal part of several natural processes (retroviruses, retrotransposons, telomerase) — it is not solely a laboratory artifact.',
        'Telomerase carries its own RNA template internally; it does not simply reuse an mRNA transcript.',
        'The strict, one-directional "DNA → RNA → protein" dogma is now understood as an oversimplification, not an absolute law.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Retrovirus', detail: 'RNA genome → reverse-transcribed → integrated into host DNA.'},
        {label: 'Retrotransposon', detail: 'RNA intermediate → reverse-transcribed → inserted elsewhere in genome ("jumping gene").'},
        {label: 'Telomerase (TERT)', detail: 'Uses its own RNA template to extend chromosome ends.'}
      ]},
      relatedTopicIds: ['rna-catalysis', 'dna-packaging']
    }
  ];

  var flashcards = [
    {id: 'rna-central-dogma-f1', topicId: 'rna-central-dogma', front: 'Name three chemical/structural differences between RNA and DNA.', back: 'RNA uses ribose (not deoxyribose), uracil (not thymine), and is typically single-stranded (not a double helix).', tags: ['rna-vs-dna']},
    {id: 'rna-central-dogma-f2', topicId: 'rna-central-dogma', front: 'Which molecule is generally less stable, RNA or DNA — and why does it matter for genetic storage?', back: 'RNA is less stable (more prone to hydrolysis), one reason DNA rather than RNA serves as the primary long-term genetic store.', tags: ['rna-vs-dna']},
    {id: 'rna-classes-f1', topicId: 'rna-classes', front: 'Roughly what fraction of cellular RNA is rRNA?', back: 'About 80–90% of cellular RNA is rRNA.', tags: ['rna-classes']},
    {id: 'rna-classes-f2', topicId: 'rna-classes', front: 'Do more human genes encode protein or non-coding RNA as their final product?', back: 'Non-coding RNA — roughly 25,000 genes vs ~20,000 protein-coding genes.', tags: ['rna-classes']},
    {id: 'rna-transcription-f1', topicId: 'rna-transcription', front: 'Does RNA polymerase require a primer to start synthesis?', back: 'No — unlike DNA polymerase, RNA polymerase initiates transcription de novo, without a primer.', tags: ['transcription']},
    {id: 'rna-transcription-f2', topicId: 'rna-transcription', front: 'Which topoisomerase requires ATP and makes double-strand breaks?', back: 'Topoisomerase II (Topo I is ATP-independent and makes single-strand breaks).', tags: ['transcription']},
    {id: 'rna-processing-f1', topicId: 'rna-processing', front: 'What modifications mark the 5′ and 3′ ends of a mature eukaryotic mRNA?', back: '5′: 7-methylguanosine cap. 3′: poly-A tail.', tags: ['processing']},
    {id: 'rna-processing-f2', topicId: 'rna-processing', front: 'What fraction of human genes undergo alternative splicing?', back: 'About 95%.', tags: ['processing']},
    {id: 'rna-catalysis-f1', topicId: 'rna-catalysis', front: 'What makes the ribosome a "ribozyme"?', back: 'Its peptidyl transferase activity — the actual catalysis of peptide bond formation — is performed by rRNA, not by ribosomal proteins.', tags: ['ribozyme']},
    {id: 'rna-catalysis-f2', topicId: 'rna-catalysis', front: 'Why might RNA have been abandoned as the primary genetic material over evolutionary time?', back: 'Its reactive 2′-OH group causes spontaneous degradation, and cytosine can deaminate to uracil, which is especially error-prone since U is also a normal RNA base.', tags: ['rna world']},
    {id: 'rna-regulation-f1', topicId: 'rna-regulation', front: 'List the four functional roles of lncRNAs discussed in this course.', back: 'Scaffold, decoy, guide, and enhancer.', tags: ['regulation']},
    {id: 'rna-regulation-f2', topicId: 'rna-regulation', front: 'Is epigenetic regulation typically reversible or permanent?', back: 'Reversible — epigenetic marks are dynamically written, read, and erased in response to cues.', tags: ['epigenetics']},
    {id: 'rna-reverse-transcription-f1', topicId: 'rna-reverse-transcription', front: 'Name three natural contexts where reverse transcription occurs.', back: 'Retroviral genome integration, retrotransposon ("jumping gene") insertion, and telomerase-mediated telomere maintenance.', tags: ['reverse transcription']},
    {id: 'rna-reverse-transcription-f2', topicId: 'rna-reverse-transcription', front: 'What RNA does telomerase use to extend chromosome ends?', back: 'Its own internal RNA template (as part of the TERT complex), not an external mRNA.', tags: ['reverse transcription']}
  ];

  var questions = [
    {id: 'rna-central-dogma-q1', topicIds: ['rna-central-dogma'], stem: 'Which statement correctly contrasts RNA and DNA?',
      options: [
        {text: 'RNA is more chemically stable than DNA', correct: false, rationale: 'This reverses the truth — RNA is generally less stable, more prone to hydrolysis.'},
        {text: 'RNA typically has a reading frame; DNA does not', correct: true, rationale: 'Correct — mRNA carries the reading frame used for translation; DNA itself is not "read" via a reading frame.'},
        {text: 'DNA uses uracil where RNA uses thymine', correct: false, rationale: 'This is backwards: DNA uses thymine, RNA uses uracil.'},
        {text: 'DNA is synthesized from RNA by transcription', correct: false, rationale: 'Transcription synthesizes RNA from a DNA template, not the reverse (that would be reverse transcription).'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'rna-central-dogma-q2', topicIds: ['rna-central-dogma'], stem: 'In eukaryotes, where is RNA mainly found and functioning (for translation)?',
      options: [
        {text: 'Mostly in the nucleus', correct: false, rationale: 'This describes DNA’s typical location, not RNA’s functional location for translation.'},
        {text: 'Mainly in the cytoplasm', correct: true, rationale: 'Correct — mRNA is exported to the cytoplasm where ribosomes translate it.'},
        {text: 'Exclusively in the mitochondria', correct: false, rationale: 'While mitochondria have their own RNA, most cellular RNA function is cytoplasmic, not exclusively mitochondrial.'},
        {text: 'Equally split between nucleus and cytoplasm at all times', correct: false, rationale: 'RNA is predominantly cytoplasmic for translation, not evenly split.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'rna-classes-q1', topicIds: ['rna-classes'], stem: 'Which RNA class makes up the largest share of total cellular RNA?',
      options: [
        {text: 'mRNA', correct: false, rationale: 'mRNA is only about 3–5% of cellular RNA, despite being the "coding" class.'},
        {text: 'tRNA', correct: false, rationale: 'tRNA is present but is not the majority share.'},
        {text: 'rRNA', correct: true, rationale: 'Correct — rRNA makes up roughly 80–90% of cellular RNA.'},
        {text: 'miRNA', correct: false, rationale: 'miRNAs are short regulatory RNAs, a small fraction of total cellular RNA.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'rna-classes-q2', topicIds: ['rna-classes'], stem: 'How many human genes approximately produce a non-coding RNA as their final product, compared to protein-coding genes?',
      options: [
        {text: 'About 5,000 vs 20,000 protein-coding genes', correct: false, rationale: 'This understates the non-coding gene count.'},
        {text: 'About 25,000 vs ~20,000 protein-coding genes', correct: true, rationale: 'Correct — non-coding-RNA-producing genes slightly outnumber protein-coding genes.'},
        {text: 'Essentially zero — nearly all genes are protein-coding', correct: false, rationale: 'This substantially understates non-coding RNA gene output.'},
        {text: 'About 100,000 vs ~20,000 protein-coding genes', correct: false, rationale: 'This overstates the non-coding gene count.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'rna-transcription-q1', topicIds: ['rna-transcription'], stem: 'Which of the following is true of RNA polymerase compared to DNA polymerase?',
      options: [
        {text: 'It requires a primer to begin synthesis', correct: false, rationale: 'This is true of DNA polymerase, not RNA polymerase.'},
        {text: 'It has a much lower error rate', correct: false, rationale: 'RNA polymerase actually has a higher error rate (~1/10⁴ nt) than DNA polymerase (~1/10⁷ nt).'},
        {text: 'It can initiate RNA synthesis de novo, without a primer', correct: true, rationale: 'Correct — this is a defining functional difference from DNA polymerase.'},
        {text: 'It uses deoxyribonucleotides as substrate', correct: false, rationale: 'RNA polymerase uses ribonucleotides (NTPs), not deoxyribonucleotides (dNTPs).'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'rna-transcription-q2', topicIds: ['rna-transcription'], stem: 'Which topoisomerase makes transient single-strand breaks and does not require ATP?',
      options: [
        {text: 'Topoisomerase I', correct: true, rationale: 'Correct — Topo I nicks one strand, relieves supercoiling by allowing rotation, and needs no ATP.'},
        {text: 'Topoisomerase II', correct: false, rationale: 'Topo II makes double-strand breaks and requires ATP.'},
        {text: 'DNA ligase', correct: false, rationale: 'Ligase seals nicks/gaps; it does not relieve supercoiling.'},
        {text: 'Helicase', correct: false, rationale: 'Helicase unwinds the double helix; it does not resolve torsional stress by strand-cutting.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'rna-processing-q1', topicIds: ['rna-processing'], stem: 'What structure distinguishes mature mRNA from other RNA types and helps mark it for export/translation?',
      options: [
        {text: 'A 3′ hydroxyl group', correct: false, rationale: 'This is a generic feature of RNA/DNA chemistry, not a distinguishing mRNA mark.'},
        {text: 'A 7-methylguanosine 5′ cap', correct: true, rationale: 'Correct — this cap signals that a transcript is mature eukaryotic mRNA.'},
        {text: 'A phosphodiester backbone', correct: false, rationale: 'All nucleic acids share this backbone chemistry; it does not distinguish mRNA specifically.'},
        {text: 'A 3′ hydroxyl-only tail with no modification', correct: false, rationale: 'Mature mRNA typically carries a poly-A tail, not an unmodified 3′ end.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'rna-processing-q2', topicIds: ['rna-processing'], stem: 'Roughly what percentage of human genes undergo alternative splicing?',
      options: [
        {text: 'About 5%', correct: false, rationale: 'This drastically understates how common alternative splicing is.'},
        {text: 'About 50%', correct: false, rationale: 'Still an underestimate — the true figure is much higher.'},
        {text: 'About 95%', correct: true, rationale: 'Correct — alternative splicing affects roughly 95% of human genes, generating widespread isoform diversity.'},
        {text: 'Essentially 0% — splicing is invariant per gene', correct: false, rationale: 'This is the opposite of what the data show; splicing is highly variable.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'rna-catalysis-q1', topicIds: ['rna-catalysis'], stem: 'Which process is NOT catalyzed by RNA (i.e., has no ribozyme activity)?',
      options: [
        {text: 'Splicing via the spliceosome', correct: false, rationale: 'snRNAs catalyze this reaction — it is ribozyme-driven.'},
        {text: 'Peptide bond formation in the ribosome', correct: false, rationale: 'rRNA (peptidyl transferase activity) catalyzes this — it is ribozyme-driven.'},
        {text: 'Transcription by RNA polymerase', correct: true, rationale: 'Correct — transcription is catalyzed by RNA polymerase, a protein enzyme, not by RNA itself.'},
        {text: 'Precursor tRNA cleavage by RNase P', correct: false, rationale: 'RNase P’s RNA moiety catalyzes this cleavage — it is ribozyme-driven.'}
      ], difficulty: 'hard', topicCheck: false},
    {id: 'rna-catalysis-q2', topicIds: ['rna-catalysis'], stem: 'What chemical feature makes RNA more prone to spontaneous degradation than DNA?',
      options: [
        {text: 'Its use of thymine instead of uracil', correct: false, rationale: 'RNA uses uracil, not thymine — and this is not the source of RNA’s instability.'},
        {text: 'Its reactive 2′-hydroxyl group on the ribose sugar', correct: true, rationale: 'Correct — the 2′-OH group (absent in deoxyribose) promotes spontaneous autocleavage.'},
        {text: 'Its double-stranded helical structure', correct: false, rationale: 'RNA is typically single-stranded, and this is not the described stability issue.'},
        {text: 'Its lack of a phosphate backbone', correct: false, rationale: 'RNA does have a phosphate backbone, like DNA.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'rna-regulation-q1', topicIds: ['rna-regulation'], stem: 'A lncRNA that recruits chromatin-modifying proteins to a specific locus is acting as a:',
      options: [
        {text: 'Decoy', correct: false, rationale: 'A decoy competes for binding rather than recruiting proteins to a locus.'},
        {text: 'Scaffold', correct: true, rationale: 'Correct — scaffold lncRNAs recruit and organize proteins at a location.'},
        {text: 'Guide only, with no protein recruitment', correct: false, rationale: 'Guides direct transcription factors to loci but the described recruiting role is specifically scaffolding.'},
        {text: 'mRNA', correct: false, rationale: 'mRNA is coding and translated; this describes a regulatory ncRNA function instead.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'rna-regulation-q2', topicIds: ['rna-regulation'], stem: 'Which best describes epigenetic regulation?',
      options: [
        {text: 'Permanent changes to the DNA sequence itself', correct: false, rationale: 'Epigenetic changes do not alter the underlying DNA sequence.'},
        {text: 'Reversible, actively maintained marks that modulate gene expression without changing DNA sequence', correct: true, rationale: 'Correct — proteins actively write, read, and erase these marks in response to cues.'},
        {text: 'A one-time event that cannot be undone once established', correct: false, rationale: 'Epigenetic marks are explicitly described as reversible/flexible.'},
        {text: 'Exclusively mediated by miRNA', correct: false, rationale: 'Epigenetics includes DNA methylation, histone marks, chromatin remodeling, and ncRNA — not just miRNA.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'rna-reverse-transcription-q1', topicIds: ['rna-reverse-transcription'], stem: 'Telomerase maintains chromosome ends by:',
      options: [
        {text: 'Using DNA polymerase to copy the lagging strand normally', correct: false, rationale: 'Ordinary lagging-strand synthesis cannot fully replicate chromosome ends — that is precisely the problem telomerase solves.'},
        {text: 'Using its own internal RNA template to reverse-transcribe new telomeric DNA', correct: true, rationale: 'Correct — telomerase (TERT) carries an RNA template to extend chromosome ends.'},
        {text: 'Splicing out damaged telomeric introns', correct: false, rationale: 'Telomeres are not defined by introns; this describes splicing, an unrelated process.'},
        {text: 'Recruiting topoisomerase II to cut chromosome ends', correct: false, rationale: 'This is unrelated to telomerase’s reverse-transcription mechanism.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'rna-reverse-transcription-q2', topicIds: ['rna-reverse-transcription'], stem: 'Which of these is an example of reverse transcription occurring naturally?',
      options: [
        {text: 'A retrovirus converting its RNA genome into DNA for host integration', correct: true, rationale: 'Correct — this is a textbook natural example of reverse transcription.'},
        {text: 'RNA polymerase II transcribing a gene into pre-mRNA', correct: false, rationale: 'This is ordinary transcription (DNA → RNA), the opposite direction.'},
        {text: 'A ribosome translating mRNA into protein', correct: false, rationale: 'Translation is RNA → protein, unrelated to reverse transcription.'},
        {text: 'DNA polymerase proofreading a newly replicated strand', correct: false, rationale: 'This is standard DNA replication proofreading, not reverse transcription.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'rna-central-dogma-q3', topicIds: ['rna-central-dogma'], stem: 'In the classical central dogma, information flows in which direction?',
      options: [
        {text: 'DNA → RNA → protein', correct: true, rationale: 'Correct — the central dogma describes DNA being transcribed to RNA, which is translated into protein.'},
        {text: 'Protein → RNA → DNA', correct: false, rationale: 'This reverses the flow; proteins are the end product, not the template.'},
        {text: 'RNA → DNA → protein', correct: false, rationale: 'Reverse transcription (RNA → DNA) exists as an exception, but the classical dogma starts from DNA.'},
        {text: 'DNA → protein → RNA', correct: false, rationale: 'Protein is not an intermediate for making RNA; RNA is transcribed directly from DNA.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'rna-transcription-q3', topicIds: ['rna-transcription'], stem: 'How many distinct RNA polymerases do eukaryotes use, and what does each mainly transcribe?',
      options: [
        {text: 'Three: Pol I and Pol III make rRNA and tRNA, Pol II makes most protein-coding (mRNA) transcripts', correct: true, rationale: 'Correct — eukaryotes have three nuclear RNA polymerases with divided labour; Pol II handles most protein-coding genes.'},
        {text: 'One polymerase that transcribes all genes', correct: false, rationale: 'A single RNA polymerase is the bacterial arrangement; eukaryotes use three.'},
        {text: 'Two: one for coding genes and one for all non-coding RNA', correct: false, rationale: 'There are three, not two, and the division is not a simple coding/non-coding split.'},
        {text: 'Three, but Pol II makes rRNA and Pol I makes mRNA', correct: false, rationale: 'This swaps their roles — Pol II makes mRNA, while Pol I makes rRNA.'}
      ], difficulty: 'hard', topicCheck: false},
    {id: 'rna-transcription-q4', topicIds: ['rna-transcription'], stem: 'How does Topoisomerase II differ from Topoisomerase I when relieving transcription-induced supercoiling?',
      options: [
        {text: 'Topo II makes double-strand breaks and requires ATP; Topo I makes single-strand breaks without ATP', correct: true, rationale: 'Correct — Topo II passes one duplex through a double-strand break (ATP-dependent), whereas Topo I nicks a single strand and needs no ATP.'},
        {text: 'Topo II makes single-strand breaks; Topo I makes double-strand breaks', correct: false, rationale: 'This reverses the two enzymes — Topo I is the single-strand nicking one.'},
        {text: 'Both are ATP-independent and interchangeable', correct: false, rationale: 'Topo II specifically requires ATP, so they are not interchangeable.'},
        {text: 'Topo II synthesizes RNA while Topo I unwinds DNA', correct: false, rationale: 'Neither topoisomerase synthesizes RNA; both relieve torsional stress in DNA.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'rna-processing-q3', topicIds: ['rna-processing'], stem: 'What is added to the 3′ end of a eukaryotic mRNA during processing?',
      options: [
        {text: 'A poly-A tail', correct: true, rationale: 'Correct — 3′ polyadenylation adds a poly-A tail that aids stability, export and translation.'},
        {text: 'A 7-methylguanosine cap', correct: false, rationale: 'The 7-methylguanosine cap is added to the 5′ end, not the 3′ end.'},
        {text: 'An intron', correct: false, rationale: 'Introns are removed by splicing, not added at the 3′ end.'},
        {text: 'A ribosome', correct: false, rationale: 'Ribosomes translate mRNA later; they are not appended to the transcript during processing.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'rna-catalysis-q3', topicIds: ['rna-catalysis'], stem: 'Why is the ribosome considered a ribozyme?',
      options: [
        {text: 'Its peptidyl-transferase (peptide-bond-forming) activity is carried out by rRNA, not protein', correct: true, rationale: 'Correct — the catalytic peptidyl-transferase centre in the large subunit is made of rRNA, so the ribosome is an RNA enzyme.'},
        {text: 'It is built entirely of protein with no RNA', correct: false, rationale: 'That would make it a protein enzyme; ribosomes are ~60% RNA and the RNA does the catalysis.'},
        {text: 'It copies DNA into RNA', correct: false, rationale: 'Copying DNA into RNA is transcription by RNA polymerase, not what the ribosome does.'},
        {text: 'It uses DNA to catalyze peptide bonds', correct: false, rationale: 'The ribosome contains rRNA, not DNA, and rRNA performs the catalysis.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'rna-catalysis-q4', topicIds: ['rna-catalysis'], stem: 'What property of RNA makes the "RNA world" hypothesis plausible?',
      options: [
        {text: 'RNA can both store genetic information and catalyze chemical reactions', correct: true, rationale: 'Correct — because RNA is both an information carrier and a catalyst (ribozyme), it could in principle support early life on its own.'},
        {text: 'RNA is chemically more stable than DNA', correct: false, rationale: 'RNA is actually less stable than DNA; stability is not the basis of the hypothesis.'},
        {text: 'RNA can only be made by proteins', correct: false, rationale: 'The hypothesis proposes RNA acting before dedicated protein enzymes existed, not depending on them.'},
        {text: 'RNA cannot fold into three-dimensional shapes', correct: false, rationale: 'The opposite is true — RNA’s ability to fold into 3-D structures is what enables its catalytic activity.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'rna-regulation-q3', topicIds: ['rna-regulation'], stem: 'How do microRNAs (miRNAs) typically regulate gene expression?',
      options: [
        {text: 'They base-pair with target mRNAs to silence them, and one miRNA can regulate many targets', correct: true, rationale: 'Correct — miRNAs guide silencing of complementary mRNAs in a “one-to-many, many-to-one” regulatory web.'},
        {text: 'They add methyl groups directly to DNA', correct: false, rationale: 'DNA methylation is done by DNA methyltransferases, not by miRNAs.'},
        {text: 'They are translated into small regulatory proteins', correct: false, rationale: 'miRNAs are non-coding; they act as RNA, not as proteins.'},
        {text: 'They replace the ribosome during translation', correct: false, rationale: 'miRNAs modulate translation of targets; they do not substitute for the ribosome.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'rna-reverse-transcription-q3', topicIds: ['rna-reverse-transcription'], stem: 'In retrotransposition ("jumping genes"), how does a new DNA copy get inserted elsewhere in the genome?',
      options: [
        {text: 'An RNA intermediate is reverse-transcribed into DNA that inserts at a new location', correct: true, rationale: 'Correct — retrotransposons are copied via an RNA intermediate that is reverse-transcribed and integrated elsewhere.'},
        {text: 'DNA is cut and pasted directly with no RNA involved', correct: false, rationale: 'That describes DNA-only ("cut-and-paste") transposition, not retrotransposition, which uses an RNA intermediate.'},
        {text: 'The ribosome copies protein back into DNA', correct: false, rationale: 'Proteins are not templates for DNA; retrotransposition uses an RNA intermediate.'},
        {text: 'Two chromosomes exchange arms via translocation', correct: false, rationale: 'Translocation is a chromosome rearrangement, unrelated to retrotransposon insertion.'}
      ], difficulty: 'medium', topicCheck: false}
  ];

  MOLBIO.registerLecture(lecture, topics, flashcards, questions);
})();
