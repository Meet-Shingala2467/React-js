import User from "./User";
function App() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com"
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com"
    },
    {
      id: 3,
      name: "Alice Smith",
      email: "alice.smith@example.com"
    }
  ];
  const colors = [
    {
      id: 1,
      color: "blue"
    },
    {
      id: 2,
      color: "red"
    },
    {
      id: 3,
      color: "green"
    }
  ];
    console.log(users)
  return (
   
      <User meet={users} color={colors} />
   
  );
}

export default App;
