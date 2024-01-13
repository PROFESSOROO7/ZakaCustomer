import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import shopFront from "./../../assets/shopFront.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    React.useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
    return (
        <>  
        <Navbar/>
              <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Welcome to Zaka Shoes, your premier online shoe store in Gujrat, Pakistan! Founded by Zaka Ullah, we take pride in offering the latest trends in footwear at prices that won&#39;t break the bank.

Our journey began in the heart of Gujrat with a simple goal — to provide our community with high-quality, affordable shoes. Zaka Shoes, under the vision of Zaka Ullah, has since evolved into a trusted online destination, serving the diverse fashion needs of Gujrat and beyond.

What makes us unique is our dedication to offering a diverse collection that suits every taste. From casual sneakers to elegant heels, Zaka Shoes has curated a selection to complement your individual style.

Our passionate team, led by Zaka Ullah, is committed to staying on top of the latest trends, ensuring you have access to the best brands and styles. We believe that the right pair of shoes can boost your confidence and make every step a fashionable statement.

Thank you for being a part of the Zaka Shoes journey, envisioned by Zaka Ullah. Step into style and comfort with us today!</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={shopFront} alt="Shop Front" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Zaka Shoes is not just a footwear destination; it&#39;s a story woven with passion and a commitment to style. Founded by Zaka Ullah, our journey began in the vibrant city of Gujrat, Pakistan.

Zaka Ullah, a visionary with a love for fashion, started Zaka Shoes with a simple dream — to make stylish and comfortable footwear accessible to everyone. What started as a small venture in the heart of Gujrat has blossomed into a beloved online shoe store, serving the diverse needs of our community.

From the beginning, our focus has been on providing high-quality shoes that don&#39;t compromise on style or affordability. Zaka Shoes has become synonymous with the latest trends, curated to suit the unique tastes of our customers.

Led by Zaka Ullah&#39;s vision, our dedicated team is driven by a shared passion for staying ahead of the fashion curve. We believe that every step should be a confident stride, and the right pair of shoes can make that possible.

As we continue to grow, Zaka Shoes remains committed to offering a diverse collection that caters to every occasion and style preference. Thank you for being part of our story. Step into the world of Zaka Shoes, where fashion meets comfort, and the journey is as exciting as the destination.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    );
};

export default About;