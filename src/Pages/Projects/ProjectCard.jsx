/* eslint-disable react/prop-types */


const ProjectCard = ({ project }) => {
    return (
        <div className="flex flex-col justify-center bg-black p-4 rounded-lg">
            <div className="img" style={{ overflowX: "hidden", overflowY: "hidden" }}>
                <img src={project.image} alt="" className="h-full w-full object-cover hover:scale-110 transition rounded-lg" />
            </div>

            <div className="text">
                <h3 className="mt-5 text-2xl">{project.name.slice(0, 30) + ".."}</h3>
                <p className="mt-5">
                    <span className="font-semibold text-lg">Features:</span> {project.features.slice(0, 140) + "..."}
                </p>

                <div className="ALL gap-2 flex text-xs items-center  justify-between mt-5 pb-4 pt-2" style={{ overflowX: "hidden" }}>
                    <button className="btn btn-outline btn-warning btn-xs uppercase">
                        <a href={project.liveUrl}>Live Web</a>
                    </button>

                    <button className="btn btn-outline btn-warning btn-xs uppercase">
                        <a href={project.clientUrl}>Client side source code</a>
                    </button>

                    <button className="btn btn-outline btn-warning btn-xs uppercase">
                        <a href={project.serverUrl}>{project.serverUrl ? "Server side code" : "No server side"}</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;