import './App.css';
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
import {Route, Routes} from "react-router-dom";


function App() {

  return (
    <>
      <section className='outer-container'>
        <article className='inner-container'>
          <TopMenu/>
            <Routes>
              <Route path="/" element={<Home />}/>

              <Route path="/login" element={<Login />}/>

              <Route path="/registration" element={<Registration />}/>

              <Route path="/Account/:Username"
                     element={
                        <PrivateRoute>
                          <Account/>
                        </PrivateRoute>
                    }>
              </Route>

              <Route path="/RandomCocktail" element={<RandomCocktail />}/>

              <Route path="/AdvancedSearch" element={<AdvancedSearch />}/>

              <Route path="/Recipe/:id" element={<Recipe />}/>

              <Route path="/Blog" element={<BlogOverview />}>
                <Route path=":id" element={<Blog />}/>
              </Route>
            </Routes>
        </article>
      </section>
    </>
  );
}

export default App;
