import paypalButton from "../assets/PayPal-Donate-Button-High-Quality-PNG.png";
const PaypalSnippet = () => {
  return (
    <div className="py-3">
      <form
        //className="flex justify-center items-center"
        action="https://www.paypal.com/donate"
        method="post"
        target="_top"
      >
        <div className="flex justify-center items-center">
          <input type="hidden" name="hosted_button_id" value="JTZ7VQ34EPCP8" />

          <input
            type="image"
            src={paypalButton}
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
            className="w-8/12 sm:w-9/12 md:w-10/12 lg:w-11/12"
            //  className="w-8/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 "
            //  style={{ maxWidth: "400px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default PaypalSnippet;
