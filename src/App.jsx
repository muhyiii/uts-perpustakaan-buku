import React from "react";
import HeaderUtama from "./komponen lain/HeaderUtama";
import ListUtama from "./pages/listUtama";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TambahBuku from "./pages/post";
import UpdateBuku from "./pages/update";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-full bg-gray-200 w-screen px-96 overflow-x-hidden ">
        <Switch>
          <Route path="/home" exact>
            <HeaderUtama></HeaderUtama>
            <ListUtama></ListUtama>
          </Route>

          <Route path="/tambah-buku">
            <TambahBuku></TambahBuku>
          </Route>
          <Route path="/home/update-buku/:slug">
            <UpdateBuku></UpdateBuku>
          </Route>

          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
