```javascript
// Example showing incorrect Tailwind directives in a JavaScript file.
// This will result in errors because Tailwind directives are for CSS.
const myComponent = () => {
  return (
    <div className="bg-red-500 p-4 text-white">
      {/* Incorrect use of Tailwind directives */} 
      <p className="text-xl font-bold">This is a test!</p>     
    </div>
  );
};
```