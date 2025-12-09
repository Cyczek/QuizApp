import useQuiz from "../hooks/useQuiz";
import QuestionCard from "../components/QuestionCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ScoreBoard from "../components/ScoreBoard";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const { questions, index, selectAnswer, loading, score } = useQuiz();
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner />;
  if (index >= questions.length) {
    navigate("/result");
    return null;
  }

  const q = questions[index];

  return (
    <div>
      <ScoreBoard score={score} total={questions.length} />
      <QuestionCard
        question={q.question}
        answers={q.answers}
        onSelect={selectAnswer}
      />
    </div>
  );
}
