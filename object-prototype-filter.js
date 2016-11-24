/**
 * The filterValues() method creates a new object with all entries that pass the test implemented by the provided function.
 * @param {callback} Function is a predicate, to test each element of the array. Return true to
 *                   keep the element, false otherwise, taking two arguments:
 *                   {key}    the current key being processed in the object.
 *                   {object} the object filter was called upon.
 * @param {thisArg}  Optional. Value to use as this when executing callback.
 * @return           A new objet with the elements that pass the test.
 */
Object.prototype.filterValues = function (callback, thisArg) {
  if (!callback)
    throw "callback is null";

  var object = thisArg || this;
  var filtered = {};
  for (var key in object)
    if (object.hasOwnProperty(key) && callback(key, object))
      filtered[key] = object[key];

  return filtered;
};