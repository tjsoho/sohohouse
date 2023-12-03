interface SquareContentProps {
  content: string;
}

function SquareContent({ content }: SquareContentProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-[38px]">
      <p className="text-brand-orange text-center">{content}</p>
    </div>
  );
}

export default SquareContent;
