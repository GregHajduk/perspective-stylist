import { FaPhone, FaEnvelope } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Title from '../components/Title';


function Home() {
    return (
      <section className="home">
        <header className="home__hero">
          <div className="home__title">
            <Title title="Beautifuly" />
            <Title title="Designed" />
            <Title title="Interiors" />
          </div>
        </header>
        <IconContext.Provider
          value={{
            color: "#FF5E5E",
            size: "2rem",
            style: { margin: "0.8rem 0.5rem", },
          }}
        >
          <div className="home__icons">
            <Link to="/">
              <FaPhone />
            </Link>
            <Link to="/">
              <FaEnvelope />
            </Link>
          </div>
        </IconContext.Provider>
      </section>
    );
}

export default Home
                
