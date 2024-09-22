import PersonalElement from "./PersonalElement.jsx";
export default function PersonalAddress() {
  return (
    <div className="border-2 border-solid border-white rounded-md px-4 py-4">
      <p className="font-bold text-xl">Address</p>
      <div>
        <p className="font-semibold mt-4">Permanent Address</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <PersonalElement title="Address 1" value={undefined} />
          <PersonalElement title="Address 2" value={undefined} />
          <PersonalElement title="Locality" value={undefined} />
          <PersonalElement title="Pin" value={undefined} />
          <PersonalElement title="City" value={undefined} />
          <PersonalElement title="State" value={undefined} />
          <PersonalElement title="Contact No." value={undefined} />
          <PersonalElement title="Country" value={undefined} />
        </div>
      </div>
    </div>
  );
}
