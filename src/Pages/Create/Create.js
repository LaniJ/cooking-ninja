import { useState, useRef, useEffect} from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';
// styles
import './Create.css'

const Create = () => {
  const [title, setTitle] = useState("")
  const [method, setMethod] = useState("")
  const [cookingTime, setCookingTime] = useState("")
  const [newIngredient, setNewIngredient] = useState("")
  const [ingredients, setIngredients] = useState([])
  const history = useHistory();

  // to focus the input we use the Ref property

  const ingredientsInput = useRef(null);
  
  const { postData, data } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, method, ingredients, cookingTime: cookingTime + ' minutes' })
    console.log(title, method, cookingTime, ingredients);
  }
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      // setIngredients.push(ing)
      setIngredients((prevIngredients) => [...prevIngredients, ing])
    }
    setNewIngredient("");
    ingredientsInput.current.focus();
    console.log(ingredientsInput);
    console.log(ingredientsInput.current);
  }

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        history.push('/')
      }, 2000);
    }
  }, [data, history] )

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientsInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(ing => <em key={ing}>{ing}, </em>)}</p>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          /> 
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
 
export default Create;