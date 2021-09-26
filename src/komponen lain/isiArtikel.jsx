import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";import swal from "sweetalert";


export default function IsiArtikel(props) {
  const deleteHandle = async (id) =>{
    const url = `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=1912`;
    
    try {
      await axios.delete(url);
      
      props.getArtikels()
    } catch (error) {
      
    }
  }
  return (
    <React.Fragment>
      <div className="border grid grid-cols-6 my-3 h-64 p-4 gap-x-4 bg-gray-200 rounded-md overflow-y-auto ">
        <div className=" h-44 col-span-2 rounded-md">
          <img src={props.gambar} alt="" className=" h-44 rounded-lg" />
        </div>
        <div className="col-start-3 col-end-6">
          <h1 className="text-3xl">{props.judul}</h1>
          <h3 className="text-lg text-gray-400">{props.penulis}</h3>
          <h3>{props.penerbit}</h3>
          <h4>
            Tahun {props.tahunTerbit}-{props.ketebalan} Halaman
          </h4>
          <p>{props.id}</p>
          <div className='space-x-2 mt-6'>
            <Link to={`/home/update-buku/${props.id}`} className="px-4 py-1 mt-4 bg-blue-400 text-white rounded-xl">
              Update
            </Link>
            <button onClick={()=>{
          swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              deleteHandle(props.id)
              ;
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        }} className="px-4 py-1 mt-4 bg-red-300 text-white  rounded-xl">
          
          Delete
        </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
