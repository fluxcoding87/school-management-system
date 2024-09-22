import PersonalDetails from "../../components/StudentInfo/PersonalDetails";
import PersonalAddress from "../../components/StudentInfo/PersonalAddress";
//Can be fetched using a loader here
const DUMMY_PERSONAL_DETAILS = {
  currentGrade: "IX-A",
  fullName: "Amit Singh",
  rollNumber: "18",
  dob: "01-01-2001",
  dobInWords: "One January Two Thousand One",
  email: "amit@gmail.com",
  mobNo: "9981144444",
  domicile: undefined,
  economicallyWeak: "no",
  enrolledGrade: undefined,
  username: "S10261",
  regNo: "10261",
  gender: "Male",
  nationality: "Indian",
  category: "General",
  motherTongue: "Hindi",
  placeOfBirth: "Sagar",
};

export default function PersonalInfoPage() {
  return (
    <article className="text-white flex flex-col gap-12 bg-sky-900 py-8 px-4 rounded-tr-md rounded-br-md rounded-bl-md w-fit">
      <PersonalDetails {...DUMMY_PERSONAL_DETAILS} />
      <PersonalAddress></PersonalAddress>
    </article>
  );
}
