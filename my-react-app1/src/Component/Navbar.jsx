import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">首頁</Link>
                </li>
                <li> 
                    <Link to="/about">ABOUT</Link> 
                </li>
            </ul>
        </div>
    )
}