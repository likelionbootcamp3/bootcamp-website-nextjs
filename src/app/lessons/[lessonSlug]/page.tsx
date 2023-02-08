import { getLesson, getLessonSlugs } from "@/services/lesson";
import MDXRemoteWrapper from "@/components/mdx/MDXRemoteWrapper";
import LessonDetailHeading from "@/components/lesson/LessonDetailHeading";
import Container from "@/components/Container";

export interface LessonParams {
  params: { lessonSlug: string };
}

export async function generateStaticParams() {
  const slugs = getLessonSlugs();
  return slugs.map((slug) => ({
    lessonSlug: slug,
  }));
}

const LessonDetail = async ({ params }: LessonParams) => {
  const { lessonSlug } = params;
  const lesson = await getLesson(lessonSlug);

  return (
    <>
      <article className="prose mx-auto max-w-none dark:prose-invert">
        {/* Heading */}
        <Container maxWidth="lg">
          <LessonDetailHeading {...lesson.frontmatter} />
        </Container>
        {/* Body */}
        <Container maxWidth="lg">
          <MDXRemoteWrapper {...lesson.source} />
        </Container>
      </article>
    </>
  );
};

export default LessonDetail;
