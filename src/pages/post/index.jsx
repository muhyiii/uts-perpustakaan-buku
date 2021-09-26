import axios from "axios";
import React from "react";
import { useHistory, Link } from "react-router-dom";
import swal from "sweetalert";

export default function TambahBuku() {
  const [imagePreview, setImagePreview] = React.useState("");
  const [disableSubmit, setDisableSubmit] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    kode_penulis: 1912,
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
    cover: "",
  });
  const [error, setError] = React.useState({
    kode_penulis: 1912,
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
    cover: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
    if (key === "judul_buku")
      if (value === "") {
        error.judul_buku = "Judul Buku Tidak Boleh Kosong";
      } else {
        error.judul_buku = "";
      }
    // if (key === "artikel")
    //   if (value === "") {
    //     error.artikel = "Artikel Tidak Boleh Kosong";
    //     // } else if(value.replace(/\s/g, "").length < 10 || value.replace(/\s/g, "").length > 10){
    //   } else if (value.replace(/\s/g, "").length < 10) {
    //     error.artikel = "Isi Artikel terlalu Sedikit";
    //   } else {
    //     error.artikel = "";
    //   }
    if (key === "sinopsis") {
      let i = 0
      if (value === "") {
        error.sinopsis = "Sinopsis Tidak Boleh Kosong";
      }else if(value.split(" ").length < 30){
      
        error.sinopsis = "Jumlah Kata Minimal 30 Kata"
      } else {
        error.sinopsis = "";
      }
    }
    if (key === "nama_pengarang") {
      if (value === "") {
        error.nama_pengarang = "Nama Pengarang Tidak Boleh Kosong";
      } else {
        error.nama_pengarang = "";
      }
    }
    if (key === "nama_penerbit_buku") {
      if (value === "") {
        error.nama_penerbit_buku = "Nama Penerbit Wajib Diisi";
      } else {
        error.nama_penerbit_buku = "";
      }
    }
    if (key === "tahun_terbit_buku") {
      if (value === "") {
        error.tahun_terbit_buku = "Tahun Terbit Wajib Diisi";
      } else if (!value.match(/^[0-9]+$/)) {
        error.tahun_terbit_buku = "Harap Masukan Tahun Dengan Angka, Bukan Huruf";
      }else {
        error.tahun_terbit_buku = "";
      }
    }
    if (key === "nama_pengarang") {
      if (value === "") {
        error.nama_pengarang = "Nama Pengarang Tidak Boleh Kosong";
      } else {
        error.nama_pengarang = "";
      }
    }
    if (key === "ketebalan_buku") {
      if (value === "") {
        error.ketebalan_buku = "Masukan Jumlah Ketebalan Buku";
      } else if (!value.match(/^[0-9]+$/)) {
        error.ketebalan_buku = "Harap Masukan Angka, Bukan Huruf";
      } else {
        error.ketebalan_buku = "";
      }
    }
    disableSubmitHandle();
  };
  const disableSubmitHandle = () => {
    if (
      error.judul_buku === "" &&
      error.nama_pengarang === "" &&
      error.nama_penerbit_buku === "" &&
      error.ketebalan_buku === "" &&
      error.tahun_terbit_buku === "" &&
      error.sinopsis === "" &&
      error.cover === ""
    ) {
      return setDisableSubmit(false);
    } else {
      return setDisableSubmit(true);
    }
  };
  const handelUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();

    setValues((values) => ({
      ...values,
      cover: e.target.files[0],
    }));
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  console.log(values);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api-react-2.herokuapp.com/api/perpustakaan`;
    const formData = new FormData();
    formData.append("kode_penulis", values.kode_penulis);
    formData.append("judul_buku", values.judul_buku);
    formData.append("nama_pengarang", values.nama_pengarang);
    formData.append("nama_penerbit_buku", values.nama_penerbit_buku);
    formData.append("ketebalan_buku", values.ketebalan_buku);
    formData.append("sinopsis", values.sinopsis);
    formData.append("tahun_terbit_buku", values.tahun_terbit_buku);
    formData.append("cover", values.cover);
    setIsLoading(true);
    try {
      let result = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data ",
        },
      });
      console.log(result);
      setIsLoading(false);
      swal("Behasil!", "Buku Telah Di Tambah!", "success");
      history.push("/home");
    } catch (error) {
      console.log("error");
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="h-full bg-yellow-100 overflow-y-auto ">
        <div className="h-20 bg-blue-500 px-5 flex items-center">
          <div className="  grid items-center">
            <Link to={"/home"}>
              <svg
                className="w-7     h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
            <h1 className="text-3xl font-bold text-center text-white col-start-5 col-end-11 ml-48   ">
              Tambah Buku
            </h1>
          </div>
        </div>
        
        <div className="px-5 my-6">
          <form onSubmit={handleSubmit} action="">
            <input
              type="text"
              className="p-3 rounded-lg w-full my-2"
              placeholder="Judul Buku"
              id="judul_buku"
              name="judul_buku"
              onChange={handleChange}
              onBlur={handleChange}
            />
            <p className="text-red-400">{error.judul_buku}</p>
            <input
              type="file"
              className="p-3 rounded-lg w-full my-2"
              placeholder="Cover Buku"
              id="cover"
              name="cover"
              onChange={handelUpload}
            />
            <p className="text-red-400">{error.cover}</p>
            <div>
              <img className="h-48" src={imagePreview} alt="" />
            </div>
            <textarea
              type="text"
              className="p-3 rounded-lg w-full my-2"
              placeholder="Sinopsis Buku"
              id="sinopsis"
              name="sinopsis"
              onChange={handleChange}
              onBlur={handleChange}
            />
            <p className="text-red-400">{error.sinopsis}</p>
            <input
              type="text"
              className="p-3 rounded-lg w-full my-2"
              placeholder="Nama Penulis"
              id="nama_pengarang"
              name="nama_pengarang"
              onChange={handleChange}
              onBlur={handleChange}
            />
            <p className="text-red-400">{error.nama_pengarang}</p>
            <input
              type="text"
              className="p-3 rounded-lg w-full my-2"
              placeholder="Penerbit"
              id="nama_penerbit_buku"
              name="nama_penerbit_buku"
              onChange={handleChange}
              onBlur={handleChange}
            />
            <p className="text-red-400">{error.nama_penerbit_buku}</p>
            <input
              type="text"
              className="p-3 rounded-lg w-full my-2"
              placeholder="Tahun Di Terbitkan"
              id="tahun_terbit_buku"
              name="tahun_terbit_buku"
              onBlur={handleChange}
              onChange={handleChange}
            />
            <p className="text-red-400">{error.tahun_terbit_buku}</p>
            <input
              type="text"
              className="p-3 rounded-lg w-full my-2"
              placeholder="Banyak Halaman"
              id="ketebalan_buku"
              name="ketebalan_buku"
              onBlur={handleChange}
              onChange={handleChange}
            />
            <p className="text-red-400">{error.ketebalan_buku}</p>
            <div className="py-3">
              <button
                disabled={disableSubmit}
                type="submit"
                className={`${
                  disableSubmit ? "bg-red-600" : "bg-blue-500"
                } h-10  p-6 w-full flex items-center justify-center mt-20 mb-3 text-3xl text-white rounded-xl`}
              >
                {isLoading ? "Mengupload..." : "Upload"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
