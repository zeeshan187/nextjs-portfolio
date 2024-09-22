// @flow strict
"use client"
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import project1 from '../../../../public/projects/project1.jpeg';
import project2 from '../../../../public/projects/project2.jpeg';
import project3 from '../../../../public/projects/project3.png';
import project4 from '../../../../public/projects/project4.jpg';
import project5 from '../../../../public/projects/project5.jpg';
import project6 from '../../../../public/projects/project6.jpg';
import project7 from '../../../../public/projects/project7.png';
import project8 from '../../../../public/projects/project8.png';

function Blog() {
  const [blogs, setBlogs] = useState([
    {
      cover_image: project1,
      url: "http://dochyve.com/",
      description: "Dochyve is a platform that simplifies appointment scheduling between doctors and patients, ensuring seamless and convenient healthcare access.",
      title: "DocHyve",
    },
    {
      cover_image: project2,
      url: "https://meshsq.com/",
      description: "MeshSq is an IT company offering a range of services, including web development, software solutions, and IT consulting, tailored to meet diverse business needs.",
      title: "MeshSq",
    },
    {
      cover_image: project3,
      url: "https://thepazone.com/",
      description: "The PA Zone provides mentorship and guidance for aspiring and current PA students, supporting them through the application process and PA school success.",
      title: "The PA Zone",
    },
    {
      cover_image: project4,
      url: "http://dochyve.com/",
      description: "Dochyve is a platform that simplifies appointment scheduling between doctors and patients, ensuring seamless and convenient healthcare access.",
      title: "DocHyve",
    },
    {
      cover_image: project5,
      url: "http://dochyve.com/",
      description: "Dochyve is a platform that simplifies appointment scheduling between doctors and patients, ensuring seamless and convenient healthcare access.",
      title: "DocHyve",
    },
    {
      cover_image: project6,
      url: "http://dochyve.com/",
      description: "Dochyve is a platform that simplifies appointment scheduling between doctors and patients, ensuring seamless and convenient healthcare access.",
      title: "DocHyve",
    },
    {
      cover_image: project7,
      url: "http://dochyve.com/",
      description: "Dochyve is a platform that simplifies appointment scheduling between doctors and patients, ensuring seamless and convenient healthcare access.",
      title: "DocHyve",
    },
    {
      cover_image: project8,
      url: "http://dochyve.com/",
      description: "Dochyve is a platform that simplifies appointment scheduling between doctors and patients, ensuring seamless and convenient healthcare access.",
      title: "DocHyve",
    },
  ]);
let pathname=usePathname()

  const displayedBlogs = pathname === '/' ? blogs.slice(0, 3) : blogs;

  return (
    <div id="blogs" className="relative z-50 border-t mb-12 lg:mb-24 mt-4 lg:mt-8 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Portfolio</span>
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
