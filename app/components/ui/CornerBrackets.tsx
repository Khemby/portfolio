type CornerBracketsProps = {
  color?: string;
  size?: number;
  thickness?: number;
  offset?: number;
};

export default function CornerBrackets({
  color = "#383838",
  size = 12,
  thickness = 1,
  offset = 0,
}: CornerBracketsProps) {
  const arm = size;
  const t = thickness;
  const o = -offset;
  const corners = [
    { top: o, left: o, borderTop: `${t}px solid ${color}`, borderLeft: `${t}px solid ${color}` },
    { top: o, right: o, borderTop: `${t}px solid ${color}`, borderRight: `${t}px solid ${color}` },
    { bottom: o, left: o, borderBottom: `${t}px solid ${color}`, borderLeft: `${t}px solid ${color}` },
    { bottom: o, right: o, borderBottom: `${t}px solid ${color}`, borderRight: `${t}px solid ${color}` },
  ] as const;

  return (
    <>
      {corners.map((style, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: arm,
            height: arm,
            pointerEvents: "none",
            zIndex: 20,
            ...style,
          }}
        />
      ))}
    </>
  );
}
