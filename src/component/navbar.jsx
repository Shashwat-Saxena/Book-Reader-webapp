import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";

const navbar = ({searchquery , setSearchqueary, user}) => {
  const HandleChange= (e) => setSearchqueary(e.target.value) 
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-custom sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{fontStyle:'italic' , fontFamily:'cursive'}}>Book Reader</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{height: "100px;" , textDecoration:'none',  margin:'16rem'}}>
        <li class="nav-item">
            <Link to='/'><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
          
        </li>

        <li class="nav-item">
            <Link to='/Hindi'><a class="nav-link active" aria-current="page" href="#">Hindi</a></Link>
          
        </li>

        <li class="nav-item">
            <Link to='/English'> <a class="nav-link active" aria-current="page" href="#">English</a></Link>
         
        </li>

        <li class="nav-item">
            <Link to='/Myth'> <a class="nav-link active" aria-current="page" href="#">Mythology</a></Link>
         
        </li>

        <li class="nav-item" style={{textDecoration:'none'}}>
            <Link to='/Programming'> <a class="nav-link active" aria-current="page" href="#" style={{textDecoration:'none'}}>Engineering</a></Link>
         
        </li>
        
       
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search Books......" aria-label="Search" value={searchquery} onChange={HandleChange} style={{ padding: '5px', width: '250px' }}/>
        {/* <button class="button" type="submit" onClick={() => setSearchqueary(searchquery)}>Search</button> */}


      </form>

      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item">
                <span className="nav-link">Welcome, {user.name}!</span>
              </li>
            ) : (
              <li className="nav-item">
                {/* <Link className="nav-link" to="/login">Login</Link> */}
                <Link to='/Login'> <h3 style={{cursor:'pointer' , color:'#28AFDE'}}> <FaUserAlt /></h3></Link>
              </li>
            )}
          </ul>
        </div>
      

     
     
    </div>
  </div>
</nav>
    </>
  )
}

export default navbar