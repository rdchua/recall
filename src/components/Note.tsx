import React from "react";
import Card from "./Card";

interface IProps {
  children?: React.ReactNode;
}

const Note = ({ children }: IProps) => {
  return <Card w="100%">{children}</Card>;
};

export default Note;
