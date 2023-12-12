import ContactPage from "../Contact/Contact";
import Banner from "./Banner/Banner";
import HomeAbout from "./HomeAbout/HomeAbout";
import SkillSets from "./Skills/SkillSets";


const Home = () => {
    return (
        <div>
            <Banner />

            <HomeAbout/>

            <SkillSets />

            <ContactPage />

        </div>
    );
};

export default Home;