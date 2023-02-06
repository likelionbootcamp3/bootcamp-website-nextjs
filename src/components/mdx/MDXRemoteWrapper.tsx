"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { Img, Pre } from "./components";

const components = {
  pre: Pre,
  img: Img,
};

const MDXRemoteWrapper = (props: MDXRemoteProps) => {
  return <MDXRemote {...props} components={components} />;
};

export default MDXRemoteWrapper;
