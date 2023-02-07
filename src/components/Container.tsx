import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const containerVariants = cva("h-full px-4 mx-auto md:px-6", {
  variants: {
    maxWidth: {
      xs: "max-w-screen-xs",
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
    },
  },
  defaultVariants: {
    maxWidth: "md",
  },
});

export interface containerVariantsProps
  extends VariantProps<typeof containerVariants> {
  children?: ReactNode;
}

const Container = ({ children, maxWidth = "md" }: containerVariantsProps) => {
  return <div className={containerVariants({ maxWidth })}>{children}</div>;
};

export default Container;
