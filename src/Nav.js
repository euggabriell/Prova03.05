import './Nav.css';
import { Link } from 'react-router-dom';

function Nav (){
    return(
        <nav className='navegador'>
            <ul>
                <li className='item1'>
                    <Link className='item1-link' to='/'>Home</Link>
                </li>

                <li className='item1'>
                    <Link className='item1-link' to='/'>Contato</Link>
                </li>

                <li className='item1'>
                    <Link className='item1-link' to='/'>Quem Somos</Link>
                </li>

            </ul>
        </nav>
    )
}
export default Nav;