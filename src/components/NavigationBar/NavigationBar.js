import './NavigationBar.css';

function NavigationBar() {
    return (
        <nav className="navigation">
            <button className="navigation-all navigation-all--selected">All</button>
            <button className="navigation-active navigation-active--selected">Active</button>
            <button className="navigation-done navigation-active--selected">Done</button>
        </nav>
    );
}

export { NavigationBar };