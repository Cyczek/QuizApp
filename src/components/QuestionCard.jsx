import AnswerButton from "./AnswerButton";

export default function QuestionCard({ question, answers, onSelect }) {
  return (
    <div className="question-card">
      <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>

      <div className="answers">
        {answers.map((a) => (
          <AnswerButton key={a} answer={a} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
