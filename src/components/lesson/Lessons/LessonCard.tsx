import Link from "next/link";
import { getFullDate } from "@/lib/date";
import { ILesson } from "@/interfaces/lesson";

const LessonCard = ({ title, excerpt, publishOn, slug, week }: ILesson) => {
  return (
    <Link href={`/lessons/${slug}`} className="text-[#3c4856c2]">
      <div className="mb-2 flex items-start justify-between gap-6">
        <h2 className="text-xl font-medium text-black">
          Week {week}: {title}
        </h2>
        <time className="shrink-0 px-2 text-sm leading-loose">
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
