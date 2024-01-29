import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Deepkaur004')
    //         .then((res) => res.json())
    //         .then((userData) => {
    //             console.log(userData);
    //             setData(userData)
    //         })
    // }, [])
    return (
        <div className="text-center m-4 p-4 bg-gray-600 text-3xl text-white">
            Github Followes : {data.followers}
            <img src={data.avatar_url} alt="profile picture" className="mx-auto" width={300}/>
        </div>
    )
}

export default Github;

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Deepkaur004');

    return response.json();
}