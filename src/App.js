import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Components/search";
import Image from "./Components/Image";
import Pagination from "./Components/Pagination";
import React from "react";

function App() {
  const [Data, setData] = useState("");
  const [text ,setText] = useState("")

  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = 5;

  const FetchImage = async (data) => {
    console.log(data)
    let token = "gHd5zbIGRozbuDAY1SK7q2oVBSkiMA5ThID1ZqyWoTk";
    let url = `https://api.unsplash.com/photos?page=2`;
   
    if (data) {
      url = `https://api.unsplash.com/search/photos?query=${text}&page=${currentPage}`;
    }
    const response = await axios.get(url, {
      headers: {
        Authorization: `Client-ID ${token}`,
      },
    });
    setData(response.data);
    console.log(response);
    if (text) {
      setData(response.data.results);
    }
  };
  console.log(Data);

  const handlePageChange =(page)=> {
    setCurrentPage(page);
    let data =({text:text,page:page})
    FetchImage(data)
  }

  useEffect(() => {
    FetchImage();
  }, []);

  return (
    <div>
      <Search setText={setText} FetchImage={FetchImage} text={text} />
      {Data ? <Image item={Data} /> : ""}
      <Pagination  currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages}/>
    </div>
  );
}

export default App;
