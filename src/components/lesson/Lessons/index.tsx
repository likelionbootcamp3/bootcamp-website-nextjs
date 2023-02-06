import LessonCard from "./LessonCard";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { getLessons } from "@/services/lesson";
import { v4 as uuid } from "uuid";
import _ from "lodash";

const Lessons = async () => {
  const lessons = await getLessons();

  return (
    <section className="h-full">
      <div className="h-full max-w-screen-md px-4 mx-auto md:px-6">
        {/* Lessons */}
        <div className="flex flex-col h-full">
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
          <div className="flex items-center justify-between py-2 mt-4">
            <button className="flex items-center gap-2 group">
              <ArrowLongLeftIcon className="w-5 h-5 transition group-hover:-translate-x-1" />
              Prev
            </button>
            <button className="flex items-center gap-2 group">
              Next
              <ArrowLongRightIcon className="w-5 h-5 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
