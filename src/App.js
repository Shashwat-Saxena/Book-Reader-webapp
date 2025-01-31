
import './App.css';
import Footer from './component/footer';
import Login from './component/Login';
import Navbar from './component/navbar'
import Engineering from './component/pages/Engineering';
import English from './component/pages/English';
import Hindi from './component/pages/Hindi';
import Home from './component/pages/Home'
import Mythology from './component/pages/Mythology'
import { Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
// import Booksreader from './component/pages/Books-reader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reader from './component/pages/Reader';
import Other from './component/Other';
import { useEffect, useState } from 'react';
// import Slider from './component/Slider';
// import Bookshelf from './component/Bookshelf';

function App() {
  const[ searchquery, setSearchqueary] = useState('')

  const [user, setUser] = useState(null);
  useEffect(()=> {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));
    if(loggedInUser){
      setUser(loggedInUser);
    }
  },[])
  return (
   <>
   <ToastContainer/>
   <Navbar setSearchqueary={setSearchqueary} user={user}/>
   {/* <Slider/> */}
   {/* <Home/> */}
   <Routes>
    <Route path='/' element={<Home searchquery={searchquery}/>}/>
    <Route path='/Hindi'  element={<Hindi searchquery={searchquery}/>}/>
    <Route path='/English'  element={<English searchquery={searchquery}/>}/>
    <Route path='/Myth'  element={<Mythology searchquery={searchquery}/>}/>
    <Route path='/Programming'  element={<Engineering searchquery={searchquery} />}/>
    <Route path='/Login' element={<Login  setUser={setUser}/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/read' element={<Reader/>}/>
    {/* <Route path='/book' element={<Bookshelf/>}/> */}
   </Routes>
   {/* <br/> */}
   <hr style={{color:'black', width:'65rem', marginLeft:'6rem'  }}/>
   {/* <Other/> */}
   
   {/* <img src="http://pluspng.com/img-png/book-png-book-png-pic-1600.png" style={{width:'35rem'}} class="img-fluid" alt="..."></img> */}
   {/* <img src="http://pluspng.com/img-png/book-png-book-png-pic-1600.png" style={{width:'35rem'}} class="img-thumbnail" alt="..."></img> */}
   <Footer/>

   </>
  );
}

export default App;
