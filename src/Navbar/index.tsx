import { FC } from "react";

export const Navbar: FC = ({ children }) => (
  <nav id="main-navbar">
    <div className="container-90 m-auto">
      <div className="nav-logo">
        <a href="/">
          mle-moni [<span className="italic color-accent-1">{children}</span>]
        </a>
      </div>
    </div>
  </nav>
);
