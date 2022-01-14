import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogService from "../services/BlogService";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const handeChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    BlogService.createBlog(blog).then((res) => {
      console.log(res);
      navigate("/");
    });
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="row" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="col-md-6 offset-md-3">
            <div
              style={{ border: "1px solid grey", backgroundColor: "#fafafa" }}
              className="my-5"
            >
              <h1
                className="text-center"
                style={{ fontFamily: "roboto", fontWeight: "300" }}
              >
                Create Blog
              </h1>
              <div>
                <div className="container my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Post Title"
                    name="postTitle"
                    required
                    onChange={(e) => {
                      handeChange(e);
                    }}
                  />
                </div>
                <div className="container my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Post Description"
                    name="postDesc"
                    required
                    onChange={(e) => {
                      handeChange(e);
                    }}
                  />
                </div>
                <div className="container my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL"
                    name="imageUrl"
                    required
                    onChange={(e) => {
                      handeChange(e);
                    }}
                  />
                </div>
                <div className="container my-4 text-center">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Create Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CreateBlog;
