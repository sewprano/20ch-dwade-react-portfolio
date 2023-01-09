const Navigation = ({displayPage, changePage}) => {
    return (
        <nav className="navigation">
            <button className={displayPage === 'about' ? StyleSheet.selected : StyleSheet.Button}
            onClick={ () => changePage('about')}>
                About Deborah
            </button>
            <button className={displayPage === 'portfolio' ? StyleSheet.selected : StyleSheet.Button}
            onClick={ () => changePage('portfolio')}>
                Portfolio
            </button>
            <button className={displayPage === 'contact' ? StyleSheet.selected : StyleSheet.Button}
            onClick={ () => changePage('contact')}>
                Contact
            </button>
            <button className={displayPage === 'resume' ? StyleSheet.selected : StyleSheet.Button}
            onClick={ () => changePage('resume')}>
                Resume
            </button>
        </nav>
    )
}
export default Navigation;