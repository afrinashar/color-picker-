import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://650c49ec47af3fd22f6768d8.mockapi.io/v1/Jobs');
      setData(response.data);
      setLoading(false);
    } catch (error) {
         console.log(error);
    }
  };

  const createData = async () => {
    try {
      const newData = { name: 'John Doe', age: 30 };
      await axios.post('https://650c49ec47af3fd22f6768d8.mockapi.io/v1/Jobs', newData);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (id) => {
    try {
      const updatedData = { name: 'Jane Doe', age: 35 };
      await axios.put(`https://650c49ec47af3fd22f6768d8.mockapi.io/v1/Jobs/${id}`, updatedData);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`https://650c49ec47af3fd22f6768d8.mockapi.io/v1/Jobs/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name}, {item.age}
              <button onClick={() => updateData(item.id)}>Update</button>
              <button onClick={() => deleteData(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={createData}>Create</button>
    </div>
  );
};

export default App;
