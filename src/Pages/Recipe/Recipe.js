import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

// styles

import './Recipe.css'

const Recipe = () => {
  const { mode } = useTheme();

  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`

  const { data: singleRecipe, isPending, error } = useFetch(url)
  return ( 
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <div className="loading">Loading...</div>}
      {singleRecipe && (
        <>
        <h2 className="page-title">{ singleRecipe.title }</h2>
        <p>{singleRecipe.cookingTime} to cook</p>
        <ul>
          {singleRecipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>
        <p className="method"> {singleRecipe.method}</p>
        </>
      )}
    </div>
   );
}
 
export default Recipe;