import './App.css';
import StarRating from './components/StarRating.js';

function App() {
  return (
    <StarRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={ e => alert("double clicked!!")}
    />
  );
}

export default App;
