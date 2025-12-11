import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

// Upraszcza dostęp do Contextu

export default function useQuiz() {
  return useContext(QuizContext);
}
