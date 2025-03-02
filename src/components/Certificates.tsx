import { CERTIFICATES_SECTION_HEIGHT } from "../constants";

const Certificates = () => {
  return (
    <section style={{ height: `${CERTIFICATES_SECTION_HEIGHT}px` }}>
      <h1 className="text-primary bg-secondary/20 mx-auto w-[200px] rounded-md py-[5px] pr-[15px] pl-[55px] text-2xl font-medium">
        Certificates
      </h1>
    </section>
  );
};

export default Certificates;
