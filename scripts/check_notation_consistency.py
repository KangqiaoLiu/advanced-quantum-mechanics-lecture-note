#!/usr/bin/env python3
"""Verify whole-book notation conventions without dependencies.

Usage:
  python scripts/check_notation_consistency.py
  python scripts/check_notation_consistency.py --pdf main.pdf

With --pdf, optional PyMuPDF (fitz) validates that the printed notation
occupies exactly one page before Chapter 1. The CI source-only mode needs
only the Python standard library.
"""
import argparse
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def content(path):
    return (ROOT / path).read_text(encoding="utf-8")


def check(condition, description):
    if not condition:
        raise AssertionError(description)
    print(f"PASS: {description}")


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--pdf", type=Path, help="also check the printed PDF front matter")
    args = p.parse_args()

    main_tex = content("main.tex")
    page = content("frontmatter/notation.tex")
    permutation = content("chapters/ch06/01_permutation_symmetry.tex")
    symmetrization = content("chapters/ch06/02_symmetrized_states.tex")
    bosons = content("chapters/ch06/03_bosons.tex")
    fermions = content("chapters/ch06/04_fermions.tex")
    berry = content("chapters/ch02/07a_berry_phase.tex")
    measurement = content("chapters/ch03/03a_quantum_measurement.tex")
    ordering = content("chapters/ch04/07_interaction_picture.tex")
    density = content("chapters/ch03/03_density_operators.tex")

    check(main_tex.count(r"\newcommand{\parityop}{\op{\Pi}}") == 1,
          "parity has one central mathematical definition")
    check(main_tex.count(r"\newcommand{\timeorder}{\mathcal{T}}") == 1,
          "time ordering has one central mathematical definition")
    check(page.count(r"\chapter*{List of Notation}") == 1 and page.count(r"\begin{tabular}") == 1,
          "student notation comprises one table and one heading")
    check(r"\begin{longtable}" not in page and not re.search(r"\bChapter [1-8]\b", page),
          "student notation has no chapter-specific sections")
    rows = [s for s in page.splitlines() if " & " in s and s.rstrip().endswith(r"\\")]
    # The header's " & " is included, so 27 data rows plus one header.
    check(len(rows) == 28, "27 compact global-notation entries")
    check(r"\op P_{ij}" in page and r"\timeorder" in page,
          "student page uses shared particle-exchange and time-ordering conventions")
    check(r"\op P_{ij}" in permutation and r"\op{\mathcal P}_\pm" in symmetrization,
          "Chapter 6 uses consistent exchange operators and symmetrization projectors")
    check(r"\op{\mathcal O}" in bosons and r"\op{\mathcal O}" in fermions
          and r"\op T" not in bosons + fermions,
          "many-body operators do not collide with scattering T")
    check(r"\timeorder" in measurement and r"\vect{\mathcal A}" in berry,
          "generalized measurement and Berry-phase additions use established notation")
    check(ordering.count(r"\timeorder") == 4 and not re.search(r"(?<!\\)T\\left\(", ordering),
          "Chapter 4 Dyson time-ordering uses only the canonical symbol")
    check("[A]" not in density and not re.search(r"\[s_[xyzi]\]", density)
          and density.count(r"\langle A\rangle_\rho") >= 4,
          "Chapter 3 statistical expectations use a consistent angular-bracket convention")
    check(r"\operatorname{tr}(\op\rho\op A)" in density,
          "mixed-state trace formula is preserved")

    if args.pdf:
        try:
            import fitz
        except ImportError as ex:
            raise SystemExit("Install PyMuPDF to use --pdf") from ex
        pdf = fitz.open(str(args.pdf))
        check(len(pdf) >= 100, "complete book PDF available")
        check("List of Notation" in pdf[3].get_text() and
              "Chapter 1" in pdf[4].get_text() and
              "List of Notation" not in pdf[4].get_text(),
              "notation occupies exactly one standalone PDF page (physical page 4)")
    print("Notation consistency: all selected checks passed.")


if __name__ == "__main__":
    main()