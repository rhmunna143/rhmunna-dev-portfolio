/* eslint-disable react/no-unescaped-entities */
import Container from "../../../Components/Shared/Container";
import "./Banner.css";
import { HiOutlineDownload } from "react-icons/hi";
import CV from "../../../assets/files/MD_RABBI_HAQUE_MUNNA_CV.pdf"
import SocialIcons from "../../../Components/Social/SocialIcons";

const Banner = () => {
    return (

        <div className="banner-bg  lg:py-16 flex flex-col justify-center items-start">
            <Container>
                <div className="banner-black p-16 lg:w-4/5">
                    <h1 className="text-5xl font-bold">Hi, I am <span className="uppercase">Rabi Haque <span className="text-primary">Munna</span></span></h1>

                    <h2 className="text-4xl mt-6 font-bold capitalize text-primary">Web Developer</h2>

                    <p className="w-3/4 mt-5 text-lg font-normal">
                        Tech enthusiast fueled by curiosity. <br /> Dedicated to coding, exploring new technologies, and creating innovative solutions. <br /> Let's connect and build something great!
                    </p>

                    <div className="random-buttons flex flex-col justify-center w-fit gap-6">
                        <a href={CV} download={"MD_RABBI_HAQUE_MUNNA-Sample-CV.pdf"} className="btn w-fit mt-6 btn-outline btn-warning text-lg font-medium uppercase"><HiOutlineDownload /> Download Resume</a>
                        <div className="icons">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Banner;