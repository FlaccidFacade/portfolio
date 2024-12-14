import Image from 'next/image';
import ExternalLink from './ExternalLink';
/**
 * ReadNextjsDocs component
 * this is a component that displays the Next.js logo and a link to their documentation
 * @returns /components/ReadNextDocs.tsx
 */
const ReadNextjsDocs: React.FC = () => {
  return (
    <div
      data-testid="divReadNextjsDocs"
      className="flex flex-col gap-2 row-start-2 items-center items-start"
    >
      <label data-testid="labelReadNextjsDocs">
        Created with the React Framework:
      </label>
      <div className="transition-colors flex items-center justify-center text-sm text-base h-10   min-w-20 hover:bg-red-500  rounded-lg">
        <ExternalLink id="nextjs-docs" link="https://nextjs.org/docs?">
          <Image
            data-testid="imageNextjsLogo"
            className="dark:invert"
            src="/next.svg"
            alt="Next.js"
            width={90}
            height={10}
            priority
          />
        </ExternalLink>
      </div>
    </div>
  );
};

export default ReadNextjsDocs;
