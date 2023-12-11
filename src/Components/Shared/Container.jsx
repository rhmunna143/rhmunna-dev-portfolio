/* eslint-disable react/prop-types */

const Container = ({ children }) => {
    return (
        <div className="container mx-auto py-20">
            {children}
        </div>
    );
};

export default Container;