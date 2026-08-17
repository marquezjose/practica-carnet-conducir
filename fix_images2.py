import json
import shutil
import os

# New exact mapping based on visual descriptions
mapping = {
    6: {'main': 'img-002.png'},
    22: {'main': 'img-004.png'},
    23: {'main': 'img-005.png'},
    24: {'main': 'img-006.png'},
    25: {'main': 'img-007.png'},
    29: {'main': 'img-008.png'},
    34: {'main': 'img-009.png'},
    53: {'opts': {0: 'img-015.png', 1: 'img-018.png'}},
    58: {'opts': {0: 'img-012.png', 1: 'img-013.png'}},
    59: {'main': 'img-014.png'},
    77: {'main': 'img-010.png'},
    82: {'main': 'img-020.png'},
    124: {'main': 'img-021.png'},
    130: {'main': 'img-022.png'},
    131: {'main': 'img-028.png'},
    132: {'main': 'img-029.png'},
    133: {'main': 'img-024.png'},
    134: {'main': 'img-023.png'},
    135: {'main': 'img-025.png'},
    136: {'main': 'img-026.png'},
    137: {'main': 'img-030.png'},
    153: {'main': 'img-031.png'}
}

with open('data/questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

# Clear old mappings
for q in questions:
    if 'image' in q:
        del q['image']
    if 'optionsImages' in q:
        del q['optionsImages']

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

print("Images mapped correctly and JSON updated.")
