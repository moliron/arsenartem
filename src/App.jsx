import './App.css';
import logo from '../src/img/Logo.svg'
import search from '../src/img/Search Icon.svg'
import cart from '../src/img/Cart Icon.svg'
import Group from '../src/img/Group.svg'
import Aerrow from '../src/img/Aerrow.svg'
import fk from '../src/img/fk.svg'
import kk from '../src/img/kk.svg'

function App() {
  return (
    <>
      <div className="main_block">
        <div className='header'>
          <img src={logo} alt="logo"></img>
          <p>Organink</p>
          <ul className='tab'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">News</a></li>
          </ul>
          <div className='block_input'>
            <input type="text" />
            <img src={search} alt='' />
          </div>
          <div className='cart'>
            <img src={cart} alt='' />
            <p>cart(0)</p>
          </div>
        </div>
        <div className='img'>
          <img src={Group} alt='' />
        </div>
        <div className='link1'>
        <p>100% Natural Food</p>
        </div>
        <div className='link2'>
        <p>Choose the best <br/> healthier way <br/> of life</p>
        </div>
        <div>
        <button className='mm'>
          <p>Explore Now</p>
        </button>
        </div>
        <div className='fk'>
          <img src={fk} alt=''></img>
        </div>
        <div className='kk'>
          <img src={kk} alt=''></img>
        </div>
      </div>
    </>
  );
}

export default App;
