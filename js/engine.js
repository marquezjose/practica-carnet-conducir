class QuizEngine {
    constructor() {
        this.questions = [];
        this.config = null;
        this.currentSession = null;
    }

    async init() {
        try {
            const [qRes, cRes] = await Promise.all([
                fetch('data/questions.json'),
                fetch('data/config.json')
            ]);
            this.questions = await qRes.json();
            this.config = await cRes.json();
            return true;
        } catch (error) {
            console.error("Error loading data:", error);
            return false;
        }
    }

    startPractice() {
        this.currentSession = {
            mode: 'practice',
            questions: [...this.questions], // Copy all questions
            currentIndex: 0,
            score: 0,
            correctAnswers: 0,
            incorrectAnswers: 0
        };
        // Shuffle questions for practice
        this._shuffleArray(this.currentSession.questions);
        return this.getCurrentQuestion();
    }

    startSimulation() {
        if (!this.config || !this.config.simulation) {
            throw new Error("Configuration not loaded");
        }
        const { questionCount } = this.config.simulation;
        
        let simQuestions = [...this.questions];
        this._shuffleArray(simQuestions);
        simQuestions = simQuestions.slice(0, questionCount);

        this.currentSession = {
            mode: 'simulation',
            questions: simQuestions,
            currentIndex: 0,
            score: 0,
            correctAnswers: 0,
            incorrectAnswers: 0,
            userAnswers: []
        };
        return this.getCurrentQuestion();
    }

    getCurrentQuestion() {
        if (!this.currentSession) return null;
        if (this.currentSession.currentIndex >= this.currentSession.questions.length) {
            return null; // End of session
        }
        return this.currentSession.questions[this.currentSession.currentIndex];
    }

    getProgress() {
        if (!this.currentSession) return null;
        return {
            current: this.currentSession.currentIndex + 1,
            total: this.currentSession.questions.length
        };
    }

    answerQuestion(selectedIndex) {
        if (!this.currentSession) return null;

        const question = this.getCurrentQuestion();
        const isCorrect = question.correctAnswerIndex === selectedIndex;

        if (isCorrect) {
            this.currentSession.correctAnswers++;
        } else {
            this.currentSession.incorrectAnswers++;
        }

        if (this.currentSession.mode === 'simulation') {
            this.currentSession.userAnswers.push({
                questionId: question.id,
                isCorrect: isCorrect
            });
        }

        this.currentSession.currentIndex++;

        return {
            isCorrect,
            correctAnswerIndex: question.correctAnswerIndex,
            isFinished: this.currentSession.currentIndex >= this.currentSession.questions.length
        };
    }

    getResult() {
        if (!this.currentSession) return null;
        
        const total = this.currentSession.questions.length;
        const percentage = Math.round((this.currentSession.correctAnswers / total) * 100);
        let passed = true;

        if (this.currentSession.mode === 'simulation') {
            passed = percentage >= this.config.simulation.passingPercentage;
        }

        return {
            mode: this.currentSession.mode,
            total,
            correctAnswers: this.currentSession.correctAnswers,
            incorrectAnswers: this.currentSession.incorrectAnswers,
            percentage,
            passed
        };
    }

    _shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
