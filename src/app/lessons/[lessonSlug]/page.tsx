import { getLesson, getLessons } from "@/services/lesson";
import MDXRemoteWrapper from "@/components/mdx/MDXRemoteWrapper";
import LessonDetailHeading from "@/components/lesson/LessonDetailHeading";
import ProgressBar from "@/components/ProgressBar";

export interface LessonParams {
  params: { lessonSlug: string };
}

export async function generateStaticParams() {
  const lessons = await getLessons();

  return lessons.map((lesson) => ({
    lessonSlug: lesson.frontmatter?.slug,
  }));
}

const LessonDetail = async ({ params }: LessonParams) => {
  const { lessonSlug } = params;
  const lesson = await getLesson(lessonSlug);

  return (
    <>
      <ProgressBar />
      <article className="mx-auto prose max-w-none lg:prose-lg">
        {/* Introduction */}
        <div className="max-w-screen-lg px-4 mx-auto md:px-6 ">
          <LessonDetailHeading {...lesson.frontmatter} />
        </div>
        {/* Body */}
        <div className="max-w-screen-lg px-4 mx-auto">
          <MDXRemoteWrapper {...lesson} />
        </div>
      </article>
    </>
  );
};

export default LessonDetail;
