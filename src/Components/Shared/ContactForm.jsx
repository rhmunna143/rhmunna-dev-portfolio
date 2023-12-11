import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                // Optionally, show a success message to the user
                if (result.text === "OK") {
                    toast.success("Message sent successfully. I will contact you as soon as possible.");
                }
            }, (error) => {
                console.log(error.text);
                // Optionally, show an error message to the user
                toast.error(error.text);
            });
    };

    return (
        <form onSubmit={sendEmail} className='uppercase flex flex-col justify-center gap-6'>
            <input type="text" name="name" placeholder="Name" className='h-12 px-4 border-2 bg-transparent border-primary rounded-lg' />
            <input type="email" name="email" placeholder="Email" className='h-12 px-4 border-2 bg-transparent border-primary rounded-lg' />
            <textarea name="message" placeholder="Message" className='h-40 pt-5 px-4 border-2 bg-transparent border-primary rounded-lg'></textarea>
            <button className='btn btn-outline btn-warning w-full uppercase' type="submit">Send now</button>
        </form>
    );
};

export default ContactForm;