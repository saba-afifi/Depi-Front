import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function ContactUs(){
    const data=useContext(UserContext);
    return (
        <div>
            <p>{data.name}</p>
            <p>{data.age}</p>
            <p>{data.email}</p>

        </div>
    );
};