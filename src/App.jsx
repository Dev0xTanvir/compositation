import React, { useState } from "react";
import Nevber from "./Component/Nevber";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Button from "./CommonComponent/Button";
import Formate from "./CommonComponent/Formate";
import { ThemProbider } from "./Context/ThemContext";

const App = () => {
  const [visival, setvisival] = useState(true);
  const [color, setcolor] = useState("");

  const handlevisible = (value) => {
    setcolor(value);
    setvisival(!visival);
  };
  return (
    <div>
      <ThemProbider>
        <Nevber value={color} onVisival={handlevisible} />
        <Banner>
          <Button>
            <Formate color={color} visival={visival}>
              Tanvir
            </Formate>
          </Button>
        </Banner>
        <Footer />
      </ThemProbider>
    </div>
  );
};

export default App;
