/* eslint-disable react/prop-types */

const SectionHeading = ({ align, title }) => {
    return (
        <div data-aos="fade-down" className={`text-${align} text-primary`}>
            <h1 className="text-5xl font-medium">{title}</h1>
        </div>
    );
};

export default SectionHeading;