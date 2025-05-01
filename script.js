const quotes = [
    { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];
    quoteText.textContent =   `"${selected.quote}"`;
    quoteAuthor.textContent = `- ${selec ted.author}`;
});