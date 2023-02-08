import { MDXLessons } from "@/services/lesson";
import _ from "lodash";

export const orderByDay = (
  lessons: MDXLessons,
  order: "desc" | "asc" = "desc"
) => {
  return _.orderBy(
    lessons,
    [(lesson) => Number(lesson.frontmatter?.day)],
    [order]
  );
};
