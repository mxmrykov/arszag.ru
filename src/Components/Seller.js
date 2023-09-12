import React from "react";
import Helmet from "react-helmet";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Seller() {
    const { id, hash } = useParams();
    if (id == 'main' && hash == '2274d02098cc91a8c09e78fda15988a19d056bf4aebd63b2273a10e5c2bf695f') {
    return (
        <div className="App" style={{background: 'white', height: '100vh'}}>
            <Helmet>
                <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
            </Helmet>
            <iframe src="https://agents.pampadu.ru/?1669880630903#/app/webtools/stats" style={{borderRadius: 10,border: '1px solid black',width: 1000 ,minHeight: '70vh' ,maxWidth: '95%' , marginTop: 100}}/>
        </div>
    )
    }
    else if (id == 'main' && hash != '2274d02098cc91a8c09e78fda15988a19d056bf4aebd63b2273a10e5c2bf695f') return <div><h1>Wrong hash value</h1></div>
    else return (
        <div className="App" style={{background: 'white'}}>
                        <Helmet>
                <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
            </Helmet>
            <iframe src='https://agents.pampadu.ru/?1669880630903#/app/webtools/stats.mb-1 .br-4 .block-shadow .border-highlightable .double .b-electric .d-flex .v-card .v-sheet .theme--light'/></div>
    )
}