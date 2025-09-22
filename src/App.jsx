import { Suspense } from "react";
import "./App.css";
import Bottles from "./assets/components/Bottles";

const bottlesPromise = fetch("./bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <h3 className=" text-4xl font-bold my-5 pb-10">Bottles collection</h3>
      <Suspense>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
