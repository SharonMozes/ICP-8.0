import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting(props) {
  const { name, city, age ,study} = props;
  return (
    <div
      style={{
        border: "2px dotted black",
        backgroundColor: "pink",
        borderRadius: "10px",
        margin: "20px auto",

      }}
    >
      <h1 style={{ fontFamily:"monospace"}}>
        I am {name} from {city}. <br></br>I am {age} years old.<br></br>I study {study}.
      </h1>
    </div>
  );
}

function Wishes(props) {
  const { name,prefix} = props;
  return (
    <div className="card">
      <h1>
        {prefix} {name} <br></br>Good morning Wish you very Happy Diwali
      </h1>
    </div>
  );
}

const cardStyle = {
  borderRadius: "10px",
  padding: "10px",
  margin: "10px",
};

const headingStyle = {
  color: "purple",
};

function Congrats(props) {
  const { name } = props;
  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>
       Congratulations!!!!<br></br>{name}
      </h1>
    </div>
  );
}



root.render(
  <>
    <Greeting name="Sharon" city="Pune" age="20"study="Enginnering" />
    <Greeting name="Mercy" city="Solapur" age="22" study="Animation" />
    <Greeting name="John" city="Humnabad" age="23" study="Pharmacy" />
    <Greeting name="Siddhi" city="Pune" age="21" study="MBBS" />
    <Wishes name="Sharon" prefix="Dr."/>
    <Wishes name="John" prefix="Dr."/>
    <Congrats name="Aron" />
    <Congrats name="Shifa" />
    <Congrats name="Amos" />
    <Congrats name="Paul"/>
  </>
);


  