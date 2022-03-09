export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ccc", borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}


export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ccc", borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}