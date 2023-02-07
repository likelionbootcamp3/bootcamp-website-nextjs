export interface HeadingBoxProps {
  heading: string;
  text?: string;
}

const HeadingBox = ({ heading, text }: HeadingBoxProps) => {
  return (
    <div className="max-w-md mx-auto mb-12 text-center">
      <h2 className="text-4xl font-bold text-black capitalize">{heading}</h2>
      <p className="mt-4 leading-relaxed text-body-light">{text}</p>
    </div>
  );
};

export default HeadingBox;
