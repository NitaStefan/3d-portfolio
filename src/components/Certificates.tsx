import { CERTIFICATES_SECTION_HEIGHT } from "../constants";

const Certificates = () => {
  return (
    <section
      className="border border-gray-600"
      style={{ height: `${CERTIFICATES_SECTION_HEIGHT}px` }}
    >
      <div className="flex h-full items-center justify-center">
        <h1 className="text-xl">O</h1>
      </div>
    </section>
  );
};

export default Certificates;
