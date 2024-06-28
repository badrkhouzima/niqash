import paypalButton from "../assets/PayPal-Donate-Button-High-Quality-PNG.png";
const PaypalSnippet = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-10 text-3xl font-bold text-white">
    <form
      className="flex flex-col items-center w-full"
      action="https://www.paypal.com/donate"
      method="post"
      target="_top"
    >
      <input type="hidden" name="hosted_button_id" value="JTZ7VQ34EPCP8" />
      <div className="p-4">
        <input
          type="image"
          src={paypalButton}
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
          className=" sm:w-10/12 md:w-11/12"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </form>
  </div>
  
  );
};

export default PaypalSnippet;
