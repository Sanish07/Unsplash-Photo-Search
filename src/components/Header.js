import {useState} from 'react';
import Main from './Main';

const Header = () => {

    const [keyword, setKeyword] = useState("");
    const [display, setDisplay] = useState(false);
    const [requests, setRequests] = useState(0);

    const handleSubmit = () => {
        setRequests(requests+1);
        setDisplay(true);
    }

    return(
        <>
            <nav>
                <ul>
                    <li id="app-logo"><img src="logo.png" alt="app-icon"/></li>
                    <li id="app-name">Unsplash Photo Search</li>
                </ul>
            </nav>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                }}>
                <div id="search-box">
                        <input onChange={(eve)=>setKeyword(eve.target.value)} placeholder={"Search for image, category, etc."} 
                        value={keyword} type={"text"} pattern={"[a-zA-Z ]+"} id="search-keyword" required={true}  autoFocus/>
                        <button id="s-btn" type="submit"><img src="search_icon.png" alt="search-icon"/></button>
                </div>
            </form>

            {
                display ? <Main keyword={keyword} requests={requests}/> : <></>
            }
        </>
    )
}

export default Header;