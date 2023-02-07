import ProgressBar from "@/components/ProgressBar";
import { ReactNode } from "react";

const LessonDetailLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
};

export default LessonDetailLayout;
