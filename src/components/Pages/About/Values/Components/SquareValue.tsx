interface SquareValueProps {
  title: string;
  titleColour: string;
  bgColour: string;
  icon?: string;
  content: string;
}

function SquareValue({
  title,
  titleColour,
  bgColour,
  icon,
  content,
}: SquareValueProps) {
  return (
    <div className="w-full h-full">
      <div className={bgColour}>
        <h6 className={titleColour}>{title}</h6>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default SquareValue;
