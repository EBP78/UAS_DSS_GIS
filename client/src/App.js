import "./App.css";
import { getData, topsis, insertData } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [alternatif, setAlternatif] = useState("");
  const [luas, setLuas] = useState(0);
  const [kelembapan, setKelembapan] = useState(0);
  const [jarak, setJarak] = useState(0);
  const [akses, setAkses] = useState(0);
  const [harga, setHarga] = useState(0);

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
      alternatif: alternatif,
      penilaian: [luas, kelembapan, jarak, akses, harga],
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
                <input
                  type="text"
                  value={alternatif}
                  onChange={(e) => setAlternatif(e.target.value)}
                  onFocus={(e) => e.target.select()}
                />
              </label>
              <label>
                Luas:
                <input
                  type="text"
                  value={luas}
                  onChange={(e) => setLuas(parseInt(e.target.value))}
                  onFocus={(e) => e.target.select()}
                />
              </label>
              <label>
                Kelembapan:
                <input
                  type="text"
                  value={kelembapan}
                  onChange={(e) => setKelembapan(parseInt(e.target.value))}
                  onFocus={(e) => e.target.select()}
                />
              </label>
              <label>
                Jarak Ke Toko:
                <input
                  type="text"
                  value={jarak}
                  onChange={(e) => setJarak(parseInt(e.target.value))}
                  onFocus={(e) => e.target.select()}
                />
              </label>
              <label>
                Akses Jalan:
                <input
                  type="text"
                  value={akses}
                  onChange={(e) => setAkses(parseInt(e.target.value))}
                  onFocus={(e) => e.target.select()}
                />
              </label>
              <label>
                Harga:
                <input
                  type="text"
                  value={harga}
                  onChange={(e) => setHarga(parseInt(e.target.value))}
                  onFocus={(e) => e.target.select()}
                />
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
