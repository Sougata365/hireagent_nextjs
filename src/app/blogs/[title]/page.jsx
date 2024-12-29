import React from "react";
import { Clock, Eye, BookOpen, Share2 } from "lucide-react";
import axios from "axios";
import { baseURL } from "@/app/urls";

async function getBlogData(id) {
  try {
    const response = await axios.get(
      `${baseURL}/api/blogs/getBlogById?id=${id}`
    );
    return { data: response.data, error: null };
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return { data: null, error: "Failed to fetch blog details" };
  }
}

const LoadingState = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center">
    <div className="space-y-4">
      <div className="w-16 h-16 relative">
        <div className="absolute inset-0 border-4 border-blue-100 rounded-full animate-pulse" />
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
      <div className="text-lg font-medium text-gray-600">
        Loading article...
      </div>
    </div>
  </div>
);

const ErrorState = ({ message }) => (
  <div className="min-h-[70vh] flex items-center justify-center px-4">
    <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          className="w-10 h-10 text-red-500"
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
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
        {message}
      </h2>
      <p className="text-gray-500 text-center">
        Please try again later or contact support if the issue persists.
      </p>
    </div>
  </div>
);

const BlogContent = ({ blog }) => (
  <div className="bg-white min-h-screen">
    {/* Decorative background patterns */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute right-0 top-0 text-blue-50 w-1/3 opacity-50"
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
      <svg
        className="absolute left-0 bottom-0 text-indigo-50 w-1/4 opacity-50"
        viewBox="0 0 200 200"
      >
        <path
          d="M 0,100 C 0,0 100,0 100,100 S 200,200 200,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>

    {/* Hero Section */}
    <div className="relative pt-16 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
            {blog.category}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="text-sm text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-8 text-gray-500 mb-12">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <span>5 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-500" />
            <span>{blog.totalViews.toLocaleString()} views</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span>{blog.content.split(" ").length} words</span>
          </div>
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Share button */}
      <div className="hidden lg:block fixed left-1/2 ml-[calc(-3rem-720px)] top-1/3">
        <div className="flex flex-col items-center gap-4 p-3 bg-white rounded-full shadow-lg">
          <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <article className="relative">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index} className="relative">
                {index === 0 && (
                  <span className="absolute -left-8 top-0 text-6xl font-serif text-blue-200 select-none">
                    "
                  </span>
                )}
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  </div>
);

async function BlogDetail({ searchParams }) {
  const id = searchParams?.id;

  if (!id) {
    return <ErrorState message="Article Not Found" />;
  }

  const { data: blog, error } = await getBlogData(id);

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!blog) {
    return <ErrorState message="Article Not Found" />;
  }

  return <BlogContent blog={blog} />;
}

export default BlogDetail;
