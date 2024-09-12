import User from "./User";
function App() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
    },
    {
      id: 3,
      name: "Alice Smith",
      email: "alice.smith@example.com",
    },
  ];
  const colors = [
    {
      id: 1,
      color: "blue",
    },
    {
      id: 2,
      color: "red",
    },
    {
      id: 3,
      color: "green",
    },
  ];
  console.log(users);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Props</h2>
      <table
        style={{ margin: "auto", padding: "50px", border: "1px solid black" }}
      >
        <thead style={{ border: "1px solid black" }}>
          <tr>
            <th style={{ border: "1px solid black" }}>ID</th>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Email</th>
            <th style={{ border: "1px solid black" }}>Color</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              style={{ textAlign: "center", border: "1px solid black" }}
            >
              <td style={{ fontWeight: "bold", border: "1px solid black" }}>
                {user.id}
              </td>
              <td style={{ fontWeight: "bold", border: "1px solid black" }}>
                {user.name}
              </td>
              <td style={{ fontWeight: "bold", border: "1px solid black" }}>
                {user.email}
              </td>
              <td
                style={{
                  color: colors.find((color) => color.id === user.id).color,
                  fontWeight: "bold",
                  border: "1px solid black",
                }}
              >
                {colors.find((color) => color.id === user.id).color}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
