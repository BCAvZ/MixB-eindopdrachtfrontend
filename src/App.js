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
import {Registration} from "./pages/Registration/Registration";
import {UserAccount} from "./pages/UserAccount/UserAccount";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute"
import {useState} from "react";


function App() {

  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <>
      <TopMenu
      isAuthenticated={isAuthenticated}
      toggleAuth={toggleIsAuthenticated}
      >

      </TopMenu>

      <Switch>
        <Route exact path="/">
          <Home> </Home>
        </Route>

        <Route path="/login">
          <Login
              loginToggle={toggleIsAuthenticated}
          />
        </Route>

        <Route path="/registration">
          <Registration/>
        </Route>

        <PrivateRoute path="/UserAccount/:username" isAuth={isAuthenticated}>
          <UserAccount/>
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
    </>
  );
}

export default App;
