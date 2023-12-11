/* eslint-disable react/prop-types */

const SectionHeading = ({ align, title }) => {
    return (
        <div className={`text-${align} text-primary`}>
            <h1 className="text-4xl font-medium">{title}</h1>
        </div>
    );
};

export default SectionHeading;