import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiCalling = () => {
  const [data, getData] = useState([]);

  const handleGetApiData = () => {
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        getData(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    handleGetApiData()
  }, [])

  
  return (
    <>
      <h1>Handle Get Api Data</h1>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataObj) => (
            // note: if using {} instead of () need to return the dataObj manually
            // return (
              // <>
                <tr key={dataObj.id}>
                  <td>{dataObj.userId}</td>
                  <td>{dataObj.id}</td>
                  <td>{dataObj.title}</td>
                  <td>{dataObj.body}</td>
                </tr>
              // </>
            // )
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ApiCalling;
