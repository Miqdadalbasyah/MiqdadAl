import {useState} from "react";
import Header from "./Header";

export default function Card({ imgSrc, title, author, desc}) {
    const [show, setShow] = useState(false);
    return (
        <div className=" bg-gray-300 flex flex-col justify-center items-center shadow-2xl rounded-2xl gap-4 hover:rotate-2 transition-transform duration-300 cursor-pointer" >
            <img className="size-70 rounded-t-2xl" src={imgSrc} alt="public" />

            <div className="flex flex-col gap-2 px-4 py-2">
                <Header text={title}/>

                <span>{author}</span>

                <p className={`max-w-[25ch] ${show ? "" : "truncate"}`}>{desc}</p>

                <button onClick={() => setShow((prev) => !prev)}>{show ? "Hide Details" : "Show Details"}</button>
            </div>
        </div>
    );
}