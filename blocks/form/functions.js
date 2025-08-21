/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}
/**
  * @name setEnums
  * @returns {string[]}
 */
function setEnums() {
  return ['0', '1', '2', '3', '4', '5', '6'];
}
/**
 * @name setEnumNames
 * @returns {string[]}
*/
function setEnumNames() {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
}
/**
* Fetch Countries
* @name fetchCountries Submit form data and attachments to REST endpoint
* @param {string} endpoint in String format
* @return {string}
 */
function fetchCountries(endpoint) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
/**
 * Get Random Title
 * @name getRandomTitle Fetch Random Title
  * @return {string}
 */
function getRandomTitle() {
  return 'Adobe';
}
/**
 * Custom submit function
 * @param {scope} globals
 */
function submitFormArrayToString(globals) {
  const data = globals.functions.exportData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(',');
    }
  });
  globals.functions.submitForm(data, true, 'application/json');
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

// eslint-disable-next-line import/prefer-default-export
export {
  getFullName, days, getRandomTitle, submitFormArrayToString, fetchCountries, setEnumNames, setEnums,
};
