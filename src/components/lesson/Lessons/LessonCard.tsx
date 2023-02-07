import Link from "next/link";
import { getFullDate } from "@/lib/date";
import { ILesson } from "@/interfaces/lesson";

const LessonCard = ({ title, excerpt, publishOn, slug, week }: ILesson) => {
  return (
    <Link href={`/lessons/${slug}`} className="text-body-light">
      <div className="flex items-start justify-between gap-6 mb-2">
        <h2 className="text-xl font-medium text-black">
          Week {week}: {title}
        </h2>
        <time className="px-2 text-sm leading-loose shrink-0">
          {publishOn ? getFullDate(publishOn) : "Now"}
        </time>
      </div>
      <div>
        <p className="line-clamp-3">{excerpt}</p>
      </div>
    </Link>
  );
};

export default LessonCard;
