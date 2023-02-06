import { MDX_ABSOLUTE_PATH } from "../constants/index";
import { getMardownWithMeta } from "@/lib/mdx";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import rehypeHighlight from "rehype-highlight";

export const getLessons = async () => {
  const mdxSources = fs.readdirSync(MDX_ABSOLUTE_PATH).map((file) => {
    const slug = file.slice(0, -4);
    return getLesson(slug);
  });

  return Promise.all(mdxSources);
};

export const getLesson = async (slug: string) => {
  const markdownWithMeta = getMardownWithMeta(`${slug}.mdx`);
  const mdxSource = await serialize(markdownWithMeta, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return mdxSource;
};
