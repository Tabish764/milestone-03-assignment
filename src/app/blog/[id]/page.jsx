"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState([
    {
      comments: "",
    },
  ]);

  const fetchApi = async () => {
    try {
      setError("");
      setLoading(true);

      const res = await fetch(`/api/blogs/${id}`, {
        cache: "no-cache",
      });
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }

      const response = await res.json();
      const filter = response.res.filter((item) => String(item.id) === id);
      setData(filter);
    } catch (error) {
      setError("not found maybe stop messing with the url :(");
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [id]);

  const handleInput = (e) => {
    if (!comments) {
      return;
    }
    let { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    if (!newComment.comments) {
      return;
    }
    setComments((prev) => [...prev, newComment]);
    setNewComment({ comments: "" });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 mt-5">
      {error && <h1 className="text-red-500 mt-5">{error}</h1>}
      {loading && <h1>Loading...</h1>}
      {data &&
        data.map((blog) => (
          <div className="" key={blog.id}>
            <h1 className="text-4xl font-bold text-center mt-5">
              {blog.title}
            </h1>
            <div className="justify-center  flex mt-5 mb-5 items-center ">
              <Image
                alt=""
                width={500}
                height={500}
                src={blog.imageUrl}
              ></Image>
            </div>
            <p className=" text-[19px]">{blog.description}</p>
            <div className="">
              <h1 className="text-2xl mt-5">Comments</h1>

              <div className="mt-5 flex flex-col">
                <div className="flex items-center flex-col py-4 rounded-md px-2">
                  <input
                    className="rounded-md lg:w-1/2 w-full py-3 px-2 text-black "
                    name="comments"
                    type="text"
                    placeholder="Write a comment"
                    value={newComment.comments}
                    onChange={handleInput}
                  />
                  <button
                    className="bg-green-500 py-2 px-4 rounded-md mt-4 lg:w-1/2 w-full items-center"
                    onClick={handleClick}
                  >
                    Add Comment
                  </button>
                  <div></div>
                </div>
                {comments.length > 0 &&
                  comments.map((comment, index) => (
                    <div
                      key={index}
                      className="mt-5 rounded-md py-2 px-1 bg-[#1c1c1c]"
                    >
                      <p>Anonmyous said: {comment.comments}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
