import Header from "../components/Header";
import PersonalDetails from "../components/PersonalDetails";
import ReservationDetails from "../components/ReservationDetails";
import Tables from "../components/Tables";

export default function Home() {
  return (
    <>
      <Header></Header>
      <ReservationDetails></ReservationDetails>
      <Tables></Tables>
      <PersonalDetails></PersonalDetails>
    </>
  );
}
