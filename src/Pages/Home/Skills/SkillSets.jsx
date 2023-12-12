import Container from "../../../Components/Shared/Container";
import SectionHeading from "../../../Components/Shared/Heading/SectionHeading";
import { SiJavascript, SiExpress, SiMongodb, SiMongoose, SiFirebase, SiHtml5, SiCss3, SiTailwindcss, SiGithub } from "react-icons/si";
import { FaReact, FaJava, FaPython } from "react-icons/fa6";
import { TbBrandNodejs, TbBrandCpp } from "react-icons/tb";

const SkillSets = () => {
    return (
        <div>
            <Container>
                <div className="div w-fit mx-auto">
                    <SectionHeading title={"Skills Set"} />
                </div>

                <div className="skill-icons text-8xl flex gap-10 flex-wrap justify-center items-center mt-20">
                    <SiJavascript className="hover:text-primary" />
                    <FaReact className="hover:text-primary" />
                    <TbBrandNodejs className="hover:text-primary" />
                    <SiExpress className="hover:text-primary" />
                    <SiMongodb className="hover:text-primary" />
                    <SiMongoose className="hover:text-primary" />
                    <SiFirebase className="hover:text-primary" />
                    <SiHtml5 className="hover:text-primary" />
                    <SiCss3 className="hover:text-primary" />
                    <SiTailwindcss className="hover:text-primary" />
                    <TbBrandCpp className="hover:text-primary" />
                    <FaJava className="hover:text-primary" />
                    <FaPython className="hover:text-primary" />
                    <SiGithub className="hover:text-primary" />

                </div>
            </Container>
        </div>
    );
};

export default SkillSets;