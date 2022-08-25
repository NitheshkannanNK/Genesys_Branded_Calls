const util = require('util');

/**
 * The delay prints '...' to standard output to improve
 * readability of the code sample.
 *
 * @param {int} milliseconds The delay in milliseconds
 * @return {object} returns a promise.
 */
function delay(milliseconds) {
  let progress = '';
  const interval = setInterval(function() {
    process.stdout.write(progress + '\r');
    progress = progress + '.';
  }, 500);

  setTimeout(() => {
    process.stdout.write(progress + '\n');
    clearInterval(interval);
  }, milliseconds);

  return new Promise((resolve, reject) => {
    setTimeout(resolve, milliseconds);
  });
}


/**
 * Prints a header containing the input text.
 *
 * @param {string} text The text of the header.
 */
function printHeader(text) {
  console.log('================== ' + text + ': =================');
}

module.exports = {delay, printHeader};
