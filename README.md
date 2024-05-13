# Photo Retries

Tries to load broken images on a page from a series of fallback locations.

## Example

https://woollymittens.github.io/photo-retry/

## Implementation

```html
<script src="./photo-retry.js" type="module"></script>
```

```javascript
import { PhotoRetry } from 'photo-retry.js';

new PhotoRetry([
  'https://localhost/a{f}',
  'https://localhost/b{f}',
  'https://placehold.co/400x300/'
]);
```

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
