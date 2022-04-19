import { Fragment } from "react";

import { Color } from "./Color";

export const Section: React.FC<SectionProps> = ({ isOverlay, ...props }) => {
  return (
    <Fragment>
      <h2 className="mt-[45px] mb-[10px] text-[27px] text-slate-12 dark:text-slate-dark-12">
        {props.title}
      </h2>
      <p className="mb-[15px] text-[15px] text-slate-12 dark:text-slate-dark-12">
        {props.description}
      </p>
      {Object.entries(props.colors).map(([color, scales]) => (
        <Color key={color} {...{ color, isOverlay, scales }} />
      ))}
    </Fragment>
  );
};

interface SectionProps {
  title: string;
  isOverlay?: boolean;
  description: React.ReactNode;
  colors: Record<string, Record<string, string[]>>;
}
