import { Fragment } from "react";

import Color from "./Color";

const Section: React.FC<SectionProps> = ({ colors, description, title }) => {
  return (
    <Fragment>
      <h2 className="text-slate-12 text-[27px] mt-[45px] mb-[10px]">{title}</h2>
      <p className="text-slate-12 text-[15px] mb-[15px]">{description}</p>
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
