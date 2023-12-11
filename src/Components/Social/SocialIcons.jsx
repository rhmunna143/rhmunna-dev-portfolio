import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
    return (
        <div className="flex items-center gap-4 text-4xl text-white">
            <a href="https://www.linkedin.com/in/rhmunna143/" className="hover:text-primary"><FaLinkedin /></a>
            <a href="https://github.com/rhmunna143" className="hover:text-primary"><FaGithubSquare /></a>
            <a href="https://www.facebook.com/Munna.rmu" className="hover:text-primary"><FaFacebookSquare /></a>
            <a href="https://twitter.com/rhmunna143" className="hover:text-primary"><FaSquareXTwitter /></a>
        </div>
    );
};

export default SocialIcons;