#!/usr/bin/env python3
"""Create source-PDF-page -> English-LaTeX-file traceability inventory.

Run locally (do NOT check in the copyrighted source PDF):
    python scripts/build_source_coverage.py '/path/to/source.pdf'

The CSV records *coverage mapping*; it does not certify sentence/formula fidelity.
"""
import csv
import hashlib
import sys
from pathlib import Path
import fitz

ROOT=Path(__file__).resolve().parents[1]
MAP={
1:[(1,3,'ch01/01_stern_gerlach.tex'),(4,6,'ch01/02_vector_space.tex'),(7,9,'ch01/03_eigensystems.tex'),(9,16,'ch01/04_measurement.tex'),(16,18,'ch01/05_representation.tex'),(19,24,'ch01/06_position_momentum.tex')],
2:[(25,30,'ch02/01_time_evolution.tex'),(31,34,'ch02/02_pictures_ehrenfest.tex'),(35,40,'ch02/03_harmonic_oscillator.tex'),(41,42,'ch02/04_coherent_states.tex'),(42,47,'ch02/05_coordinate_wkb.tex'),(48,52,'ch02/06_path_integral.tex'),(53,62,'ch02/07_gauge_transformations.tex')],
3:[(62,65,'ch03/01_rotations.tex'),(66,71,'ch03/02_spin.tex'),(72,76,'ch03/03_density_operators.tex'),(77,83,'ch03/04_angular_momentum_spectrum.tex'),(84,86,'ch03/05_orbital_angular_momentum.tex'),(86,91,'ch03/06_angular_momentum_coupling.tex'),(92,96,'ch03/07_bell_inequality.tex')],
4:[(97,98,'ch04/01_stationary_perturbation.tex'),(98,103,'ch04/02_nondegenerate_perturbation.tex'),(104,109,'ch04/03_degenerate_perturbation.tex'),(109,111,'ch04/04_variational_method.tex'),(112,113,'ch04/05_strong_coupling.tex'),(113,118,'ch04/06_time_dependent_perturbation.tex'),(119,121,'ch04/07_interaction_picture.tex')],
5:[(121,123,'ch05/01_scattering_overview.tex'),(123,126,'ch05/02_green_functions.tex'),(127,132,'ch05/03_lippmann_schwinger.tex'),(133,134,'ch05/04_born_series.tex'),(134,139,'ch05/05_partial_waves.tex')],
6:[(140,141,'ch06/01_conserved_quantities.tex'),(141,144,'ch06/02_symmetry_conservation.tex'),(144,151,'ch06/03_identical_particle_symmetry.tex'),(151,153,'ch06/04_simple_identical_particle_systems.tex')],
7:[(154,155,'ch07/01_fock_space.tex'),(156,159,'ch07/02_commutation_relations.tex'),(160,168,'ch07/03_occupation_factors.tex'),(168,170,'ch07/04_additive_operators.tex'),(170,173,'ch07/05_field_operators.tex')],
8:[(174,177,'ch08/01_relativistic_wave_equations.tex'),(177,184,'ch08/02_relativistic_covariance.tex'),(184,186,'ch08/03_free_dirac_plane_waves.tex')],
}
# Pages 161-167 duplicate 154-160. Mapping to unique material is via replacement viewer page.
DUP={i:i-7 for i in range(161,168)}
SPECIAL={62:'Ch. 2 ends above the Ch. 3 heading',121:'Ch. 4 ends above the Ch. 5 heading',146:'Almost blank source page, continuation of question',180:'Source has one paragraph (continuation)',186:'Source has a final formula only'}

def main():
    if len(sys.argv)!=2:raise SystemExit('Pass path to original Chinese PDF (not distributed with repo).')
    pdf=fitz.open(sys.argv[1]);assert len(pdf)==186
    rows=[]
    for page in range(1,187):
        canonical=DUP.get(page,page)
        assignments=[]
        for ch,rs in MAP.items():
            for a,b,name in rs:
                if a<=canonical<=b:
                    path=ROOT/'chapters'/name
                    assert path.is_file(),f'Missing file {path}'
                    assignments.append('chapters/'+name)
        assert assignments,f'Unmapped source page {page}'
        t=pdf[page-1].get_text()
        if page in DUP:
            assert t==pdf[canonical-1].get_text(), f'Unexpected source duplicate mismatch page {page}'
        im=[x for x in pdf[page-1].get_image_info() if x['width']>=85 or x['height']>=85]
        rows.append({'viewer_page':page,'unique_page':canonical,'text_characters':len(t),'embedded_figure_candidates':len(im), 'latex_candidates':';'.join(assignments),'page_note':SPECIAL.get(page,''),'duplicate_of':canonical if page in DUP else ''})
    out=ROOT/'editorial/SOURCE_PAGE_COVERAGE.csv'
    with out.open('w',newline='',encoding='utf-8') as f:
        w=csv.DictWriter(f,fieldnames=rows[0].keys());w.writeheader();w.writerows(rows)
    print(f'Indexed {len(rows)} source viewer pages; {len(set(DUP.values()))} duplicated page pairs; {len(rows)-len(DUP)} unique viewer pages.')
    print(f'Found {sum(r["embedded_figure_candidates"] for r in rows)} source raster-figure candidates (may include math glyphs).')
    print('All PDF pages mapped to existing LaTeX files. Coverage is not full bilingual proofreading.')
    print(out)
if __name__=='__main__':main()