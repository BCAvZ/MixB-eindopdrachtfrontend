import './App.css';
import {TopMenu} from "./components/TopMenu/TopMenu";
import {Home} from "./pages/Home/Home";
import {Login} from "./pages/Login/Login";
import {RandomCocktail} from "./pages/RandomCocktail/RandomCocktail";
import {AdvancedSearch} from "./pages/AdvancedSearch/AdvancedSearch";
import {RecipePage} from "./pages/RecipePage/RecipePage";
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
            <header className='inner-container'>
                    <TopMenu/>
            </header>
        </section>
      <section className='outer-container'>
        <main className='inner-container'>
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

              <Route path="/RecipePage/:id" element={<RecipePage />}/>

              <Route path="/BlogOverview" element={<BlogOverview />}/>

              <Route path="/Blog/:id" element={<Blog />}/>
            </Routes>
        </main>
      </section>
    </>
  );
}

export default App;
