const Hero = () => {
  return (
    <section className="relative z-10 flex h-svh flex-col items-center justify-center px-[30px] max-sm:px-[15px] sm:gap-[80px]">
      <h1 className="text-primary text-[80px] font-extralight max-md:text-4xl">
        Hey, I&rsquo;m Ștefan Niță
      </h1>

      <div className="flex w-full items-center justify-around gap-[30px] max-md:flex-col-reverse">
        <div className="w-[450px] max-sm:w-full">
          <div className="flex items-center font-light">
            <img
              src="/icons/rocket.svg"
              width={80}
              height={80}
              alt="career objective"
              className="shrink-0 max-sm:w-[60px]"
            />
            <p className="ml-[10px] shrink-3 max-sm:text-sm">
              I am passionate about web technologies and continuous learning,
              building efficient, scalable solutions while embracing best
              practices and emerging trends.
            </p>
          </div>

          <div className="mt-[30px] flex items-center sm:mt-[50px]">
            <img
              src="/icons/graduation-cap.svg"
              width={80}
              height={80}
              alt="education"
              className="shrink-0 max-sm:w-[60px]"
            />
            <div className="flex">
              <div className="ml-[10px] max-sm:text-sm">
                <p>Faculty of Mathematics and Computer Science</p>
                <p className="text-sm font-extralight">
                  Under Babeș-Bolyai University
                </p>
                <em className="block pt-[10px] text-sm">
                  Bachelor’s Degree in Mathematics
                </em>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xs font-thin whitespace-nowrap max-sm:text-[11px]">
                  2021 - 2024
                </p>
                <p className="mt-[3px] text-xs font-thin whitespace-nowrap max-sm:text-[10px]">
                  Cluj-Napoca, Romania
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0">
          <img
            src="/images/professional-profile.png"
            width={200}
            height="auto"
            alt="Profile picture"
            className="mb-[2px]"
          />
          <em className="rounded-full border px-[10px] py-[4px] font-extralight">
            Aspiring Full Stack Developer
          </em>
          <div className="mt-[8px] flex gap-x-[4px] opacity-70">
            <img
              src="/icons/location.svg"
              width={18}
              height="auto"
              alt="location"
              className="rounded-[40px]"
            />
            <span className="text-sm font-light">Cluj-Napoca, Romania</span>
          </div>
          <div className="mt-[20px] flex justify-around max-sm:mt-[10px]">
            <a
              className="flex flex-col items-center hover:opacity-70"
              href="https://github.com/NitaStefan"
              target="_blank"
            >
              <img
                src="/images/github.png"
                width={35}
                height="auto"
                alt="github logo"
                className="rounded-[40px]"
              />
              <p className="text-lotion/70 text-[11px] font-light">Github</p>
            </a>
            <a
              className="flex flex-col items-center hover:opacity-70"
              href="https://www.linkedin.com/in/stefan-nita-12a656267/"
              target="_blank"
            >
              <img
                src="/images/linkedin.png"
                width={35}
                height="auto"
                alt="linkedin logo"
              />
              <p className="text-lotion/70 text-[11px] font-light">LinkedIn</p>
            </a>
            <a
              className="flex flex-col items-center justify-end hover:opacity-70"
              href="https://drive.google.com/file/d/1b_DT6np3COA4KyePJAmYm1cSDVvP5AVS/view?usp=sharing"
              target="_blank"
            >
              <img
                src="/icons/file-text.svg"
                width={28}
                height="auto"
                alt="resume"
              />
              <p className="text-lotion/70 mt-[2px] text-[11px] font-light">
                Resume
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
