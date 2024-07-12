import Alert from "./components/Alert";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <ListGroup
        items={["New York", "San Fransico", "Tokyo", "London", "Paris"]}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}
      <Alert>
        <h1>Hello World</h1>
      </Alert>
    </div>
  );
}

export default App;
