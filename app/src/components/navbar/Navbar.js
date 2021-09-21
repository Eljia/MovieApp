import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
// import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // window.onscroll = () => {
  //   setIsScrolled(window.pageXOffset === 0 ? false : true);
  //   return () => (window.onscroll = null);
  // };
  // console.log(isScrolled);
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt=""
            srcset=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://us.123rf.com/450wm/nikolaydzhi/nikolaydzhi1609/nikolaydzhi160900214/64770779-la-belle-jeune-femme-en-hijab-le-vecteur-illustration-isol%C3%A9-sur-un-fond-blanc-.jpg?ver=6"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
