import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/" className="title">Intuitive Quiz Hub</Link>
            <hr className="divider" />
            
        </div>
    )
}

export default Header