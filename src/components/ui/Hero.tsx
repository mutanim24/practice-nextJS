
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
// import image from "../../../public/images/profile.jpg"


const Hero = () => {
    return (

        <div className="sm:p-20 p-10 sm:flex sm:gap-36 h-screen flex flex-col-reverse sm:flex-row">
            <div className="flex flex-col justify-center text-center sm:text-left">
                <h2 className="sm:text-5xl text-3xl font-bold mt-4 sm:mt-0">Md. Tanim Ahmed</h2>
                <p className="my-4 sm:my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magnam repellat, eos aliquam placeat eum modi numquam consequuntur ullam quas eligendi minima quos. Corporis commodi ipsa velit nam cupiditate dolorem ipsum assumenda impedit, animi, sint nisi est temporibus perspiciatis. Cumque molestias ipsa, facere dolore fugit tempora ipsam obcaecati quo ex?
                </p>
                {/* <Button></Button> */}
                <div className="flex justify-center sm:justify-start gap-3">
                    <FaFacebook className="text-4xl" />
                    <BsInstagram className="text-4xl" />
                    <BsGithub className="text-4xl" />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="rounded-full">
                    <img className="rounded-full" src="images/profile.jpg" alt="Profile" />
                </div>
            </div>
        </div>



    );
};

export default Hero;