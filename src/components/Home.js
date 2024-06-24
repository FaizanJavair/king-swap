import "../styles/Home.css";
import MiddleCard from "./MiddleCard";

const Home = () => {
  return (
    <div className="home">
      <div className={"gradient-one"}></div>
      <header className="">
        <img src={"logo.svg"} className="logo" alt="logo" />
      </header>
      <div className="card-div">
        <MiddleCard login={false} exchange={false}></MiddleCard>
      </div>
      <footer className="footer">
        <h6 className="footer-text">18540578</h6>
        <div class="square"></div>
      </footer>
    </div>
  );
};

export default Home;
