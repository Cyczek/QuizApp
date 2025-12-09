import useQuiz from "../hooks/useQuiz";

export default function DifficultySelector() {
  const { difficulty, setDifficulty } = useQuiz();

  return (
    <select
      className="difficulty-selector"
      value={difficulty}
      onChange={(e) => setDifficulty(e.target.value)}
    >
      <option value="easy">Łatwy</option>
      <option value="medium">Średni</option>
      <option value="hard">Trudny</option>
    </select>
  );
}
