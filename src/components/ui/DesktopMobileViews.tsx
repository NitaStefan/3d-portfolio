const DesktopMobileViews = ({
  showMobile,
  toggle,
}: {
  showMobile: boolean;
  toggle: () => void;
}) => {
  return (
    <div className="bg-medium-gray absolute top-[20px] right-[2%] flex w-[85px] flex-col items-center rounded-md p-[5px] max-md:px-0 md:top-[120px] md:right-[18%] md:w-[110px]">
      <p className="text-xs font-light md:text-sm">
        {showMobile ? "Mobile View" : "Desktop View"}
      </p>
      <button
        onClick={toggle}
        className="mt-[4px] flex cursor-pointer gap-x-[8px]"
      >
        <img
          src="/icons/monitor.svg"
          className={`rounded-md p-[5px] max-md:py-0 ${!showMobile && "bg-primary"}`}
        />
        <img
          src="/icons/mobile.svg"
          className={`rounded-md p-[5px] max-md:py-[1px] ${showMobile && "bg-primary"}`}
        />
      </button>
    </div>
  );
};

export default DesktopMobileViews;
