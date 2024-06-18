import threedots from "./Images/icon-ellipsis.svg";

interface CardProps {
  cardtitle: any;
  timehours: any;
  lasttime: any;
  lasthour: any;
  upperboxImg: any;
  background: any;
  Dailytime: any;
  Weeklytime: any;
  Monthlytime: any;
}
const Card: React.FC<CardProps> = ({
  cardtitle,
  timehours,
  lasttime,
  lasthour,
  upperboxImg,
  background,
  Dailytime,
  Weeklytime,
  Monthlytime,
}) => {
  const upper_boxStyles = {
    backgroundColor: background,
  };

  return (
    <div className="mt-7 rounded-2xl md:mt-0 card " style={upper_boxStyles}>
      <div
        style={upper_boxStyles}
        className="upper_box h-12 rounded-t-2xl overflow-hidden flex justify-end px-6 items-center " /* flex justify-end px-6 */
      >
        <img src={upperboxImg} alt="" />
      </div>
      <div className="lower_box relative items-center justify-between px-8 py-7 rounded-2xl  bg-DarkBlue hover:bg-DesaturatedBlue ">
        <div className="flex gap-1 items-center justify-between">
          {cardtitle}
          <div className="dotDropdown relative">
            <img
              src={threedots}
              alt=""
              onClick={(e) => {
                console.log(e.target);
                const target = e.target.parentNode;
                target.lastChild.classList.toggle("hidden");
              }}
            />
            <ul className="dropDownContent absolute rounded-md bg-white text-black top-3 right-0 hidden">
              <li
                onClick={(e) => {
                  Dailytime();
                  e.target.parentNode.classList.toggle("hidden");
                }}
                className=" px-3 hover:bg-gray-400 font-medium pt-1"
              >
                Daily
              </li>
              <li
                onClick={(e) => {
                  Weeklytime();
                  e.target.parentNode.classList.toggle("hidden");
                }}
                className=" px-3 hover:bg-gray-400 font-medium"
              >
                Weekly
              </li>
              <li
                onClick={(e) => {
                  Monthlytime();
                  e.target.parentNode.classList.toggle("hidden");
                }}
                className=" px-3 hover:bg-gray-400 font-medium pb-1"
              >
                Monthly
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  items-center justify-between mt-4 md:flex-col md:items-start md:gap-3">
          <p className="text-3xl">{timehours}hrs</p>
          <p className="text-PaleBlue">
            {lasttime}-{lasthour}hrs
          </p>
        </div>
        <div>
          <select
            name="Select"
            id=""
            className="text-black extra absolute top-12 right-7 hidden"
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Card;
