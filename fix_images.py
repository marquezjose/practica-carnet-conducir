import json
import shutil
import os

os.makedirs('data/img', exist_ok=True)

# Mapping of Question ID -> main image filename from pdfimages
# or options mapping
mapping = {
    6: {'main': 'img-001.png'},
    22: {'main': 'img-002.png'},
    23: {'main': 'img-003.png'},
    24: {'main': 'img-004.png'},
    25: {'main': 'img-005.png'},
    29: {'main': 'img-006.png'},
    34: {'main': 'img-007.png'},
    53: {'opts': {0: 'img-008.png', 1: 'img-009.png'}},
    58: {'opts': {0: 'img-010.png', 1: 'img-011.png'}},
    59: {'main': 'img-012.png'},
    77: {'main': 'img-019.png'},
    82: {'main': 'img-020.png'},
    124: {'main': 'img-021.png'},
    130: {'main': 'img-022.png'},
    131: {'main': 'img-023.png'},
    132: {'main': 'img-024.png'},
    133: {'main': 'img-025.png'},
    134: {'main': 'img-026.png'},
    135: {'main': 'img-028.png'},
    136: {'main': 'img-029.png'},
    137: {'main': 'img-030.png'},
    153: {'main': 'img-031.png'}
}

with open('data/questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

for q in questions:
    q_id = q['id']
    if q_id in mapping:
        info = mapping[q_id]
        if 'main' in info:
            src = f"images_extracted/{info['main']}"
            dst = f"data/img/q{q_id}.png"
            if os.path.exists(src):
                shutil.copy(src, dst)
                q['image'] = f"data/img/q{q_id}.png"
        if 'opts' in info:
            q['optionsImages'] = {}
            for opt_idx, img_name in info['opts'].items():
                src = f"images_extracted/{img_name}"
                dst = f"data/img/q{q_id}_opt{opt_idx}.png"
                if os.path.exists(src):
                    shutil.copy(src, dst)
                    q['optionsImages'][str(opt_idx)] = dst

with open('data/questions.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print("Images copied and JSON updated.")
