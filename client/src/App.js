import "./App.css";
import { getData, topsis, insertData } from "./api";
import { useEffect, useState, useRef } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const alternatif = useRef();
  const luas = useRef();
  const kelembapan = useRef();
  const jarak = useRef();
  const akses = useRef();
  const harga = useRef();

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
  };

  const insert_data = async () => {
    const insertFromForm = await insertData({
      alternatif: alternatif.current.value,
      penilaian: [
        parseInt(luas.current.value),
        parseInt(kelembapan.current.value),
        parseInt(jarak.current.value),
        parseInt(akses.current.value),
        parseInt(harga.current.value),
      ],
    });
    console.log(insertFromForm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TOPSIS MENCARI GUDANG TERBAIK</h1>
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
        <div className="Form-Container">
          <div className="Insert-Form">
            <h2>Insert Data</h2>
            <form onSubmit={insert_data} className="Form-Data">
              <label>
                Nama Alternatif:
                <input type="text" ref={alternatif} />
              </label>
              <label>
                Luas:
                <input type="text" ref={luas} />
              </label>
              <label>
                Kelembapan:
                <input type="text" ref={kelembapan} />
              </label>
              <label>
                Jarak Ke Toko:
                <input type="text" ref={jarak} />
              </label>
              <label>
                Akses Jalan:
                <input type="text" ref={akses} />
              </label>
              <label>
                Harga:
                <input type="text" ref={harga} />
              </label>
              <button type="submit" className="Topsis-Btn">
                Insert
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
