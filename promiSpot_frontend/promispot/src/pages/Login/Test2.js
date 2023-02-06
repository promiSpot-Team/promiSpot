// import React from 'react';
// // import gsap from 'gsap'

// import '../scss/Test2.scss';

// export default function Test2() {
//   gsap.from("#clipPath", 2, {scale:0, transformOrigin:'50% 50%'});
// gsap.from(".star", 2, {x:500, y:-500});
// gsap.from("#rocket,#fire", 2, {x:-500, y:500});
//   return (<svg id="space" viewBox="0 0 1000 1000">
//   <defs>
//     <clipPath id="clip-path">
//       <circle id="clipPath" cx="500" cy="500" r="450"/>
//     </clipPath>
//   </defs>
//   <title>rocket</title>
//   <g id="stage" clip-path="url(#clip-path)">
//       <rect id="sky" class="sky" width="1000" height="1000"/>
//       <g id="fire">
//         <polygon class="fire-dark" points="334 519 -294 1333 67 983 4 1070 479 663 334 519"/>
//         <polygon class="fire-bright" points="432 415 -197 1228 164 879 101 965 576 559 432 415"/>
//       </g>
//       <g id="rocket">
//         <path class="rocket-bright" d="M418,419l-16,17c-32-13-65-18-102,1-52,26-95,86-102,138-1,8,9,12,15,5s38-38,56-48,44-15,65-14l24,24,48,48L596,400a37,37,0,0,1,52-52L750,246C667,237,534,303,418,419Z"/>
//         <path class="rocket-dark" d="M579,580l-17,16v2c13,32,18,65-1,103-26,52-85,96-137,102-8,1-12-9-5-15s38-38,47-57,15-46,13-68h0l-75-75L596,400l3,3a37,37,0,0,0,52-52l-3-3L750,246h2C763,330,697,463,579,580Z"/>
//       </g>
//       <g id="stars">
//         <path class="star" d="M513,153a3,3,0,0,1-3-3V133a3,3,0,0,1,6,0v17A3,3,0,0,1,513,153Zm29,6a3,3,0,0,0-3-3H522a3,3,0,0,0,0,6h17A3,3,0,0,0,542,158Zm-25,26V167a3,3,0,1,0-6,0v17a3,3,0,0,0,6,0Zm-9-25a3,3,0,0,0-3-3H488a3,3,0,0,0,0,6h17A3,3,0,0,0,508,159Z"/>
//         <path class="star" d="M878,447h-2a3,3,0,0,1,0-4l7-7a3,3,0,0,1,4,4l-7,7Zm10,14a3,3,0,0,0,0-4l-7-7a3,3,0,0,0-4,4l7,7h4Zm-23,0,7-7a3,3,0,0,0-4-4l-7,7a3,3,0,0,0,0,4h4Zm7-15a3,3,0,0,0,0-4l-7-7a3,3,0,0,0-4,4l7,7h4Z"/>
//         <path class="star" d="M656,848a22,22,0,1,1,22-21A22,22,0,0,1,656,848Zm0-37a16,16,0,1,0,16,16A16,16,0,0,0,656,811Z"/>
//         <path class="star" d="M130,447a16,16,0,1,1,16-16A16,16,0,0,1,130,447Zm0-27a11,11,0,1,0,11,11A11,11,0,0,0,130,420Z"/>
//         <circle class="star" cx="319" cy="268" r="10"/>
//         <circle class="star" cx="728" cy="566" r="15"/>
//       </g>
//   </g>
// </svg>
//   )
// }
