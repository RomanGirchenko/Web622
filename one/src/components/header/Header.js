import logo from './logo.svg';
import './Header.css';

function Header({title, slogan}) {
    return (
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1>{title}</h1>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <h3>{slogan}</h3>
        </header>
    )
}

export default Header;