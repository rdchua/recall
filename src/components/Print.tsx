import React from "react";

type PrintProps = {
  children: React.ReactNode;
};

const Print = ({ children }: PrintProps) => {
  return <div>{children}</div>;
};

export default Print;
