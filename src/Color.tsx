const Color: React.FC<ColorProps> = ({ color, scales }) => {
  return (
    <div className="mt-[45px] space-y-[2px]">
      {color && (
        <h3 className="pb-[3px] text-[17px] capitalize text-slate-12">
          {color}
        </h3>
      )}
      <div className="flex items-center justify-center gap-x-[2px]">
        <div className="grow" />
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            className="inline-block w-[50px] text-center text-slate-11"
          >
            {i + 1}
          </span>
        ))}
      </div>
      {Object.entries(scales).map(([scale, steps]) => (
        <Scale key={scale} {...{ scale, steps }} />
      ))}
    </div>
  );
};

const Scale: React.FC<ScaleProps> = ({ scale, steps }) => {
  return (
    <div className="flex items-center justify-center gap-x-[2px]">
      <code className="grow text-[13px] text-slate-11">{scale}</code>
      {steps.map((step) => (
        <div
          key={step}
          className={`inline-block aspect-[1.5] w-[50px] ${step}`}
        />
      ))}
    </div>
  );
};

interface ScaleProps {
  scale: string;
  steps: string[];
}

interface ColorProps {
  color: string;
  scales: Record<string, string[]>;
}

export default Color;
