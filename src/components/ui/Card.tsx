import React, { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={cn("bg-white shadow-md rounded-lg p-6", className)} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className, ...props }: CardProps) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-lg font-semibold", className)} {...props}>
    {children}
  </h3>
);

const CardContent = ({ children, className, ...props }: CardProps) => (
  <div className={cn("text-gray-700", className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className, ...props }: CardProps) => (
  <div className={cn("mt-4 border-t pt-4", className)} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
export default Card;
