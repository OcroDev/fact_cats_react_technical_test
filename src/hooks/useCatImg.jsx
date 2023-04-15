import React, { useEffect, useState } from 'react';

const CAT_PREFIX_URL = 'https://cataas.com/';

export default function useCatImg({ fact }) {
  const [catUrlImg, setCatUrlImg] = useState();

  const firstWord = fact.split(' ', 4).join(' ');

  useEffect(() => {
    if (!firstWord) return;
    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((response) => response.json(''))
      .then((data) => {
        setCatUrlImg(() => data.url);
      });
  }, [firstWord]);

  return { urlImg: `${CAT_PREFIX_URL}${catUrlImg}` };
}
