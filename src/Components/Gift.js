import React from "react";
import gift_1 from './img/gift_1.jpeg'
import gift_2 from './img/gift_2.jpeg'
import gift_3 from './img/gift_3.jpeg'
import gift_4 from './img/gift_c.jpeg'
import { Helmet } from "react-helmet";
export default function Gift() {
    function navigateHome() {
        window.location.href = '/';
    }
    return (
        <div className="App">
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
            <div className="window_main_">
                <div>
                    <h1>Подарочный сертификат</h1>
                </div>
                <div style={{ width: 500, maxWidth: '95%', textAlign: "justify", margin: '25px auto' }}>
                    <h4>Подарочный сертификат на детейлинг процедуры в ARSZAG Detailing - будет лучшим подарком на любом празднике для автомобилиста! Сотни людей уже по достоинству оценили такой подарок!
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: '95%' }}>
                            <img src={gift_4} width="200" style={{ borderRadius: 10, marginTop: 10, marginBottom: 10, maxWidth: '45%' }} />
                            <img src={gift_3} width="200" style={{ borderRadius: 10, marginTop: 10, marginBottom: 10, maxWidth: '45%' }} />
                        </div>
                        Подарочный сертификат можно приобрести на любую сумму от 5000₽. Можете лично забрать его у нас в студии, либо мы организуем доставку курьером к вам в любую точку Москвы. (Доставка платная).
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: '95%' }}>
                            <img src={gift_2} width="200" style={{ borderRadius: 10, marginTop: 10, marginBottom: 10, maxWidth: '45%' }} />
                            <img src={gift_1} width="200" style={{ borderRadius: 10, marginTop: 10, marginBottom: 10, maxWidth: '45%' }} />
                        </div>
                        Также, помимо бумажного сертификата, у нас доступен онлайн сертификат с индивидуальным дизайном. Мы запрашиваем у вас исходные данные по авто, а также можем написать поздравление в текстовом виде! Его можно распечатать в любой ближайшей типографии или просто отправить в мессенджере.
                    </h4>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <button className="button_m" onClick={() => { window.location.href = 'https://wa.me/79851771010?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%B8%D0%BE%D0%B1%D1%80%D0%B5%D1%81%D1%82%D0%B8%20%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82!' }}>
                            Заказать подарочный сертификат
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}