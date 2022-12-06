import "./App.css";
import { getData, topsis, insertData, deleteData, loginUser } from "./api";
import { useEffect, useState, useRef } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(
    window.sessionStorage.getItem("isLogin") === "true"
      ? window.sessionStorage.getItem("isLogin")
      : false
  );
  const [isTopsis, setIsTopsis] = useState(false);
  const alternatif = useRef();
  const luas = useRef();
  const kelembapan = useRef();
  const jarak = useRef();
  const akses = useRef();
  const harga = useRef();
  const username = useRef();
  const password = useRef();

  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);

  const hapus = async (index) => {
    const id = data[index]._id;
    const hasil = await deleteData(id);
    window.location.reload(false);
  };

  const DataTable = () => {
    return data.map((gudang, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{gudang.alternatif}</td>
          <td>{gudang.penilaian[0]}</td>
          <td>{gudang.penilaian[1]}</td>
          <td>{gudang.penilaian[2]}</td>
          <td>{gudang.penilaian[3]}</td>
          <td>{gudang.penilaian[4]}</td>
          <td>
            <button className="btn-del" onClick={() => hapus(i)}>
              delete
            </button>
          </td>
        </tr>
      );
    });
  };

  const topsis_result = async () => {
    const hasil = await topsis();
    setIsTopsis(true);
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

  const userlogin = async (event) => {
    event.preventDefault();
    const cobaLogin = await loginUser(
      username.current.value,
      password.current.value
    );
    // if (cobaLogin.data.success) {
    //   window.sessionStorage.setItem("isLogin", "heh");
    //   // window.location.reload(false);
    // } else if (!cobaLogin.data.success) {
    //   window.sessionStorage.setItem("isLogin", cobaLogin.data.success);
    // }
    // console.log(username.current.value);
    // console.log(password.current.value);
    // console.log(cobaLogin);
  };

  const Judul = () => {
    if (isTopsis) {
      return <th>Rank</th>;
    }
    return <th>No</th>;
  };

  const Asli = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TOPSIS MENCARI GUDANG TERBAIK</h1>
          <div className="Table-Container">
            <table className="Table-Mantap">
              <thead>
                <tr>
                  <Judul />
                  <th>Alternative</th>
                  <th>Luas</th>
                  <th>Kelembapan</th>
                  <th>Jarak Ke Toko</th>
                  <th>Akses Jalan</th>
                  <th>Harga</th>
                  <th>Delete</th>
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

  const Login = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Login</h1>
          <div className="Form-Container">
            <div className="Insert-Form">
              <form onSubmit={userlogin} className="Form-Data">
                <label>
                  Username:
                  <input type="text" ref={username} />
                </label>
                <label>
                  Password:
                  <input type="text" ref={password} />
                </label>
                <button type="submit" className="Topsis-Btn">
                  Login
                </button>
              </form>
            </div>
          </div>
        </header>
      </div>
    );
  };

  if (isLogin) {
    return <Asli />;
  } else {
    return <Login />;
  }
};

export default App;
