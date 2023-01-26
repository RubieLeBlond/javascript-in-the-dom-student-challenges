# Creating custom components

## Background

Just like in regular JavaScript, you often want to package and share code using
functions. If you want to share JSX, you can do that as well. In React we call
these functions "components" and they have some special properties.

Components are basically functions which return something that is "renderable"
(e.g. more React elements, strings, `null`, numbers, etc.)

## Exercise

Let's say the DOM we want to generate is like this:

```html
<div className="container">
  <div className="instruction">Wake up</div>
  <div className="instruction">Go to sleep</div>
</div>
```

In this case, it would be cool if we could reduce the duplication for creating
the React elements for this:

```html
<div className="instruction">{children}</div>
```

We could write a custom component as a normal JavaScript function that returns the JSX we want to share:

```jsx
const Instruction = (props) => (
  <div className="instruction">{props.children}</div>
);
```

Notice the `props` argument? This is always an object in JavaScript that contains the values we want to pass into the component.
You can read more about `props` [here](https://beta.reactjs.org/learn/passing-props-to-a-component#passing-props-to-a-component).

We can then call this custom component anywhere we like in our React code, and avoid the duplication of earlier:

```jsx
<div className="container">
  <Instruction>Wake up</Instruction>
  <Instruction>Go to sleep</Instruction>
</div>
```

📜 Read more

- https://reactjs.org/docs/jsx-in-depth.html
- https://kentcdodds.com/blog/what-is-jsx
