import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Section from './components/Section';
import Cart from './components/cart'
import Section9 from './components/Section9'
import Shopping1 from '../src/components/shoppingpage/Shopping1';
import About from './components/About';
import Blogs from './components/Blogs'
import Service from './components/Service';
import Wish from './components/wish';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Section/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Wish' element={<Wish/>} />
      <Route path='/Shop' element={<Shopping1/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Blogs' element={<Blogs/>}/>
      <Route path='/Service' element={<Service/>}/>
     </Routes>
     </BrowserRouter>
     <Section9/>
    </div>
  );
}


export default App;
