# object-prototype-filter

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.txt)

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

1. **`Object.prototype.filterValues()`** - Creates a new object with all entries that pass the test implemented by the provided function.
  
  **`callback`** Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise, taking two arguments:

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`key`** the current key being processed in the object.

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`object`** the object filter was called upon.

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`thisArg`**  Optional. Value to use as this when executing callback.
           
    **return** A new objet with the elements that pass the test.

## Development

- `npm run build` - Build and minify

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details