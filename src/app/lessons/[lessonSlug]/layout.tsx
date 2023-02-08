import ProgressBar from "@/components/ProgressBar";
import { ReactNode } from "react";

const LessonDetailLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProgressBar />
      <div className="py-4">{children}</div>
    </>
  );
};

export default LessonDetailLayout;
