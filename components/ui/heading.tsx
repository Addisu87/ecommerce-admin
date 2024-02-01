import { lusitana } from "./fonts";

interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2
        className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold tracking-tight`}
      >
        {title}
      </h2>
      <p
        className={`${lusitana.className} text-base text-gray-800 md:text-lg md:leading-normal text-muted-foreground`}
      >
        {description}
      </p>
    </div>
  );
};
