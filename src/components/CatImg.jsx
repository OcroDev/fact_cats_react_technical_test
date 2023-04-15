import React from 'react';
import useCatImg from '../hooks/useCatImg';

export default function CatImg({ fact }) {
  if (!fact) return null;

  const { urlImg } = useCatImg({ fact });

  return (
    <div>
      <img
        src={urlImg}
        alt='Random image of cats using a cat fact'
        width={300}
        height={250}
      />
    </div>
  );
}
