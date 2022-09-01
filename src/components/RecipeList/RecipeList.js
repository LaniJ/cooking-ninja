import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import Trashcan from '../../assets/trashcan.svg'
import { projectFirestore } from '../../firebase/config'


//styles
import './RecipeList.css'

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme()

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }


  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
  }
  
  return ( 
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{ recipe.title }</h3>
          <p>{ recipe.cookingTime } to make.</p>
          <p> { recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          <img
            className="delete"
            src={Trashcan}
            alt="Trash can icon"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
   );
}
 
export default RecipeList;