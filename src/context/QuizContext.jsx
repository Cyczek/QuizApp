import { createContext, useState, useEffect } from "react";
import { getCategories, getQuestions } from "../api/TriviaAPI";

// Provider udostępniający stan całej aplikacji
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

  // Pobiera kategorie przy starcie
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

  // Uruchamia quiz
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
      // Obsługa błędów
      if (e.type === 1) {
        setError(e.message);
        setErrorDetails(e.details);
      } else if (e.type === 2) {
        setError(e.message);
      } else {
        setError("Nie udało się uruchomić quizu.");
      }
      return false;
    } finally {
      setLoading(false);
    }
  }

  // Czyści błędy
  function clearError() {
    setError(null);
    setErrorDetails(null);
  }

  // Obsługuje wybór odpowiedzi
  function selectAnswer(answer) {
    if (!questions[index]) return;
    if (questions[index].correct === answer) setScore((s) => s + 1);
    setIndex((i) => i + 1);
  }

  // Resetuje quiz
  function resetQuiz() {
    setQuestions([]);
    setIndex(0);
    setScore(0);
    setQuizStarted(false);
    setError(null);
    setErrorDetails(null);
  }

  // Udostępnia dane przez Provider
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
