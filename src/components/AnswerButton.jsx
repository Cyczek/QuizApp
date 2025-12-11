// Przycisk odpowiedzi

export default function AnswerButton({ answer, onSelect }) {
  return (
    <button onClick={() => onSelect(answer)} className="answer-btn">
      <span dangerouslySetInnerHTML={{ __html: answer }} />
    </button>
  );
}
