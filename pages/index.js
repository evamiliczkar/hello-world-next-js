// pages/index.js
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const myVariable = process.env.IS_PREVIEW;

export default () => (< div > Hello World Next JS! {myVariable}  The {process.env.IS_PREVIEW} branch.  <SpeedInsights /> < /div>);