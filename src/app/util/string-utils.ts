/**
 * Capitalize a string
 * @example
 * const capitalized = capitalize('some string');
 * console.log(capitalized); // prints: Some string
 * @param {string} str string to capitalize
 * @returns {string} string capitalized
 */
export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

/**
 * Converts {@param str} to title case separated by space.
 * @example
 * const titleCased = toTitleCase('MY_STRING', '_');
 * console.log(titleCased); // prints: My String
 *
 * @param {string} str string to be title case
 * @param {string} separator to split the string
 * @returns {string} string title cased
 */
export const toTitleCase = (str: string, separator: string = ' ') =>
  str.split(separator).map(capitalize).join(' ')
