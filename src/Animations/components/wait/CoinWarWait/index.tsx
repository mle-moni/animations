import { CSSProperties, useEffect, useRef } from "react";
import { CoinWarWaitLogic, SpeedModes } from "./CoinWarWaitLogic";

export type CoinWarWaitProps = {
  modes?: keyof typeof SpeedModes;
  ballsColor?: string;
  railsColor?: string;
  style?: CSSProperties;
};

export const CoinWarWait = (props: CoinWarWaitProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const store = new CoinWarWaitLogic(canvasRef.current, props);
    return () => {
      store.cleanup();
    };
  }, [canvasRef.current, props]);

  return (
    <canvas style={props.style} width={300} height={300} ref={canvasRef} />
  );
};
