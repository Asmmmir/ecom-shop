import Footer from "../components/footer";
import Header from "../components/header";
import axios from "axios";

export default function Home({ country }) {
  console.log(country);
  return (
    <div>
      <Header country={country} />
      <Footer country={country}  />
    </div>
  );
}

export async function getServerSideProps() {
  // const URL = `https://api.ipregistry.co/178.89.195.193?key=izkp1wfbvdjhx0bm`;
  // let data = await axios(URL)
  //   .then((res) => {
  //     return res.data.location.country;
  //   })
  //   .catch((err) => console.log(err));

  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
       country: { name: "Kazakhstan", flag: '../../images/kz.png' },
    },
  };
}
