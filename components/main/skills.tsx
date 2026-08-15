import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { SKILL_DATA } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.95)" }}
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-16"
    >
      <SkillText />

      <div className="flex flex-row justify-center flex-wrap mt-6 gap-6 items-center max-w-5xl z-20 px-4">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
