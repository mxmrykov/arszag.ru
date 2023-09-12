import React, { useState } from "react";
import './scss/home.css'
import Helmet from "react-helmet";
import WOW from 'wowjs';
import phoneLogo from './img/88.png'
import okleyka from './img/4.png'
import avtomoika from './img/1.png'
import shinomontazh from './img/2.png'
import himchistka from './img/3.png'
import polirovka from './img/5.png'
import keramika from './img/6.png'
import shinidiski from './img/2.png'
export default function Home() {
    const API = 'https://api.telegram.org/';
    new WOW.WOW({
        live: false
    }).init();
    const bot_token = 'bot5340041427:AAHav4wf1XdySi2HV9prCIy-7oM-8ddFY9I';
    const send_message_comand = '/sendMessage?chat_id=-722126264&text=';
    function navigateHome() {
        window.location.href = '/';
    }
    function call() {
        window.location.href = 'tel: +7 (985) 177-10-10';
    }
    function goBookingTires() {
        window.location.href = 'https://wa.me/message/G36TIK4WVERPA1'
    }
    function goBooking() {
        window.location.href = 'whatsapp://send?phone=79851771010&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%21%20%0A%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%3A%0A%D0%A4%D0%98%D0%9E%3A%20%0A%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%3A%0A%D0%93%D0%BE%D1%81.%20%D0%9D%D0%BE%D0%BC%D0%B5%D1%80%3A%0A%D0%94%D0%B0%D1%82%D0%B0%20%D0%B8%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%3A%20';
    }
    return (
        <section className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ARSZAG DETAILING</title>
                <link rel="canonical" href="https://arszag.ru" />
                <link rel="shortcut icon" href="https://arszag.ru/fav.ico" />
                <meta name="description" content="ARSZAG DETAILING - профессиональный уход за вашим авто." />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
                <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
            </Helmet>
            <div className="top__logo" onClick={navigateHome}>
                <article className="article_t">ARSZAG</article>
                <article className="article_b">DETAILING</article>
            </div>
            <div className="call__block" data-wow-offset="50" data-wow-delay="0.5s" onClick={call}>
                <img className="phoneLogo" src={phoneLogo} alt="" />
                <h1 className="phoneText">+7 (985) 177-10-10</h1>
            </div>
            <div className="top__services_block">
                <div className="services__card card wow fadeInLeft" onClick={goBooking}>
                    <h1 className="cards_h1">Записаться</h1>
                </div>
                <div className="tires__card card wow fadeInRight" onClick={goBookingTires} >
                    <h1 className="cards_h1">Заказ шин</h1>
                </div>
                <div className="w-700 card wow fadeInLeft " onClick={() => { window.location.href = 'https://arszag.ru/osago/1' }} >
                    <h1 className="cards_h1">ОСАГО</h1>
                </div>
                <div className="gift__card card wow fadeInRight" onClick={() => { window.location.href = '/gift_certificate' }} >
                    <h1 className="cards_h1">Подарочный сертификат</h1>
                </div>
                <div className="preview_card card wow fadeInRight" onClick={() => { window.location.href = 'https://youtu.be/fcWrxd-VKLc' }} >
                </div>
            </div>
            <h1 className="bt">Наши услуги:</h1>
            <div className="navigation">
                <ul>
                    <li className="service__block wow fadeInDown pasting_home_block" onClick={() => {
                        window.location.href = '/price/washing'
                    }} >
                        <img className="service__logo" src={avtomoika} style={{ marginRight: '25px' }} />
                        <p style={{ margin: '0' }}>Детейлинг уход</p>
                    </li>
                    <li className="service__block wow fadeInDown" onClick={() => {
                        window.location.href = '/price/cleaning'
                    }}>
                        <img className="service__logo" src={himchistka} style={{ marginRight: '25px' }} />
                        <p style={{ margin: '0' }}>Химчистка</p>
                    </li>
                    <li className="service__block wow fadeInDown pasting_home_block" onClick={() => {
                        window.location.href = '/price/pasting'
                    }}>
                        <img className="service__logo" src={okleyka} style={{ marginRight: '25px' }} />
                        <p style={{ margin: '0' }}>Оклейка плёнкой</p>
                    </li>
                    <li className="service__block wow fadeInDown" onClick={() => {
                        window.location.href = '/price/polishing'
                    }}>
                        <img className="service__logo wow fadeInDown" src={polirovka} style={{ marginRight: '25px' }} />
                        <p style={{ margin: '0' }}>Полировка</p>
                    </li>
                    <li className="service__block wow fadeInDown" onClick={() => {
                        window.location.href = '/price/ceramics'
                    }}>
                        <img className="service__logo" src={keramika} style={{ marginRight: '25px' }} />
                        <p style={{ margin: '0' }}>Керамика</p>
                    </li>
                    <li className="service__block wow fadeInDown" onClick={() => {
                        window.location.href = '/tirechange/menu'
                    }}>
                        <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                        <p style={{ margin: '0' }}>Шиномонтаж</p>
                    </li>
                    <li className="service__block wow fadeInDown" onClick={() => {
                        window.location.href = '/tires_disks'
                    }}>
                        <img className="service__logo" src={shinidiski} style={{ marginRight: '25px' }} />
                        <p style={{ margin: '0' }}>Шины и диски</p>
                    </li>
                </ul>
            </div>
            <div className="top__services_block">
                <div className="services__card card bottom_price_card" onClick={() => {
                    window.location.href = '/price';
                }}>
                    <h1 className="cards_h1">Прайс-лист</h1>
                </div>
                <div className="tires__card card bottom_contacts_card" onClick={() => {
                    window.location.href = '/contacts';
                }}>
                    <h1 className="cards_h1">Контакты</h1>
                </div>
            </div>
        </section>
    );
}