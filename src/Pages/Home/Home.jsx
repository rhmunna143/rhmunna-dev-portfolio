import ContactForm from "../../Components/Shared/ContactForm";
import Container from "../../Components/Shared/Container";
import SectionHeading from "../../Components/Shared/Heading/SectionHeading";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner />



            <Container>
                <div className="w-fit mx-auto">
                    <SectionHeading title={"Contact Me"} align={"center"} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
                    <div className="address">
                        <h2 className="text-3xl my-6 text-blue-600">GET IN TOUCH</h2>
                        <address className="text-lg">
                            745, Kushtia-Meherpur Hwy <br />
                            Mirpur-7030, Kushtia, Bangladesh <br />
                            +880 1877 2555 95 <br />
                            rhmunna19@gmail.com
                        </address>
                    </div>
                    <ContactForm />
                </div>
            </Container>

        </div>
    );
};

export default Home;