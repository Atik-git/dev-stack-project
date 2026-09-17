import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/Technologies"
import type { Technology } from "./types";
import Footer from "./components/Footer";

const techDataPromise = async(): Promise<Technology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {

  
    return (
      <>
        <Nav></Nav>
        <Banner></Banner>
       <Suspense>
         <Technologies techDataPromise = {techDataPromise()}></Technologies>
       </Suspense>
       <Footer></Footer>
      </>
    )
  }

  export default App
