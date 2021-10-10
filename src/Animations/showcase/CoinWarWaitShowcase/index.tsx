import { Button, Slider } from "@material-ui/core";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { DivVisibility, Showcase } from "..";
import { CoinWarWait } from "../../components/wait/CoinWarWait";
import { SpeedModes } from "../../components/wait/CoinWarWait/CoinWarWaitLogic";

export const CoinWarWaitShowcase = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <h2
        className="text-align-center pointer"
        onClick={() => setVisible(!visible)}
      >
        &lt;CoinWarWait /&gt;
      </h2>
      <DivVisibility visible={visible}>
        <h2 className="text-align-center">Some props example</h2>
        <div className="flex wrap justify-center">
          <Showcase description="basic">
            <CoinWarWait />
          </Showcase>
          <Showcase description="other speed mode">
            <CoinWarWait modes="factory" />
          </Showcase>
          <Showcase description="balls / rails color">
            <CoinWarWait ballsColor="white" railsColor="red" />
          </Showcase>
        </div>
        <h2 className="text-align-center">Interactive example</h2>
        <InteractiveExample />
      </DivVisibility>
    </>
  );
};

const InteractiveExample = () => {
  const [speedMode, setSpeedMode] = useState<keyof typeof SpeedModes>("normal");
  const [mainBallColor, setMainBallColor] = useState("green");
  const [railsColor, setRailsColor] = useState("blue");
  const [size, setSize] = useState(300);

  return (
    <div className="flex wrap justify-center">
      <div className="w-100 flex wrap justify-center">
        <div className="w-20 m-10">
          <p className="text-align-center">speed modes</p>
          <div className="w-100 flex justify-center">
            <Button size="small" onClick={() => setSpeedMode("slow")}>
              slow
            </Button>
            <Button size="small" onClick={() => setSpeedMode("normal")}>
              normal
            </Button>
            <Button size="small" onClick={() => setSpeedMode("fast")}>
              fast
            </Button>
            <Button size="small" onClick={() => setSpeedMode("factory")}>
              factory
            </Button>
          </div>
        </div>
        <div>
          <p className="text-align-center">balls color</p>
          <SketchPicker
            color={mainBallColor}
            onChangeComplete={(color) => setMainBallColor(color.hex)}
          />
        </div>
        <div>
          <p className="text-align-center">rails color</p>
          <SketchPicker
            color={railsColor}
            onChangeComplete={(color) => setRailsColor(color.hex)}
          />
        </div>
        <div className="w-20 m-10">
          <p className="text-align-center">size</p>
          <div className="w-100 flex justify-center">
            <Slider
              style={{ width: "100px" }}
              defaultValue={300}
              max={300}
              min={1}
              onChange={(e, newValue) => setSize(newValue as number)}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
      </div>

      <div
        className="flex justify-center align-center"
        style={{ minHeight: 350 }}
      >
        <CoinWarWait
          modes={speedMode}
          ballsColor={mainBallColor}
          railsColor={railsColor}
          style={{ width: size, height: size }}
        />
      </div>
    </div>
  );
};
