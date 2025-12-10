import { useNavigate } from "react-router-dom";
import useQuiz from "../hooks/useQuiz";
import Header from "../components/Header";
import CategorySelector from "../components/CategorySelector";
import DifficultySelector from "../components/DifficultySelector";
import LoadingSpinner from "../components/LoadingSpinner";
import AmountSelector from "../components/AmountSelector";
import TypeSelector from "../components/TypeSelector";

export default function Home() {
  const { startQuiz, loading, error, errorDetails, clearError } = useQuiz();
  const navigate = useNavigate();

  async function handleStart() {
    const success = await startQuiz();
    if (success) navigate("/quiz");
  }

  return (
    <div className="home-container">
      <Header />
      <CategorySelector />
      <DifficultySelector />
      <AmountSelector />
      <TypeSelector />

      {error && (
        <div className="error-message">
          <strong>Błąd:</strong> {error}
          {errorDetails && (
            <div>
              <div>
                Wybrana trudność: <strong>{errorDetails.difficulty}</strong>
              </div>
              <div>
                Wybrana kategoria:
                <strong>{errorDetails.category || "dowolna"}</strong>
              </div>
              <div>
                Żądana liczba pytań:
                <strong>{errorDetails.amountRequested}</strong>
              </div>
              <div>
                Typ pytań:
                <strong>{errorDetails.typeRequested || "dowolny"}</strong>
              </div>
              <div>Spróbuj zmienić liczbę pytań, kategorię lub trudność.</div>
            </div>
          )}
          <button onClick={clearError}>OK</button>
        </div>
      )}

      <button onClick={handleStart}>Start Quiz</button>

      {loading && <LoadingSpinner />}
    </div>
  );
}
