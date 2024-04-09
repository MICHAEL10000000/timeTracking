import "./index.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import Header from "./Header";
import work from "./Images/icon-work.svg";
import play from "./Images/icon-play.svg";
import study from "./Images/icon-study.svg";
import selfCare from "./Images/icon-self-care.svg";
import exercise from "./Images/icon-exercise.svg";
import social from "./Images/icon-social.svg";
import data from "../data/db.json";

function App() {
  const imageArray = [work, play, study, exercise, social, selfCare];
  const backgroundArray = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)",
  ];
  const [details, setdetails] = useState<any[] | null>(null);
  const [timeSet, settimeSet] = useState("weekly");
  const [lasttime, setlasttime] = useState("Last Week");
  const Dailytime = () => {
    settimeSet("daily");
    setlasttime("Yesterday");
    1;
    const exceptionAdder = () => {
      const lowerHead = document.querySelector(".lower-head")!;
      const lowerHeadChildren = lowerHead.querySelectorAll("p")!;
      console.log(lowerHead);
      lowerHeadChildren.forEach((child) => {
        if (child.classList.contains("exception")) {
          child.classList.remove("exception");
        }
      });
      console.log(lowerHeadChildren);
      lowerHeadChildren[0].classList.add("exception");
    };
    exceptionAdder();
  };
  const Weeklytime = () => {
    settimeSet("weekly");
    setlasttime("Last Week");
    const exceptionAdder = () => {
      const lowerHead = document.querySelector(".lower-head")!;
      const lowerHeadChildren = lowerHead.querySelectorAll("p");
      lowerHeadChildren.forEach((child) => {
        if (child.classList.contains("exception")) {
          child.classList.remove("exception");
        }
      });
      console.log(lowerHeadChildren);
      lowerHeadChildren[1].classList.add("exception");
    };
    exceptionAdder();
  };
  const Monthlytime = () => {
    settimeSet("monthly");
    setlasttime("Last Month");
    const exceptionAdder = () => {
      const lowerHead = document.querySelector(".lower-head")!;
      const lowerHeadChildren = lowerHead.querySelectorAll("p");
      lowerHeadChildren.forEach((child) => {
        if (child.classList.contains("exception")) {
          child.classList.remove("exception");
        }
      });
      console.log(lowerHeadChildren);
      lowerHeadChildren[2].classList.add("exception");
    };
    exceptionAdder();
  };
  useEffect(() => {
    console.log(data);
    const filesData = data.files;
    const newData = filesData.map(
      (item: {
        title: any;
        timeframes: {
          [x: string]: {
            current: any;
            previous: any;
          };
        };
        id: any;
      }) => ({
        title: item.title,
        current: item.timeframes[timeSet].current,
        previous: item.timeframes[timeSet].previous,
        id: item.id,
      })
    );
    console.log(newData);
    setdetails(newData);
  }, [timeSet]);
  /*   useEffect(() => {
    fetch("http://localhost:8000/files")
      .then((Response) => Response.json())
      .then((data) => {
        document.getElementsByClassName("timeSet");

        const newData = data.map(
          (item: {
            title: any;
            timeframes: {
              [x: string]: {
                current: any;
                previous: any;
              };
            };
            id: any;
          }) => ({
            title: item.title,
            current: item.timeframes[timeSet].current,
            previous: item.timeframes[timeSet].previous,
            id: item.id,
          })
        );
        setdetails(newData);
      });
  }, [timeSet]); */

  if (details) {
    console.log(details);
  }
  return (
    <div className="text-white xl:px-32 xl:items-center xl:gap-6 lg:gap-6  m-6 md:flex md:justify-center md:px-8 md:items-start md:gap-6 main ">
      {" "}
      {/* xl:px-32 xl:items-center xl:gap-6 lg:gap-6 */}
      <div className="">
        {" "}
        {/* lg:row-span-3 */}
        <Header
          Dailytime={Dailytime}
          Weeklytime={Weeklytime}
          Monthlytime={Monthlytime}
        />
      </div>
      <div className=" md:flex md:flex-wrap md:gap-4 md:items-center md:justify-center md:content-center lg:gap-6 xl:gap-6">
        {details &&
          details.map((detail: any) => (
            <Card
              cardtitle={detail.title}
              timehours={detail.current}
              lasttime={lasttime}
              lasthour={detail.previous}
              upperboxImg={imageArray[detail.id - 1]}
              background={backgroundArray[detail.id - 1]}
              key={detail.id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
/* The devil does not have the right pver the child of god he only uses opportunities */
