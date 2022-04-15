import { Fragment } from "react";

const Section: React.FC<SectionProps> = ({ description, title }) => {
  return (
    <Fragment>
      <h2 className="text-slate-12 text-xl">{title}</h2>
      <p className="text-slate-12 text-[15px]">{description}</p>
    </Fragment>
  );
};

interface SectionProps {
  title: string;
  description: React.ReactNode;
}

export default Section;
