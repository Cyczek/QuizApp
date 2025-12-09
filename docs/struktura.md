# struktura projektu:

````
QuizApp/
    docs/       #Struktura programu
    │
    ├── struktura.md
    public/     #Zasoby aplikacji
    │
    ├── steel-ball.webp
    ├── vite.svg
    src/
    │
    ├── api/                # Zapytania do API (OpenTDB)
    │   └── TriviaAPI.js
    │
    ├── components/         # Mniejsze komponenty UI (przyciski, karty pytania)
    │   ├── AmountSelector.jsx
    │   ├── AnswerButton.jsx
    │   ├── CategorySelector.jsx
    │   ├── DifficultySelector.jsx
    │   ├── Header.jsx
    |   ├── LoadingSpinner.jsx
    │   ├── QuestionCard.jsx
    │   ├── ScoreBoard.jsx
    │   └── TypeSelector.jsx
    │
    ├── context/            # Globalny stan aplikacji (React Context)
    │   └── QuizContext.jsx
    │
    ├── hooks/              # Niestandardowe hooki
    │   └── useQuiz.js
    │
    ├── pages/              # Strony / widoki w aplikacji
    │   ├── Home.jsx
    │   ├── Quiz.jsx
    │   └── Result.jsx
    │
    ├── App.jsx             # Router + Provider
    └── main.jsx            # Punkt wejścia aplikacji
    ```
````
