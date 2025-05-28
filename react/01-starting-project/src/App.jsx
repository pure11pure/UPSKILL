import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </ >
  );
}

export default App;

// ที่ต้องแก้เพราะ เวลาคลิก Examples จะไปโหลด Header ใหม่