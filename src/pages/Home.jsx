import { useNavigate } from "react-router-dom";
import useQuiz from "../hooks/useQuiz";
import Header from "../components/Header";
import CategorySelector from "../components/CategorySelector";
import DifficultySelector from "../components/DifficultySelector";
import LoadingSpinner from "../components/LoadingSpinner";
import AmountSelector from "../components/AmountSelector";
import TypeSelector from "../components/TypeSelector";

export default function Home() {
  const { startQuiz, loading } = useQuiz();
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

      <button onClick={handleStart}>Start Quiz</button>

      {loading && <LoadingSpinner />}
    </div>
  );
}
