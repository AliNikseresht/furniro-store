"use client";

import React from "react";
import HeadOfPages from "../components/ui/HeadOfPages";
import getHttp from "@/services/getHttp";
import { TBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import UserGrayIcon from "../components/icons/UserGrayIcon";
import DateGrayIcon from "../components/icons/DateGrayIcon";
import CategoryIcon from "../components/icons/CategoryIcon";

const BlogPage = () => {
  //service
  const {
    data: response,
    isPending,
    error,
  } = getHttp<{ data: TBlog }>({
    queryKey: ["blogs"],
    service: `/api/blogs?populate=*`,
  });

  // Safely access the blog items
  const blogItems = response?.data || [];

  return (
    <div className="w-full flex flex-col items-center pb-8">
      <HeadOfPages title="Blog" PreviousPage="Home" />
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-[2em]">
        {blogItems.length > 0 ? (
          blogItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col p-[1em] md:p-[1.5em] gap-3"
            >
              <Image
                src={item.image.url}
                alt={item.blogTitle}
                width={600}
                height={400}
              />
              <div className="flex items-center gap-3 text-[#696969] text-xs md:text-sm">
                <span className="flex items-center gap-1">
                  <UserGrayIcon />
                  {item.userName}
                </span>
                <span className="flex items-center gap-1">
                  <DateGrayIcon />
                  {item.date}
                </span>
                <span className="flex items-center gap-1">
                  <CategoryIcon />
                  {item.categories}
                </span>
              </div>
              <h3 className="text-[#000] text-lg md:text-2xl font-bold">
                {item.blogTitle}
              </h3>
              <p className="text-xs md:text-sm text-[#696969]">
                {item.description}
              </p>
              <Link
                href="/blog"
                className="border border-[#696969] p-1 rounded-md text-center w-28"
              >
                Read more
              </Link>
            </div>
          ))
        ) : (
          <p>No blog items found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
