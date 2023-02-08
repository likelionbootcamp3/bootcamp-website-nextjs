import { BACKUP_LESSON_BANNER } from "@/constants";
import { ILesson } from "@/interfaces/lesson";
import { getFullDate } from "@/lib/date";
import Image from "next/image";

const LessonDetailHeading = ({
  title,
  day,
  imageUrl,
  readingTime,
  publishOn,
}: ILesson) => {
  return (
    <div className="mb-12 text-center">
      <div className="mb-6">
        <p className="mb-2 font-bold uppercase text-body-light md:text-lg">
          Day {day}
        </p>
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-6 text-sm text-body-light">
          {publishOn ? getFullDate(publishOn) : "Now"} - {readingTime}
        </p>
      </div>
      <div className="h-[300px] lg:h-[400px]">
        <Image
          src={imageUrl || BACKUP_LESSON_BANNER}
          alt={title || "Banner"}
          height={400}
          width={900}
          className="h-full w-full rounded-xl object-cover object-center"
          priority
        />
      </div>
    </div>
  );
};

export default LessonDetailHeading;
