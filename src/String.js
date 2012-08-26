/**
 * Supporting some features missing from older browser, plus adding some new
 */

/* ============================================================================
 * String trim - from StackOverflow
 * http://stackoverflow.com/questions/498970/how-to-trim-a-string-in-javascript
 * ============================================================================ */

/**
 * Trims string
 * @author Tomislav Capan
**/
String.prototype.trim = String.prototype.trim || function () {
  return this.replace(/^\s+/,'').replace(/\s+$/,'');
};

/**
 * Trims string from the left
 * @author Tomislav Capan
**/
String.prototype.trimLeft = String.prototype.trimLeft || function () {
  return this.replace(/^\s+/,'');
};

/**
 * Trims string from the right
 * @author Tomislav Capan
**/
String.prototype.trimRight = String.prototype.trimRight || function () {
  return this.replace(/\s+$/,'');
};

/**
 * Trims string fully
 * @author Tomislav Capan
**/
String.prototype.fullTrim = String.prototype.fullTrim || function () {
  return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
};


/* ============================================================================
 * Other useful String utilities
 * ============================================================================ */

/**
 * Adds left padding with the given 'padChar' to achieve the 'targetLen' for the string
 * @author Tomislav Capan
**/
String.prototype.padLeft = String.prototype.padLeft || function (padChar, targetLen) {
  return new Array(targetLen - this.length + 1).join(padChar || '0') + this;
};

/**
 * Checks if the string starts with the given substring
 * @param  {String} strStartsWith   Substring to check starting with
 * @return {Boolean}    true if string starts with the given substring, false otherwise
 * @author Tomislav Capan
 */
String.prototype.startsWith = String.prototype.startsWith || function(strStartsWith) {
  return strStartsWith === this.substring(0, strStartsWith.length);
};
