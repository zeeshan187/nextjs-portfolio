// @flow strict
"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import BlogCard from "./blog-card";
import { useState } from "react";
import { usePathname } from "next/navigation";
import project1 from "../../../../public/projects/project1.jpeg";
import project2 from "../../../../public/projects/project2.jpeg";
import project3 from "../../../../public/projects/project3.png";
import project4 from "../../../../public/projects/project4.jpg";
import project5 from "../../../../public/projects/project5.jpg";
import project6 from "../../../../public/projects/project6.jpg";
import project7 from "../../../../public/projects/project7.png";
import project8 from "../../../../public/projects/project8.png";
import project9 from "../../../../public/projects/project9.png";
import project10 from "../../../../public/projects/project10.png";
import project11 from "../../../../public/projects/project11.png";
import project12 from "../../../../public/projects/project12.png";
import project13 from "../../../../public/projects/project13.png";
import project14 from "../../../../public/projects/project14.png";
import project15 from "../../../../public/projects/project15.png";


function Blog() {
  const [blogs, setBlogs] = useState([
    {
      cover_image: project1,
      url: "http://dochyve.com/",
      description:
        "Dochyve is a platform that simplifies appointment scheduling between doctors and patients, ensuring seamless and convenient healthcare access.",
      title: "DocHyve",
    },
    {
      cover_image: project10,
      url: "https://hotfinch.com/",
      description: "HotFich is a dynamic eCommerce platform offering a wide variety of products, from electronics to fashion. With an intuitive interface, secure payment options, and fast shipping, it ensures a seamless shopping experience for customers worldwide.",
      title: "HotFinch",
    },
    {
      cover_image: project9,
      url: "https://goatpad.app/",
      description:
        "Bitcoin Platform offers a secure and user-friendly environment for trading, investing, and learning about cryptocurrencies, with real-time market insights and tools for both beginners and experienced traders.",
      title: "GoatPad",
    },
    {
      cover_image: project2,
      url: "https://meshsq.com/",
      description:
        "MeshSq is an IT company offering a range of services, including web development, software solutions, and IT consulting, tailored to meet diverse business needs.",
      title: "MeshSq",
    },
   
    {
      cover_image: project3,
      url: "https://thepazone.com/",
      description:
        "The PA Zone provides mentorship and guidance for aspiring and current PA students, supporting them through the application process and PA school success.",
      title: "The PA Zone",
    },
    {
      cover_image: project4,
      url: "http://medsitnexus.com/",
      description:
        "Meds IT Nexus is a healthcare technology company that provides innovative IT solutions to streamline medical processes, including credentialing, telemedicine, and healthcare management systems.",
      title: "Meds IT Nexus",
    },
    {
      cover_image: project11,
      url: "https://www.chime.com/",
      description: "Chime is a modern, mobile-first banking platform based in the USA, offering no-fee banking services, automatic savings, and early direct deposits. It empowers users with financial tools designed to simplify money management and promote financial wellness.",
      title: "Chime",
    },
    {
      cover_image: project12,
      url: "https://www.thecredentialing.com/",
      description: "The Credentialing Platform simplifies healthcare provider credentialing, ensuring compliance and efficiency while reducing administrative burdens for medical organizations.",
      title: "The Credentialing",
    },
    {
      cover_image: project13,
      url: "https://simplif.com/",
      description: "Simplif connects businesses with celebrities and influencers for effective advertising, simplifying endorsements to enhance brand visibility.",
      title: "Simplif",
    },
    {
      cover_image: project14,
      url: "https://poodl.org/",
      description: "Poodl Blockchain offers a secure and decentralized platform for managing digital assets, enabling efficient transactions and smart contracts across various industries.",
      title: "Poodl Blockchain",
    },
    {
      cover_image: project15,
      url: "https://luther.health/",
      description: "Luther Health is a comprehensive healthcare platform that connects patients with medical professionals, offering telehealth services, appointment scheduling, and personalized health resources.",
      title: "Luther Health",
    },
  ]);
  let pathname = usePathname();

  const displayedBlogs = pathname === "/" ? blogs.slice(0, 3) : blogs;

  return (
    <div
      id="blogs"
      className="relative z-50 border-t mb-12 lg:mb-24 mt-4 lg:mt-8 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Portfolio
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {displayedBlogs.map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>

      <div className="flex justify-center mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/portfolio"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default Blog;
