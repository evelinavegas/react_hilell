import '../App.css';

import Logo from '../logo.png'
function Header(){
    return (
        <div>
            <ul className='Header-container'>
                <img src={Logo} className='Logo'/>
                <p>Logo</p>
            </ul>
        </div>    
    )
}
export default Header