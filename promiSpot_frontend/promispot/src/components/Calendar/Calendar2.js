import React from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Calendar2() {
  return <Calendar date={new Date()} onChange={this.handleSelect} />;
}
