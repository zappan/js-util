/*! js-util - v0.1.0 - 2012-08-26
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
