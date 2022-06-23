import { useState, useEffect } from "react"

export const Glass = ({data, hanleChangeWaterStatus}) => {

    return (
        <li 
        className=
        {data.water?"glass": "glass_active"}
        onClick={() => hanleChangeWaterStatus(data.id)}
        >
        250ml</li>
    )
}