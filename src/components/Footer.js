import github from '../assets/github.png';
import stack from '../assets/stack.png';
import linkedin from '../assets/linkedIn.png';

function Footer() {
    return (
        <div className='footer'>
            <nav>
                <a href="https://github.com/sewprano">
                    <img src={github} alt='github icon' />
                </a>
                
                <a href="www.linkedin.com/in/deborah-wade">
                    <img src={linkedin} alt='LinkedIn icon' />
                </a>

                <a href="https://stackoverflow.com/users/19423978/sewprano">
                    <img src={stack} alt= 'email icon'/>
                </a>
                
            </nav>

            &copy; 2023 Deborah Wade
        </div>
    )
}

export default Footer;