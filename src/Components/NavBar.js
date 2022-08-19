import '../App.css'
import { Link } from 'react-router-dom';

const NavBar = ({inputed,onChange}) => {
    return ( 

<nav className="nav-bar">

<h2 className='page-name'>NewsCatcher</h2>
<div className='house-ul'>

<ul className="list">
    <li><Link to= '/'>Home</Link></li>
    <li><Link to= '/contact'>Contact</Link></li>
    <li>About</li>
    

</ul>
<span className='span'><input type='text' placeholder='search by author' inputed={inputed} onChange={onChange} />
</span>    
</div>


</nav>

     );
}
 

export default NavBar;

