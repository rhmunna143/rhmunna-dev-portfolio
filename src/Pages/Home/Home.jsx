import ContactPage from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Banner from "./Banner/Banner";
import ExperienceComponent from "./ExperienceComponent/ExperienceComponent";
import HomeAbout from "./HomeAbout/HomeAbout";
import SkillSets from "./Skills/SkillSets";

const Home = () => {
    return (
        <div>
            <Banner />

            <HomeAbout />

            <SkillSets />

            <ExperienceComponent />

            <Projects />

            <ContactPage />

        </div>
    );
};

export default Home;