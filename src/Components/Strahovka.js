import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
export default function Strahovka() {
    let ap = {
        '1': '44ffc339-e669-4812-92ec-b5a63bbb2d33',
        '2': '79b4130b-10e3-4be8-ad5f-00dcc92052c9',
        '3': 'c3b4172c-7bd7-4705-907a-3ab7a6a24521',
        '4': '6f18441b-793f-4069-bb60-f4060bd41a7c',
        '5': '070e7f97-2f46-41b0-bb4e-36731478d91e',
        '6': '1d89c5b1-93ac-4971-8a60-865acf6b64f9',
        '7': '26dae9b6-8ef4-47a5-af16-aef0f05a47d5',
        '8': 'e11ce88d-75e1-4bf3-ba9d-a04e2c9613a7',
        '9': '7490f10e-086e-44a1-b6a9-c7377014d83c',
        '10': 'fbdee3b1-ccfc-42d5-9e0a-f773bc3b6c22',
    }
    const { id } = useParams();
    const [api, setApi] = useState()
    const [preload, setPreload] = useState(false)
    if (!preload) {
    setApi('https://b2c.pampadu.ru/index.html#' + ap[id])
        setPreload(true)
    }
    if (id < 1 || id > 10) return <h1>Incorect seller ID</h1>
    else {
    return (
        <div className="App" style={{ height: '100vh', paddingTop: 120, background: 'white'}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ARSZAG DETAILING</title>
                <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
                <script src="https://b2c.pampadu.ru/ppdw.js"></script>
                <link rel="canonical" href="https://arszag.ru" />
                <link rel="shortcut icon" href="https://arszag.ru/fav.ico" />
                <meta name="description" content="ARSZAG DETAILING - профессиональный уход за вашим авто." />

            </Helmet>
            <div>
            <iframe src={api} style={{width: '100%', border: 'none', height: 650, minWidth: 320, overflow: "hidden"}} id='ppdwi' scrolling='no'></iframe>
            </div>
        </div>
    )
    }
}