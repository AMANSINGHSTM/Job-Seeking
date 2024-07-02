import { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By amansrgc2021@gmail.com</div>
      <div>
        <Link to={"https://github.com/AMANSINGHSTM"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://twitter.com/AmanSin73213855"} target="_blank">
          <FaTwitter />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/aman-singh-6b78a524b/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
