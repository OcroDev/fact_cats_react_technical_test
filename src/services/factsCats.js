const FACT_URL = 'https://catfact.ninja/fact';

export async function getFact() {
  const response = await fetch(FACT_URL);
  const data = await response.json();
  return await data.fact;
}
