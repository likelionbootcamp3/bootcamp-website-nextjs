"use client";

import useHeadingsData, { INestedHeadings } from "@/hooks/useHeadingsData";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import clsx from "clsx";
import { useState } from "react";

const Headings = ({
  headings,
  activeId,
}: {
  headings: INestedHeadings[];
  activeId?: string;
}) => {
  return (
    <ul className="text-sm text-body-light">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={clsx("mt-3", {
              "font-medium text-red-400": activeId === heading.id,
            })}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(`${heading.id}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li key={child.id}>
                  <a
                    href={`#${child.id}`}
                    className={clsx("mt-2 ml-4", {
                      "font-medium text-red-400": activeId === child.id,
                    })}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(`${child.id}`)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const TableOfContent = () => {
  const [activeId, setActiveId] = useState<string>();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <div aria-label="Table of content">
      <h4 className="mb-4 font-medium uppercase tracking-widest">
        Table of Contents
      </h4>
      <Headings headings={nestedHeadings} activeId={activeId} />
    </div>
  );
};

export default TableOfContent;
