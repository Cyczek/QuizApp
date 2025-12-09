import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function useQuiz() {
  return useContext(QuizContext);
}
