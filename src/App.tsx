import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <ListGroup
        items={["New York", "San Fransico", "Tokyo", "London", "Paris"]}
        heading={"Cities"}
      />
    </div>
  );
}

export default App;
