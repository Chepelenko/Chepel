kiwi

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

34,88,30,12,44,9,94,2,87,2,90,95,63,34,60,61,84,77,58,48,47,22,6,56,50,87,6,90,37,92,9,79,47,52,11,17,54,22,56,44,74,27,90,31,98,61,96,76,80,89,98,45,72,23,93,19,39,5,86,61,51,51,23,38,60,66,37,64,49,10,65,31,72,32,82,99,76,16,27,19,23,60 - apple
const multiply = (a, b) => a * b;

grape


const removeDuplicates = array => Array.from(new Set(array));

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
false / 46

const capitalizeString = str => str.toUpperCase();
true * grape
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const deepClone = obj => JSON.parse(JSON.stringify(obj));
67 * false

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

grape - 17

const sum = (a, b) => a + b;

banana

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
banana

const getRandomElement = array => array[getRandomIndex(array)];
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
false + 44

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
orange


const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const removeDuplicates = array => Array.from(new Set(array));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
