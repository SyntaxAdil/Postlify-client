import React, { useEffect, useState } from "react";
import { Images, LoaderIcon, X } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PostCreate = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postContent, setPostContent] = useState("");

  const navigate=useNavigate()

  const placeholderText = [
    "Iran won the war...",
    "I just built a small project today…",
    "I solved a tricky problem at work…",
    "I want to share a tip I learned…",
    "I faced a challenge this week and learned…",
    "I’m proud of what I created today…",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) =>
        prev === placeholderText.length - 1 ? 0 : prev + 1,
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(file);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };
  const handlePostSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      alert("Must select an image to create a post!");
      return;
    } else if (!postContent) {
      alert("Must add any content to create a post!");
      return;
    } else {
      const formData = new FormData();
      formData.append("image", postImage);
      formData.append("caption", postContent);

      try {
        setLoading(true);
        await axios.post("http://localhost:3000/create-post", formData);
        setPostContent("");
        setSelectedImage(null);
        setPostImage(null);
        navigate("/posts")
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className=" mt-24 px-4">
      <header>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900  mb-8">
          <span className="text-gray-800">Create</span>{" "}
          <span className="text-purple-500">a Post</span>
        </h3>

        <form
          onSubmit={handlePostSubmit}
          className="bg-white rounded-md md:rounded-2xl shadow-md p-5 md:p-6 border border-gray-100"
        >
          <textarea
            value={postContent}
            name="caption"
            onChange={(e) => setPostContent(e.target.value)}
            className="w-full resize-none border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none rounded-xl px-4 py-4 text-gray-700 placeholder-gray-400 transition"
            rows={5}
            placeholder={placeholderText[placeholderIndex]}
          />

          {/* Image Preview */}
          {selectedImage && (
            <div className="relative mt-4">
              <img
                src={selectedImage}
                alt="Preview"
                className="rounded-xl max-h-64 w-full object-cover border border-gray-200"
              />
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100 transition"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex items-center justify-between mt-4">
            {/* Upload */}
            <label
              htmlFor="file-input"
              className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-purple-500 transition"
            >
              <Images size={20} />
              <span className="text-sm hidden sm:inline">Add image</span>
              <input
                name="image"
                type="file"
                id="file-input"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>

            {/* Post Button */}
            <button
              className={` hover:bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition shadow-sm cursor-pointer ${loading ? "bg-gray-500" : "bg-purple-500"}`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Posting" : "Post"}
            </button>
          </div>
        </form>
      </header>
    </div>
  );
};

export default PostCreate;
