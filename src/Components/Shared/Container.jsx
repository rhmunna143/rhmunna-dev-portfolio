/* eslint-disable react/prop-types */

const Container = ({ children }) => {
    return (
        <div className="container mx-auto py-20 px-4 lg:px-0">
            {children}
        </div>
    );
};

export default Container;