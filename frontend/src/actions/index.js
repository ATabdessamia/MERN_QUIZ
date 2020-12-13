import axios from "axios";

export const fetchQuestions = () => async (dispatch) => {
  const { data } = await axios.get("/api/questions");
  dispatch({ type: "FETCH_DATA", payload: data.data.questions });
};
