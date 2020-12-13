import React, { useState } from "react";

import Score from "./Score";
const Card = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  if (!questions[current]) {
    return <div>Loading...</div>;
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = current + 1;
    if (nextQuestion < questions.length) {
      setCurrent(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      {showScore ? (
        <Score score={score} length={questions.length} />
      ) : (
        <div className="row">
          <div className="col">
            <h3 className="megrim">
              Question {current + 1}/{questions.length}
            </h3>
            <p className="font-weight-bold">
              {questions[current].questionText}
            </p>
          </div>
          <div className="col d-flex flex-column ml-5 ali megrim ">
            {questions[current].answerOptions.map((answerOption) => {
              return (
                <button
                  className="btn btn-outline-light font-weight-bold m-2 btn-block px-5"
                  type="button"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
