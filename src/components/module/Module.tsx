import { FC, ReactNode } from "react";
import "./module.scss";

interface ModuleProps {
  children: ReactNode;
}

const Module: FC<ModuleProps> = ({ children }) => {
  return <div className="module">{children}</div>;
};

export default Module;
