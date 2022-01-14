import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogService from "../services/BlogService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);
  const loadBlogs = () => {
    BlogService.getAllBlogs().then((res) => {
      console.log(res);
      setBlogs(res.data);
    });
  };
  const handleDelete = (id) => {
    BlogService.deletBlog(id).then((res) => {
      loadBlogs();
    });
  };
  return (
    <div>
      <Navbar />
      <div className="row" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="col-md-6 offset-md-3">
          <div>
            {blogs.map((blog) => (
              <div
                className="my-5"
                style={{ border: "1px solid grey", backgroundColor: "#fafafa" }}
              >
                <div className="blogTitle m-3">
                  <div className="row">
                    <div className="col-md-10 ">
                      <h3 style={{ fontFamily: "Roboto", fontWeight: "300" }}>
                        {blog.postTitle}
                      </h3>
                    </div>
                    <div className="col-md-2">
                      <Link
                        className="mx-2"
                        to="/edit-blog"
                        state={{ id: blog.id, data: blog }}
                        style={{ color: "blue", textDecoration: "none" }}
                      >
                        Edit
                      </Link>
                      <Link
                        className="mx-2"
                        onClick={() => {
                          handleDelete(blog.id);
                        }}
                        to=""
                        style={{ color: "red", textDecoration: "none" }}
                      >
                        X
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blogDesc m-3">
                  <p>{blog.postDesc}</p>
                </div>
                <div className="blogImage mt-2">
                  <img
                    src={blog.imageUrl}
                    alt=""
                    style={{
                      height: "40vh",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
