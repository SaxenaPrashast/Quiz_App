export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

let cachedQuestions = null;
export const fetchQuestions = async () => {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=15");
        if (!response.ok) {
            // Rate limit or other error
            return [];
        }
        const data = await response.json();
        if (!data.results) {
            return [];
        }
        cachedQuestions = data.results.map(q => ({
            ...q,
            question: decodeHTMLEntities(q.question),
            correct_answer: decodeHTMLEntities(q.correct_answer),
            all_answers: shuffleArray([
                ...q.incorrect_answers.map(decodeHTMLEntities),
                decodeHTMLEntities(q.correct_answer)
            ]),
            user_answer: null,
        }));
        return cachedQuestions;
    } catch (error) {
        // Network or parsing error
        console.log("Error fetching questions:", error);
        return [];
    }
};

//  function to decode HTML entities from API
function decodeHTMLEntities(text) {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
}
