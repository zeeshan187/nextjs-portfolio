import React from 'react'
import Blog from '../components/homepage/blog'
export const metadata = {
  title: "Portfolio - Zeeshan Tahir",
  description:
    "This is the portfolio of Zeeshan Tahir. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};
const page = () => {
  return (
    <div>
      <Blog />
    </div>
  )
}

export default page
