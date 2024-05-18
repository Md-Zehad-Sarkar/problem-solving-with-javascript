`Task-2: Object Manipulation`;

`Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.`;

const books = [
  { title: "Python Crash Course", author: "Eric Matthes", year: 2015 },
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    year: 2018,
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    year: 2016,
  },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  {
    title: "The Four Agreements: A Practical Guide to Personal Freedom",
    author: "Don Miguel Ruiz",
    year: 1997,
  },
  { title: "Man's Search for Meaning", author: "Viktor E. Frankl", year: 1946 },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011 },
  {
    title: "The Power of Habit: Why We Do What We Do in Life and Business",
    author: "Charles Duhigg",
    year: 2012,
  },
];

const getBookTitles = (books) => {
  const titles = books.map((book) => book.title);
  return titles;
};
const bookTitles = getBookTitles(books);
// console.log(bookTitles);
