import { FaPhone, FaEnvelope } from "react-icons/fa";
import Icons from "../components/Icons";
import Title from "../components/Title";

function Home() {
  return (
    <section className="home">
      <header className="home__header">
        <h1 className="home__title">Beautifuly designed <span className="home__designed">interiors</span></h1>
      </header>
      <div className="home__icons">
        <Icons name={<FaPhone />} to="#" />
        <Icons name={<FaEnvelope />} to="#" />
      </div>
    </section>
  );
}

export default Home;

