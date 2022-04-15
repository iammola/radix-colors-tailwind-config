import { Fragment } from "react";

import Color from "./Color";

const Section: React.FC<SectionProps> = ({ colors, description, title }) => {
  return (
    <Fragment>
      <h2 className="mt-[45px] mb-[10px] text-[27px] text-slate-12">{title}</h2>
      <p className="mb-[15px] text-[15px] text-slate-12">{description}</p>
      {Object.entries(colors).map(([color, scales]) => (
        <Color key={color} {...{ color, scales }} />
      ))}
    </Fragment>
  );
};

interface SectionProps {
  title: string;
  description: React.ReactNode;
  colors: Record<string, Record<string, string[]>>;
}

export default Section;
