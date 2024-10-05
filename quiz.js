// Function to check the user's answer
function checkAnswer() {
    // The correct answer for the quiz
    const correctAnswer = "4";
    
    // Get the user's selected answer using querySelector for the checked radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // If correct, display positive feedback
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        // If incorrect, display try again message
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
