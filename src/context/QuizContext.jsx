import { createContext, useState, useEffect } from "react";
import { getCategories, getQuestions } from "../api/TriviaAPI";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorDetails, setErrorDetails] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(10);
  const [type, setType] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    async function fetchCats() {
      try {
        const cats = await getCategories();
        setCategories(cats);
      } catch (e) {
        setError("Błąd pobierania kategorii.");
      }
    }
    fetchCats();
  }, []);

  async function startQuiz() {
    setLoading(true);
    setError(null);
    setErrorDetails(null);
    setQuizStarted(false);

    try {
      const q = await getQuestions(difficulty, category, amount, type);
      setQuestions(q);
      setIndex(0);
      setScore(0);
      setQuizStarted(true);
      return true;
    } catch (e) {
      if (e.type === 1) {
        setError(e.message);
        setErrorDetails(e.details);
      }

      return false;
    } finally {
      setLoading(false);
    }
  }

  function clearError() {
    setError(null);
    setErrorDetails(null);
  }

  function selectAnswer(answer) {
    if (!questions[index]) return;
    if (questions[index].correct === answer) setScore((s) => s + 1);
    setIndex((i) => i + 1);
  }

  function resetQuiz() {
    setQuestions([]);
    setIndex(0);
    setScore(0);
    setQuizStarted(false);
    setError(null);
    setErrorDetails(null);
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        loading,
        error,
        errorDetails,
        clearError,
        index,
        score,
        difficulty,
        setDifficulty,
        category,
        setCategory,
        categories,
        startQuiz,
        selectAnswer,
        amount,
        setAmount,
        type,
        setType,
        quizStarted,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
