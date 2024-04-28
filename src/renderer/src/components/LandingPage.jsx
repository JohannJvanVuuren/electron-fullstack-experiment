import axios from 'axios';
import { Card } from 'antd';
import {useState, useEffect} from "react";

export const LandingPage = () => {

  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const axiosUrl = `${import.meta.env.VITE_BASE_URL}/`;
    axios.get(axiosUrl)
      .then(response => setEntities(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className={'landing-page'}>
      {entities.map((entity) => {
        return (
        <Card className='landing-page__card' key={entity.id_number} title={`Id number: ${entity.id_number}`} bordered={false} style={{ width: 300 }}>
              <p>Name: {entity.name}</p>
              <p>Species: {entity.species}</p>
              <p>Gender: {entity.gender}</p>
            </Card>)
      })}
    </section>
  )
}
