import axios from "axios";

class BlogService {
  baseUrl = "http://localhost:8080/api/blog";
  async getAllBlogs() {
    return await axios.get(`${this.baseUrl}`);
  }

  async getBlogById(id) {
    return await axios.get(`${this.baseUrl}/${id}`);
  }

  async createBlog(blog) {
    return await axios.post(`${this.baseUrl}`, blog);
  }

  async deletBlog(id) {
    return await axios.delete(`${this.baseUrl}/${id}`);
  }

  async updateBlog(id, blog) {
    return await axios.put(`${this.baseUrl}/${id}`, blog);
  }
}
export default new BlogService();
