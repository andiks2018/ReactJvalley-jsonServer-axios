import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail (){

    //Menangkap parameter id dari url
    const {id}= useParams()

    //state
    const [detailBlog, setDetailBlog]=useState()

    //comp did mount
    useEffect(()=>{
        axios.get(`http://localhost:3000/blogs/${id}`)
        .then((res)=>{
            console.info(res.data)
            setDetailBlog(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })
    }, [])

    //jika data belum keload untuk menghilangkan error
    if (!detailBlog){
        return(
            <div className="loading_screen">
                Loading...
            </div>
        )
    }
    return (
        <div className="container">
            <section className="wrapper">
                <h1>{detailBlog.title}</h1>
                <img src={detailBlog.banner} alt={detailBlog.title} />
                <p>
                    {detailBlog.body}
                </p>
            </section>
        </div>
    )
}