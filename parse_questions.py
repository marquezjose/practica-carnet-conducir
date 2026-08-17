import json
import re

def parse_preguntero(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    questions = []
    current_q = None
    
    # Regex for question start: digit(s) followed by )
    q_pattern = re.compile(r'^(\d+)\)\s*(.*)')
    # Regex for option: optional 'X', spaces, letter), text
    # It can be 'X a)', ' X a)', 'a)', '  b)', etc.
    opt_pattern = re.compile(r'^\s*(X)?\s*([a-d])\)\s*(.*)')
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Ignore page breaks and headers
        if line.startswith('\x0c') or line.startswith('PREGUNTERO') or line.startswith('MUNICIPALIDAD') or line.startswith('NORMATIVAS') or line.startswith('Nota:') or line.startswith('CLASES NO'):
            continue
            
        q_match = q_pattern.match(line)
        if q_match:
            if current_q and current_q['options']:
                questions.append(current_q)
            
            q_id = int(q_match.group(1))
            if q_id > 162:
                break
                
            q_text = q_match.group(2)
            current_q = {
                'id': q_id,
                'question': q_text,
                'options': [],
                'correctAnswerIndex': -1
            }
            continue
            
        opt_match = opt_pattern.match(line)
        if opt_match and current_q is not None:
            is_correct = bool(opt_match.group(1))
            opt_letter = opt_match.group(2)
            opt_text = opt_match.group(3)
            
            current_q['options'].append(opt_text)
            if is_correct:
                current_q['correctAnswerIndex'] = len(current_q['options']) - 1
            continue
            
        # If it's a continuation of the previous text (question or option)
        if current_q:
            if len(current_q['options']) > 0:
                # Continuation of an option
                current_q['options'][-1] += " " + line
            else:
                # Continuation of the question text
                current_q['question'] += " " + line

    if current_q and current_q['options']:
        questions.append(current_q)
        
    return questions

if __name__ == '__main__':
    questions = parse_preguntero('docs/preguntero.txt')
    with open('data/questions.json', 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    print(f"Extracted {len(questions)} questions.")
