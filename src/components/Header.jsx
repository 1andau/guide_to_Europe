import React from 'react';
import logoSvg from '../assets/img/SL..png';
import Button from './Button';
 import {Link} from 'react-router-dom';
 
function Header(){
    return(
        <div className="header">
        <div className="container">
        <div className="box">
 <input type="text" placeholder="Search..." />
<div className="search"></div>
</div>

          <Link to = "/">
<header id='header'>
<img className='logo' alt='logo' src = {logoSvg}></img>
  
<nav>
<ul className='navbar'> 
   <li className='links' to="/">Впечатления</li>
   <li className='links' to="/">Посетить</li>
   <li className='links' to="/">Вишлисты</li>
   <li className='links' to="/">Нестандартный отдых</li>

 </ul>
</nav>


<Button className="btn-contact"to="/">Sign in account</Button>




</header>



 </Link>


 <div className="header__cart">

              
            <Link to="/cart">
            <Button className="button--cart">
            <span>2222₽</span>
            </Button>

            </Link>




      
          </div>
        </div>
      </div>

    )
}
export default Header;