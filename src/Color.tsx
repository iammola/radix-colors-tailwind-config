const Color: React.FC<ColorProps> = ({ color, scales }) => {
  return (
    <div className="space-y-[5px]">
      <h3 className="text-slate-12 text-[17px] capitalize">{color}</h3>
      <div className="grid grid-rows-5 gap-y-[2px]">
        <div className="min-w-0 grid-cols-scale gap-x-[2px]">
          <div></div>
          {Array.from({ length: 12 }, (_, i) => (
            <span
              key={i}
              className="inline-block w-full h-full text-center text-slate-11"
            >
              {i + 1}
            </span>
          ))}
        </div>
        {Object.entries(scales).map(([scale, steps]) => (
          <Scale key={scale} {...{ scale, steps }} />
        ))}
      </div>
    </div>
  );
};

const Scale: React.FC<ScaleProps> = ({ scale, steps }) => {
  return (
    <div className="min-w-0 grid-cols-scale gap-x-[2px]">
      <code className="text-slate-11 text-[13px]">{scale}</code>
      {steps.map((step) => (
        <div key={step} className={`inline-block w-full h-full ${step}`} />
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
