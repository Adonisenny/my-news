import '../App.css'

const NavBar = ({inputed,onChange}) => {
    return ( 

<nav className="nav-bar">

<h2 className='page-name'>NewsCatcher</h2>
<div className='house-ul'>

<ul className="list">
    <li>Contact</li>
    <li>About</li>
    <li>Other Products</li>

</ul>
<span className='span'><input type='text' placeholder='search by author' inputed={inputed} onChange={onChange} />
</span>    
</div>


</nav>

     );
}
 
export default NavBar;

