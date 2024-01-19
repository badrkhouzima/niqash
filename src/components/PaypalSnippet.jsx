import paypalButton from "../assets/PayPal-Donate-Button-High-Quality-PNG.png";
const PaypalSnippet = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-10 text-3xl font-bold text-white">
      <h1>PayPal section</h1>

      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="JTZ7VQ34EPCP8" />
        <input
          type="image"
          // src="https://www.paypalobjects.com/en_US/ES/i/btn/btn_donateCC_LG.gif"
          src={paypalButton}
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
      </form>
      {/* <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="JTZ7VQ34EPCP8" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/ES/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
       
      </form> */}
    </div>
  );
};

export default PaypalSnippet;
