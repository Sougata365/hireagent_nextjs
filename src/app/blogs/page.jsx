import React from "react";
import axios from "axios";
import Link from "next/link";
import {
  Calendar,
  Eye,
  ChevronLeft,
  ChevronRight,
  Clock,
  TrendingUp,
  Search,
  ArrowRight,
  Bookmark,
  Hash,
} from "lucide-react";
import { baseURL } from "../urls";

// Utility functions
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const getRecentBlogs = (blogs) => {
  return [...blogs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);
};

const getPopularBlogs = (blogs) => {
  return [...blogs].sort((a, b) => b.totalViews - a.totalViews).slice(0, 3);
};

async function getBlogsData(page = 1) {
  try {
    const response = await axios.get(
      `${baseURL}/api/blogs/getAllBlogs?page=${page}`
    );
    return {
      blogs: response.data.posts,
      currentPage: response.data.currentPage,
      totalPages: response.data.totalPages,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      blogs: [],
      currentPage: 1,
      totalPages: 1,
      error: "Failed to fetch blogs",
    };
  }
}

function BlogCard({ blog }) {
  return (
    <article className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="absolute top-4 right-4">
        <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:text-blue-600 transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
      <div className="p-8">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
            {blog.category}
          </span>
          <span className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-blue-400" />
            {formatDate(blog.createdAt)}
          </span>
          <span className="flex items-center text-gray-500 text-sm">
            <Eye className="w-4 h-4 mr-2 text-blue-400" />
            {blog.totalViews.toLocaleString()} views
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h2>

        <p className="text-gray-600 mb-6 line-clamp-3">{blog.content}</p>

        <Link
          href={`/blogs/${generateSlug(blog.title)}?id=${blog._id}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Continue Reading
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </article>
  );
}

function RecentPosts({ blogs }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-900">Latest Posts</h2>
      </div>
      <div className="space-y-6">
        {getRecentBlogs(blogs).map((blog) => (
          <Link
            key={blog._id}
            href={`/blogs/${generateSlug(blog.title)}?id=${blog._id}`}
            className="group block"
          >
            <article className="relative pl-6">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-100 group-hover:bg-blue-500 transition-colors" />
              <h3 className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {formatDate(blog.createdAt)}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

function TrendingPosts({ blogs }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-900">Popular Now</h2>
      </div>
      <div className="space-y-6">
        {getPopularBlogs(blogs).map((blog, index) => (
          <Link
            key={blog._id}
            href={`/blogs/${generateSlug(blog.title)}?id=${blog._id}`}
            className="group block"
          >
            <article className="relative pl-12">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {blog.totalViews.toLocaleString()} views
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Categories({ blogs }) {
  const categories = ["AI", "Technology", "Innovation"];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <Hash className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-900">Categories</h2>
      </div>
      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category}
            className="group cursor-pointer rounded-xl p-4 transition-all hover:bg-blue-50"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                {category}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600 group-hover:bg-blue-200">
                {blogs.filter((blog) => blog.category === category).length}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function AllBlogs({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  const { blogs, totalPages, error } = await getBlogsData(currentPage);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{error}</h3>
          <p className="text-gray-500">
            Please try again later or contact support.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" />
        <div className="absolute inset-0">
          <svg
            className="absolute right-0 top-0 text-blue-100 w-1/3 opacity-50"
            viewBox="0 0 400 400"
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Universe of Ideas
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Discover thought-provoking articles on technology, innovation, and
            the future
          </p>
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-4 bg-white rounded-xl shadow-md text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <Link
                href={`?page=${Math.max(currentPage - 1, 1)}`}
                className={`flex items-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-white rounded-xl shadow-md hover:bg-blue-50 transition-colors ${
                  currentPage === 1 ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Link>

              <span className="text-gray-700 font-medium px-4 py-2 bg-white rounded-xl shadow-md">
                {currentPage} of {totalPages}
              </span>

              <Link
                href={`?page=${Math.min(currentPage + 1, totalPages)}`}
                className={`flex items-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-white rounded-xl shadow-md hover:bg-blue-50 transition-colors ${
                  currentPage === totalPages
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <RecentPosts blogs={blogs} />
            <TrendingPosts blogs={blogs} />
            <Categories blogs={blogs} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default AllBlogs;
