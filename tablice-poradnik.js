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

const indexOfCars = categories.indexOf('cars');//Sprawdzenie czy dana wartość jest w środku elementu, jeżeli nie to zwróci -1
console.log('indexOfCars:', indexOfCars);

//Usuwanie elementów z tablicy z metodą splice
const allRemovedValues = myArray.splice(starAtIndex, numberOfElements);

//Wprowadzamy nowe elementy, aby je potem usunąć
const newCategories = [];
newCategories.push('fruits');
newCategories.push('food');
newCategories.push('phones');
console.log('newCategories:', newCategories);

//Sprawdzamy index of Fruits
const indexOfFruits = newCategories.indexOf('fuits');
console.log('indexOfFruits:', indexOfFruits);

//Usuwamy elemt fruits
const removedValues = newCategories.splice(indexOfFruits, 1);
console.log('indexOfFruits:', indexOfFruits);
console.log('newCategories:', newCategories);//Sprawdzamy jakie zostały kategorie

//Wprowadzamy index of Food
const indexOfFood = newCategories.indexOf('food');
console.log('indexOfFood', indexOfFood);
//Usuwamy element food
newCategories.splice(indexOfFood, 2);
console.log('newCategories:', newCategories)// Sprawdzamy jakie zostały kategorie

//Generowanie tekstu z tablicy- metoda join
const joinedText = keywords.join(', ');
        console.log('joinedText:', joinedText); // joinedText: travel, France, Paris

//Wygenerowanie tekstu w HTML
const html = '<ul><li>' + keywords.join('</li><li>') + '</li></ul>';
console.log('html;', html);





