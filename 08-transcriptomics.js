/* Unit 8 — Transcriptomics. Source: "09 - Transcriptomics" (K. Kobow). */
(function () {
  var lecture = {
    id: 'transcriptomics', title: 'Transcriptomics', order: 8,
    source: 'Lecture 09 – Transcriptomics (K. Kobow)',
    topicIds: ['transcriptomics-splicing', 'transcriptomics-measuring', 'transcriptomics-resolution',
               'transcriptomics-diffexp', 'transcriptomics-ml']
  };

  var topics = [
    {
      id: 'transcriptomics-splicing', lectureId: 'transcriptomics', title: 'Gene expression, isoforms & alternative splicing',
      explanation: "Genes are expressed with different efficiencies at multiple levels — transcription efficiency, mRNA stability, and translation efficiency — and transcriptomics aims to quantify these expression levels. Alternative splicing generates tissue-specific transcript isoforms from the same gene. When splicing goes wrong, the consequences can be severe: in Dravet syndrome, a cryptic 'poison' exon (20N) within SCN1A intron 20 is normally excised, but a pathogenic variant causes its aberrant inclusion, producing a frameshift and premature stop codon. Premature stop codons are then normally caught by nonsense-mediated mRNA decay (NMD), a quality-control pathway (involving UPF1/2/3) that degrades transcripts with premature termination codons — unless the codon is in the last exon or very close to an exon boundary, in which case NMD can be escaped.",
      keyTerms: [
        {term: 'Isoform', def: 'Distinct transcript/protein variant produced from the same gene via alternative splicing.'},
        {term: 'Poison exon', def: 'A cryptic exon whose aberrant inclusion disrupts the reading frame (e.g., SCN1A exon 20N in Dravet syndrome).'},
        {term: 'Nonsense-mediated decay (NMD)', def: 'Quality-control pathway degrading mRNAs with premature termination codons.'},
        {term: 'NMD escape', def: 'Occurs when a premature stop codon is in the last exon or <50bp from an exon boundary.'}
      ],
      traps: [
        'NMD is escaped under specific conditions (last-exon or near-boundary premature stop codons) — it does not degrade every transcript with a premature stop unconditionally.',
        'The Dravet syndrome poison-exon mechanism is a splicing defect, not a simple point mutation changing an amino acid.',
        'Gene expression efficiency depends on transcription, mRNA stability, AND translation efficiency — not on transcription rate alone.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Poison exon (SCN1A 20N)', detail: 'Normally excised; aberrant inclusion causes frameshift + premature stop.'},
        {label: 'NMD', detail: 'Degrades transcripts with premature stop codons, preventing truncated proteins.'},
        {label: 'NMD escape', detail: 'When the premature stop is in the last exon or <50bp from an exon-exon boundary.'}
      ]},
      relatedTopicIds: ['rna-processing', 'genomics-variation']
    },
    {
      id: 'transcriptomics-measuring', lectureId: 'transcriptomics', title: 'Measuring the transcriptome',
      explanation: "The transcriptome is the complete collection of RNA transcripts in an organism/tissue, and can be profiled with microarrays (nucleic-acid probes fixed to a surface, quantifying only predetermined, known sequences) or RNA sequencing (NGS-based, high-throughput, in principle unbiased and able to detect novel transcripts). Studying specific RNA fractions typically requires reverse transcription first — using reverse transcriptase (an RNA-dependent DNA polymerase), dNTPs, and primers that can be sequence-specific, oligo-dT (targeting poly-A tails), or random hexamers, along with RNase H and a DNA polymerase to complete double-stranded cDNA.",
      keyTerms: [
        {term: 'Microarray', def: 'Probe-based method quantifying only predetermined, known sequences.'},
        {term: 'RNA-sequencing (RNA-seq)', def: 'NGS-based, high-throughput, in-principle-unbiased transcriptome profiling.'},
        {term: 'Reverse transcriptase', def: 'RNA-dependent DNA polymerase converting RNA into complementary DNA (cDNA).'},
        {term: 'Priming strategies', def: 'Sequence-specific, oligo-dT, or random hexamer primers for reverse transcription.'}
      ],
      traps: [
        'Microarrays can only detect sequences you already knew to include as probes; RNA-seq can, in principle, discover unknown/novel transcripts — this is the key unbiased-vs-biased distinction.',
        'Reverse transcriptase makes DNA from an RNA template — the opposite direction of normal transcription.',
        'Oligo-dT primers specifically target the poly-A tail, so they enrich for polyadenylated (mostly mRNA) transcripts rather than all RNA equally.'
      ],
      visual: {type: 'compare', columns: ['Method', 'Basis', 'Key limitation/strength'],
        rows: [['Microarray', 'Fixed probes for known sequences', 'Cannot detect unknown transcripts'], ['RNA-seq', 'NGS, high-throughput', 'In principle unbiased; can detect novel transcripts']]},
      relatedTopicIds: ['transcriptomics-resolution', 'rna-reverse-transcription']
    },
    {
      id: 'transcriptomics-resolution', lectureId: 'transcriptomics', title: 'Bulk, single-cell & spatial transcriptomics',
      explanation: "Bulk tissue RNA-seq (sample → RNA extraction → library prep → sequencing → alignment → quantification) is cost-effective and robust for homogeneous samples, but averages across all cell populations in a sample, obscuring cell-type-specific signals — a real concern given the tissue heterogeneity of, e.g., the human brain. Single-cell RNA-seq (scRNA-seq, Science Method of the Year 2013) resolves individual cells via droplet-based barcoding, enabling marker-gene identification, cell clustering, and pseudotime/lineage inference (e.g., in neural development), as well as inferring cell-cell communication (e.g., with CellChat, using ligand-receptor expression). Its limitations include loss of tissue architecture, batch effects, and data sparsity — which spatially resolved transcriptomics (Method of the Year 2020) directly addresses by preserving positional information.",
      keyTerms: [
        {term: 'Bulk RNA-seq', def: 'Sequences RNA from a whole tissue sample; averages across cell populations.'},
        {term: 'scRNA-seq', def: 'Single-cell RNA-seq; resolves individual cells (Method of the Year 2013).'},
        {term: 'Pseudotime analysis', def: 'Computational ordering of cells along an inferred developmental/lineage trajectory.'},
        {term: 'Spatially resolved transcriptomics', def: 'Preserves spatial/positional information lost in dissociated scRNA-seq (Method of the Year 2020).'}
      ],
      traps: [
        'Bulk RNA-seq is cost-effective but averages across a heterogeneous cell mixture — it cannot resolve cell-type-specific expression the way scRNA-seq can.',
        'scRNA-seq loses tissue architecture (spatial context) precisely because cells are dissociated before sequencing — spatial transcriptomics exists to solve this specific limitation.',
        'Data sparsity and batch effects are real, described limitations of scRNA-seq, not solved problems.'
      ],
      visual: {type: 'compare', columns: ['Approach', 'Resolution', 'Key limitation'],
        rows: [
          ['Bulk RNA-seq', 'Whole tissue (averaged)', 'Masks cell-type-specific signals'],
          ['scRNA-seq', 'Single cell', 'Loses spatial architecture; batch effects; sparsity'],
          ['Spatial transcriptomics', 'Single cell + position', 'Newer, still-maturing technology']
        ]},
      relatedTopicIds: ['transcriptomics-measuring', 'transcriptomics-diffexp']
    },
    {
      id: 'transcriptomics-diffexp', lectureId: 'transcriptomics', title: 'Differential expression & functional interpretation',
      explanation: "After identifying differentially expressed genes between conditions, the next challenge is functional interpretation — 'seeing the forest from the trees.' Weighted gene co-expression network analysis (WGCNA) uses graph theory (nodes, edges, clusters, centrality) to build a correlation matrix of gene expression, apply a soft threshold to build a scale-free network, detect co-expression modules, link modules to phenotypic traits, and identify hub genes as candidate regulators/drug targets. Gene Ontology (GO) then provides a standardized, hierarchical, species-independent vocabulary for annotating which biological processes a gene module is involved in, drawing on reference databases such as GTEx, KEGG, and Reactome.",
      keyTerms: [
        {term: 'Differential gene expression (DE)', def: 'Identifying individual genes that change expression between conditions.'},
        {term: 'WGCNA', def: 'Weighted gene co-expression network analysis; finds gene modules using graph theory.'},
        {term: 'Hub gene', def: 'Highly connected gene within a co-expression module; candidate regulator/drug target.'},
        {term: 'Gene Ontology (GO)', def: 'Standardized, hierarchical, species-independent vocabulary for gene function annotation.'}
      ],
      traps: [
        'WGCNA groups genes into co-expression MODULES (networks), rather than testing one gene at a time as classical differential expression does — the two approaches are complementary, not identical.',
        'GO terms increase in specificity moving from parent to child terms in the hierarchy, not the reverse.',
        'Hub genes are defined by their high connectivity within a co-expression network, not simply by high individual expression.'
      ],
      visual: {type: 'steps', steps: [
        {title: 'Correlation matrix', detail: 'Identify co-expressed gene pairs.'},
        {title: 'Soft threshold', detail: 'Build a scale-free network.'},
        {title: 'Module detection', detail: 'Find co-expression clusters (modules).'},
        {title: 'Module–trait analysis', detail: 'Link modules to phenotype/biology.'},
        {title: 'Hub genes', detail: 'Identify candidate regulators/drug targets.'}
      ]},
      relatedTopicIds: ['transcriptomics-resolution', 'transcriptomics-ml']
    },
    {
      id: 'transcriptomics-ml', lectureId: 'transcriptomics', title: 'Machine learning & data sharing in transcriptomics',
      explanation: "Transcriptomic datasets — especially single-cell and spatial data — are high-dimensional, noisy, and heterogeneous (many cell types, states, transitions), which is exactly the kind of problem machine learning is well-suited to: extracting patterns, predicting labels (e.g., cell type), and revealing hidden gene programs or modules. Key challenges include reference bias/overfitting and ambiguous or entirely novel cell types not represented in training data. The field also emphasizes FAIR data-sharing principles: depositing data and code in repositories (GEO, ArrayExpress, Human Cell Atlas, Bioconductor, GitHub, Zenodo), publishing preprints (e.g., bioRxiv) that require critical appraisal before peer review, and addressing ethical issues of consent and re-identifiability.",
      keyTerms: [
        {term: 'High-dimensional data', def: 'Thousands of genes measured per cell/sample; a defining transcriptomics ML challenge.'},
        {term: 'Reference bias/overfitting', def: 'Model performance may not generalize beyond its training reference data.'},
        {term: 'FAIR principles', def: 'Findable, Accessible, Interoperable, Reusable data-sharing standards.'},
        {term: 'Preprint', def: 'Publicly posted manuscript (e.g., on bioRxiv) prior to peer review.'}
      ],
      traps: [
        'Preprints have NOT yet undergone peer review — the course explicitly flags the need to critically assess them before treating their claims as settled.',
        'A key ML challenge is ambiguous/novel cell types not present in training data, not simply "too little data" in general.',
        'FAIR principles concern data-sharing quality (findable, accessible, interoperable, reusable), not model accuracy.'
      ],
      visual: {type: 'facts', items: [
        {label: 'High-dimensional & noisy', detail: 'Thousands of genes, many cell states/transitions.'},
        {label: 'ML strengths', detail: 'Pattern extraction, label prediction, hidden gene-program discovery.'},
        {label: 'FAIR & preprints', detail: 'Public repositories (GEO, Human Cell Atlas) and preprints need critical appraisal.'}
      ]},
      relatedTopicIds: ['transcriptomics-diffexp', 'genomics-ai-ethics']
    }
  ];

  var flashcards = [
    {id: 'transcriptomics-splicing-f1', topicId: 'transcriptomics-splicing', front: 'What is a "poison exon," and give the course’s example.', back: 'A cryptic exon that, when aberrantly included, disrupts the reading frame — e.g., SCN1A exon 20N in Dravet syndrome.', tags: ['splicing']},
    {id: 'transcriptomics-splicing-f2', topicId: 'transcriptomics-splicing', front: 'Under what condition can a transcript escape nonsense-mediated decay (NMD)?', back: 'If the premature termination codon is in the last exon, or within ~50bp of an exon-exon boundary.', tags: ['NMD']},
    {id: 'transcriptomics-measuring-f1', topicId: 'transcriptomics-measuring', front: 'Why can microarrays not discover novel transcripts, while RNA-seq can?', back: 'Microarrays only quantify predetermined probe sequences; RNA-seq sequences everything present, in principle without bias.', tags: ['measuring']},
    {id: 'transcriptomics-measuring-f2', topicId: 'transcriptomics-measuring', front: 'What enzyme converts RNA into cDNA, and what is its formal description?', back: 'Reverse transcriptase — an RNA-dependent DNA polymerase.', tags: ['measuring']},
    {id: 'transcriptomics-resolution-f1', topicId: 'transcriptomics-resolution', front: 'What is the main drawback of bulk RNA-seq compared to single-cell RNA-seq?', back: 'It averages expression across all cells in the sample, masking cell-type-specific signals.', tags: ['resolution']},
    {id: 'transcriptomics-resolution-f2', topicId: 'transcriptomics-resolution', front: 'What problem does spatially resolved transcriptomics solve that scRNA-seq cannot?', back: 'It preserves spatial/positional (tissue architecture) information, which scRNA-seq loses upon cell dissociation.', tags: ['resolution']},
    {id: 'transcriptomics-diffexp-f1', topicId: 'transcriptomics-diffexp', front: 'What does WGCNA identify, and using what mathematical framework?', back: 'Gene co-expression modules, using graph theory (correlation networks, clustering, hub genes).', tags: ['WGCNA']},
    {id: 'transcriptomics-diffexp-f2', topicId: 'transcriptomics-diffexp', front: 'What is a "hub gene" in a co-expression network?', back: 'A highly connected gene within a module, a candidate regulator or drug target.', tags: ['WGCNA']},
    {id: 'transcriptomics-ml-f1', topicId: 'transcriptomics-ml', front: 'Name two properties of transcriptomic data that make it well-suited to machine learning.', back: 'Any two of: high-dimensional, noisy, heterogeneous (many cell types/states/transitions).', tags: ['ML']},
    {id: 'transcriptomics-ml-f2', topicId: 'transcriptomics-ml', front: 'Why should preprints be critically assessed before being treated as established fact?', back: 'Because they have not yet undergone peer review.', tags: ['FAIR', 'ethics']}
  ];

  var questions = [
    {id: 'transcriptomics-splicing-q1', topicIds: ['transcriptomics-splicing'], stem: 'The SCN1A "poison exon" 20N mechanism in Dravet syndrome involves:',
      options: [
        {text: 'A point mutation directly changing one amino acid', correct: false, rationale: 'The mechanism is a splicing defect causing aberrant exon inclusion, not a simple missense mutation.'},
        {text: 'Aberrant inclusion of a normally excised cryptic exon, causing a frameshift and premature stop', correct: true, rationale: 'Correct — this is precisely the described pathogenic mechanism.'},
        {text: 'Complete deletion of the SCN1A gene', correct: false, rationale: 'The mechanism described is a splicing defect, not full gene deletion.'},
        {text: 'A chromosomal translocation involving SCN1A', correct: false, rationale: 'This is a splice-site/intronic variant effect, not a translocation.'}
      ], difficulty: 'hard', topicCheck: false},
    {id: 'transcriptomics-splicing-q2', topicIds: ['transcriptomics-splicing'], stem: 'Nonsense-mediated decay (NMD) is typically escaped when:',
      options: [
        {text: 'The premature termination codon is near the start of the first exon', correct: false, rationale: 'This location does not describe the documented escape conditions.'},
        {text: 'The premature termination codon is in the last exon, or very close to an exon-exon boundary', correct: true, rationale: 'Correct — these specific positions allow a transcript to evade NMD.'},
        {text: 'The transcript has no poly-A tail', correct: false, rationale: 'Poly-A tail status is not the described condition for NMD escape.'},
        {text: 'NMD can never be escaped under any circumstances', correct: false, rationale: 'The course explicitly describes specific escape conditions.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'transcriptomics-measuring-q1', topicIds: ['transcriptomics-measuring'], stem: 'What is a key advantage of RNA-seq over microarrays?',
      options: [
        {text: 'RNA-seq can only measure predetermined, known sequences', correct: false, rationale: 'This describes microarrays, not RNA-seq.'},
        {text: 'RNA-seq can, in principle, detect novel/unknown transcripts', correct: true, rationale: 'Correct — RNA-seq is unbiased, unlike probe-limited microarrays.'},
        {text: 'RNA-seq requires no sequencing instrument', correct: false, rationale: 'RNA-seq is inherently NGS-based and requires a sequencer.'},
        {text: 'RNA-seq is not affected by reverse transcription errors', correct: false, rationale: 'Reverse transcription is often still a step in RNA-seq library prep and can introduce artifacts.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'transcriptomics-measuring-q2', topicIds: ['transcriptomics-measuring'], stem: 'Which enzyme is required to synthesize cDNA from an RNA template?',
      options: [
        {text: 'RNA polymerase II', correct: false, rationale: 'Pol II transcribes DNA into RNA, the opposite direction.'},
        {text: 'Reverse transcriptase', correct: true, rationale: 'Correct — an RNA-dependent DNA polymerase synthesizes DNA from an RNA template.'},
        {text: 'DNA ligase', correct: false, rationale: 'Ligase joins DNA fragments; it does not synthesize DNA from RNA.'},
        {text: 'Topoisomerase II', correct: false, rationale: 'This relieves DNA supercoiling; it is unrelated to reverse transcription.'}
      ], difficulty: 'easy', topicCheck: true},
    {id: 'transcriptomics-resolution-q1', topicIds: ['transcriptomics-resolution'], stem: 'What is a key limitation of bulk tissue RNA-seq?',
      options: [
        {text: 'It cannot be used on homogeneous cell lines', correct: false, rationale: 'Bulk RNA-seq is actually described as robust for homogeneous tissues/cell lines.'},
        {text: 'It averages gene expression across all cells in the sample, masking cell-type-specific signals', correct: true, rationale: 'Correct — this is the central trade-off versus single-cell approaches.'},
        {text: 'It is more expensive than single-cell RNA-seq', correct: false, rationale: 'Bulk RNA-seq is described as cost-effective, generally cheaper than scRNA-seq.'},
        {text: 'It cannot detect any gene expression differences at all', correct: false, rationale: 'Bulk RNA-seq can detect differential expression; it just cannot resolve it per cell type.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'transcriptomics-resolution-q2', topicIds: ['transcriptomics-resolution'], stem: 'What is a documented limitation of single-cell RNA-seq (scRNA-seq)?',
      options: [
        {text: 'Loss of tissue architecture upon cell dissociation', correct: true, rationale: 'Correct — along with batch effects and data sparsity, this is a key scRNA-seq limitation.'},
        {text: 'Inability to identify any cell type differences', correct: false, rationale: 'scRNA-seq is specifically valued for resolving cell-type differences.'},
        {text: 'It cannot be barcoded or clustered', correct: false, rationale: 'Barcoding and clustering are core, well-established parts of the scRNA-seq workflow.'},
        {text: 'It always costs less than bulk RNA-seq', correct: false, rationale: 'scRNA-seq is generally more resource-intensive than bulk RNA-seq, not less.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'transcriptomics-diffexp-q1', topicIds: ['transcriptomics-diffexp'], stem: 'WGCNA primarily identifies:',
      options: [
        {text: 'Individual differentially expressed genes one at a time', correct: false, rationale: 'This describes classical differential expression analysis, not WGCNA’s network-based approach.'},
        {text: 'Co-expression modules of genes using graph-theory-based network analysis', correct: true, rationale: 'Correct — WGCNA builds a correlation network and detects gene modules.'},
        {text: 'Protein 3D structures from expression data', correct: false, rationale: 'This is unrelated to WGCNA, which works on expression correlation, not protein structure.'},
        {text: 'Chromosomal translocations', correct: false, rationale: 'This is unrelated to WGCNA’s co-expression network analysis.'}
      ], difficulty: 'hard', topicCheck: false},
    {id: 'transcriptomics-diffexp-q2', topicIds: ['transcriptomics-diffexp'], stem: 'What does Gene Ontology (GO) provide for interpreting gene modules?',
      options: [
        {text: 'A standardized, hierarchical, species-independent vocabulary of biological functions/processes', correct: true, rationale: 'Correct — GO terms increase in specificity from parent to child, letting modules be annotated functionally.'},
        {text: 'A database of protein crystal structures', correct: false, rationale: 'This is not what GO provides; GO is a functional annotation vocabulary.'},
        {text: 'A list of all known genetic variants in a species', correct: false, rationale: 'This describes variant databases, not Gene Ontology.'},
        {text: 'A tool for reverse-transcribing RNA into DNA', correct: false, rationale: 'This is unrelated to GO, which is an annotation framework.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'transcriptomics-ml-q1', topicIds: ['transcriptomics-ml'], stem: 'Why is machine learning particularly well-suited to transcriptomic data analysis?',
      options: [
        {text: 'Because transcriptomic data is low-dimensional and simple', correct: false, rationale: 'This is the opposite — transcriptomic data (especially single-cell/spatial) is high-dimensional and complex.'},
        {text: 'Because the data is high-dimensional, noisy, and heterogeneous — exactly what ML is suited to handle', correct: true, rationale: 'Correct — ML extracts patterns and predicts labels from exactly this kind of complex data.'},
        {text: 'Because transcriptomic data requires no quality control', correct: false, rationale: 'Quality control (e.g., addressing batch effects, sparsity) remains essential.'},
        {text: 'Because gene expression never varies between cell types', correct: false, rationale: 'Gene expression varies substantially between cell types and states — that variability is exactly what is being modeled.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'transcriptomics-ml-q2', topicIds: ['transcriptomics-ml'], stem: 'Why does the course caution that preprints (e.g., on bioRxiv) should be critically assessed?',
      options: [
        {text: 'Because they are always factually incorrect', correct: false, rationale: 'Preprints are not necessarily incorrect; the caution is about the lack of peer review, not inherent inaccuracy.'},
        {text: 'Because they have not yet undergone peer review', correct: true, rationale: 'Correct — this is precisely the stated reason for critical appraisal.'},
        {text: 'Because they are never publicly accessible', correct: false, rationale: 'Preprints are explicitly open-access documents, publicly available before peer review.'},
        {text: 'Because they are required reading for FAIR compliance', correct: false, rationale: 'FAIR principles concern data-sharing standards, not a preprint-reading requirement.'}
      ], difficulty: 'medium', topicCheck: true}
  ];

  MOLBIO.registerLecture(lecture, topics, flashcards, questions);
})();
