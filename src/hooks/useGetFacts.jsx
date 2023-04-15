import { useState, useEffect } from 'react';
import { getFact } from '../services/factsCats';

export const useGetFacts = () => {
  const [fact, setFact] = useState(null);
  const handleClick = () => {
    getFact().then((data) => {
      setFact(data);
    });
  };

  useEffect(() => {
    getFact().then(setFact);
  }, []);

  return { fact, handleClick };
};
