import {Routes,Route, NavLink} from 'react-router-dom'
import './App.css';
import NotFound from './Component/NotFound';
import Home from'./Component/Home';
import About from './Component/About';
import Labs from './Component/Labs';
import Support from './Component/Support';
import MainHeader from './Component/MainHeader';


function App() {
  return(
  <div className='App'>

    <nav>
      <ul> 
        <li>

          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
          </li>
        <li>
          <NavLink to="/support">Support</NavLink>
          </li>
        <li>
          <NavLink to="/labs">Labs</NavLink>
          </li>
        <li>
          <NavLink to="/*">Not Found</NavLink>
          </li>

      </ul>

    </nav>


    <Routes>

      <Route path="/" element={<MainHeader/>}>
        {/* this is the default route */}
      <Route index element={<Home/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/about" element={<About/>}  />
      <Route path="/labs" element={<Labs/>}/>
      <Route path="/*" element={<NotFound/>}/>
      </Route>
      
    </Routes>
  </div>
  );
}

export default App;
