const Navigation = ({displayedPage, changePage}) => {
    return (
        <nav className="navigation">
            <button className={displayedPage === 'about' ? 'selected' : 'button'}
            onClick={ () => changePage('about')}>
                About Deborah
            </button>
            <button className={displayedPage === 'portfolio' ? 'selected' : 'button'}
            onClick={ () => changePage('portfolio')}>
                Portfolio
            </button>
            <button className={displayedPage === 'contact' ? 'selected' : 'button'}
            onClick={ () => changePage('contact')}>
                Contact
            </button>
            <button className={displayedPage === 'resume' ? 'selected' : 'button'}
            onClick={ () => changePage('resume')}>
                Resume
            </button>
        </nav>
    )
}
export default Navigation;