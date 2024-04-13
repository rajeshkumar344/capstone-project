import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Booklist from './components/Booklist';
import BookDetails from './components/BookDetails';
import Addtocart from './components/Addtocart';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Navigation/>
       <Routes>
        <Route path='/'element={<Booklist/>}></Route>
        <Route path='/books/:id'element={<BookDetails/>}></Route>
        <Route path='/addtocart'element={<Addtocart/>}></Route>
        <Route path='/form'element={<Form/>}></Route>
      </Routes>

      <Footer/>
     
     


    </div>
  );
}

export default App;


// rajesh
