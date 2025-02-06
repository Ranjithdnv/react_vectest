import React, { useEffect, useState } from "react";
import data from "../data/data.js";
import Box from "./box/box.jsx";
import "./home.css";
const homepage = () => {
  const [query, setQuery] = useState("");
  const [querys, setQuerys] = useState("");
  const [filtered, setfiltered] = useState([]);
  const books = [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Catcher in the Rye",
    "Moby Dick",
    "The Hobbit",
    "War and Peace",
    "Ulysses",
    "Crime and Punishment",
  ];
  const places = [...new Set(data.map((item) => item.place))];
  const shirts = [...new Set(data.map((item) => item.shirt))];
  const pants = [...new Set(data.map((item) => item.pant))];
  const shots = [...new Set(data.map((item) => item.shot))];
  const shopNames = [...new Set(data.map((item) => item.shopname))];
  const [subdetail, setsubdetail] = useState([]);
  console.log(data);

  console.log(query);

  useEffect(() => {
    console.log(data);
  }, [query]);

  useEffect(() => {
    const categoryMap = {
      shirt: shirts,
      place: places,
      pant: pants,
      shot: shots,
      tshirt: shirts,
      shopname: shopNames,
    };

    setsubdetail(categoryMap[query] || []);
  }, [query]);

  //  setsubdetail(querys);
  return (
    <div className=" h-[100vh] text-black ">
      <div className=" grid-cols-2"></div>
      <div className="flex  justify-between gap-2">
        <div>
          <input
            type="text"
            list="book-list"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded"
            placeholder="Search category"
          />
          {/* <datalist id="book-list">
        {data.map((book, index) => (
          <option key={index} value={book} />
        ))}
      </datalist> */}

          <datalist id="book-list">
            {Object.keys(data[0] || {}).map((key, index) => (
              <option key={index} value={key} />
            ))}
          </datalist>
        </div>
        <div>
          <input
            type="text"
            list="book-list2"
            value={querys}
            onChange={(e) => setQuerys(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded"
            placeholder="Search "
          />
          <datalist id="book-list2">
            {(subdetail && subdetail.length > 0 ? subdetail : data).map(
              (book, index) => (
                <option key={index} value={book} />
              )
            )}
          </datalist>
        </div>
      </div>
      .....
      <div>
        <Box
          books={books}
          query={query}
          querys={querys}
          subdetail={subdetail}
        />
      </div>
    </div>
  );
};

export default homepage;
