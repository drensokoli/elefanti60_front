import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  
  // useEffect(() => {
  //   fetch(`https://localhost:44391/api/Product/1`)
  //    .then((response) => console.log(response.data));
  //  }, []);

  
  useEffect(() => {
    axios.get('https://localhost:44391/api/Product/1')
    .then((response: AxiosResponse<any>) => {
      console.log(response.data);
    })
   }, []);


   return(
    <>
     test
     test2
     test3
    </>
   )
}

export default App;
