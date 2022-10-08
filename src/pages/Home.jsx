import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  //state
  const [blogData, setBlogData] = useState([]);

  //did mount
  useEffect(() => {
    //hit ke api json server
    axios
      .get("http://localhost:3000/blogs")
      .then((res) => {
        console.info(res.data);
        setBlogData(res.data); //store data res.data
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container">
      <section className="wrapper">
        <div className="blog_wrapper">
          <h1>Home Page</h1>
          {blogData.map((item) => {
            return (
              <div className="blog_card" key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.banner} alt={item.title} />
                <p>
                    {item.body}
                </p>
                <Link to={`/blog/detail/${item.id}/${item.slug}`}>Detail</Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
