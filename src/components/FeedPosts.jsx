import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "./loader/Skeleton";

export function FeedPostsCart({ post }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={post.image}
          alt={post.caption}
          className="  h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <p className="font-medium text-gray-700 text-sm leading-relaxed line-clamp-3">
          {post.caption}
        </p>
      </div>
    </div>
  );
}

function FeedPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const fetching = await axios.get("https://postlify-server.onrender.com/posts");
      setTimeout(() => setPosts(fetching.data.data), 0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-24 px-4">
      <header>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="text-gray-800">Post</span>{" "}
              <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Feed
              </span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Discover amazing content from the community
            </p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20  rounded-2xl ">
            <div className="w-24 h-24  rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">No posts found</p>
            <p className="text-gray-400 text-sm mt-1">
              Be the first to create a post!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p) => (
              <FeedPostsCart key={p._id} post={p} />
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default FeedPosts;
