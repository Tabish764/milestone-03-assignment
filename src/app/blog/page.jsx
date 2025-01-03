'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import rtx from "../../../public/4090.jpg";
import Link from "next/link";

const page =  () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState()
  const [error,setError] = useState()
  
  const fetchApi = async()=>{
    try {
      setError("")
      setLoading(true)
      const res = await fetch("/api/blogs", {
        cache: "no-cache",
      });
      const response = await res.json();
      setData(response.res);
    } catch (error) {
      setError("error fetching data")
      console.log("error",error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchApi()
  },[])

  return (
    <div className="flex flex-wrap mt-[80px] justify-center gap-8 max-w-7xl mx-auto p-4">
      {error && <h1>{error}</h1>}
      {loading && <h1>loading...</h1>}
      {data &&
        data.map((blog) => (
          <div key={blog.id} className="card  flex flex-col">
            <div className="flex justify-center rounded-md items-center">
              <Image
                className="rounded-sm "
                width={200}
                height={200}
                alt=""
                src={blog.imageUrl}
              ></Image>
            </div>
            <h2 className="text-[16px] mt-3 mb-5 text-center font-bold">
              {blog.title}
            </h2>
            <p className="mt-auto mb-3 text-center text-[14px]">
              {" "}
              {blog.description.length > 100
                ? `${blog.description.slice(0, 80)}...`
                : blog.description}
            </p>
            <div className="flex flex-col justify-center items-center mt-auto ">
              <Link href={`/blog/${blog.id}`}>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
