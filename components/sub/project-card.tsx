import Image from "next/image";

export type ProjectDocument = {
  label: string;
  url: string;
};

export type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  documents?: readonly ProjectDocument[] | ProjectDocument[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  documents,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl border border-[#2A0E61] bg-[#03001417] backdrop-blur-md flex flex-col justify-between h-full group hover:border-[#7042f888] transition-all duration-300">
      <div>
        <a
          href={link !== "#" ? link : undefined}
          target="_blank"
          rel="noreferrer noopener"
          className="block overflow-hidden rounded-t-xl bg-[#0b0726]"
        >
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </a>

        <div className="relative p-6">
          <h1 className="text-2xl font-bold text-white tracking-wide">{title}</h1>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">{description}</p>

          {documents && documents.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#2A0E61]/60">
              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                <span>📁 Project Files & Live Dashboard</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {documents.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#1e1442] hover:bg-[#7042f8] text-gray-200 hover:text-white border border-[#3b1578] hover:border-[#a07cf8] transition-all duration-200 shadow-md hover:shadow-purple-500/30"
                  >
                    <span>{doc.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {(!documents || documents.length === 0) && link !== "#" && (
        <div className="p-6 pt-0">
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block w-full text-center py-2.5 rounded-lg bg-[#1e1442] hover:bg-[#7042f8] text-white text-sm font-semibold border border-[#3b1578] transition-all duration-200 shadow-md hover:shadow-purple-500/30"
          >
            View Project Details →
          </a>
        </div>
      )}
    </div>
  );
};
