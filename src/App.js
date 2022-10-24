import './App.css';
import {Switch, Route} from "react-router-dom";
import {TopMenu} from "./components/TopMenu/TopMenu";
import {Home} from "./pages/Home/Home";
import {Login} from "./pages/Login/Login";
import {RandomCocktail} from "./pages/RandomCocktail/RandomCocktail";
import {AdvancedSearch} from "./pages/AdvancedSearch/AdvancedSearch";
import {Recipe} from "./pages/RecipePage/Recipe";
import {Blog} from "./pages/Blog/Blog";
import {BlogOverview} from "./pages/BlogOverview/BlogOverview";
import {Account} from "./pages/Account/Account";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute"
import {Registration} from './pages/Registration/Registration'
import './App.css';

function App() {

  return (
    <>
      <section className='outer-container'>
        <article className='inner-container'>
          <TopMenu> </TopMenu>

          <Switch>
            <Route exact path="/">
              <Home> </Home>
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/registration">
              <Registration/>
            </Route>

            <PrivateRoute path="/Account/:Username">
              <Account />
            </PrivateRoute>

            <Route path="/RandomCocktail">
              <RandomCocktail/>
            </Route>

            <Route path="/AdvancedSearch">
              <AdvancedSearch/>
            </Route>

            <Route path="/Recipe/:id">
              <Recipe/>
            </Route>

            <Route exact path="/Blog">
              <BlogOverview/>
            </Route>

            <Route path="/Blog/:id">
              <Blog/>
            </Route>
          </Switch>
        </article>
      </section>
    </>
  );
}

export default App;
