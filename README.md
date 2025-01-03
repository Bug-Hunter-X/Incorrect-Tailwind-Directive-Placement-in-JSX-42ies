# Incorrect Tailwind Directive Placement in JSX

This example demonstrates a common error when using Tailwind CSS with JavaScript frameworks like React.  Tailwind directives (like `bg-red-500`, `p-4`, `text-white`) are meant to be used within CSS files or styled-components, not directly within the JSX className attributes where Javascript code resides.

The `bug.js` file shows an example of this mistake, resulting in build errors or unexpected behavior.  The `bugSolution.js` provides the corrected approach.