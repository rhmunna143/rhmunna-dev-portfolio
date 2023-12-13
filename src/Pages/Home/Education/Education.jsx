import Container from '../../../Components/Shared/Container';
import SectionHeading from '../../../Components/Shared/Heading/SectionHeading';

const Education = () => {
    return (
        <div className='bg-black'>
            <Container>
                <div className="div w-fit mx-auto mb-20">
                    <SectionHeading title={"Education"} />
                </div>

                <ul className="timeline timeline-vertical justify-center">
                    <li>
                        <div className="timeline-start">2017</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <p className='text-2xl text-primary font-medium'>SSC - Science</p>
                            <p className='text-xl'>Kuripole Adarshaw Secondary School, Mirpur, Kushtia</p>
                            Jessore Board <br />
                            GPA: 4.55
                        </div>
                        <hr className='bg-primary' />
                    </li>

                    <li>
                        <hr className='bg-primary' />
                        <div className="timeline-end">2019</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start timeline-box">
                            <p className='text-2xl text-primary font-medium'>HSC - Science </p>
                            <p className='text-xl'>Mirpur Mahmuda Chowdhury College, Mirpur, Kushtia</p>
                            Jessore Board <br />
                            GPA: 4.42
                        </div>
                        <hr className='bg-primary' />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-start">2026</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <p className='text-2xl text-primary font-medium'> BSc - Computer Science and Engineering (CSE)</p>
                            <p className='text-xl'>Rabindra Maitree University, Kushtia</p>
                            <p>Present: 3<sup>rd</sup> Semester</p>
                            <p>Status: Enrolled</p>
                        </div>
                        <hr />
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default Education;