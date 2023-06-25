import success from "../../assets/icon-success.svg";

const Thanks = (props) => {
  console.log(props)
  const handleClick = (e)=>{
    props.setShow(false)
  }

  return (
    <div className="max-w-[460px] md:h-full md:max-w-full  md:rounded-none flex  bg-white   mx-auto m-24 md:m-0 p-14 rounded-3xl">
      <div className="">
        <img src={success} />
        <h1 className="text-h1Text text-6xl mt-9     font-bold">Thanks for subscribing!</h1>
        <p className="mt-6 font-light text-base">A confirmation email has been sent to 
        <span className="font-extrabold"> ef@gmail.com. </span> Please, open it and click the button inside to confirm your subscription.</p>
        <button onClick={handleClick} className="bg-buttonBg hover:bg-slate-900 mt-8 w-full md:mt-96 py-4 text-white rounded-lg">Dismiss message</button>

        </div>

      <div >
      </div>
    </div>
  );
};

export default Thanks;
