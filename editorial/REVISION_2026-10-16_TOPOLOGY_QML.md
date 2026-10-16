# Textbook revision: many-body, relativity, topology, and quantum learning

Date: 2026-10-16. Scope: instructor-confirmed content revision to `main`, while the historical translation and pre-instructor-supplement snapshots remain available in protected branches.

## Student-visible changes

- Consolidated former separate Chapters 6–7 into **Chapter 6, Quantum Many-Body Systems**, preserving all derivations from the instructor's handwritten notes: permutations; symmetric/antisymmetric states; boson and fermion Fock bases; CCR/CAR; one- and two-body operators.
- Replaced the original Chinese-source relativistic chapter with **Chapter 7, Relativistic Quantum Mechanics**, using the instructor's uploaded eight-page handwritten OneNote PDF `Relativistic QM(1).pdf` as the controlling source. Sections follow the handwriting: Schrödinger and spin, Pauli equation derived via minimal coupling, relativistic mass shell and Klein–Gordon equation, Clifford algebra and four-spinor Dirac equation, low-velocity limit to Pauli, physical summary. Details for sign-accurate electromagnetic coupling and the negative sign of the relativistic $p^4$ correction were checked against the appropriate operator algebra, and a brief free-spinor example was included as mathematical context. The source handwritten file is intentionally not committed.
- Added **Chapter 8, Topological Condensed Matter Physics**, from tight-binding bands to an explicit SSH calculation, winding, chiral symmetry, Zak phase, edge modes, Berry curvature and two-dimensional Chern insulators, the Qi--Wu--Zhang phase diagram, the Hall response, time-reversal $$\mathbb Z_2$ classes and Thouless pumping. The source background is Asbóth--Oroszlány--Pályi (2016), Zak (1989), TKNN (1982), Haldane (1988), and Qi--Zhang (2011), with verified DOIs.
- Added **Chapter 9, Quantum Neural Networks and Machine Learning**, from classical supervised learning to explicit one- and two-qubit circuits, gradient descent and parameter shift, data encoding and Fourier representations, quantum kernels, loss-noise-shot accounting, entanglement witnesses and cautious resource comparison. Sources include Cerezo et al. (2021), Schuld et al. (2021), Abbas et al. (2021), Havlíček et al. (2019), McClean et al. (2018), and Larocca et al. (2025). Research progress, trainability and quantum advantage are explicitly distinguished.
- Removed the student-visible `Ten-minute lecture route` paragraph and any new authorial/editorial progress statements.
- Simplified the title page to the book title, **Instructor: Kangqiao LIU**, and the date.
- Added a small light-gray © 2026 Kangqiao LIU notice in every page's bottom margin; added `COPYRIGHT.md` and an all-rights-reserved `LICENSE` notice to the repository.
- Retained the single-page globally consistent *List of Notation*. New technical variables are introduced in their sections instead of expanding the printed list chapter by chapter.

## Scientific conventions

- SSH Fourier convention: `a_n=N^{-1/2} sum_k exp(+ikn) a_k`, `q(k)=t_1+t_2 exp(-ik)`. Winding uses the phase of `q*(k)` so $\nu=+1$ for $t_2>t_1$ and $\gamma_{Zak}=\pi\nu$ modulo $2\pi$.
- The two-band lower-band Berry curvature is $+\frac12\mathbf n\cdot(\partial_{k_x}\mathbf n\times\partial_{k_y}\mathbf n)$ in the convention $\mathcal A=i\langle u|\partial u\rangle$; the Qi--Wu--Zhang model phases are $(0,+1,-1,0)$ as $M$ crosses $-2,0,2$.
- Relativistic calculations use the shared book's Gaussian electromagnetic coupling $\boldsymbol\pi=\mathbf p-(q/c)\mathbf A$ and display $\hbar,c$ explicitly; scalar field Klein--Gordon equation uses signature $(+---)$.
- Quantum ML uses the explicit $R_\mu(\theta)=\exp(-i\theta\sigma_\mu/2)$ convention. The parameter-shift formula has shifts $\pm\pi/2$ and coefficient $1/2$. A quantum circuit's presence by itself establishes neither training success nor quantum advantage.
- Explicit citations are introduced only in the contemporary chapters, and 11 bibliographic items are defined in `references/topology_qml.bib`. All DOI fields and links were checked against journal/publisher metadata.

## Checks and limits

`latexmk` compiles the book including BibTeX citations and the reference list. `scripts/check_new_chapters.py` runs independent numerical sanity checks of the SSH winding, the Chern-number phase diagram, elementary quantum-learning identities and major repository structure. `scripts/check_notation_consistency.py` validates the notation policy, with merged many-body paths updated and one-page output verified. The PDF should be visually inspected at the title, one-page notation, handout-relativity and the two new chapter openings and mathematical diagrams. Preserve a new snapshot branch before additional textbook changes.

The new topology and QML chapters are original pedagogical exposition using the references noted above. Their depth provides preliminary mathematical foundations with representative physical models. More advanced material (fractional phases, non-Abelian topology, quantum error correction, rigorous QML advantage) can be added later as separate chapters or subsections following instructor review.