import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './componenets/Getproducts';
import Addproducs from './componenets/Addproducs';
import Signup from './componenets/Signup';
import Signin from './componenets/Signin';
import Notfound from './componenets/Notfound';

function App() {
  return (
   <Router>
     <div className="App">
      <header className="App-header">
       <h1>Welcome to sokogarden</h1>
      </header>
      {/* Below r our different routestogether with the renderd components */}
      <Routes>
        <Route path='/' element={<Getproducts />}/>
        <Route path='/addproducts' element={<Addproducs />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
