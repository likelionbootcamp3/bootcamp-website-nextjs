import { MDX_ABSOLUTE_PATH } from "../constants/index";
import { getMardownWithMeta } from "@/lib/mdx";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";

export const getLessonSlugs = () => {
  return fs.readdirSync(MDX_ABSOLUTE_PATH).map((file) => {
    const slug = file.slice(0, -4);
    return slug;
  });
};

export const getLessons = async () => {
  const slugs = getLessonSlugs();
  const lessons = slugs.map((slug) => {
    return getLesson(slug);
  });
  return Promise.all(lessons);
};

export const getLesson = async (slug: string) => {
  const markdownWithMeta = getMardownWithMeta(`${slug}.mdx`);
  const mdxSource = await serialize(markdownWithMeta, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });
  return {
    source: mdxSource,
    frontmatter: {
      ...mdxSource.frontmatter,
      readingTime: readingTime(markdownWithMeta).text,
    },
  };
};

export type MDXLessons = Awaited<ReturnType<typeof getLessons>>;
