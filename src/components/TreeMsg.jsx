
//import paypal from "../assets/paypal_logo.png"
const TreeMsg =() => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center ">
    <div className="py-10">
      <p className="text-3xl font-bold text-white">{"@Ni9ash"}</p>
    </div>

    <div className="flex justify-center w-1/2 flex-col items-center">
      <div className="bg-white p-3 my-3 mx-5 rounded-lg shadow-md">
        <p className="text-center text-lg p-2">
          Talking about what I believe matters in a way to dismantle the
          propaganda.
        </p>
      </div>
      <div className="bg-white p-3 my-3 mx-5 rounded-lg shadow-md">
        <p className="text-center font-semibold text-lg p-2">
        Empower our mission, one donation at a time! <br/>
        الدعم  المباشر من يكفل حرية الأصوات المستقلة
         </p>
      </div>
      <div>
       {/* <a href=""> <img src="" alt=""></a> */}
       {/* <a href=""><img src={paypal} alt="paypal-banner" className="size-5/6"/></a> */}
        
      </div>
    </div>
  </div>
  )
}

export default TreeMsg