document.addEventListener('DOMContentLoaded', async () => {
    const engine = new QuizEngine();
    
    // UI Elements
    const loadingOverlay = document.getElementById('loading-overlay');
    const homeScreen = document.getElementById('home-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const btnPractice = document.getElementById('btn-practice');
    const btnSimulation = document.getElementById('btn-simulation');
    
    const questionText = document.getElementById('question-text');
    const questionImageContainer = document.getElementById('question-image-container');
    const questionImage = document.getElementById('question-image');
    const optionsContainer = document.getElementById('options-container');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    const feedbackContainer = document.getElementById('feedback-container');
    const btnNext = document.getElementById('btn-next');
    
    const resultTitle = document.getElementById('result-title');
    const scoreDisplay = document.getElementById('score-display');
    const resultCorrect = document.getElementById('result-correct');
    const resultIncorrect = document.getElementById('result-incorrect');
    const btnRestart = document.getElementById('btn-restart');

    let currentOptionsDivs = [];
    let isAnswered = false;

    // Initialize Engine
    const success = await engine.init();
    loadingOverlay.classList.add('hidden');
    
    if (success) {
        showScreen(homeScreen);
    } else {
        alert("Error cargando el banco de preguntas. Revisa la consola.");
    }

    // Event Listeners
    btnPractice.addEventListener('click', () => {
        engine.startPractice();
        renderCurrentQuestion();
        showScreen(questionScreen);
    });

    btnSimulation.addEventListener('click', () => {
        engine.startSimulation();
        renderCurrentQuestion();
        showScreen(questionScreen);
    });

    btnNext.addEventListener('click', () => {
        const question = engine.getCurrentQuestion();
        if (!question) {
            showResult();
        } else {
            renderCurrentQuestion();
        }
    });

    btnRestart.addEventListener('click', () => {
        showScreen(homeScreen);
    });

    // Core Functions
    function showScreen(screen) {
        homeScreen.classList.add('hidden');
        questionScreen.classList.add('hidden');
        resultScreen.classList.add('hidden');
        screen.classList.remove('hidden');
    }

    function renderCurrentQuestion() {
        const question = engine.getCurrentQuestion();
        const progress = engine.getProgress();
        
        isAnswered = false;
        feedbackContainer.classList.add('hidden');
        optionsContainer.innerHTML = '';
        currentOptionsDivs = [];

        // Update progress
        progressText.textContent = `Pregunta ${progress.current} de ${progress.total}`;
        const percentage = ((progress.current - 1) / progress.total) * 100;
        progressFill.style.width = `${percentage}%`;

        // Update question text and image
        questionText.textContent = question.question;
        
        if (question.image) {
            questionImage.src = question.image;
            questionImageContainer.classList.remove('hidden');
        } else {
            questionImageContainer.classList.add('hidden');
        }

        // Render options
        question.options.forEach((optText, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            
            let contentHtml = `<span>${optText}</span>`;
            if (question.optionsImages && question.optionsImages[index]) {
                contentHtml = `<img src="${question.optionsImages[index]}" alt="Opción ${index + 1}" style="max-width: 100px; max-height: 80px; margin-right: 15px; border-radius: 8px;">` + contentHtml;
            }
            
            btn.innerHTML = contentHtml;
            btn.addEventListener('click', () => handleOptionClick(index));
            optionsContainer.appendChild(btn);
            currentOptionsDivs.push(btn);
        });
    }

    function handleOptionClick(selectedIndex) {
        if (isAnswered) return;
        isAnswered = true;

        const result = engine.answerQuestion(selectedIndex);
        
        // Disable all buttons
        currentOptionsDivs.forEach(btn => btn.disabled = true);

        // Highlight selected
        const selectedBtn = currentOptionsDivs[selectedIndex];
        
        if (result.isCorrect) {
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('incorrect');
            // Show correct answer if wrong
            currentOptionsDivs[result.correctAnswerIndex].classList.add('correct');
        }

        // Update progress bar to include current question
        const progress = engine.getProgress();
        // getProgress returns progress for NEXT question, or end. We need to calculate carefully.
        // If finished, progress is null or current > total. 
        // We'll update it fully when moving to next, but let's just show feedback container.

        if (result.isFinished) {
            btnNext.textContent = 'Ver Resultado Final';
        } else {
            btnNext.textContent = 'Siguiente Pregunta';
        }
        
        feedbackContainer.classList.remove('hidden');
    }

    function showResult() {
        const result = engine.getResult();
        
        progressFill.style.width = `100%`; // Finish progress bar visually just in case

        if (result.mode === 'simulation') {
            resultTitle.textContent = result.passed ? '¡Aprobado!' : 'Desaprobado';
            resultTitle.className = `result-title ${result.passed ? 'passed' : 'failed'}`;
        } else {
            resultTitle.textContent = 'Práctica Finalizada';
            resultTitle.className = 'result-title';
        }

        scoreDisplay.textContent = `${result.percentage}%`;
        resultCorrect.textContent = result.correctAnswers;
        resultIncorrect.textContent = result.incorrectAnswers;

        showScreen(resultScreen);
    }
});
