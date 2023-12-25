/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Container from "../../../Components/Shared/Container";
import SectionHeading from "../../../Components/Shared/Heading/SectionHeading";
import image from "../../../assets/images/about.gif";
import { MdOutlineMail } from "react-icons/md";

const HomeAbout = () => {
    return (
        <div className="bg-black">
            <Container>
                <hr />
                <div className="col flex flex-col md:flex-row justify-around gap-10 lg:items-center pt-16 pb-10">
                    <div data-aos="fade-right" className="img flex-1">
                        <img src={image} alt="" className="shadow-lg border-b-[6px] lg:border-b-8" />
                    </div>

                    <div data-aos="fade-left" className="text w-full md:w-1/2">
                        <div className="heading">
                            <SectionHeading title={"Tech Enthusiast Developer"} />
                        </div>

                        <div className="text-lg font-medium mt-12 text-justify">
                            <p className="">
                                👋 Hello! I'm Rabbi Haque Munna, a passionate Web Developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With 4 years of hands-on experience in the development realm, I thrive on crafting innovative solutions and bringing ideas to life through code.
                            </p>

                            <p className="mt-5 text-sm">
                                🚀 My expertise lies in harnessing the power of JavaScript and its associated technologies - ReactJs for dynamic front-end experiences, NodeJs and ExpressJs for robust server-side development, along with MongoDB for efficient and scalable database solutions. I am also in the learning zone of Typescript and NextJs.
                            </p>

                            <p className="mt-5 text-sm">
                                🔗 You can contact me through LinkedIn  or at- 
                                <p className="flex gap-1 items-center"><MdOutlineMail /> rhmunna19@gmail.com</p>
                                📲 WhatsApp: 018772-55595
                            </p>

                            <p className="mt-5 text-sm">
                                Thank you for visiting my portfolio! 😊 <br />
                                "Code is poetry!" ✨ <br />
                                - someone
                            </p>
                        </div>

                        <div className="contact mt-10">
                            <button className="btn btn-outline btn-warning uppercase text-lg font-medium w-1/2">
                                <Link to={"/contact"}>
                                    Contact Me
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeAbout;