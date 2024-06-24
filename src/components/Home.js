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
        <div>
          <a href="https://github.com/FaizanJavair/">My Github</a>
        </div>
        <div>
          <a href="https://faizanjavair.netlify.app/">My Portfolio</a>
        </div>
        <div className="code">
          <h6 className="footer-text">18540578</h6>
          <div class="square"></div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
