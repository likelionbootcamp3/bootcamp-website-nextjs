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
    <div className="text-center">
      <div>
        <p className="font-medium uppercase leading-none text-body-light">
          Day {day}
        </p>
        <h1>{title}</h1>
        <p className="text-sm text-body-light">
          {publishOn ? getFullDate(publishOn) : "Now"} - {readingTime}
        </p>
      </div>
      <div className="h-[300px]">
        <Image
          src={imageUrl || BACKUP_LESSON_BANNER}
          alt={title || "Banner"}
          height={300}
          width={900}
          className="h-full w-full rounded-xl object-cover object-center"
          priority
        />
      </div>
    </div>
  );
};

export default LessonDetailHeading;
