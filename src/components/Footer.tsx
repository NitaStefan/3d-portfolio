const Footer = () => {
  return (
    <>
      <hr className="border-light-gray/40 mb-[5px]" />
      <footer className="relative z-10 flex h-[200px] flex-col justify-between gap-[20px] px-[30px] max-sm:px-[10px]">
        <div className="flex items-center gap-[20px] max-sm:gap-[10px]">
          <span className="shrink-0 text-3xl font-light max-sm:text-2xl">
            Contact Me:
          </span>
          <div className="flex gap-x-[20px] gap-y-[10px] max-sm:flex-col">
            <a
              href="mailto:stefannita62@yahoo.com"
              className="flex gap-x-[6px]"
            >
              <img src="/icons/mail.svg" width={20} height={20} alt="mail" />
              <span>stefannita62@yahoo.com</span>
            </a>
            <a href="tel:+40784311008" className="flex gap-x-[6px]">
              <img src="/icons/phone.svg" width={20} height={20} alt="phone" />
              <span>0784 311 008</span>
            </a>
          </div>
        </div>
        <p className="text-lotion/60 mx-auto mb-[10px] text-sm font-light">
          © {new Date().getFullYear()} Ștefan Niță. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
