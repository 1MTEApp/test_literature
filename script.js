document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let totalScore = 0;

    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            totalScore += parseInt(selectedAnswer.value);
        }
    }

    document.getElementById('result').innerText = `Ваш результат: ${totalScore} баллов из 100`;
});
