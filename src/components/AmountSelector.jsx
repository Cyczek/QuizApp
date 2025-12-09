import useQuiz from "../hooks/useQuiz";

export default function AmountSelector() {
  const { amount, setAmount } = useQuiz();

  return (
    <div>
      <label>Ilość pytań:</label>
      <input
        type="number"
        min="1"
        max="50"
        value={amount}
        onChange={(e) =>
          setAmount(Math.min(50, Math.max(1, Number(e.target.value))))
        }
      />
    </div>
  );
}
