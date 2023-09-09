import './App.css';
import Food from './Components/Food';
import RecipeInfo from './Components/RecipeInfo';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Food/>}/>
      <Route path='/:id' element={<RecipeInfo/>}/>
    </Routes>
       
    </>
  );
}

export default App;
