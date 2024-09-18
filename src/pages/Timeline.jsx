import { MdTimeline } from "react-icons/md";
import TimelineComponent from "../components/Timeline/TimelineComponent";

const DUMMY_DATA = [
  {
    date: "16 Sep, Monday",
    resources: [
      { title: "Dummy title 1", description: "Description for title 1" },
      { title: "Dummy title 2", description: "Description for title 2" },
      { title: "Dummy title 3", description: "Description for title 3" },
      { title: "Dummy title 4", description: "Description for title 4" },
    ],
  },
  {
    date: "17 Sep, Tuesday",
    resources: [
      { title: "Dummy title 1", description: "Description for title 1" },
      { title: "Dummy title 2", description: "Description for title 2" },
      { title: "Dummy title 3", description: "Description for title 3" },
      { title: "Dummy title 4", description: "Description for title 4" },
    ],
  },
  {
    date: "18 Sep, Wednesday",
    resources: [
      { title: "Dummy title 1", description: "Description for title 1" },
      { title: "Dummy title 2", description: "Description for title 2" },
      { title: "Dummy title 3", description: "Description for title 3" },
      { title: "Dummy title 4", description: "Description for title 4" },
    ],
  },
];
export default function TimelinePage() {
  return (
    <section className="mt-8">
      <header className="flex items-center justify-center text-center">
        <span className="h-12 w-12 rounded-full bg-sky-600 flex items-center justify-center ">
          <MdTimeline className="w-[80%] h-[80%] text-gray-200" />
        </span>
        <h2 className="font-bold ml-4 text-4xl">My Timeline</h2>
      </header>
      <article className="ml-10 flex flex-col w-[50%] justify-center">
        {DUMMY_DATA.map((data) => (
          <TimelineComponent
            key={data.date}
            date={data.date}
            resources={data.resources}
          />
        ))}
      </article>
    </section>
  );
}
