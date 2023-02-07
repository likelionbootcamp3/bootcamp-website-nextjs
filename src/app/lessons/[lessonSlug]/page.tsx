import { getLesson, getLessons } from "@/services/lesson";
import MDXRemoteWrapper from "@/components/mdx/MDXRemoteWrapper";
import LessonDetailHeading from "@/components/lesson/LessonDetailHeading";
import ProgressBar from "@/components/ProgressBar";
import Container from "@/components/Container";

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
      <article className="mx-auto prose max-w-none lg:prose-lg">
        {/* Heading */}
        <Container maxWidth="lg">
          <LessonDetailHeading {...lesson.frontmatter} />
        </Container>
        {/* Body */}
        <Container maxWidth="lg">
          <MDXRemoteWrapper {...lesson} />
        </Container>
      </article>
    </>
  );
};

export default LessonDetail;
