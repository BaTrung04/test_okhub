import "./App.css";
import Header from "./components/Header/Header";
import Map from "./components/map/map";
import Mission from "./components/mission/Mission";
import Origin from "./components/origin/Origin";
function App() {
  return (
    <>
      <main className="overflow-x-hidden h-[5000px] ">
        <Header />
        <Origin />
        <Map />
        <Mission />
      </main>
    </>
  );
}

export default App;
