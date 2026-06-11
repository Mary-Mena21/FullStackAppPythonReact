import { useState, useEffect } from 'react';
import AxiosInstance from './Axios';

const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characteristic, setCharacteristic] = useState([]);

  console.log('country', country);
  console.log('league', league);
  console.log('characteristic', characteristic);

  const GetData = () => {
    AxiosInstance.get('country/').then((res) => {
      console.log(res.data);
      setCountry(res.data);
    });
    AxiosInstance.get('league/').then((res) => {
      console.log(res.data);
      setLeague(res.data);
    });
    AxiosInstance.get('characteristic/').then((res) => {
      console.log(res.data);
      setCharacteristic(res.data);
    });
  };
  useEffect(() => {
    GetData();
  }, []);

  return <div>This is the Create Page</div>;
};

export default Create;
