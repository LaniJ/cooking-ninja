// import { useFetch } from '../../hooks/useFetch';

// changing to firestore
import { projectFirestore } from '../../firebase/config'
import { useState, useEffect } from 'react';

// styles
import './Home.css'

//compopnents
import RecipeList from '../../components/RecipeList/RecipeList';

const Home = () => {
  // const url = 'http://localhost:3000/recipes'
  // const { data: recipes, isPending, error } = useFetch(url);

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const unsub = projectFirestore.collection('recipes')
    .onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError('No Recipes Found')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub();
  }, [])
  return ( 
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {/* {recipes && <div>{ recipes}</div>} */}
      {data && <RecipeList recipes={data} />}
    </div>
   );
}
 
export default Home;