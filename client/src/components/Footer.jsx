import "./FooterStyle.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location flex flex-col gap-2">
            <div className="flex items-center justify-start">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <p>Bihar, India</p>
            </div>
            <div className="flex items-center justify-start">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a
                href="tel:+919431433015"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                +91 9431433015
              </a>
            </div>
            <div className="flex items-center justify-start">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a
                href="mailto:shubhampriya513@gmail.com"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                shubhampriya513@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I am a full stack web developer. I have experience in developing web
            applications using React, Node, Express, and MongoDB.
          </p>
          <div className="flex gap-3 my-3">
            <Link
              to="https://www.facebook.com/profile.php?id=100089199673938&mibextid=ZbWKwL"
              target="_blank"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://www.instagram.com/shubhampriya_" target="_blank">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link
              to="https://in.linkedin.com/in/shubham-priya-2112a8262"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
