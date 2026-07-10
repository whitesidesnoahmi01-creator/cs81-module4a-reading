//Github Repo URL: https://github.com/whitesidesnoahmi01-creator/cs81-module4a-reviewtracker

/* This creates an object array called readingLog, 
   which stores different objects containing the same 
   properties, just with different values */
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/* This function takes 3 parameters, day, book,
   and minutes. It then creates a new array with 
   those three parameters. It then appends the 
   object in the function to the previous array, readingLog. */
function addReadEntry(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

/* Creates a function tha takes 1 parameter, log. 
   It then initalizes a counter variable. The first 
   loop creates a variable, entry. It then loops through each 
   object inside of log. Then, it indexes the minutes
   property from each object it loops through, and adds it
   to the counter variable  */
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

/* This function takes 1 parameter, log. Then, it
   initializes an array for logging. It runs a loop 
   through log, if the book from the indexed object is 
   not in book count, it assigns a value 
   of 1 to the book, adding it to
   bookCounts. If the indexed book property is already
   logged in the counter array, it simply adds 1 to the
   value of the book inside bookCounts. It then creates 
   a loop that runs through bookCounts array, then 
   checks if maxBook is less than maxCount. If it is, 
   then maxCount equals the current indexed book 
   in bookCounts. */
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = [entry.minutes];
    } else {
      bookCounts[entry.book] += [entry.minutes];
    }
  }

/* Added improvement to mostReadbook function:
   I changed the equivalence of bookCounts entries
   to be [entry.minutes] instead of a counter tally */

  let maxBook = null;
  let maxCount = 0;

  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

/* This function takes the log parameter,
   and runs a loop. It takes the inputted
   parameter, and then runs through each
   entry of log, printing out a console 
   message stating the day, minutes, and 
   book read  */
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Test Case
addReadEntry("Monday", "The Metamorphosis", 70);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

/* I changed the function name of 'addReadBook'
to 'addReadEntry', because the naming implies it 
only adds the book property, when it adds a whole
entry into the array. */