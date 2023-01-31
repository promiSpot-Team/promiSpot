// import React from 'react';
// import './Background.scss';

// export default function Background() {
//   return (
// <div class="container">
//     <div class="sky">
//         <div class="stars">
//             <div class="falling-stars">
//                 <div class="star-fall"></div>
//                 <div class="star-fall"></div>
//                 <div class="star-fall"></div>
//                 <div class="star-fall"></div>
//             </div>
//             <div class="small-stars">
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//             </div>
//             <div class="medium-stars">
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//                 <div class="star"></div>
//             </div>
//         </div>
//         <div class="clouds">
//             <div class="dark cloud-1">
//                 <div class="top">
//                     <div class="part"></div>
//                 </div>
//                 <div class="middle">
//                     <div class="part"></div>
//                 </div>
//                 <div class="bottom"></div>
//             </div>
//             <div class="lighter cloud-1">
//                 <div class="top">
//                     <div class="part"></div>
//                 </div>
//                 <div class="middle">
//                     <div class="part"></div>
//                 </div>
//                 <div class="bottom"></div>
//             </div>
//             <div class="lighter cloud-2">
//                 <div class="top"></div>
//                 <div class="middle"></div>
//                 <div class="bottom"></div>
//             </div>
//             <div class="lighter cloud-3">
//                 <div class="top"></div>
//                 <div class="middle"></div>
//                 <div class="bottom"></div>
//             </div>
//             <div class="lighter cloud-4">
//                 <div class="top"></div>
//                 <div class="middle"></div>
//                 <div class="bottom"></div>
//             </div>
//             <div class="dark cloud-2">
//                 <div class="top"></div>
//                 <div class="middle"></div>
//                 <div class="bottom"></div>
//             </div>
//         </div>
//         <div class="moon-wrapper">
//             <div class="moonlight moonlight-1">
//                 <div class="moonlight moonlight-2">
//                     <div class="moonlight moonlight-3">
//                         <div class="moonlight moonlight-4">
//                             <div class="moon">
//                                 <div class="shadow shadow-1"></div>
//                                 <div class="shadow shadow-2"></div>
//                                 <div class="shadow shadow-3"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="hills">
//             <div class="tree">
//                 <div class="tree-leaves upper">
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                 </div>
//                 <div class="tree-leaves middle">
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                 </div>
//                 <div class="tree-leaves bottom">
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                     <div class="a"></div>
//                 </div>
//                 <div class="trunk"></div>
//             </div>
//             <div class="cabin-wrapper">
//                 <div class="roof"></div>
//                 <div class="wall">
//                     <div class="light"></div>
//                     <div class="windows">
//                         <div class="window"></div>
//                         <div class="window"></div>
//                         <div class="window"></div>
//                         <div class="window"></div>
//                     </div>
//                 </div>
//             </div>
//             <div class="windmill-wrapper">
//                 <div class="wings">
//                     <div class="wing">
//                         <div class="wing-part">
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                         </div>
//                         <div class="wing-part">
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                         </div>
//                     </div>
//                     <div class="wing">
//                         <div class="wing-part second">
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                         </div>
//                         <div class="wing-part second">
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="windmill">
//                     <div class="windmill-roof">
//                         <div class="roof-upper"></div>
//                         <div class="roof-below"></div>
//                     </div>
//                     <div class="windmill-wall">
//                         <div class="light"></div>
//                         <div class="light"></div>
//                     </div>
//                 </div>
//             </div>
//             <div class="shadow-wrapper">
//                 <div class="cabin-wrapper">
//                     <div class="roof"></div>
//                     <div class="wall"></div>
//                 </div>
//                 <div class="windmill-wrapper">
//                     <div class="wings">
//                         <div class="wing">
//                             <div class="wing-part">
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                             </div>
//                             <div class="wing-part">
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                             </div>
//                         </div>
//                         <div class="wing">
//                             <div class="wing-part second">
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                             </div>
//                             <div class="wing-part second">
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                                 <div class="line"></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="windmill">
//                         <div class="windmill-roof">
//                             <div class="roof-upper"></div>
//                             <div class="roof-below"></div>
//                         </div>
//                         <div class="windmill-wall"></div>
//                     </div>
//                 </div>
//             </div>
//             <div class="middle-hill">
//                 <div class="layer-1">
//                     <div class="layer-2">
//                         <div class="layer-3">
//                             <div class="layer-4"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="hill-right"></div>
//             <div class="hill-left"></div>
//         </div>
//     </div>
// </div>
//   )
// }
