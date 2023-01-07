import Navigation from '../components/Navigation.js';

const Header = ({displayedPage, changePage}) => {
    return (
        <header className='Header'>
            <div>
                <h1>Deborah Wade</h1>
            </div>
            <Navigation displayedPage={displayedPage} changePage={changePage} />
        </header>
    )
}

export default Header;