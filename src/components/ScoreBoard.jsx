export default function ScoreBoard({ score, total }) {
  return (
    <div className="scoreboard">
      <h2>
        Score: {score} / {total}
      </h2>
    </div>
  );
}
