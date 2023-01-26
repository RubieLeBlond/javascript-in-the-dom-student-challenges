# Using JSX

## Background

JSX is more intuitive than the raw React API and is easier to understand when
reading the code. It's fairly simple HTML-like syntactic sugar on top of the raw
React APIs:

```jsx
const ui = <h1 className="greeting">Hey there</h1>;

// ↓ ↓ ↓ ↓ compiles to ↓ ↓ ↓ ↓

const ui = React.createElement("h1", {
  className: "greeting",
  children: "Hey there",
});
```

Because JSX is not actually JavaScript, you have to convert it using something
called a code compiler. [Babel](https://babeljs.io) is one such tool.

🦉 Pro tip: If you'd like to see how JSX gets compiled to JavaScript,
[check out the online babel REPL here](https://babeljs.io/repl#?builtIns=App&code_lz=MYewdgzgLgBArgSxgXhgHgCYIG4D40QAOAhmLgBICmANtSGgPRGm7rNkDqIATtRo-3wMseAFBA&presets=react&prettier=true).

If you can train your brain to look at JSX and see the compiled version of that
code, you'll be MUCH more effective at reading and using it! I strongly
recommend you give this some intentional practice.

## Exercise

Normally you'll compile all of your code at build-time before you ship your
application to the browser, but because Babel is written in JavaScript we can
actually run it _in_ the browser to compile our code on the fly and that's what
we'll do in this exercise.

So we'll include a `<script>` tag for Babel, then we'll update our own script tag to
tell Babel to compile it for us on the fly. When you're done, you should notice
the compiled version of the code appears in the `<head>` of the DOM (which you
can inspect using DevTools).

## Extra Credit

### 1. 💯 interpolate className and children

"Interpolation" is defined as "the insertion of something of a different nature
into something else."

Let's take template literals for example:

```javascript
const greeting = "Sup";
const subject = "World";
const message = `${greeting} ${subject}`;
```

See if you can store the `className` and `children` values as variables, and then figure out how to interpolate them into the JSX.

```jsx
const className = "container";
const children = "Hello World";
const element = <div className="hmmm">how do I make this work?</div>;
```

📜 The react docs for JSX are pretty good:
https://reactjs.org/docs/introducing-jsx.html

Here are a few sections of particular interest for this extra credit:

- https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
- https://reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx
