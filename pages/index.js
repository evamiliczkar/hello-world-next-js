// pages/index.js
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const myVariable = process.env.NEXT_PUBLIC_IS_PREVIEW;

export default () => (< div > Hello World Next JS! {myVariable}  The {process.env.NEXT_PUBLIC_IS_PREVIEW} branch.  <SpeedInsights /> < /div>);