// import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'

;
// styles
import './Recipe.css'

const Recipe = () => {
  const { mode } = useTheme();

  const { id } = useParams();
  // const url = `http://localhost:3000/recipes/${id}`
  // const { data: singleRecipe, isPending, error } = useFetch(url)

  const [singleRecipe, setSingleRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setSingleRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that recipe')
      }
    })

    return () => unsub()
  }, [id])
  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Another Meal'
    })
  }

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
        <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
   );
}
 
export default Recipe;