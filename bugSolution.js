The solution involves using the `tw` utility provided by the `tailwindcss-styled-components` package.  Instead of using `@apply` directly, you'll use the `tw` function to apply your classes. First, install the package: `npm install tailwindcss-styled-components`. Then adjust your code like so:

```javascript
import styled from 'styled-components';
import { tw } from 'tailwindcss-styled-components';

const MyComponent = styled.div`${tw`text-blue-500`};`;
```

This approach correctly applies the `text-blue-500` class, resulting in the expected blue text.  The `tw` function handles the necessary compilation and integration with styled-components.