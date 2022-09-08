import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NAMES from './components/data'
function App() {
  return( 
  <div className ='App'>
    <Home />
    {/* {NAMES.map((item)=> (
      <p key={item.id}>{item.Firstname} {item.Secondname}</p>
    ))} */}
  </div>
  );
}

export default App;
