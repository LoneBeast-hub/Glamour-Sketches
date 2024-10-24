import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="w-full">
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto">
                {/* super footer */}
                <div className="py-[30px] flex flex-col md:flex-row gap-[20px] items-start md:items-center justify-between">
                    {/* contact us */}
                    <div>
                        {/* heading */}
                        <h1 className="text-[2rem] font-bold text-[#d3a2ad]">Contact Us</h1>
                        {/* phone number */}
                        <div className="flex items-center mt-[10px] gap-[7px]">
                            {/* icon */}
                            <FaPhoneAlt className="text-[1.4rem] text-[#d3a2ad]" />
                            {/* phone */}
                            <p className="text-[1.6rem]">+234 780 2918 492</p>
                        </div>
                        {/* Email */}
                        <div className="flex items-center gap-[7px]">
                            {/* icon */}
                            <FaEnvelope className="text-[1.4rem] text-[#d3a2ad]" />
                            {/* email */}
                            <p className="text-[1.6rem]">info@glamoursketches.com</p>
                        </div>
                    </div>
                    {/* follow us */}
                    <div>
                        {/* heading */}
                        <h1 className="text-[2rem] font-bold text-[#d3a2ad]">Follow Us</h1>
                        {/* social media links */}
                        <div className="flex mt-[10px] gap-[10px]">
                            {/* twitter */}
                            <a href="#" className="bg-[#d3a2ad] p-[10px] rounded-full">
                                <FaTwitter className="text-[1.4rem] text-white" />
                            </a>
                            {/* Facebook */}
                            <a href="#" className="bg-[#d3a2ad] p-[10px] rounded-full">
                                <FaFacebookF className="text-[1.4rem] text-white" />
                            </a>
                            {/* Instagram */}
                            <a href="#" className="bg-[#d3a2ad] p-[10px] rounded-full">
                                <FaInstagram className="text-[1.4rem] text-white" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* sub footer */}
                <div className="border-t border-[#dadada] py-[30px]">
                    <p className="text-[1.8rem] text-center">&copy; 2024 Glamour Sketches. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;