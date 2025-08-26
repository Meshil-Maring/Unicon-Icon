import DisplayIcons from "../components/DisplayIcons";
import Header from "../components/Header";
import ListIcon from "../components/ListIcon";

const Home = () => (
  <div className="">
    <Header />

    <div className="grid grid-cols-6">
      <ListIcon />
      <DisplayIcons />

      <div className="col-span-2 w-full p-8">
        <div className="bg-amber-50 h-96 w-full"></div>
      </div>
    </div>
  </div>
);

export default Home;
