import { useState } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../../pictures/logo.png";
import "./navigation.css";

export const Navigation = () => {
  const [menuShow, setMenuShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="short_cut-bar">
        <div className="navigation">
          <div className="navigation_logo">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div
            className={menuShow ? "navigation_item show" : "navigation_item"}
          >
            <div className="navigation_list">
              <div
                className="navigation-blog"
                color="white"
                onClick={() => navigate("/")}
              >
                BLOG
              </div>
              <div
                className="navigation-about"
                onClick={() => navigate("/about")}
              >
                ABOUT
              </div>
              <div
                className="navigation-contact"
                onClick={() => navigate("/contact")}
              >
                CONTACT
              </div>
            </div>
          </div>
          <div className="navigation_icon">
            <div className="link-ig">
              <a
                href="https://www.instagram.com/oanee39/"
                target={"_blank"}
                rel="noreferrer"
              >
                <IoLogoInstagram size={27} />
              </a>
            </div>
            <div className="link-fb">
              <a
                href="https://www.facebook.com/oanhkieu.3901"
                target={"_blank"}
                rel="noreferrer"
              >
                <IoLogoFacebook size={27} />
              </a>
            </div>
            <div className="menu-toggle" onClick={() => setMenuShow(!menuShow)}>
              <IoMenu fontSize={27} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
