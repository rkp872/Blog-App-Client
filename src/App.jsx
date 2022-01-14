import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import CreateBlog from "./components/CreateBlog";
import EditBlog from "./components/EditBlog";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/edit-blog" element={<EditBlog />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
