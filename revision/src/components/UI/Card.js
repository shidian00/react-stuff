import "./Card.css";
export default function Card(props) {
  const classes = "card " + props.className; //adding multiple css need space like "className1 className2"
  return <div className={`${props.className} card`}>{props.children}</div>;
}
