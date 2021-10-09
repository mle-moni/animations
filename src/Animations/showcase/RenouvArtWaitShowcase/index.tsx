import { Slider } from "@material-ui/core";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { DivVisibility, Showcase } from "..";
import { RenouvArtWait } from "../../components/wait/RenouvArtWait";

export const RenouvArtWaitShowcase = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <h2
        className="text-align-center pointer"
        onClick={() => setVisible(!visible)}
      >
        &lt;RenouvArtWait /&gt;
      </h2>
      <DivVisibility visible={visible}>
        <h2 className="text-align-center">Some props example</h2>
        <div className="flex wrap justify-center">
          <Showcase description="basic">
            <RenouvArtWait />
          </Showcase>
          <Showcase description="linear speed">
            <RenouvArtWait speed={8} />
          </Showcase>
          <Showcase description="main ball color">
            <RenouvArtWait mainBallColor="black" />
          </Showcase>
        </div>
        <h2 className="text-align-center">Interactive example</h2>
        <InteractiveExample />
      </DivVisibility>
    </>
  );
};

const InteractiveExample = () => {
  const [speed, setSpeed] = useState(5);
  const [mainBallColor, setMainBallColor] = useState("white");

  return (
    <div className="flex wrap justify-center">
      <div className="w-100 flex wrap justify-center">
        <div className="w-20 m-10">
          <p className="text-align-center">speed</p>
          <div className="w-100 flex justify-center">
            <Slider
              style={{ width: "100px" }}
              defaultValue={5}
              max={40}
              onChange={(e, newValue) => setSpeed(newValue as number)}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <div>
          <p className="text-align-center">main ball color</p>
          <SketchPicker
            color={mainBallColor}
            onChangeComplete={(color) => setMainBallColor(color.hex)}
          />
        </div>
      </div>

      <RenouvArtWait speed={speed} mainBallColor={mainBallColor} />
    </div>
  );
};
