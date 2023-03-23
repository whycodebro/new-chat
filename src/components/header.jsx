import pic from "./Logo.png";

export default function Header() {
  return (
    <div className="flex justify-between bg-white">
      <div className="h-20 w-full ">
        <img src={pic} alt="remote symphony logo " className="ml-8 mt-6" />

        <p className=""></p>
      </div>
    </div>
  );
}
