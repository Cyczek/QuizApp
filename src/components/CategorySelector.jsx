import useQuiz from "../hooks/useQuiz";

export default function CategorySelector() {
  const { categories, category, setCategory } = useQuiz();

  return (
    <select
      className="category-selector"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Wszystkie kategorie</option>
      {categories.map((a) => (
        <option key={a.id} value={a.id}>
          {a.name}
        </option>
      ))}
    </select>
  );
}
