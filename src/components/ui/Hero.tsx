
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
// import image from "../../../public/images/profile.jpg"


const Hero = () => {
    return (
        <div>
            <div className="px-20 flex gap-36 h-screen" >
                <div className="flex flex-col justify-center " >
                    <h2 className="text-5xl font-bold" > Md.Tanim </h2>
                    < p className="my-8" > Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae magnam repellat, eos aliquam placeat eum modi numquam consequuntur ullam quas eligendi minima quos.Corporis commodi ipsa velit nam cupiditate dolorem ipsum assumenda impedit, animi, sint nisi est temporibus perspiciatis.Cumque molestias ipsa, facere dolore fugit tempora ipsam obcaecati quo ex ? </p>
                    {/* <Button></Button> */}
                    <div className="flex gap-3" >
                        <FaFacebook className="text-4xl" > </FaFacebook>
                        <BsInstagram className="text-4xl"/>
                        <BsGithub className="text-4xl"/>
                    </div>
                    {/* import { Button } from "@shadcn/ui"; */}
                    {/* <Button>
            Click Me
          </Button> */}
                </div>
                < div className="flex flex-col justify-center" >
                    <div className="rounded-full" >
                        <img className="rounded-full" src="images/profile.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;