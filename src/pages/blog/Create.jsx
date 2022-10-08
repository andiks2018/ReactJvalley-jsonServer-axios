import axios from "axios";
import React from "react";

export default function Create (){

    const handleSubmit = (e)=>{
        e.preventDefault()

        const title = e.target.title.value
        const slug = e.target.slug.value
        const body = e.target.body.value
        const banner = e.target.banner.value

        //validator
        if(!title || !slug || !body || !banner ){
            return alert ("silahkan lengkapi data blognya !")
        }

        //push data ke server be

        axios.post("http://localhost:3000/blogs", {title, slug, body, banner})
        .then((res)=>{
            alert("Banner berhasil ditambahkan ")
            window.location.href="/"
        })
        .catch((err)=>{
            alert("Terjadi keasalahan ")
            console.error(err)
        })
    }


    return (
        <div className="container">
            <section className="wrapper">
                <h1>Create Blog page</h1>
                <form action="" className="blog_form" onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label htmlFor="title">title</label>
                        <input type="text" id="title" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="slug">slug</label>
                        <input type="text" id="slug" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="banner">banner</label>
                        <input type="text" id="banner" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="body">body</label>
                        <textarea type="text" id="body"></textarea>
                    </div>

                    <button type="submit">submit</button>
                </form>
            </section>
        </div>
    )
}