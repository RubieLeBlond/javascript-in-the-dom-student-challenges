# Intro to raw React APIs

## Background

React is the most widely used frontend framework in the world and it's using the
same APIs that you've been using when it creates DOM nodes.

> In fact,
> [here's where that happens in the React source code](https://github.com/facebook/react/blob/48907797294340b6d5d8fecfbcf97edf0691888d/packages/react-dom/src/client/ReactDOMComponent.js#L416)
> at the time of this writing.

React uses two JavaScript files to write applications for the web:

- React: responsible for creating React elements (sort of like
  `document.createElement()`)
- ReactDOM: responsible for rendering React elements to the DOM (sort of like
  `rootElement.append()`)

## Exercise

For this first exercise, we'll use the React script files which are available on [unpkg.com](https://unpkg.com) inside regular script tags so you don't have to bother installing them. So in the exercise you'll be required to add script tags for these files.

Once you include the script tags, you'll have two new global variables to use:
`React` and `ReactDOM`.

Here's a simple example of the API:

```javascript
const elementProps = { className: "my-class", children: "Hello world!" };
const elementType = "h1";
const reactElement = React.createElement(elementType, elementProps);
ReactDOM.render(reactElement, rootElement);
```

Good luck!
