import { BACKUP_LESSON_BANNER } from "@/constants";
import { ILesson } from "@/interfaces/lesson";
import Image from "next/image";

const LessonDetailHeading = ({ title, week, imageUrl }: ILesson) => {
  return (
    <div className="text-center">
      <div>
        <p className="leading-none">Week {week}</p>
        <h1>{title}</h1>
      </div>
      <div className="h-[300px]">
        <Image
          src={imageUrl || BACKUP_LESSON_BANNER}
          alt={title || "Banner"}
          height={300}
          width={900}
          className="object-cover object-center w-full h-full rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default LessonDetailHeading;
