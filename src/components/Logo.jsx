import niqashLogo from "../assets/niqashLogo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <img
        src={niqashLogo}
        alt="logo"
        className="rounded-full h-20 w-20 object-cover"
      />
    </div>
  );
};

export default Logo;
