import { useEffect, useState } from "react";
import DataTable from "./DataTable";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => alert("failed to fetch data"));
  }, []);

  return (
    <div className="App">
      <DataTable data={data} />
    </div>
  );
}

export default App;
