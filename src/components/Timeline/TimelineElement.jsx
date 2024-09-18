/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function TimelineElement({ title, description, icon }) {
  return (
    <VerticalTimelineElement icon={icon}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <p className="vertical-timeline-element-subtitle">{description}</p>
    </VerticalTimelineElement>
  );
}
