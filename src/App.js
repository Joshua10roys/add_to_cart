import NavBar from './components/navbar';
import Header from './components/header';
import Cards from './components/cards';
import Footer from './components/footer';
import Data from './data/data';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar count={count} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Data.map((items) => (
              <Cards key={items.id} name={items.name} price={items.price} count={count} setCount={setCount} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
