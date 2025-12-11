import useQuiz from "../hooks/useQuiz";
import { useNavigate } from "react-router-dom";
import ScoreBoard from "../components/ScoreBoard";

// Ekran z końcowym wynikiem
export default function Result() {
  const { score, questions } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="result">
      <h1>Quiz Finished!</h1>
      <ScoreBoard score={score} total={questions.length} />
      <button onClick={() => navigate("/")}>Restart</button>
    </div>
  );
}
