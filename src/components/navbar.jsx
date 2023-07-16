import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Nav.css";

function Nav() {
  return (
    <div className='navbar'>
        <div className="links">
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  )
}

export default Nav;