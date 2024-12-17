import React from "react";
import HeadOfPages from "../components/ui/HeadOfPages";

const BlogPage = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      <HeadOfPages title="Blog" PreviousPage="Home" />
    </div>
  );
};

export default BlogPage;
