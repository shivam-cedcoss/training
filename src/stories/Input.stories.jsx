import React from "react";
import Input from "./Input";
export default {
  title: "Input",
  component: Input,
};
export const Small = () => <Input variant="small">Primary</Input>;
export const Medium = () => <Input variant="medium">Secondary</Input>;
export const Large = () => <Input variant="large">Success</Input>;
