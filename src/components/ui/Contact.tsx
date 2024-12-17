
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PhoneOutgoingIcon } from "lucide-react";
import { Input } from "@/components/ui/input"
import { BiEnvelope } from "react-icons/bi";



const Contact = () => {
    return (
        <div className="grid grid-cols-2 gap-10 p-20">
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <PhoneOutgoingIcon></PhoneOutgoingIcon>
                    <h2 className="text-2xl font-bold">+880 1747474890</h2>
                </div>
                <div className="flex gap-2">
                    <BiEnvelope className="text-3xl"></BiEnvelope>
                    <h2 className="text-2xl font-bold">muhimuddintanim@gmail.com</h2>
                </div>
                <div className="flex gap-2">
                    <PhoneOutgoingIcon></PhoneOutgoingIcon>
                    <h2 className="text-2xl font-bold">+880 1747474890</h2>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <input type="text" className="px-5 py-2 w-full" placeholder="Name" />
                <div className="flex gap-2">
                    <input type="email" className="px-5 py-2 w-full" placeholder="Email" />
                    <input type="call" className="px-5 py-2 w-full" placeholder="Phone" />

                </div>
                <textarea name="text" className="w-full px-5 py-2" placeholder="Message" id=""></textarea>

            </div>
        </div>
    );
};

export default Contact;