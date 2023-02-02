// // import React, {useState, useContext} from 'react';
// // import DatePicker from 'react-datepicker';
// // import "react-datepicker/dist/react-datepicker.css";

// // export default function Datepicker() {
// //   const [startDate, setStartDate] = useState(new Date());
// //   return (
// //     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
// //   );
// // }

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// // import Form from "react-bootstrap/Form";
// import { ko } from "date-fns/esm/locale";
// import { getMonth, getDate, getDay } from "date-fns";
// import "./DatePicker.scss"

// export default function Datepicker(props) {
//   const [startDate, setStartDate] = useState(new Date());
//   const [isOpen, setIsOpen] = useState(false);
//   const handleChange = (e) => {
//     setIsOpen(!isOpen);
//     setStartDate(e);
//   };
//   const handleClick = (e) => {
//     e.preventDefault();
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <button className="example-custom-input" onClick={handleClick}>
//         {format(startDate, "dd-MM-yyyy")}
//       </button>
//       {isOpen && (
//         <DatePicker selected={startDate} onChange={handleChange} inline />
//       )}
//     </>
//   );
// };