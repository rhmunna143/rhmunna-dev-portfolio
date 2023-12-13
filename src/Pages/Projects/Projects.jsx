import Container from "../../Components/Shared/Container";
import SectionHeading from "../../Components/Shared/Heading/SectionHeading";
import ProjectCard from "./ProjectCard";
import { FaGithub } from "react-icons/fa6";

const data = [
    {
        "id": "1345",
        "name": "Eventive Event Management System",
        "image": "https://i.ibb.co/3h8Lshy/eventive-ee030-web-app.png",
        "liveUrl": "https://eventive-ee030.web.app/",
        "clientUrl": "https://github.com/rhmunna143/eventive-pro",
        "serverUrl": "",
        "features": " Authentication using Firebase   Private Routes   AOS Animation   Single Page Application using React Router DOM   Dynamic Route   Private   Number Counter   Marquee   Navigate using state path  ",
        "technologies": [
            "React",
            "Tailwind CSS",
            "FireBase"
        ]
    },
    {
        "id": "2",
        "name": "Zistoria Brand shop web App",
        "image": "https://i.ibb.co/fYkTfhN/1702379658899.png",
        "liveUrl": "https://zestoria-a757b.web.app/",
        "clientUrl": "https://github.com/rhmunna143/client-zestoria-food",
        "serverUrl": "https://github.com/rhmunna143/server-zestoria-food",
        "features": "- Full stack website - User authentication- Protected routes - Database CRUD opt - Server-side - RESTful API's - Slider",
        "technologies": [
            "React",
            "Tailwind CSS",
            "FireBase",
            "MongoDb",
            "Express.Js"
        ]
    },
    {
        "id": "333",
        "name": "Prizo the ContestHub web App",
        "image": "https://i.ibb.co/pWTFKbr/1702380543991.png",
        "liveUrl": "https://github.com/rhmunna143/client-prizo",
        "serverUrl": "https://github.com/rhmunna143/server-prizo",
        "features": "Search -Payment Gateway - Dashboard - Multiple user role - Full Stack - Database -Mongoose -Auth -CRUD",
        "technologies": [
            "React",
            "Tailwind CSS",
            "FireBase",
            "MongoDb",
            "Express.Js",
            "Mongoose"
        ]
    }
]

const Projects = () => {

    return (
        <div className="bg-black">
            <Container>
                <div className="w-fit mx-auto">
                    <SectionHeading title={"Latest Projects"} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
                    {
                        data.map(project => <ProjectCard key={project.id} project={project} />)
                    }
                </div>

                <div className="w-fit mx-auto text-primary font-medium capitalize flex gap-2 items-center">
                    see more Latest updates on <span className="flex items-center btn btn-outline btn-warning btn-sm"><a href="https://github.com/rhmunna143" className="flex gap-2 items-center"><FaGithub /> GitHub</a></span>
                </div>
            </Container>
        </div>
    );
};

export default Projects;