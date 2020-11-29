//  import React from 'react';
//  import axios from 'axios';


//  function Getjwt(){
//     var ret;
//     var status;
//     axios.get('http://35.232.159.201:3000/api/auth/check',{
//               headers: {
//                 'x-access-token': localStorage.getItem('jwt')
//               }
//           })
//             .then(function (response) {
//               ret = response;
//               status = ret.status;
//               console.log("전송결과 : "+ret.statusText);
//               console.log(status);
//               localStorage.setItem('status', status);
              
//           })
//           .catch(function (error) {
//               ret = error.response;
//               console.log(ret);
//               status = ret.status;
//               localStorage.setItem('status', status);
//               // alert("다시 로그인해주십시오.");
//           });
// }

// export default Getjwt;

