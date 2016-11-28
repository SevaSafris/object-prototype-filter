# object-prototype-filter

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.txt) [![npm version](https://badge.fury.io/js/object-prototype-filter.svg)](http://badge.fury.io/js/object-prototype-filter)

This is a set of supplementary prototype additions to the Object class that provide filtration
funcitons analogous to that of `Array.prototype.filter()`.

_[Comments and Issues](https://github.com/SevaSafris/object-prototype-filter/issues)_

## Installation

#### NPM
```tcsh
npm install --save object-prototype-filter
```

#### Bower
```tcsh
bower install --save object-prototype-filter
```

#### Manual
```html
<script src="path/to/directory/object-prototype-filter.js"></script>
```

### Usage

This supplement adds the following prototype methods to the Object class:

1. **`Object.prototype.filterValues(callback)`** - Creates a new object with all entries that pass the test implemented by the provided function.

    **`callback(key, object, thisArg)`** Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise, taking two arguments:   
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**`key`** the current key being processed in the object.   
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**`object`** the object filter was called upon.   
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**`thisArg`**  Optional. Value to use as this when executing callback.

    **return** A new objet with the elements that pass the test.

## Development

- `npm run build` - Build and minify

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details