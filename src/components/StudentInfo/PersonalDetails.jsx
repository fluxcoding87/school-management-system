/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PersonalElement from "./PersonalElement";
export default function PersonalDetails({
  currentGrade,
  fullName,
  rollNumber,
  dob,
  email,
  mobNo,
  domicile,
  economicallyWeak,
  enrolledGrade,
  username,
  regNo,
  gender,
  nationality,
  category,
  motherTongue,
  placeOfBirth,
  dobInWords,
}) {
  return (
    <div className="flex gap-40">
      <div className="flex flex-col gap-4">
        <PersonalElement title="Current Grade/Class" value={currentGrade} />
        <PersonalElement title="Full Name" value={fullName} />
        <PersonalElement title="Roll Number" value={rollNumber} />
        <PersonalElement title="Date Of Birth" value={dob} />
        <PersonalElement title="Date of Birth in Words" value={dobInWords} />
        <PersonalElement title="Email" value={email} />
        <PersonalElement title="Mobile No." value={mobNo} />
        <PersonalElement title="Domicile" value={domicile} />
        <PersonalElement title="Economically Weaker" value={economicallyWeak} />
      </div>
      <div className="flex flex-col gap-4">
        <PersonalElement
          title="Enrolled in Grade/Class"
          value={enrolledGrade}
        />
        <PersonalElement title="Username" value={username} />
        <PersonalElement title="Reg No" value={regNo} />
        <PersonalElement title="Gender" value={gender} />
        <PersonalElement title="Nationality" value={nationality} />
        <PersonalElement title="Category" value={category} />
        <PersonalElement title="Mother Tongue" value={motherTongue} />
        <PersonalElement title="Place of Birth" value={placeOfBirth} />
      </div>
      <div>
        <img
          src=""
          alt="Student Image"
          className="h-[20rem] w-[20rem] border-solid border-2 border-white rounded-md"
        />
      </div>
    </div>
  );
}
