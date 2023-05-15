import './appHeader.scss';
import { NavLink, Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/" href="#">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink 
                            style={({ isActive }) => ({
                                color: isActive ? '#9F0013' : '#232222',
                            })} to="/"
                        >Characters</NavLink></li>
                    /
                    <li><NavLink 
                            style={({ isActive }) => ({
                                color: isActive ? '#9F0013' : '#232222',
                            })} to="/comics"
                        >Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;