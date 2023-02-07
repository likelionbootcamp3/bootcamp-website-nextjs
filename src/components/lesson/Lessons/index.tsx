import LessonCard from "./LessonCard";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { getLessons } from "@/services/lesson";
import { v4 as uuid } from "uuid";
import _ from "lodash";
import Container from "@/components/Container";

const Lessons = async () => {
  const lessons = await getLessons();

  return (
    <section className="h-full">
      <Container maxWidth="md">
        {/* Lessons */}
        <div className="flex flex-col h-full py-4">
          <ul className="flex flex-col gap-10 grow">
            {_.orderBy(
              lessons,
              [(lesson) => Number(lesson.frontmatter?.publishOn)],
              ["desc"]
            ).map((lesson) => {
              return <LessonCard key={uuid()} {...lesson.frontmatter} />;
            })}
          </ul>
          {/* Pagination */}
          {/* <div className="flex items-center justify-between py-1">
            <button className="flex items-center gap-2 group">
              <ArrowLongLeftIcon className="w-5 h-5 transition group-hover:-translate-x-1" />
              Prev
            </button>
            <button className="flex items-center gap-2 group">
              Next
              <ArrowLongRightIcon className="w-5 h-5 transition group-hover:translate-x-1" />
            </button>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Lessons;
