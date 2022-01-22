<div align="center" >
  <h3>Ferbes Layout</h3>
  <br/>
  <br/>
  Ferbes Layout is a set of useful layout components.
  <br/>
  <br/>

  [![npm](https://img.shields.io/npm/v/ferbes-layout.svg?style=for-the-badge)](https://www.npmjs.com/package/ferbes-layout)
 
  <hr/>
</div>

[Documentation](https://ferbes-layout.netlify.app)

## Setup

```bash
$ npm i ferbes-layout
# or
$ yarn add ferbes-layout
```

## Documentation

### Setting a theme

`Ferbes Layout` comes with a pre-configured theme. Although in most cases
you want to provide your own theme:

At the root of your application, wrap the components in the `FerbesProvider`.

```jsx
import { FerbesProvider } from 'ferbes-layout';

const theme = {
  breakpoints: ['450px', '900px', '1200px'],
  space: [2, 4, 6, 8, 12, 16, 24, 32],
};

const App = () => <FerbesProvider theme={theme}>...</FerbesProvider>;
```

> Your custom theme will be merged with the default theme.

### Adding global styles

```jsx
import { FerbesProvider, css } from 'ferbes-layout';

const styles = css`
  body {
    background: black;
  }
`;

const App = () => <FerbesProvider styles={styles}>...</FerbesProvider>;
```

### Style with style props

`Ferbes Layout` allows you to control styles based on a global theme.
Some components have style props made available by [Styled System](https://styled-system.com/table):

```javascript
<Box color="#fff" bg="tomato">
  Tomato
</Box>
```

So far, this component can be styled with any valid CSS color. To create a more consistent UI, use the style tokens provided by your theme.

You can extend your theme like this:

```javascript
const theme = {
  colors: {
    primary: ['#5b53ff', '#2745fa', '#5378fc', '#93b4fb', '#e6effe'],
    white: '#ffffff',
    ...
  }
  ...
}
```

Then you can use it like this:

```javascript
<Box color="white" backgroundColor="primary.1">
  Blue Box
</Box>
```

### Hide Focus Rings

`Ferbes Layout` comes with support for hiding focus rings, when using the
app with your mouse. You can enable this feature by providing a `hideFocusRings`
prop:

```jsx
import { FerbesProvider } from 'ferbes-layout';

const App = () => <FerbesProvider hideFocusRings={true}>...</FerbesProvider>;
```

#### useTheme

If you need direct access to the theme tokens, you can use the `useTheme` hook.

```javascript
import { useTheme } from 'ferbes-layout';

const MyComponent = () => {
  const theme = useTheme()
  return ...
}
```

## License

MIT.
