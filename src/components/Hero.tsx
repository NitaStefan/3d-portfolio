const Hero = () => {
  return (
    <section className="border-lotion/20 flex h-svh flex-col items-center justify-center border-[5px]">
      <h1 className="text-primary text-[80px] font-extralight">
        Hey, I&rsquo;m Ștefan Niță
      </h1>

      <div className="flex w-full items-center justify-around">
        <div>
          <div className="text-secondary w-[300px]">
            <p>
              I am passionate about web technologies and continuous learning,
              building efficient, scalable solutions while embracing best
              practices and emerging trends.
            </p>
            <hr />
            <p>
              I hold a Bachelor&rsquo;s Degree in Mathematics from the Faculty
              of Mathematics and Computer Science, Babeș-Bolyai University
              (2021&ndash;2024), Cluj-Napoca, Romania.
            </p>
          </div>
        </div>
        <div>
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
          <div className="mt-[20px] flex justify-around">
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
              href="https://drive.google.com/file/d/1uMj-Gv8kJR0x4GR0nToHd4eBV-9YtprA/view?usp=drive_link"
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
