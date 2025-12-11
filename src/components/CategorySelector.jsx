import useQuiz from "../hooks/useQuiz";

// Select z listą kategorii
export default function CategorySelector() {
  const { categories, category, setCategory } = useQuiz();

  return (
    <select
      className="category-selector"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Wszystkie kategorie</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}
