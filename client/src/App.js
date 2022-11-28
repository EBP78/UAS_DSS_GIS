import "./App.css";
import { getData, topsis } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);

  const DataTable = () => {
    return data.map((gudang, i) => {
      return (
        <tr key={i}>
          <td>{gudang.alternatif}</td>
          <td>{gudang.penilaian[0]}</td>
          <td>{gudang.penilaian[1]}</td>
          <td>{gudang.penilaian[2]}</td>
          <td>{gudang.penilaian[3]}</td>
          <td>{gudang.penilaian[4]}</td>
        </tr>
      );
    });
  };

  const topsis_result = async () => {
    const hasil = await topsis();
    setData(hasil.data);
    // console.log({ hasilss: hasil.data });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TOPSIS MENCARI GUDANG TERBAIK</h1>

        <div className="Form-Container"></div>
        <div className="Table-Container">
          <table className="Table-Mantap">
            <thead>
              <tr>
                <th>Alternative</th>
                <th>Luas</th>
                <th>Kelembapan</th>
                <th>Jarak Ke Toko</th>
                <th>Akses Jalan</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <DataTable />
            </tbody>
          </table>
        </div>
        <button className="Topsis-Btn" onClick={() => topsis_result()}>
          Topsis
        </button>
      </header>
    </div>
  );
};

export default App;
