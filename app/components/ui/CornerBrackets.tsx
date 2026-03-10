type CornerBracketsProps = {
  color?: string;
  size?: number;
  thickness?: number;
};

export default function CornerBrackets({
  color = "#383838",
  size = 12,
  thickness = 1,
}: CornerBracketsProps) {
  const arm = size;
  const t = thickness;
  const corners = [
    { top: 0, left: 0, borderTop: `${t}px solid ${color}`, borderLeft: `${t}px solid ${color}` },
    { top: 0, right: 0, borderTop: `${t}px solid ${color}`, borderRight: `${t}px solid ${color}` },
    { bottom: 0, left: 0, borderBottom: `${t}px solid ${color}`, borderLeft: `${t}px solid ${color}` },
    { bottom: 0, right: 0, borderBottom: `${t}px solid ${color}`, borderRight: `${t}px solid ${color}` },
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
