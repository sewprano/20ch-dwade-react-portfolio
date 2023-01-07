import Footer from '../components/Navigation.js';

const Header = ({displayedPage, changePage}) => {
    return (
        <header className={Header}>
            <div>
                <h1>Deborah Wade</h1>
            </div>
            <Footer />
        </header>
    )
}

export default Header;