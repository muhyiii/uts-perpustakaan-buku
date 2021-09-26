import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import IsiArtikel from "../../komponen lain/isiArtikel";
import Loading from "../../komponen lain/loading";

export default function ListUtama() {
  const [details, setDetails] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const getArtikels = async () => {
    setIsLoading(true);
    const url = `https://api-react-2.herokuapp.com/api/perpustakaan?kode=1912`;
    try {
      let response = await axios.get(url);
      console.log(response.data.data.data);
      setDetails(response.data.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error");
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    getArtikels();
  }, []);
  return (
    <React.Fragment>
      <div className=" bg-gray-400 px-4">
        <h1 className="text-3xl font-bold">List Buku</h1>

        <div className="">
          {isLoading ? (
            <React.Fragment>
              <Loading></Loading>
            </React.Fragment>
          ) : (
            details.map((isi, index) => (
              <IsiArtikel
                id={isi.id}
                kode={isi.kode_penulis}
                judul={isi.judul_buku}
                gambar={isi.cover}
                sinopsis={isi.sinopsis}
                penulis={isi.nama_pengarang}
                penerbit={isi.nama_penerbit_buku}
                tahunTerbit={isi.tahun_terbit_buku}
                ketebalan={isi.ketebalan_buku}
                getArtikels={getArtikels}
              ></IsiArtikel>
            ))
          )}
        </div>
        <div className="py-14">
          <Link
            to={`/tambah-buku`}
            className="bg-blue-500 h-10 px-4 flex p items-center rounded-lg justify-center"
          >
            <h1 className="text-white font-bold text-2xl">Tambah Buku</h1>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
