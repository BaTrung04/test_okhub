import "./App.css";
import Cooperate from "./components/cooperate/Cooperate";
import Field from "./components/field/Field";
import Footer from "./components/Footer/Footer";
import Friends from "./components/friends/Friends";
import Header from "./components/Header/Header";
import Imprint from "./components/imprint/Imprint";
import Map from "./components/map/map";
import Mission from "./components/mission/Mission";
import New from "./components/news/New";
import Origin from "./components/origin/Origin";
import Personnel from "./components/personnel/Personnel";
function App() {
  return (
    <>
      <main className="overflow-x-hidden h-[15000px] ">
        <Header />
        <Origin />
        <Map />
        <Mission />
        <Field />
        {/* <Imprint />
        <Friends />
        <Cooperate />
        <New />
        <Personnel />
        <Footer /> */}
      </main>
    </>
  );
}

export default App;
