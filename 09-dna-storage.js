/* Unit 9 — DNA as data storage. No dedicated lecture PDF exists for this unit; content is built from
 * the course's DNA-lecture teaser ("DNA computing and DNA data storage", Yang et al. 2024, Nat Rev Chem)
 * and the Goldman et al. 2013 (Nature) encode/synthesize/ship&store/sequence/decode/result pipeline that
 * this student researched in depth for a group presentation on this exact paper. Quantitative specifics
 * (fragment lengths, redundancy factors) reflect the well-documented design of that landmark paper;
 * where a number is a commonly cited approximation rather than a precise course figure, it is phrased
 * accordingly and flagged as enrichment. */
(function () {
  var lecture = {
    id: 'storage', title: 'DNA as Data Storage', order: 9,
    source: 'Synthesis of course DNA-lecture teaser (Yang et al. 2024) + Goldman et al. 2013 (Nature) pipeline',
    topicIds: ['storage-why-dna', 'storage-encode', 'storage-synthesize-ship-store',
               'storage-sequence', 'storage-decode-result', 'storage-capacity-implications']
  };

  var topics = [
    {
      id: 'storage-why-dna', lectureId: 'storage', title: 'Why DNA as a data-storage medium',
      explanation: "DNA is, chemically, just a durable sequence of symbols from a 4-letter alphabet (A, T, C, G) — which makes it usable as a general-purpose information medium, not only a biological one. This motivates DNA computing and DNA data storage as alternatives to conventional electronic storage (as flagged directly in the course's DNA lecture, citing Yang et al. 2024, Nat Rev Chem). The core appeal is extreme information density and long-term chemical stability compared to magnetic or optical media, at the cost of much slower read/write speeds and (currently) high per-base synthesis and sequencing cost.",
      keyTerms: [
        {term: 'DNA data storage', def: 'Encoding arbitrary digital information into synthesized DNA sequences.'},
        {term: 'Information density', def: 'DNA can, in principle, store vastly more data per gram than conventional electronic media.'},
        {term: 'Longevity', def: 'DNA is chemically stable over very long timescales under proper storage conditions, unlike most electronic media.'},
        {term: 'Trade-off', def: 'High density/longevity comes at the cost of slow read/write speed and (currently) high cost.'}
      ],
      traps: [
        'DNA storage is attractive for density and longevity, not for speed — it is far slower to read/write than RAM or flash memory.',
        'This is a repurposing of DNA’s chemistry as an information medium; it is a distinct question from DNA’s biological role as a genome.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Density', detail: 'Extremely high information density relative to physical volume/mass (widely cited in the DNA-storage literature).'},
        {label: 'Longevity', detail: 'DNA can remain chemically readable over very long timescales when stored appropriately.'},
        {label: 'Cost/speed', detail: 'Currently limited by synthesis/sequencing cost and slow throughput relative to electronics.'}
      ]},
      relatedTopicIds: ['dna-genome-content', 'storage-encode']
    },
    {
      id: 'storage-encode', lectureId: 'storage', title: 'Encode: turning bits into a DNA-safe sequence',
      explanation: "The Goldman et al. (2013, Nature) pipeline begins with Encode: an arbitrary digital file (any sequence of bits) is first converted into a base-3 (ternary) representation, and each ternary digit is then mapped onto one of the DNA bases that is NOT equal to the previous base written. Because the encoding always picks from the two remaining bases rather than repeating the last one, the resulting DNA sequence can never contain a homopolymer run (e.g., 'AAAA') by construction. This matters because homopolymer runs are a major source of synthesis and sequencing errors — collapsing runs of identical bases is one of the most common failure modes in DNA read/write technology, so avoiding them by design converts an error-prone problem into one the encoding scheme sidesteps entirely.",
      keyTerms: [
        {term: 'Encode stage', def: 'Converts a digital file into a DNA-safe nucleotide sequence.'},
        {term: 'Base-3 (ternary) intermediate', def: 'Binary data is first re-expressed in base 3 before being mapped to bases.'},
        {term: 'Homopolymer avoidance', def: 'Never repeating the immediately preceding base, by choosing only from the other three/two options.'},
        {term: 'Homopolymer run', def: 'A repeated stretch of the same base (e.g., "AAAA"); a major source of synthesis/sequencing errors.'}
      ],
      traps: [
        'Homopolymer avoidance is built into the encoding scheme itself (never repeat the previous base), not fixed afterward by error correction.',
        'The intermediate representation is ternary (base-3), not straight binary-to-base-4 mapping — this is what makes homopolymer-free encoding possible with 4 available bases.',
        'This is an information-theoretic encoding step (like a channel code), analogous in spirit to error-avoiding line codes in digital communications — distinct from the biological genetic code.'
      ],
      visual: {type: 'steps', steps: [
        {title: '1. Binary file', detail: 'Arbitrary digital data as a bitstream.'},
        {title: '2. Convert to base-3', detail: 'Re-express the bitstream as ternary digits.'},
        {title: '3. Map to bases, avoiding repeats', detail: 'Each ternary digit selects a base different from the previous one, guaranteeing no homopolymer runs.'}
      ]},
      relatedTopicIds: ['storage-synthesize-ship-store', 'dna-structure']
    },
    {
      id: 'storage-synthesize-ship-store', lectureId: 'storage', title: 'Synthesize, Ship & Store: redundancy by design',
      explanation: "The encoded sequence is far too long to synthesize as one continuous molecule, so it is split into many overlapping short fragments (on the order of ~100 nucleotides each), with each region of the original file covered by multiple overlapping fragments — giving built-in redundancy against localized synthesis or sequencing errors, similar in spirit to how erasure-coded or repeated data can survive partial loss. Fragments alternate between the forward strand and its reverse complement, so that any error mode that behaves differently depending on read direction is not able to corrupt the same information twice in a row. Each fragment is also tagged with indexing information locating it within the overall file. These fragments are chemically synthesized (Ship), then stored — dry, cold, and dark DNA storage can remain chemically stable for very long periods.",
      keyTerms: [
        {term: 'Overlapping fragmentation', def: 'The file is split into short (~100 nt), overlapping fragments so each base is covered multiple times.'},
        {term: 'Redundancy geometry', def: 'Overlap pattern determines how many independent fragments cover any given position — the more overlap, the more error resilience.'},
        {term: 'Reverse-complement protection', def: 'Alternating forward/reverse-complement strands so directional error modes cannot compound in the same spot.'},
        {term: 'Indexing', def: 'Metadata within each fragment locating it within the original file, needed for later reassembly.'}
      ],
      traps: [
        'Redundancy here comes from overlapping short fragments (a design choice), not from simply synthesizing the whole file multiple times as one piece.',
        'Alternating strand orientation protects specifically against direction-dependent (systematic) errors — it does not by itself fix random point errors, which overlap-based redundancy and downstream error filtering handle.',
        'Fragments must carry index/positional metadata, or the overlapping pieces could not be reassembled in the correct order during decoding.'
      ],
      visual: {type: 'steps', steps: [
        {title: 'Fragment the sequence', detail: 'Split into short, overlapping segments (~100 nt) covering the whole file redundantly.'},
        {title: 'Alternate strand orientation', detail: 'Store alternating fragments as forward strand vs reverse complement.'},
        {title: 'Add indexing metadata', detail: 'Tag each fragment with its position in the original file.'},
        {title: 'Synthesize & store', detail: 'Chemically synthesize the fragment pool; store dry/cold/dark for long-term stability.'}
      ]},
      relatedTopicIds: ['storage-encode', 'storage-sequence']
    },
    {
      id: 'storage-sequence', lectureId: 'storage', title: 'Sequence: reading the fragment pool back out',
      explanation: "To retrieve the data, the synthesized fragment pool is read out using next-generation sequencing — in Goldman et al. (2013), Illumina paired-end sequencing. Paired-end sequencing reads each DNA fragment from both ends inward, producing two shorter reads per fragment whose known relative orientation and approximate spacing help align reads accurately and flag inconsistent/erroneous reads. Because the original file was split into many overlapping fragments, sequencing recovers many independent, overlapping reads covering each position in the encoded file, which is exactly the redundancy the encode/fragment design set up to exploit during decoding.",
      keyTerms: [
        {term: 'Next-generation sequencing (NGS)', def: 'High-throughput sequencing technology used to read out the synthesized DNA pool.'},
        {term: 'Illumina paired-end sequencing', def: 'Sequencing each fragment from both ends, producing paired reads with known relative orientation/spacing.'},
        {term: 'Read redundancy', def: 'Overlapping fragments yield multiple independent reads per original file position.'}
      ],
      traps: [
        'Paired-end sequencing reads a fragment from BOTH ends, not just extending a single read further from one end.',
        'The redundancy exploited at the decode stage originates from the fragmentation design (Synthesize/Ship & Store), not from sequencing itself — sequencing just reads out what was already redundantly encoded.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Paired-end reads', detail: 'Each fragment sequenced from both ends, aiding alignment and error detection.'},
        {label: 'Overlap exploited', detail: 'Many reads cover the same file position, enabling error correction downstream.'}
      ]},
      relatedTopicIds: ['storage-synthesize-ship-store', 'storage-decode-result']
    },
    {
      id: 'storage-decode-result', lectureId: 'storage', title: 'Decode & Result: filtering errors and reconstructing the file',
      explanation: "Decoding reverses the encode pipeline: reads are aligned by their indexing metadata, reverse-complement reads are flipped back to a common orientation, and — because the same file position is covered by several overlapping, independently sequenced fragments — a majority-style consensus across those overlapping reads filters out reads that disagree, discarding likely sequencing errors. A parity-check mechanism built into the encoding provides an additional, independent way to detect segments that likely contain an error before final reconstruction. Once cleaned, the ternary sequence is reconstructed and converted back through base-3 to the original binary file (Result) — recovering the digital data that was originally encoded.",
      keyTerms: [
        {term: 'Consensus/majority filtering', def: 'Using multiple overlapping reads of the same position to filter out minority (likely erroneous) base calls.'},
        {term: 'Parity-based error filtering', def: 'A built-in check value flags fragments that likely contain an error, independent of the overlap-consensus check.'},
        {term: 'Decode stage', def: 'Reverses encoding: reorders/reorients fragments, filters errors, reconstructs the ternary sequence.'},
        {term: 'Result', def: 'The final decoded output: the original binary file, recovered from DNA.'}
      ],
      traps: [
        'Error correction here relies on TWO independent mechanisms — overlap-based consensus AND parity checking — not just one or the other.',
        'Decoding must reverse both the strand-orientation step (flip reverse-complement reads back) and the base-3-to-binary conversion — skipping either step would not recover the correct file.',
        'This system does not require zero sequencing errors — it is specifically designed to tolerate and filter out a certain rate of errors, much like a classical error-correcting code.'
      ],
      visual: {type: 'steps', steps: [
        {title: '1. Align by index', detail: 'Use embedded positional metadata to place each read within the file.'},
        {title: '2. Normalize orientation', detail: 'Flip reverse-complement reads back to a common strand direction.'},
        {title: '3. Consensus + parity filtering', detail: 'Cross-check overlapping reads and parity values to discard erroneous calls.'},
        {title: '4. Reconstruct & convert', detail: 'Rebuild the clean ternary sequence and convert back to the original binary file.'}
      ]},
      relatedTopicIds: ['storage-sequence', 'storage-capacity-implications']
    },
    {
      id: 'storage-capacity-implications', lectureId: 'storage', title: 'Error correction, capacity & implications',
      explanation: "Framed in information-theoretic terms, the whole Goldman-style pipeline is an error-correcting code that happens to be implemented in molecules rather than silicon: homopolymer-avoiding encoding reduces one error source at the source (like a constrained line code), overlapping redundant fragments provide built-in resilience (like repetition or erasure coding), and parity checks plus majority voting provide additional detection/correction — much as checksums and forward error correction do in conventional digital storage and communication channels. This framing highlights both DNA storage's promise (extreme density and longevity as an archival medium) and its practical constraints (synthesis/sequencing cost, error rates, and slow random-access), which continue to shape ongoing research (e.g., DNA fountain codes and other more recent schemes) and the broader ethical/practical question of which data is worth committing to such a durable, hard-to-edit medium.",
      keyTerms: [
        {term: 'Error-correcting code (framing)', def: 'Viewing the encode/redundancy/decode pipeline as analogous to classical error-correcting codes.'},
        {term: 'Archival medium', def: 'DNA storage is best suited to long-term, infrequently accessed ("cold") data, not active/frequently updated storage.'},
        {term: 'Practical constraints', def: 'Synthesis/sequencing cost, error rates, and slow read/write speed currently limit real-world deployment.'},
        {term: 'Durability trade-off', def: 'DNA’s chemical stability makes stored data durable but also hard to selectively edit or delete.'}
      ],
      traps: [
        'DNA storage is best suited for archival ("cold") data, not for frequently updated, low-latency storage — a common misconception given headline density figures.',
        'The redundancy/error-correction concepts in this pipeline are directly analogous to classical information theory (e.g., repetition/erasure coding, parity checks), not unique biological mechanisms.',
        'Practical deployment is still limited mainly by cost and speed, not by a fundamental inability to encode/decode reliably.'
      ],
      visual: {type: 'facts', items: [
        {label: 'Encoding parallel', detail: 'Homopolymer-avoiding code ≈ constrained/line code in digital communications.'},
        {label: 'Redundancy parallel', detail: 'Overlapping fragments ≈ repetition/erasure coding.'},
        {label: 'Detection parallel', detail: 'Parity + majority voting ≈ checksums and forward error correction.'}
      ]},
      relatedTopicIds: ['storage-decode-result', 'storage-why-dna']
    }
  ];

  var flashcards = [
    {id: 'storage-why-dna-f1', topicId: 'storage-why-dna', front: 'What two properties make DNA attractive as a digital storage medium?', back: 'Extremely high information density and long-term chemical stability (longevity).', tags: ['storage']},
    {id: 'storage-why-dna-f2', topicId: 'storage-why-dna', front: 'What is the main practical drawback of DNA storage today?', back: 'Slow read/write speed and high synthesis/sequencing cost compared to electronic media.', tags: ['storage']},
    {id: 'storage-encode-f1', topicId: 'storage-encode', front: 'Why does Goldman et al.’s encoding scheme convert data to base-3 before mapping to DNA bases?', back: 'So that each digit can always be mapped to a base different from the previous one, guaranteeing no homopolymer runs.', tags: ['encode']},
    {id: 'storage-encode-f2', topicId: 'storage-encode', front: 'Why are homopolymer runs a problem for DNA data storage?', back: 'They are a major source of errors during DNA synthesis and sequencing.', tags: ['encode']},
    {id: 'storage-synthesize-ship-store-f1', topicId: 'storage-synthesize-ship-store', front: 'Why is the encoded sequence split into overlapping fragments rather than synthesized as one long molecule?', back: 'It is practically necessary for synthesis, and the overlaps also provide built-in redundancy against localized errors.', tags: ['synthesize']},
    {id: 'storage-synthesize-ship-store-f2', topicId: 'storage-synthesize-ship-store', front: 'Why alternate fragments between forward strand and reverse complement?', back: 'To prevent direction-dependent (systematic) error modes from corrupting the same information twice in a row.', tags: ['synthesize']},
    {id: 'storage-sequence-f1', topicId: 'storage-sequence', front: 'What sequencing technology did Goldman et al. (2013) use to read the DNA back out?', back: 'Illumina paired-end sequencing.', tags: ['sequence']},
    {id: 'storage-sequence-f2', topicId: 'storage-sequence', front: 'What does "paired-end" sequencing mean?', back: 'Each fragment is sequenced from both ends, producing two reads with known relative orientation and spacing.', tags: ['sequence']},
    {id: 'storage-decode-result-f1', topicId: 'storage-decode-result', front: 'Name the two independent error-filtering mechanisms used at the decode stage.', back: 'Consensus/majority filtering across overlapping reads, and parity-based error checking.', tags: ['decode']},
    {id: 'storage-decode-result-f2', topicId: 'storage-decode-result', front: 'What is the final "Result" of the DNA data storage pipeline?', back: 'The original binary digital file, reconstructed after decoding.', tags: ['decode']},
    {id: 'storage-capacity-implications-f1', topicId: 'storage-capacity-implications', front: 'Is DNA storage currently better suited to archival ("cold") storage or frequently updated ("hot") storage?', back: 'Archival ("cold") storage — infrequently accessed, long-term data.', tags: ['implications']},
    {id: 'storage-capacity-implications-f2', topicId: 'storage-capacity-implications', front: 'What classical information-theory concept is the overlapping-fragment redundancy scheme analogous to?', back: 'Repetition or erasure coding for error resilience.', tags: ['implications']}
  ];

  var questions = [
    {id: 'storage-why-dna-q1', topicIds: ['storage-why-dna'], stem: 'DNA data storage is primarily motivated by which two properties of DNA?',
      options: [
        {text: 'Fast read/write speed and low cost', correct: false, rationale: 'These are current weaknesses of DNA storage, not its motivating strengths.'},
        {text: 'High information density and long-term chemical stability', correct: true, rationale: 'Correct — these are the properties that make DNA attractive despite its current cost/speed limitations.'},
        {text: 'Its use of a binary (2-symbol) code', correct: false, rationale: 'DNA uses a 4-letter code, not binary — encoding schemes must convert between the two.'},
        {text: 'Its ability to self-replicate without any sequencing', correct: false, rationale: 'Reading stored DNA data still requires sequencing; self-replication is not the storage mechanism used here.'}
      ], difficulty: 'easy', topicCheck: false},
    {id: 'storage-why-dna-q2', topicIds: ['storage-why-dna'], stem: 'Compared to conventional electronic storage, DNA data storage today is best described as:',
      options: [
        {text: 'Faster and cheaper for everyday, frequently accessed data', correct: false, rationale: 'DNA storage is currently slower and more expensive for active use; it is more suited to archival storage.'},
        {text: 'Denser and more durable, but slower and currently more costly', correct: true, rationale: 'Correct — this trade-off is why DNA storage is targeted at archival use cases.'},
        {text: 'Identical in every practical respect to flash memory', correct: false, rationale: 'DNA storage differs substantially in speed, cost, and access patterns from flash memory.'},
        {text: 'Only theoretical, with no real synthesis/sequencing demonstrations', correct: false, rationale: 'Goldman et al. (2013) and other studies have empirically demonstrated working DNA storage pipelines.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'storage-encode-q1', topicIds: ['storage-encode'], stem: 'How does the Goldman et al. encoding scheme guarantee no homopolymer runs?',
      options: [
        {text: 'By checking the final DNA sequence afterward and manually correcting any runs found', correct: false, rationale: 'The scheme prevents runs by construction during encoding, not by post-hoc correction.'},
        {text: 'By always mapping each ternary digit to a base different from the immediately preceding base', correct: true, rationale: 'Correct — this rule makes homopolymer runs structurally impossible.'},
        {text: 'By only using two of the four DNA bases', correct: false, rationale: 'The scheme uses all four bases, just never repeating the immediately preceding one.'},
        {text: 'By synthesizing each base twice for redundancy', correct: false, rationale: 'This is not the described mechanism; redundancy comes from overlapping fragments, not repeated single-base synthesis.'}
      ], difficulty: 'hard', topicCheck: false},
    {id: 'storage-encode-q2', topicIds: ['storage-encode'], stem: 'Why does the Encode stage convert the binary file into base-3 before assigning DNA bases?',
      options: [
        {text: 'Because DNA can only be sequenced in groups of three bases', correct: false, rationale: 'This is not the actual reason; it relates to codon biology, not DNA-storage encoding logic.'},
        {text: 'Because a ternary digit can always be mapped to one of the remaining bases (excluding the previous one), enabling homopolymer-free encoding', correct: true, rationale: 'Correct — this is the specific design reason for using a ternary intermediate.'},
        {text: 'Because base-3 uses less physical DNA per bit than binary', correct: false, rationale: 'This is not the stated rationale; the rationale is about avoiding homopolymers, not raw density.'},
        {text: 'Because sequencing machines cannot read binary-derived codes', correct: false, rationale: 'This is not a real technical constraint; the base-3 step is a deliberate error-avoidance design choice.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'storage-synthesize-ship-store-q1', topicIds: ['storage-synthesize-ship-store'], stem: 'What is the main purpose of splitting the encoded sequence into many overlapping fragments?',
      options: [
        {text: 'To make the file smaller overall', correct: false, rationale: 'Fragmenting does not reduce the total information content; it is about synthesis feasibility and redundancy.'},
        {text: 'To provide redundancy so each file position is covered by multiple independent fragments', correct: true, rationale: 'Correct — this overlap is exploited later during error-correcting decoding.'},
        {text: 'To avoid using reverse-complement strands entirely', correct: false, rationale: 'Reverse-complement strands are still used, alternating with forward-strand fragments, for a separate protective reason.'},
        {text: 'To eliminate the need for indexing metadata', correct: false, rationale: 'Indexing metadata is still required to reassemble fragments correctly; fragmentation does not remove this need.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'storage-synthesize-ship-store-q2', topicIds: ['storage-synthesize-ship-store'], stem: 'Why does the pipeline alternate fragments between the forward strand and its reverse complement?',
      options: [
        {text: 'To double the total amount of data stored', correct: false, rationale: 'This does not add new information; it is a protective, not data-doubling, measure.'},
        {text: 'To prevent direction-dependent (systematic) errors from corrupting the same information repeatedly', correct: true, rationale: 'Correct — this is the specific protective purpose described for reverse-complement alternation.'},
        {text: 'Because reverse-complement strands are easier to synthesize than forward strands', correct: false, rationale: 'This is not the stated rationale for the alternation.'},
        {text: 'To make homopolymer runs impossible', correct: false, rationale: 'Homopolymer avoidance is achieved at the Encode stage, not through strand-orientation alternation.'}
      ], difficulty: 'hard', topicCheck: true},
    {id: 'storage-sequence-q1', topicIds: ['storage-sequence'], stem: 'What does "paired-end" sequencing, as used to read back the stored DNA, involve?',
      options: [
        {text: 'Sequencing each fragment once, from a single starting end', correct: false, rationale: 'This describes single-end sequencing, not paired-end.'},
        {text: 'Sequencing each fragment from both ends, producing two related reads', correct: true, rationale: 'Correct — this aids alignment and helps flag inconsistent/erroneous reads.'},
        {text: 'Sequencing two entirely different DNA samples in parallel for comparison', correct: false, rationale: 'This is not what "paired-end" refers to in this context.'},
        {text: 'Reading the DNA sequence twice with identical primers to double-check', correct: false, rationale: 'Paired-end sequencing specifically reads from both ends of a fragment, not the same end twice.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'storage-sequence-q2', topicIds: ['storage-sequence'], stem: 'Where does the read redundancy exploited during decoding actually originate?',
      options: [
        {text: 'From the sequencing step itself, which inherently duplicates every read', correct: false, rationale: 'Sequencing just reads out the fragment pool; it does not itself create the redundancy.'},
        {text: 'From the overlapping-fragment design chosen at the Synthesize/Ship & Store stage', correct: true, rationale: 'Correct — sequencing exploits redundancy that was deliberately built in earlier in the pipeline.'},
        {text: 'From reverse transcription of the original mRNA', correct: false, rationale: 'This pipeline stores and reads DNA directly; reverse transcription of mRNA is unrelated.'},
        {text: 'From random natural mutation during DNA storage', correct: false, rationale: 'Mutation would introduce errors, not the deliberate redundancy that supports error correction.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'storage-decode-result-q1', topicIds: ['storage-decode-result'], stem: 'Which two mechanisms does the Decode stage use together to filter out likely sequencing errors?',
      options: [
        {text: 'Consensus/majority voting across overlapping reads, and parity-based checks', correct: true, rationale: 'Correct — these two independent mechanisms combine to catch more errors than either alone.'},
        {text: 'Only re-synthesizing the DNA from scratch until it matches', correct: false, rationale: 'Decoding works computationally on the sequencing reads; it does not require re-synthesizing DNA.'},
        {text: 'Only comparing to a reference human genome', correct: false, rationale: 'This pipeline stores arbitrary digital files, unrelated to human reference genome alignment.'},
        {text: 'Manually inspecting each base by eye', correct: false, rationale: 'Error filtering is algorithmic (consensus + parity), not manual inspection.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'storage-decode-result-q2', topicIds: ['storage-decode-result'], stem: 'Besides filtering errors, what else must the Decode stage do before producing the final "Result"?',
      options: [
        {text: 'Reverse the strand-orientation and base-3-to-binary conversion steps from Encode', correct: true, rationale: 'Correct — decoding must undo the earlier transformations to recover the original binary file.'},
        {text: 'Nothing else — error filtering alone reconstructs the file', correct: false, rationale: 'The ternary-to-binary conversion and orientation normalization are also required steps.'},
        {text: 'Translate the DNA sequence into a protein', correct: false, rationale: 'This pipeline stores digital data, not a protein-coding sequence; there is no translation step.'},
        {text: 'Re-run PCR indefinitely until zero errors remain', correct: false, rationale: 'PCR amplifies DNA but does not itself perform the algorithmic decoding steps described.'}
      ], difficulty: 'medium', topicCheck: true},
    {id: 'storage-capacity-implications-q1', topicIds: ['storage-capacity-implications'], stem: 'The overlapping-fragment redundancy and parity-check design in DNA storage pipelines is most analogous to which concept from classical information theory?',
      options: [
        {text: 'Encryption', correct: false, rationale: 'Encryption concerns confidentiality, not redundancy-based error correction.'},
        {text: 'Error-correcting/erasure codes and checksums', correct: true, rationale: 'Correct — overlapping redundancy and parity checks are conceptually similar to repetition/erasure coding and checksums used in digital systems.'},
        {text: 'Data compression', correct: false, rationale: 'Compression reduces redundancy to save space; this pipeline deliberately adds redundancy for error resilience.'},
        {text: 'Public-key cryptography', correct: false, rationale: 'This is unrelated to the redundancy/parity mechanisms described.'}
      ], difficulty: 'medium', topicCheck: false},
    {id: 'storage-capacity-implications-q2', topicIds: ['storage-capacity-implications'], stem: 'Given its current cost and speed profile, DNA data storage is best suited for:',
      options: [
        {text: 'Frequently updated, low-latency "hot" storage', correct: false, rationale: 'Slow read/write speed makes DNA storage poorly suited to frequent, low-latency access.'},
        {text: 'Long-term, infrequently accessed "cold" archival storage', correct: true, rationale: 'Correct — this matches DNA storage’s strengths (density, longevity) and current weaknesses (speed, cost).'},
        {text: 'Real-time transactional databases', correct: false, rationale: 'This use case demands fast, frequent read/write access, which current DNA storage cannot efficiently provide.'},
        {text: 'It has no practical use case at all', correct: false, rationale: 'Archival storage is a genuine, actively researched use case for DNA data storage.'}
      ], difficulty: 'medium', topicCheck: true}
  ];

  MOLBIO.registerLecture(lecture, topics, flashcards, questions);
})();
