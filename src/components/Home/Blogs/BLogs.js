import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css'
import Henry from "../../../images/Henry.png";
import Teddy from "../../../images/Teddy.png";
import Nessa from "../../../images/Nessa.png";

const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Henry",
    authorImg: Henry,
    date: "25 May 2021",
  },
  {
    title: "Two time brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Teddy",
    authorImg: Teddy,
    date: "13 April 2021",
  },
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Nessa",
    authorImg: Nessa,
    date: "14 February 2021",
  },
];

const BLogs = () => {
          return (
            <section className="blogs my-5 py-5">
              <div className="container">
                <div className="section-header text-center">
                  <h5 style={{ color: "#6ACECE" }}>OUR BLOG</h5>
                  <h2 style={{ color: "#203047" }}>
                    From Our Blog News
                  </h2>
                </div>
                <div className="card-group mt-5">
                  {blogData.map((blog) => (
                    <BlogPost blog={blog} key={blog.title}></BlogPost>
                  ))}
                </div>
              </div>
            </section>
          );
};

export default BLogs;