const DesktopMobileViews = ({
  showMobile,
  toggle,
}: {
  showMobile: boolean;
  toggle: () => void;
}) => {
  return (
    <div className="bg-medium-gray absolute top-0 right-0 flex flex-col items-center rounded-md p-[5px]">
      <p className="text-sm">{showMobile ? "Mobile View" : "Desktop view"}</p>
      <button onClick={toggle} className="cursor-pointer">
        <span>Desktop|</span>
        <span>|Mobile</span>
      </button>
    </div>
  );
};

export default DesktopMobileViews;
