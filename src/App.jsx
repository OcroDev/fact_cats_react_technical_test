import { Footer } from './components/Footer';
import { useGetFacts } from './hooks/useGetFacts';
import CatImg from './components/CatImg';
import './App.css';

function App() {
  const { fact, handleClick } = useGetFacts();

  return (
    <>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          placeItems: 'center',
        }}
      >
        <h2>Random Cats through a Fact</h2>
        <button onClick={handleClick}>Generate a new Cat Image</button>
      </header>
      <main className='main'>
        <p>
          <strong>Fact: </strong>
          {fact}
        </p>
        <CatImg fact={fact} />
      </main>

      <Footer />
    </>
  );
}

export default App;
