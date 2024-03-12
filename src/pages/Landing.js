import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components';
import {Logo} from '../components'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage'
const Landing = () => {
    return (
        <Wrapper>
                <main>
        <nav>
          <Logo/>
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>some text</p>
            <Link to="/register" className='btn btn-hero'>
              Login/Register
            </Link>
           </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </main>
        </Wrapper>
  
    );
  };
  
  export default Landing;

  