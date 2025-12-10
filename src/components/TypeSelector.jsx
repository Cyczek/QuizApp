import useQuiz from "../hooks/useQuiz";

export default function TypeSelector() {
  const { type, setType } = useQuiz();

  return (
    <select
      className="type-selector"
      value={type}
      onChange={(e) => setType(e.target.value)}
    >
      <option value="">Oba typy</option>
      <option value="boolean">Prawda/Fałsz</option>
      <option value="multiple">Wiele odpowiedzi</option>
    </select>
  );
}
