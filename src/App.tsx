import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={["New York", "San Fransico", "Tokyo", "London", "Paris"]}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
