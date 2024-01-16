import { useState } from "react";
import questions from "./data";
import Question from "./components/Question";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  {
    /* This function is called when an answer is clicked. */
  }
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex === questions.length - 1) {
      setIsFinished(true);
    }

    setCurrentIndex((prev) => prev + 1);
  };

  return isFinished ? (
    <div className="question-container">
      <h2>
        You scored {score} out of {questions.length} 🎉
      </h2>
    </div>
  ) : (
    <Question
      currentIndex={currentIndex}
      handleAnswerClick={handleAnswerClick}
      questions={questions}
    />
  );
};

export default App;
