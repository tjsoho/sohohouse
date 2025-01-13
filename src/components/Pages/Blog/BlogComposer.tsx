import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import Button1 from "../../Button/Button1";

function BlogComposer() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState({
    id: uuidv4(),
    title: "",
    subtitle: "",
    slug: "",
    image: "",
    content: "",
    date: new Date().toISOString(),
    published: false,
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setBlog({
      ...blog,
      title,
      slug: generateSlug(title),
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Basic validation
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);

      // Replace with your image upload API endpoint
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      setBlog({ ...blog, image: data.imageUrl });
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error("Failed to upload image");
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (shouldPublish = false) => {
    setIsLoading(true);
    try {
      // Validate required fields
      if (!blog.title || !blog.content || !blog.image) {
        toast.error("Please fill in all required fields");
        return;
      }

      const blogToSave = {
        ...blog,
        published: shouldPublish,
      };

      // Replace with your blog save API endpoint
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogToSave),
      });

      if (!response.ok) throw new Error("Failed to save blog");

      toast.success(
        shouldPublish
          ? "Blog published successfully!"
          : "Draft saved successfully!"
      );

      if (shouldPublish) {
        navigate("/journal");
      }
    } catch (error) {
      toast.error("Failed to save blog");
      console.error("Save error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto p-8">
      <h1 className="text-3xl font-bold text-brand-blue mb-8">Blog Composer</h1>

      <div className="space-y-6">
        <div>
          <label className="block text-brand-blue mb-2">Title</label>
          <input
            type="text"
            value={blog.title}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label className="block text-brand-blue mb-2">Subtitle</label>
          <input
            type="text"
            value={blog.subtitle}
            onChange={(e) => setBlog({ ...blog, subtitle: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Enter blog subtitle"
          />
        </div>

        <div>
          <label className="block text-brand-blue mb-2">
            Cover Image <span className="text-red-500">*</span>
          </label>
          <div className="space-y-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
            {blog.image && (
              <div className="relative w-full h-48">
                <img
                  src={blog.image}
                  alt="Blog cover"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-brand-blue mb-2">Content</label>
          <ReactQuill
            value={blog.content}
            onChange={(content) => setBlog({ ...blog, content })}
            className="h-[400px] mb-12"
          />
        </div>

        <div className="flex space-x-4">
          <Button1
            label="SAVE DRAFT"
            onClick={() => handleSave(false)}
            disabled={isLoading}
            className="text-brand-blue"
          />
          <Button1
            label="PUBLISH"
            onClick={() => handleSave(true)}
            disabled={isLoading}
            className="text-brand-orange"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogComposer;
