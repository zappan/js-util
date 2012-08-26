/*! js-util - v0.1.1 - 2012-08-26
* https://github.com/zappan/js-util/
* Copyright (c) 2012 Tomislav Capan; Licensed MIT */

/**
 * Extends {Object} with exists() method if method unavailable.
 * Checks whether object instance exists (is defined and not null).
 * @param  {object} obj   Object instance whose existance is being checked
 * @return {Boolean}      'true' if object defined and not null, 'false' otherwise
 * @author Tomislav Capan
 */
Object.exists = Object.exists || function(obj) {
  return 'undefined' !== typeof obj && null !== obj && 'null' !== obj;
};

/* ============================================================================
 * String trim - from StackOverflow
 * http://stackoverflow.com/questions/498970/how-to-trim-a-string-in-javascript
 * ============================================================================ */

/**
 * Trims string
 * @author Tomislav Capan
**/
String.prototype.trim=function(){return this.replace(/^\s+/,'').replace(/\s+$/,''); };

/**
 * Trims string from the left
 * @author Tomislav Capan
**/
String.prototype.ltrim=function(){return this.replace(/^\s+/,''); };

/**
 * Trims string from the right
 * @author Tomislav Capan
**/
String.prototype.rtrim=function(){return this.replace(/\s+$/,''); };

/**
 * Trims string fully
 * @author Tomislav Capan
**/
String.prototype.fulltrim=function(){return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' '); };

/**
 * Adds left padding with the given 'padChar' to achieve the 'targetLen' for the string
 * @author Tomislav Capan
**/
String.prototype.padLeft = function (padChar, targetLen) {
  return new Array(targetLen - this.length + 1).join(padChar || '0') + this;
};


/* ============================================================================
 * Other useful String utilities
 * ============================================================================ */

/**
 * Checks if the string starts with the given substring
 * @param  {String} strStartsWith   Substring to check starting with
 * @return {Boolean}    true if string starts with the given substring, false otherwise
 * @author Tomislav Capan
 */
String.prototype.startsWith = function(strStartsWith) {
  return strStartsWith === this.substring(0, strStartsWith.length);
};
