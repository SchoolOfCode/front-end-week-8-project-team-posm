// import React, { useState, useEffect } from "react";

// function DisplayProviders() {
//   const [providers, setProviders] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/providers`)
//       .then(res => res.json())
//       .then(data => {
//         console.log({ data });
//         setProviders(data);
//       });
//   }, []);

//   //     async function getUserData() {
//   //       const res = await fetch(`http://localhost:5000/providers`);
//   //       console.log(res);
//   //       const data = await res.json();
//   //       console.log(data);
//   //     }
//   //     getUserData();
//   //     setProviders(data);
//   //   }, []);

//   return (
//     <ul>
//       {providers.map(item => {
//         return <li>{item.provider_name}</li>;
//       })}
//     </ul>
//   );
// }

// export default DisplayProviders;
