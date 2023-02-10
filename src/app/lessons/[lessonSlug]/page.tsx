import { getLesson, getLessonSlugs } from "@/services/lesson";
import MDXRemoteWrapper from "@/components/mdx/MDXRemoteWrapper";
import LessonDetailHeading from "@/components/lesson/LessonDetailHeading";
import Container from "@/components/Container";
import TableOfContent from "@/components/lesson/TableOfContent";

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
      <article>
        {/* Heading */}
        <Container maxWidth="lg">
          <LessonDetailHeading {...lesson.frontmatter} />
        </Container>
        {/* Body */}
        <Container maxWidth="lg">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
            <div className="overflow-auto">
              <div className="prose mx-auto max-w-none">
                <MDXRemoteWrapper {...lesson.source} />
              </div>
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-[calc(var(--navbar-scroll-height)+3rem)] h-full max-h-[calc(75vh)] overflow-scroll p-4">
                <TableOfContent />
              </div>
            </aside>
          </div>
        </Container>
      </article>
    </>
  );
};

export default LessonDetail;
