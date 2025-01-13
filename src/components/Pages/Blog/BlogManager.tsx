import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button1 from "../../Button/Button1";
import type Blog from "../../../types/Blog";

function BlogManager() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // TODO: Fetch blogs from backend
  }, []);

  const handleDelete = async (id: string) => {
    // TODO: Implement delete functionality
    console.log("Deleting blog:", id);
  };

  return (
    <div className="max-w-[1440px] mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-brand-blue">Blog Manager</h1>
        <Link to="/blog-composer">
          <Button1 label="NEW BLOG" className="text-brand-blue" />
        </Link>
      </div>

      <div className="grid gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg p-6 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold text-brand-blue">
                {blog.title}
              </h2>
              <p className="text-brand-blue-light">{blog.subtitle}</p>
              <p className="text-sm text-gray-500">
                {new Date(blog.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to={`/blog-editor/${blog.id}`}>
                <Button1 label="EDIT" className="text-brand-blue" />
              </Link>
              <Button1
                label="DELETE"
                onClick={() => handleDelete(blog.id)}
                className="text-brand-orange"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogManager;
