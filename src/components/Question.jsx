const Question = ({ currentIndex, questions, handleAnswerClick }) => {
  return (
    <div className="question-container">
      <div>
        <p>
          Question {currentIndex + 1}{" "}
          <span className="text-sm">/ {questions.length}</span>
        </p>
        <h1>{questions[currentIndex].questionText}</h1>
      </div>

      <div className="answer-container">
        {questions[currentIndex].answerOptions.map((answer, key) => {
          return (
            <button
              key={key}
              onClick={() => handleAnswerClick(answer.isCorrect)}
            >
              {answer.answerText}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
