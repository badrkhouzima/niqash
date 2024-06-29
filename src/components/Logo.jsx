import niqashLogo from "../assets/niqashPic.jpg";

const Logo = () => {
  return (
    <div className="flex justify-center items-center py-3">
      <img
        src={niqashLogo}
        alt="logo"
        className="rounded-full h-20 w-20 object-cover"
      />
    </div>
  );
};

export default Logo;
