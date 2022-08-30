import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// page components
import Navbar from './components/Navbar/Navbar'

import Home from './Pages/Home/Home'
import Create from './Pages/Create/Create'
import Recipe from './Pages/Recipe/Recipe'
import Search from './Pages/Search/Search'
import ThemeSelector from './components/ThemeSelector/ThemeSelector';


import { useTheme } from './hooks/useTheme'

// styles
import './App.css'

function App() {
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>

        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/recipes/:id">
            <Recipe />
          </Route>
           
          <Route path="*">
            <Redirect to="/"/>
          </Route>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
