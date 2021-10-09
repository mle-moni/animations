import { FC } from "react";
import { RenouvArtWaitShowcase } from "./RenouvArtWaitShowcase";

export const Showcase: FC<{ description: string }> = ({
  description,
  children,
}) => (
  <div className="flex flex-column">
    {children}
    <span className="text-align-center">{description}</span>
  </div>
);

export const DivVisibility: FC<{ visible: boolean }> = ({
  visible,
  children,
}) => (visible ? <>{children}</> : <></>);

export const AnimationsShowcase = () => {
  return (
    <>
      <h2 className="text-align-center">
        Click on the components you want to see
      </h2>
      <RenouvArtWaitShowcase />
    </>
  );
};
