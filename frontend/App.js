import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Customer from './Customer';
import CreateCustomer from './CreateCustomer';
import UpdateCustomer from './UpdateCustomer';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchCustomer from './SearchCustomer';
import Login from './Login';
import Register from './Register'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/home' element={<Customer/>}/>
        <Route path='/create' element={<CreateCustomer/>}/>
        <Route path='/update/:id' element={<UpdateCustomer/>}/>
        <Route path='/search' element={<SearchCustomer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
