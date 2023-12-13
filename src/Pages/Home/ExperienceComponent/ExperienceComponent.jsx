/* eslint-disable react/no-unescaped-entities */
import Container from "../../../Components/Shared/Container";
import SectionHeading from "../../../Components/Shared/Heading/SectionHeading";

const ExperienceComponent = () => {
    return (
        <div className="text-white py-8 px-4">
            <Container>
                <SectionHeading title={"MERN Stack Project Experience"} />
                <div className="mb-4 mt-6">
                    <h3 className="text-xl font-semibold mb-2">Project: PRIZO (The ContestHub website)</h3>
                    <p className="text-lg mb-2">
                        <span className="font-semibold">Description: </span>
                        Built a full-stack web application using the MERN stack project."Prize" is a contest hub website designed and developed using the MERN stack (MongoDB, Express.js, React, Node.js). The platform serves as a centralized hub for various contests, incorporating user roles, payment gateways, and robust role-based authorization systems.
                    </p>
                    <p className="text-base mb-2 mt-4">
                        <span className="font-semibold">Functionalities and Responsibilities: </span>
                        Developed RESTful APIs using Node.js and Express for backend functionalities.
                        Implemented user interface and interactions using React for the frontend.
                        Integrated MongoDB for database management and storage. <br />

                        <ul className="list-disc mt-5 ml-5">
                            <li>
                                Implemented a role management system with user, contest creator, and admin roles. Admin panel/dashboards were separately designed for different roles.
                            </li>
                            <li>
                                Developed role-based access controls (RBAC) ensuring specific privileges for contest creators, admins, and users, based on their authorization levels.
                            </li>
                            <li>
                                Integrated payment gateways (such as Stripe) for contest participation, ensuring secure and seamless transactions.
                            </li>
                            <li>
                                Managed contest lifecycle, allowing creators to set deadlines, approve submissions, select winners, and handle contest expiration functionalities.
                            </li>
                            <li>
                                Implemented authentication and security protocols using Mongoose, ensuring firewalls and secure access to sensitive data.
                            </li>
                        </ul>
                    </p>
                    <p className="text-base mt-4">
                        <span className="font-semibold">Technologies: </span>
                        MongoDB (Mongoose), Express.js, React, Node.js, RESTful APIs, FireBase, HTML, CSS, JavaScript etc.
                    </p>

                    <div className="flex gap-5 items-center">
                        <button className="btn btn-outline btn-warning text-lg font-medium mt-6">
                            <a href="https://prizo-7045e.web.app/">Visit Live Website</a>
                        </button>

                        <p className="text-primary mt-6 font-medium">
                            Ask me anytime if you want Admin or Contest Creator Role.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ExperienceComponent;
