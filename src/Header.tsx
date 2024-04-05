import "./index.css";
import jeremy from "./Images/image-jeremy.png";

const Header = ({ Dailytime, Weeklytime, Monthlytime }) => {
  return (
    <div className="rounded-2xl  bg-DarkBlue ">
      <div className="flex items-center py-6 justify-between px-8 bg-Violet rounded-2xl md:flex-col md:items-start md:pr-16 md:pl-7 md:pb-16 md:pt-10">
        <img
          src={jeremy}
          alt=""
          className="w-2/5 md:w-1/2 md:mb-16 border-gray-300 border-solid border-4 rounded-full "
        />
        <div>
          <p>Report for</p>
          <h5 className="text-xl md:text-3xl">Jeremy Robson</h5>
        </div>
      </div>
      <div className="flex justify-between py-4 px-8 text-PaleBlue lower-head md:flex-col md:gap-4 md:py-4 xl:pb-6">
        <p onClick={Dailytime}>Daily</p>
        <p onClick={Weeklytime} className="White exception">
          Weekly
        </p>
        <p onClick={Monthlytime}>Monthly</p>
      </div>
    </div>
  );
};

export default Header;
