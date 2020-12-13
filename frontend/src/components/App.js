import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";
import { fetchQuestions } from "../actions/index";

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <div className="d-flex justify-content-center align-items-center  m-5 text-white bg-easy p-5 w-50 mx-auto shadow-lg p-3 mb-5 roundedw">
      <Card questions={questions} />
    </div>
  );
};

export default App;
