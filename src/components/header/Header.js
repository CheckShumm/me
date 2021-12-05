import './Header.css';
import Profile from "../../res/images/profile.jpeg"
import Instagram from "../../res/images/instagram.svg"
import Youtube from "../../res/images/youtube.svg"
import Tiktok from "../../res/images/tiktok.svg"
import LinedIn from "../../res/images/linkedin.svg"
function Header() {
  return (
    // <div className="Row">
    <div className="grid-container">
        <div className="Conatiner item1">
      <div className="Title">
        <>Hi, my name is Nathan.</>
      </div>
        <div className="Message">
        <>I like to code.</>
      </div>
      </div>
      <img className="Profile item2" src={Profile} 
            width="258" height="200" alt=""/>
      <div className="Links item3">
        <a href="https://www.instagram.com/nathanshumm/">
        <img className="Icon" src={Instagram} alt=""></img>
        </a>
        {/* <img className="Icon" src={Youtube} alt=""></img>
        <img className="Icon" src={Tiktok} alt=""></img> */}
        <a href="https://www.linkedin.com/in/nathan-shummoogum-8a1b8217a/">
          <img className="Icon" src={LinedIn} alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
