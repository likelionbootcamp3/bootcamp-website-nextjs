import Meta from "@/components/Meta";
import { getLesson } from "@/services/lesson";
import type { LessonParams } from "./page";

const Head = async ({ params }: LessonParams) => {
  const { lessonSlug } = params;
  const lesson = await getLesson(lessonSlug);
  return <Meta title={lesson.frontmatter?.title} />;
};

export default Head;
