/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Container from "./Shared/Container";
import SocialIcons from "./Social/SocialIcons";

const Footer = () => {
    return (
        <footer className="bg-black pt-40">
            <Container>
                <div className="text flex flex-col justify-center items-center space-y-5 mb-52">
                    <h6 className="text-2xl text-slate-400">Let's Work Together</h6>

                    <Link to={"/contact"}>
                        <h1 className="md:text-5xl text-3xl text-primary hover:text-white">rhmunna19@gmail.com</h1>
                    </Link>
                </div>
            </Container>

            <div className="foot bg-base-100 py-5 flex justify-around gap-5 items-center px-4">
                <div className="copy">
                    <p className="text-sm">
                        &copy; 2023 Rabbi Haque Munna. All rights reserved.
                    </p>
                </div>

                <SocialIcons />
            </div>
        </footer>
    );
};

export default Footer;