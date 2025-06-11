import { ChildrenProps } from "@/types/types";
import React from "react";

function layout({ children }: ChildrenProps) {
  return <div>{children}</div>;
}

export default layout;
