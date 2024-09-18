/* eslint-disable react/prop-types */
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";
import { MdPerson } from "react-icons/md";
export default function TimelineComponent({ date, resources }) {
  return (
    <div className="flex flex-col items-center">
      <VerticalTimeline animate layout="1-column-left" lineColor="black">
        <span className="ml-10 font-semibold text-2xl w-full">{date}</span>
        {resources.map((res) => (
          <TimelineElement
            key={res.title}
            title={res.title}
            description={res.description}
            icon={<MdPerson />}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
}
