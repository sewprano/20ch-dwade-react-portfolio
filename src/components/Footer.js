import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedin from '../assets/linkedIn.png';

function Footer() {
    return (
        <div className='footer'>
            &copy; 2023 Deborah Wade | All images &copy;  DWade Photography 
            <nav>
                <a href="mailto:sopranosamurai@yahoo.com">
                    <img src={email} alt= 'email icon'/>
                </a>

                <a href="https://github.com/sewprano">
                    <img src={github} alt='github icon' />
                </a>
                
                <a href="www.linkedin.com/in/deborah-wade">
                    <img src={linkedin} alt='LinkedIn icon' />
                </a>
                
            </nav>
        </div>
    )
}

export default Footer;