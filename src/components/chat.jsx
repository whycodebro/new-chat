import rslogo from "./rslogo.png";
import acclogo from "./acclogon.jpg";
import rarrow from "./rarrow.jpg";
//import arrow from "./arrow.svg";

export default function Chat() {
  const style = { style: "#2944FE" };

  return (
    <div className="chat bg-ngrey1 pb-20 pt-4  ">
      <div className="main mt-4 mx-44 border box-border  shadow-md px-4 py-4 flex flex-col justify-between bg-white">
        <div className="w-full h-80 px-14 py-8 ">
          <div className="flex space-x-3 mb-7 w-fit">
            <div className="rslogo border border-iconBorder rounded-full h-12 w-12 px-2 py-2 left-0 ">
              <img src={rslogo} className=" h-7 w-7 " />
            </div>

            <div className="w-fit">
              <p className="chat-box-left border rounded-md pl-8 py-3 pr-10 shadow-md  bg-whitee font-light text-base leading-5 flex items-center">
                Hello, Welcome to Remote Symphony I'm IdeaAlly AI here to help
                with your dream project. Just provide your requirements and
                we'll create a plan and execute it. Let's make your project a
                reality!
              </p>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div className="flex justify-end mx-3 my-3 space-x-3 mb-7">
            <div>
              <p className="chat-box-right pl-8 py-3 pr-10 border rounded-md  shadow-md bg-indigoo font-light text-base leading-5 flex items-center">
                I want to build an app
              </p>
            </div>

            <div className="border border-iconBorder rounded-full h-12 w-12 px-2 py-2 right-0">
              <img src={acclogo} className="  h-7 w-7 " />
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div className="flex mx-3 my-3 space-x-3">
            <div className="rslogo border border-iconBorder rounded-full h-12 w-12 px-2 py-2 left-0">
              <img src={rslogo} className="h-7 w-7 " />
            </div>

            <p className="chat-box-left border rounded-md pl-8 py-3 pr-10 shadow-md bg-whitee font-light text-base leading-5 flex items-center">
              Sure, what type of app do you want to develop?
            </p>
          </div>
        </div>

        <form className=" rounded-full text-right px-2 py-7  ">
          <div class="relative h-12 ">
            <input
              type="text"
              class="block w-full p-4 text-opacity-80 border-shadow2 rounded-full bg-ngrey sm:text-md focus:outline-none"
            ></input>
            <button type="submit" class=" absolute right-2.5 bottom-2 px-4">
              <img src={rarrow} className="ml-auto h-7 w-7 hover:scale-125" />
            </button>
          </div>
        </form>
      </div>
      <div className="bg-indigoo mx-52 my-0 py-3 flex justify-between rounded-b-2xl text-sblue">
        <button className="px-20 font-light text-base leading-5 flex items-center cursor-pointer hover:underline">
          Let's Turn your Plans into Reality
        </button>
        <div className="flex px-8">
          <button className=" font-bold text-base leading-5 flex items-center cursor-pointer">
            Start Now?
          </button>
          {/* //<img src={arrow} /> */}
          <i className="fa-solid fa-arrow-right ml-1 " style={style}></i>
        </div>
      </div>
    </div>
  );
}
