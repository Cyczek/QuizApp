// Pobiera listę kategorii z API
export async function getCategories() {
  const res = await fetch("https://opentdb.com/api_category.php");
  const data = await res.json();
  return data.trivia_categories;
}

// Pobiera pytania quizowe na podstawie parametrów
export async function getQuestions(difficulty, category, amount = 10, type) {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}${
    category ? `&category=${category}` : ""
  }`;
  const res = await fetch(url);
  const data = await res.json();

  // Obsługa błędu: za mało pytań
  if (data.response_code === 1) {
    throw {
      type: 1,
      message:
        "Nie ma wystarczająco dużo pytań dla tej kategorii lub poziomu trudności.",
      details: {
        difficulty,
        category,
        amountRequested: amount,
        typeRequested: type,
      },
    };
  }

  // Obsługa błędu: rate limiting
  if (data.response_code === 5) {
    throw {
      type: 2,
      message: "Za dużo zapytań — spróbuj ponownie za 5 sekund.",
      details: {},
    };
  }

  // Transformuje i miesza odpowiedzi
  return data.results.map((q) => ({
    question: q.question,
    correct: q.correct_answer,
    answers: [...q.incorrect_answers, q.correct_answer].sort(
      () => Math.random() - 0.5
    ),
  }));
}
