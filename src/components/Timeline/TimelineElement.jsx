/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function TimelineElement({ title, description, icon }) {
  return (
    <VerticalTimelineElement
      icon={icon}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <h3 className="font-bold text-[1.3rem]">{title}</h3>
      <p className="font-extralight">{description}</p>
    </VerticalTimelineElement>
  );
}
