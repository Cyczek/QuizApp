import useQuiz from "../hooks/useQuiz";

export default function CategorySelector() {
  const { categories, category, setCategory } = useQuiz();

  return (
    <select
      className="category-selector"
      value={category}
      onClick={(e) => setCategory(e.target.value)}
    >
      <option>Wszystkie kategorie</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}
