import Card from "../../components/Card/Card";
import "./Home.css";

function Home({ setCount, count }) {
  return (
    <div className="home">
      home
      <Card title="Home" setCount={setCount} count={count} />
    </div>
  );
}

export default Home;
