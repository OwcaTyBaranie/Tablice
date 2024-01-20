// Your JavaScript code goes here
'use stric'
// Function to log messages to both the console and the HTML output
function logMessage(message) {
    // Log to the console
    originalConsoleLog(message);

    // Update the HTML output
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML += '<p>' + message + '</p>';
}

// Store the original console.log function
var originalConsoleLog = console.log;

// Redirect console.log to call logMessage
console.log = logMessage;

const categories = []; //Tworzenie tablicy
console.log('categories:', categories);

categories.push('animals');//Dodawanie elementu do tablicy


categories.push('travel');//Dodawanie drugiego elementu
console.log('categories:', categories); // categories: ['animals', 'travel']

const categoriesLength = categories.length;//Sprawdzenie ile jest elementów w tablicy
console.log('categoriesLength:', categoriesLength);

const firstCategory = categories [0]//Sprawdzenie danego elementu w tablicy wg indeksu 0- pierwszy element itd
console.log('firstCategory:', firstCategory);

const indexOfSecondCategory = 1; //wprowadzenie indexu
const secondCategory = categories[indexOfSecondCategory]; //znalezienie indexu i stworzenie stałej secondCategory
console.log('secondCategory:', secondCategory);

const indexOfTravel = categories.indexOf('travel');//Sprawdzanie wartości indexu
console.log('indexOfTravel:', indexOfTravel)
console.log('value at indexOfTravel:', categories [indexOfTravel]);//Sprawdzenie value indexu



