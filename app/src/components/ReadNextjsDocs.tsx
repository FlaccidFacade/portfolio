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
      <label data-testid="labelReadNextjsDocs">Created with:</label>
      <div className="transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm text-base h-10 h-12 px-4 px-5 min-w-44">
        <ExternalLink id="nextjs-docs" link="https://nextjs.org/docs?">
          <Image
            data-testid="imageNextjsLogo"
            className="dark:invert"
            src="/next.svg"
            alt="Next.js"
            width={180}
            height={38}
            priority
          />
        </ExternalLink>
      </div>
    </div>
  );
};

export default ReadNextjsDocs;
