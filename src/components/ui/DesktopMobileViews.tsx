const DesktopMobileViews = ({
  showMobile,
  toggle,
  handleClose,
  isClose,
}: {
  showMobile?: boolean;
  toggle: () => void;
  handleClose: () => void;
  isClose: boolean;
}) => {
  return (
    <div
      className={`bg-medium-gray/60 absolute top-[20px] right-[2%] flex w-[90px] gap-x-[7px] rounded-md md:right-[18%] md:w-[57px] ${isClose ? "md:top-[20px]" : "md:top-[120px]"} ${showMobile !== undefined && "md:w-[163px]"}`}
    >
      <div
        className={`flex grow flex-col items-center p-[5px] ${showMobile === undefined ? "hidden" : ""}`}
      >
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
      <button
        onClick={handleClose}
        className="border-primary text-primary w-[56px] cursor-pointer rounded-md border-3 px-[5px] text-sm font-bold max-md:hidden"
      >
        Zoom {isClose ? "Out" : "In"}
      </button>
    </div>
  );
};

export default DesktopMobileViews;
