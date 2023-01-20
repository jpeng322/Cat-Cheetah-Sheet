import { NavLink } from "react-router-dom";
import "../css/footer.css"
const Footer = () => {
    return (
        <footer>
            <h3>Cat Cheetah-Sheet</h3>
            <div>Copyright © at Cat Cheetah-Sheet  </div>
            <div className="footer-links">
                <div> <a href="https://www.flaticon.com/search?type=icon&word=cat+icons" target="_blank">Icons by Flaticon</a> |</div>
                <div><a href="https://github.com/jpeng322" target="_blank">Github: jpeng322 </a>
                    | </div>
                <div> <NavLink to="/faq"> FAQ</NavLink></div>
            </div>

        </footer>
    );
}

export default Footer;