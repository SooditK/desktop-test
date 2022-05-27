import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import { FullData } from "../interfaces/IndexProps";

export default function Home({ data, rides }: FullData) {
  return (
    <>
      <Navbar data={data} />
      <Tabs rides={rides} />
    </>
  );
}

export async function getServerSideProps() {
  const res1 = await fetch("https://assessment.api.vweb.app/user");
  const json = await res1.json();
  const res2 = await fetch("https://assessment.api.vweb.app/rides");
  const json2 = await res2.json();
  return {
    props: {
      data: json,
      rides: json2,
    },
  };
}
