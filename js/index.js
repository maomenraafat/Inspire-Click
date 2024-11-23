var arrayOfQuotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Pablo Picasso",
    quote: "Everything you can imagine is real.",
  },
  {
    author: "George Bernard Shaw",
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
  },
  {
    author: "Abraham Lincoln",
    quote:
      "Folks are usually about as happy as they make their minds up to be.",
  },
  {
    author: "Winston S. Churchill",
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts..",
  },
  {
    author: "Muhammad Ali",
    quote: "I’m young, handsome, fast, pretty, and can’t possibly be beat!",
  },
  {
    author: "Muhammad Ali",
    quote: "Service to others is the rent you pay for your room here on Earth.",
  },
  {
    author: "Mike Tyson",
    quote: "Everyone has a plan until they get punched in the face.",
  },
];

var lastIndex = -1;

function generateQuote() {
  var randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;

  var selectedQuote = arrayOfQuotes[randomIndex];

  document.getElementById("quote-text").innerText = `"${selectedQuote.quote}"`;
  document.getElementById("author").innerText = `- ${selectedQuote.author}`;
}

window.onload = function () {
  generateQuote();
};
