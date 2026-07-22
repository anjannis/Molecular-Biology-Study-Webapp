/* Unit 7 — Genomics. Source: "08 - Genomics" (K. Kobow). */
(function () {
  var lecture = {
    id: 'genomics', title: 'Genomics', order: 7,
    source: 'Lecture 08 – Genomics (K. Kobow)',
    topicIds: ['genomics-basics', 'genomics-assembly-reference', 'genomics-variation',
               'genomics-variant-types', 'genomics-inheritance', 'genomics-ai-ethics']
  };

  var topics = [
    {
      id: 'genomics-basics', lectureId: 'genomics', title: 'Genomics vs genetics & sequencing history',
      explanation: "Genomics studies the entire genome — all genes and non-coding sequences — and how that information shapes biology, health, and disease; genetics, narrower in scope, studies individual genes and how hereditary traits pass between generations. Sequencing technology has progressed through generations: Sanger sequencing (recognized by the 1980 Nobel Prize, Berg/Gilbert/Sanger) enabled the Human Genome Project (completed 2001); next-generation, massively parallel sequencing (from ~2005) crashed costs from the Human Genome Project's ~$2.7 billion down toward under $1,000 per genome; third-generation long-read sequencing (e.g., Nanopore, from ~2014) followed; and CRISPR/Cas genome editing was recognized by the 2021 Nobel Prize (Charpentier, Doudna).",
      keyTerms: [
        {term: 'Genomics', def: 'Study of the entire genome (genes + non-coding sequence) and its influence on biology/health/disease.'},
        {term: 'Genetics', def: 'Study of individual genes and their inheritance.'},
        {term: 'Sanger sequencing', def: 'First-generation sequencing method; basis of the Human Genome Project.'},
        {term: 'Next-generation sequencing (NGS)', def: 'Massively parallel sequencing; drastically cut per-genome cost.'},
        {term: 'Long-read sequencing', def: 'Third-generation sequencing (e.g., Nanopore); reads longer fragments.'}
      ],
      traps: [
        'Genomics studies the whole genome including non-coding sequence; genetics is the narrower study of individual genes — these terms are not interchangeable.',
        'The order of sequencing generations is Sanger → NGS (massively parallel) → long-read (Nanopore) — not the reverse.',
        'The Human Genome Project used Sanger sequencing and cost roughly $2.7 billion; modern NGS costs are now under $1,000 per genome — an enormous cost drop, not a marginal one.'
      ],
      visual: {type: 'steps', steps: [
        {title: '1980', detail: 'Nobel Prize for DNA sequencing (Berg, Gilbert, Sanger).'},
        {title: '2001', detail: 'Human Genome Project completed (Sanger sequencing).'},
        {title: '2005', detail: 'NGS: massively parallel sequencing; costs drop toward <$1,000/genome.'},
        {title: '2014', detail: 'Third-generation long-read sequencing (e.g., Nanopore).'},
        {title: '2021', detail: 'Nobel Prize for CRISPR/Cas genome editing (Charpentier, Doudna).'}
      ]},
      relatedTopicIds: ['genomics-assembly-reference', 'dna-pcr']
    },
    {
      id: 'genomics-assembly-reference', lectureId: 'genomics', title: 'Genome assembly & the reference genome',
      explanation: "Sequencing produces many short reads randomly distributed across the target DNA with deliberate oversampling, so reads repeatedly overlap; genome assemblers compute these overlaps (often as a graph) and 'walk' the graph to reconstruct the original sequence. A reference genome is a digital, annotated composite standard — not any single individual's genome — used as a scaffold for aligning reads, calling variants, and annotating genes. GRCh38 (2013) is the most widely used human reference, but it is based mostly on individuals of European ancestry (a diversity limitation) and had structural gaps (e.g., centromeres, telomeres) until the telomere-to-telomere (T2T) genome (2022) filled them; reference genomes also represent germline DNA and miss context-specific (somatic/mosaic) variation.",
      keyTerms: [
        {term: 'Genome assembly', def: 'Reconstructing a genome sequence from overlapping short sequencing reads.'},
        {term: 'Reference genome', def: 'Composite, annotated standard genome used for alignment and variant calling — not one individual’s genome.'},
        {term: 'GRCh38', def: 'Most widely used human reference genome (2013); has known diversity and structural-gap limitations.'},
        {term: 'T2T genome', def: 'First telomere-to-telomere complete human genome (2022); fills GRCh38’s structural gaps.'}
      ],
      traps: [
        'A reference genome is a composite standard, NOT the genome of any single real individual.',
        'GRCh38 is based mostly on individuals of European ancestry, a documented limitation for variant interpretation across populations.',
        'Reference genomes represent germline DNA and can miss somatic/mosaic variation (e.g., in cancer or brain tissue).'
      ],
      visual: {type: 'facts', items: [
        {label: 'Lack of diversity', detail: 'GRCh38 is mostly European-ancestry-derived, biasing variant interpretation.'},
        {label: 'Structural gaps', detail: 'Centromeres/telomeres were incomplete in GRCh38 until T2T (2022).'},
        {label: 'Non-representativeness', detail: 'A single linear reference misses population-wide structural diversity.'},
        {label: 'Somatic/mosaic variation ignored', detail: 'References reflect germline DNA, missing context-specific variation.'}
      ]},
      relatedTopicIds: ['genomics-variant-types', 'genomics-basics']
    },
    {
      id: 'genomics-variation', lectureId: 'genomics', title: 'Genetic variation & nomenclature',
      explanation: "Genetic variants are described at three levels with standardized (HGVS) nomenclature: g. (genomic DNA coordinate), c. (complementary DNA / transcript coordinate), and p. (predicted protein change). A single-nucleotide variant (SNP/SNV) can have very different consequences depending on where it falls — for example, causing a premature stop codon or simply an amino-acid substitution with or without a premature stop. Splice-affecting variants are especially hard to interpret from sequence alone; AI tools like SpliceAI predict whether a variant will alter splicing (e.g., exon skipping), though the resulting protein-level effect often cannot be precisely predicted without transcript-level analysis.",
      keyTerms: [
        {term: 'HGVS nomenclature', def: 'Standard variant-naming system using g. (genomic), c. (cDNA/transcript), and p. (protein) coordinates.'},
        {term: 'SNP/SNV', def: 'Single-nucleotide polymorphism/variant; can have a wide range of downstream consequences.'},
        {term: 'Premature stop codon', def: 'One possible consequence of a coding SNV, truncating the protein.'},
        {term: 'SpliceAI', def: 'AI tool predicting whether a variant disrupts splicing.'}
      ],
      traps: [
        'g., c., and p. notations describe the SAME variant at three different levels (genomic, transcript, protein) — they are not three unrelated variant types.',
        'A splice-affecting variant’s protein-level consequence often cannot be precisely predicted without transcript-level splicing analysis — SpliceAI predicts the splicing effect, not automatically the protein outcome.',
        'Not every SNV causes a premature stop — consequences range from silent to missense to nonsense.'
      ],
      visual: {type: 'compare', columns: ['Notation', 'Level', 'Example'],
        rows: [['g.', 'Genomic DNA coordinate', 'chr13:32340128G>A'], ['c.', 'Transcript (cDNA) coordinate', 'c.5353C>T'], ['p.', 'Predicted protein change', 'p.Ser1785Leu']]},
      relatedTopicIds: ['genomics-variant-types', 'transcriptomics-splicing']
    },
    {
      id: 'genomics-variant-types', lectureId: 'genomics', title: 'Variant frequency, structural variants & mosaicism',
      explanation: "Variants range from common (studied via genome-wide association studies, GWAS, linking common variants to disease risk) to rare/low-frequency (individually higher-impact but harder to detect statistically). Beyond single-nucleotide changes, structural and copy-number variants (CNVs) — numerical or structural chromosomal changes — are clinically important, for example in epilepsy. Genetic mosaicism — the presence of genetically distinct cell populations within one individual, notably in the brain — adds another layer of complexity relevant to both health and disease.",
      keyTerms: [
        {term: 'GWAS', def: 'Genome-wide association study; links common variants to disease/trait risk.'},
        {term: 'Copy-number variant (CNV)', def: 'Structural variant changing the number of copies of a DNA segment.'},
        {term: 'Rare/low-frequency variant', def: 'Individually may have larger effect size but is harder to detect statistically than common variants.'},
        {term: 'Genetic mosaicism', def: 'Presence of genetically distinct cell populations within one individual/tissue.'}
      ],
      traps: [
        'GWAS is designed to detect common variants of typically small individual effect, not rare high-penetrance variants.',
        'CNVs are structural/numerical variants (segment copy number), distinct from single-nucleotide variants.',
        'Mosaicism means genetically distinct cells coexist within ONE individual — it is not the same as inherited variation between individuals.'
      ],
      visual: {type: 'compare', columns: ['Term', 'Chromosomal location', 'Expression', 'Origin'],
        rows: [
          ['Autosomal', 'Chromosomes 1–22', '—', '—'],
          ['Gonosomal', 'X or Y chromosome', '—', '—'],
          ['Dominant', '—', 'One copy sufficient', '—'],
          ['Recessive', '—', 'Two copies needed', '—'],
          ['Germline', '—', '—', 'Inherited, present in all cells'],
          ['Somatic', '—', '—', 'Acquired, present in some cells only']
        ]},
      relatedTopicIds: ['genomics-inheritance', 'dna-damage-repair']
    },
    {
      id: 'genomics-inheritance', lectureId: 'genomics', title: 'Inheritance patterns',
      explanation: "Variants are classified along three independent axes: chromosomal location (autosomal, chromosomes 1–22, vs gonosomal, X or Y), expression pattern (dominant, one copy sufficient, vs recessive, two copies needed), and origin (germline, inherited and present in all cells, vs somatic, acquired and present in only some cells). Combining location and expression gives the classic inheritance patterns: autosomal dominant, autosomal recessive, X-linked dominant, and X-linked recessive, each with characteristic pedigree patterns.",
      keyTerms: [
        {term: 'Autosomal dominant', def: 'One mutant copy on an autosome (chr 1–22) is sufficient to cause the phenotype.'},
        {term: 'Autosomal recessive', def: 'Two mutant copies on an autosome are required for the phenotype.'},
        {term: 'X-linked dominant/recessive', def: 'Inheritance pattern determined by mutant allele location on the X chromosome.'},
        {term: 'Germline vs somatic mutation', def: 'Germline: inherited, present in all cells. Somatic: acquired, present in only some cells.'}
      ],
      traps: [
        'Dominant conditions require only one mutant copy; recessive conditions require two — this is one of the most commonly tested distinctions.',
        'Germline mutations are inherited and present in every cell; somatic mutations arise after conception and are present only in some cells/tissues — these are not interchangeable.',
        'Autosomal refers to chromosomes 1–22; gonosomal refers specifically to the X or Y chromosome.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Autosomal dominant', detail: 'One mutant allele on chr 1–22 causes the phenotype.'},
        {label: 'Autosomal recessive', detail: 'Two mutant alleles on chr 1–22 needed.'},
        {label: 'X-linked dominant/recessive', detail: 'Inheritance tied to the X chromosome, with characteristic sex-dependent patterns.'}
      ]},
      relatedTopicIds: ['genomics-variant-types', 'cell-mitochondria']
    },
    {
      id: 'genomics-ai-ethics', lectureId: 'genomics', title: 'AI in genomics & ethical/societal implications',
      explanation: "AI is increasingly central to genomics because sequencing now generates far more data than can be manually interpreted: applications include variant calling (e.g., DeepVariant), genome annotation and pathogenicity prediction (e.g., Evo2, SpliceAI, AlphaFold), phenotype-to-genotype matching (e.g., Face2Gene), systems-level functional-module discovery in disease networks, and multi-omics integration (combining genomics, transcriptomics, epigenomics). This power raises genuine ethical and societal questions around consent, privacy, equitable representation in reference data, and how (and whether) individuals should access their own genomic information.",
      keyTerms: [
        {term: 'DeepVariant', def: 'AI tool for variant calling from sequencing data.'},
        {term: 'SpliceAI / AlphaFold', def: 'AI tools for pathogenicity/splice-effect prediction and protein structure prediction, respectively.'},
        {term: 'Face2Gene', def: 'AI application matching facial phenotype (gestalt) to genetic disorders.'},
        {term: 'Multi-omics integration', def: 'Combining genomics, transcriptomics, and epigenomics data with AI methods.'}
      ],
      traps: [
        'Genomics is described as a data-rich, AI-relevant field precisely because sequencing has become fast/cheap while interpretation remains the bottleneck — AI addresses interpretation, not sequencing cost per se.',
        'Ethical concerns (consent, representation, equitable access) are integral to genomics, not a peripheral add-on.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Variant calling', detail: 'e.g., DeepVariant.'},
        {label: 'Pathogenicity prediction', detail: 'e.g., SpliceAI, AlphaFold.'},
        {label: 'Multi-omics integration', detail: 'Combining genomics, transcriptomics, epigenomics.'},
        {label: 'Ethics', detail: 'Consent, representation, and societal implications of genomic data.'}
      ]},
      relatedTopicIds: ['genomics-basics', 'transcriptomics-ml']
    }
  ];

  var flashcards = [
    {id: 'genomics-basics-f1', topicId: 'genomics-basics', front: 'How does genomics differ from genetics?', back: 'Genomics studies the entire genome (genes + non-coding sequence) and its broad influence; genetics studies individual genes and their inheritance.', tags: ['genomics']},
    {id: 'genomics-basics-f2', topicId: 'genomics-basics', front: 'Put these in chronological order: NGS, Sanger sequencing, long-read sequencing.', back: 'Sanger sequencing → NGS (massively parallel) → long-read sequencing (e.g., Nanopore).', tags: ['sequencing history']},
    {id: 'genomics-assembly-reference-f1', topicId: 'genomics-assembly-reference', front: 'Is a reference genome the genome of one specific person?', back: 'No — it is a composite, annotated standard assembled from multiple sources, used as an alignment/annotation scaffold.', tags: ['reference genome']},
    {id: 'genomics-assembly-reference-f2', topicId: 'genomics-assembly-reference', front: 'What genome completed the structural gaps left in GRCh38, and when?', back: 'The telomere-to-telomere (T2T) genome, in 2022.', tags: ['reference genome']},
    {id: 'genomics-variation-f1', topicId: 'genomics-variation', front: 'What do the g., c., and p. prefixes in variant nomenclature represent?', back: 'g. = genomic DNA coordinate, c. = cDNA/transcript coordinate, p. = predicted protein change.', tags: ['variation']},
    {id: 'genomics-variation-f2', topicId: 'genomics-variation', front: 'What does SpliceAI predict?', back: 'Whether a genetic variant is likely to disrupt normal splicing (e.g., cause exon skipping).', tags: ['variation', 'AI']},
    {id: 'genomics-variant-types-f1', topicId: 'genomics-variant-types', front: 'What kind of study links common genetic variants to disease risk?', back: 'A genome-wide association study (GWAS).', tags: ['variants']},
    {id: 'genomics-variant-types-f2', topicId: 'genomics-variant-types', front: 'What is genetic mosaicism?', back: 'The presence of genetically distinct cell populations within a single individual or tissue.', tags: ['mosaicism']},
    {id: 'genomics-inheritance-f1', topicId: 'genomics-inheritance', front: 'How many mutant alleles are needed to cause a recessive condition?', back: 'Two (one from each parent, in the simplest case).', tags: ['inheritance']},
    {id: 'genomics-inheritance-f2', topicId: 'genomics-inheritance', front: 'What is the key difference between a germline and a somatic mutation?', back: 'Germline: inherited, present in all cells. Somatic: acquired after conception, present in only some cells.', tags: ['inheritance']},
    {id: 'genomics-ai-ethics-f1', topicId: 'genomics-ai-ethics', front: 'Name an AI tool used for variant calling.', back: 'DeepVariant.', tags: ['AI']},
    {id: 'genomics-ai-ethics-f2', topicId: 'genomics-ai-ethics', front: 'Why is AI considered essential in modern genomics?', back: 'Because sequencing now generates far more data than can be manually interpreted, and AI helps extract meaning from it.', tags: ['AI', 'ethics']}
  ];

  var questions = [
    {id: 'genomics-basics-q1', topicIds: ['genomics-basics'], stem: 'Which best distinguishes genomics from genetics?',
      options: [
        {text: 'Genomics studies individual genes; genetics studies the whole genome', correct: false, rationale: 'This reverses the actual scope of the two fields.'},
        {text: 'Genomics studies the entire genome, including non-coding sequence; genetics focuses on individual genes and inheritance', correct: true, rationale: 'Correct — genomics is the broader, genome-wide field.'},
        {text: 'The two terms are fully interchangeable', correct: false, rationale: 'They have distinct, well-defined scopes in this course.'},
        {text: 'Genetics only applies to bacteria', correct: false, rationale: 'Genetics applies broadly across organisms, not only bacteria.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'genomics-basics-q2', topicIds: ['genomics-basics'], stem: 'Which sequencing generation is associated with Nanopore, long-read technology?',
      options: [
        {text: 'First-generation (Sanger)', correct: false, rationale: 'Sanger sequencing is first-generation, not long-read.'},
        {text: 'Second-generation (NGS, massively parallel)', correct: false, rationale: 'NGS is typically short-read, high-throughput sequencing.'},
        {text: 'Third-generation (long-read)', correct: true, rationale: 'Correct — Nanopore is a third-generation, long-read sequencing technology (from ~2014).'},
        {text: 'CRISPR-based sequencing', correct: false, rationale: 'CRISPR/Cas is a genome-editing tool, not a sequencing generation.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'genomics-assembly-reference-q1', topicIds: ['genomics-assembly-reference'], stem: 'A key limitation of GRCh38 as a human reference genome is that it:',
      options: [
        {text: 'Is based mostly on individuals of European ancestry', correct: true, rationale: 'Correct — this limits its representativeness for variant detection/interpretation across diverse populations.'},
        {text: 'Contains no annotation of genes', correct: false, rationale: 'GRCh38 does include gene annotation; the limitation lies elsewhere (diversity, structural gaps).'},
        {text: 'Was assembled without any sequencing data', correct: false, rationale: 'GRCh38 was assembled from real sequencing data; this is not the stated limitation.'},
        {text: 'Is a single named individual’s complete genome', correct: false, rationale: 'A reference genome is a composite, not one individual’s genome — but this describes what a reference IS, not GRCh38’s specific limitation.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'genomics-assembly-reference-q2', topicIds: ['genomics-assembly-reference'], stem: 'How do genome assemblers typically reconstruct a sequence from short reads?',
      options: [
        {text: 'By calculating overlaps between reads and "walking" a graph/network of those overlaps', correct: true, rationale: 'Correct — oversampled, overlapping reads are represented as a graph, then traversed to reconstruct the sequence.'},
        {text: 'By sequencing the entire genome in one continuous read', correct: false, rationale: 'Standard assembly relies on many short/overlapping reads, not one continuous read.'},
        {text: 'By comparing directly to a protein database', correct: false, rationale: 'Genome assembly works with nucleotide reads and their overlaps, not protein comparisons.'},
        {text: 'By randomly guessing base order and checking against a reference', correct: false, rationale: 'Assembly uses systematic overlap detection, not random guessing.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'genomics-variation-q1', topicIds: ['genomics-variation'], stem: 'In HGVS-style variant nomenclature, what does a "c." prefix indicate?',
      options: [
        {text: 'A genomic DNA coordinate', correct: false, rationale: 'That is denoted by the "g." prefix.'},
        {text: 'A transcript/cDNA-level coordinate', correct: true, rationale: 'Correct — "c." describes the variant’s position relative to the coding transcript.'},
        {text: 'A predicted protein-level change', correct: false, rationale: 'That is denoted by the "p." prefix.'},
        {text: 'A chromosomal translocation breakpoint only', correct: false, rationale: 'This is not what the "c." prefix specifically denotes.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'genomics-variation-q2', topicIds: ['genomics-variation'], stem: 'What does the AI tool SpliceAI primarily predict?',
      options: [
        {text: 'Protein 3D structure', correct: false, rationale: 'That is what AlphaFold predicts, not SpliceAI.'},
        {text: 'Whether a variant will disrupt normal splicing', correct: true, rationale: 'Correct — SpliceAI estimates splice-site disruption likelihood from sequence.'},
        {text: 'The exact clinical severity of any variant', correct: false, rationale: 'SpliceAI predicts splicing effects; clinical severity often requires further interpretation.'},
        {text: 'Chromosomal copy number', correct: false, rationale: 'This is unrelated to SpliceAI’s function.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'genomics-variant-types-q1', topicIds: ['genomics-variant-types'], stem: 'A genome-wide association study (GWAS) is best suited to detect:',
      options: [
        {text: 'Rare, high-penetrance variants', correct: false, rationale: 'GWAS is statistically powered for common variants; rare variants require different approaches.'},
        {text: 'Common variants associated with disease/trait risk', correct: true, rationale: 'Correct — GWAS surveys common variation across many individuals to find risk associations.'},
        {text: 'Single-cell gene expression differences', correct: false, rationale: 'This describes single-cell transcriptomics, not GWAS.'},
        {text: 'Protein folding pathways', correct: false, rationale: 'This is unrelated to GWAS, which is a variant-association method.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'genomics-variant-types-q2', topicIds: ['genomics-variant-types'], stem: 'Genetic mosaicism refers to:',
      options: [
        {text: 'Genetic differences between unrelated individuals', correct: false, rationale: 'Mosaicism is specifically within one individual, not between different people.'},
        {text: 'The coexistence of genetically distinct cell populations within one individual', correct: true, rationale: 'Correct — e.g., some brain cells may carry somatic variants absent from others.'},
        {text: 'A type of copy-number variant found only in cancer', correct: false, rationale: 'Mosaicism is broader than CNVs and is not restricted to cancer.'},
        {text: 'The mixing of maternal and paternal chromosomes at fertilization', correct: false, rationale: 'This describes normal biparental inheritance, not mosaicism.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'genomics-inheritance-q1', topicIds: ['genomics-inheritance'], stem: 'A condition that requires only one mutant allele to manifest is described as:',
      options: [
        {text: 'Recessive', correct: false, rationale: 'Recessive conditions require two mutant alleles.'},
        {text: 'Dominant', correct: true, rationale: 'Correct — one mutant copy is sufficient for a dominant condition to manifest.'},
        {text: 'Gonosomal', correct: false, rationale: 'This describes chromosomal location (X/Y), not expression pattern.'},
        {text: 'Somatic', correct: false, rationale: 'This describes mutation origin (acquired vs inherited), not expression pattern.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'genomics-inheritance-q2', topicIds: ['genomics-inheritance'], stem: 'A mutation that is acquired after conception and present in only some of an individual’s cells is:',
      options: [
        {text: 'Germline', correct: false, rationale: 'Germline mutations are inherited and present in all cells.'},
        {text: 'Somatic', correct: true, rationale: 'Correct — somatic mutations arise after conception and affect only a subset of cells.'},
        {text: 'Autosomal dominant', correct: false, rationale: 'This describes chromosomal location and expression pattern, not mutation origin.'},
        {text: 'X-linked recessive', correct: false, rationale: 'This describes chromosomal location and expression pattern, not mutation origin.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'genomics-ai-ethics-q1', topicIds: ['genomics-ai-ethics'], stem: 'Which AI tool is specifically used for variant calling from raw sequencing data?',
      options: [
        {text: 'AlphaFold', correct: false, rationale: 'AlphaFold predicts protein structure, not variant calling.'},
        {text: 'DeepVariant', correct: true, rationale: 'Correct — DeepVariant is used to call genetic variants from sequencing reads.'},
        {text: 'Face2Gene', correct: false, rationale: 'Face2Gene matches facial phenotypes to genetic disorders, not variant calling.'},
        {text: 'CellChat', correct: false, rationale: 'CellChat infers cell-cell communication from transcriptomic data, unrelated to variant calling.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'genomics-ai-ethics-q2', topicIds: ['genomics-ai-ethics'], stem: 'Why has AI become essential in modern genomics, according to this course?',
      options: [
        {text: 'Because sequencing has become fast and cheap, but data interpretation now vastly exceeds manual capacity', correct: true, rationale: 'Correct — the bottleneck has shifted from data generation to data interpretation, where AI helps.'},
        {text: 'Because DNA sequencing itself requires AI to function at all', correct: false, rationale: 'Sequencing chemistry does not require AI; AI is used downstream for interpretation.'},
        {text: 'Because AI eliminates the need for reference genomes', correct: false, rationale: 'Reference genomes remain a foundational tool alongside AI methods.'},
        {text: 'Because genomics data is small and easily interpreted manually', correct: false, rationale: 'This is the opposite of the actual motivation — genomics data is very large and complex.'}
      ], difficulty: 'medium', topicCheck: true}
  ];

  MOLBIO.registerLecture(lecture, topics, flashcards, questions);
})();
