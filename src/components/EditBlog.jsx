import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BlogService from "../services/BlogService";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const EditBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [blog, setBlog] = useState(location.state.data);

  const handeChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    BlogService.updateBlog(location.state.id, blog).then((res) => {
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
                className=" text-center"
                style={{ fontFamily: "roboto", fontWeight: "300" }}
              >
                Update Blog
              </h1>
              <div>
                <div className="container my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Post Title"
                    name="postTitle"
                    value={blog.postTitle}
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
                    value={blog.postDesc}
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
                    value={blog.imageUrl}
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
                    Update Post
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

export default EditBlog;
