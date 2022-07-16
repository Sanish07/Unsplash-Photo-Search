import data from "../test/response.json"; //Static Clone of Unsplash API for Testing.
import { useEffect, useState } from "react";
import { fetchPhotos } from "../services/FetchPhotos";
import styled from "styled-components";
import ImageBody from "./ImageBody";

const PageBtn = styled.button`
  padding: 1vh 1vw;
  border-radius: 25px;
  background-color: #937dc2;
  border: 3px solid #f2d7d9;
  color: #f2d7d9;

  font-size: 1.05rem;
  cursor: pointer;
  margin: auto 0.5vw;
  transition: 500ms;
  &:hover {
    background-color: #f2d7d9;
    border: 3px solid #937dc2;
    color: #937dc2;
  }
`;

const Main = ({ keyword, requests }) => {
  const [userList, setList] = useState([]);
  const [pageNum, setPage] = useState(1);

  //API is called here.

  useEffect(()=>{
      fetchPhotos(keyword,pageNum).then(({data})=>setList(data)).catch((error)=>console.error(error));
  },[requests,pageNum]);

  //console.log(data.results); // Results Array for test json

  let total_pages = userList.total_pages; //Change here for switching to test
  let totalPages = [];
  for (let index = 1; index <= total_pages; index++) {
    totalPages[index - 1] = index;
  }

  //For API validation
  if (userList === []) {
    return <h2>Loading...</h2>;
  }

  return (
    <div id="content">
      <h2 align="center"> Search Results </h2>
      <h3 align="center">
        <em>Found total {userList.total} results.</em>
      </h3>
      <h4 align="center"> Page Number : {pageNum} </h4>

      <div className="img-area">
        {userList.results?.map((data, index) => (
          //Change here
          // let url = data.urls.raw;
          // return <img className="img-res" key={index} src={url} alt={index} />;
          <ImageBody imgData={data} key={index}/>
        ))}
      </div>
      <div className="btn-area">
        {totalPages.length < 5
          ? totalPages.map(
              (
                page,
                index //For results less than 5 pages.
              ) => <PageBtn key={index}> {page} </PageBtn>
            )
          : totalPages.slice(0, 4).map((page, index) => {
              
              if (index === 3) {
                return (
                  <span key={index}>
                    <PageBtn onClick={(eve) => setPage(index + 1)} key={index}>
                      {" "}
                      {page}
                    </PageBtn>
                    . . .
                    <PageBtn onClick={(eve) => setPage(total_pages)}>
                      {total_pages}
                    </PageBtn>{" "}
                    <input
                      id={"jump-page"}
                      min={1}
                      max={total_pages}
                      type={"number"}
                      placeholder={"Jump to.."}
                    />{" "}
                    <button
                    id="go-btn"
                      onClick={(e) => {
                        let pageJump =
                          document.querySelector("#jump-page").value;
                        if (pageJump && pageJump <= total_pages) {
                          setPage(pageJump);
                        } else {
                          window.alert(
                            "Page Number Value is either Null or Out of range."
                          );
                        }
                      }}
                    >
                       ➡
                    </button>{" "}
                  </span>
                );
              } else {
                return (
                  <PageBtn onClick={(eve) => setPage(index + 1)} key={index}>
                    {" "}
                    {page}{" "}
                  </PageBtn>
                );
              }
            })}
      </div>
    </div>
  );
};

export default Main;
