/* eslint-disable react/prop-types */
export default function PersonalElement({ title = "---", value = "---" }) {
  return (
    <div className="flex gap-8">
      <div className="flex items-center justify-between gap-12 w-[15rem] text-md font-medium">
        <p>{title}</p>
        <p>:</p>
      </div>
      <p className="font-medium text-slate-300 w-max">{value}</p>
    </div>
  );
}
