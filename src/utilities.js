// src/utilities.js

/**
 * Check if a number is even.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is even, false otherwise.
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Generate a random number within a specified range.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - The random number within the specified range.
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Convert a string to title case.
 * @param {string} str - The input string.
 * @returns {string} - The string in title case.
 */
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


/**
 * Format a date to a user-friendly string.
 * @param {Date} date - The input date.
 * @returns {string} - The formatted date string.
 */

function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${day},${year}`;
}


module.exports = {
  isEven,
  getRandomNumber,
  toTitleCase,
  formatDate,
};
