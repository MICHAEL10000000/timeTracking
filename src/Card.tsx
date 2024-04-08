import threedots from "./Images/icon-ellipsis.svg";

interface CardProps {
  cardtitle: any;
  timehours: any;
  lasttime: any;
  lasthour: any;
  upperboxImg: any;
  background: any;
}
const Card: React.FC<CardProps> = ({
  cardtitle,
  timehours,
  lasttime,
  lasthour,
  upperboxImg,
  background,
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
          <img src={threedots} alt="" />
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
