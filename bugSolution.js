```javascript
// Correct way to use Tailwind CSS in a React component.
// Styles are defined separately, usually in a CSS file.

import './styles.css'; // Import CSS file with Tailwind classes

const myComponent = () => {
  return (
    <div className="container">
      <p className="text-xl font-bold">This is a test!</p>     
    </div>
  );
};

// styles.css
.container {
  @apply bg-red-500 p-4 text-white;
}
```