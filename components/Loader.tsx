import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex-center">
      <Image
        src={"/icons/loading-circle.svg"}
        alt="loading"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
