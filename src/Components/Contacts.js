import React from "react";
import Helmet from "react-helmet";
import './scss/contacts.css'
import Iframe from "react-iframe";
import instIcon from './img/inst.png'
import whatsAppIcon from './img/whatsapp.png'
class Contacts extends React.Component {
    navigateHome() {
        window.location.href = '/';
    }
    call() {
        window.location.href = 'tel: +7 (985) 177-10-10';
    }
    GoWhatsApp() {
        window.open('whatsapp://send?phone=79851771010');
    }
    goInst() {
        window.open('https://www.instagram.com/arszag_detailing/');
    }
    render() {
        return (
            <section className="App">
                <Helmet>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <meta charSet="utf-8" />
                    <title>Контакты</title>
                    <link rel="canonical" href="https://arszag.ru/contacts" />
                    <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
                </Helmet>
                <div className="top__logo" onClick={this.navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <h1 className="bt">Контакты</h1>
                <section className="our__location">
                    <div className="iframe__main">
                        <Iframe
                            url="https://yandex.ru/map-widget/v1/?um=constructor%3A0f8f021ab3211c48b2db8a8da5f733bd4d2d7e89bdedcbe92cdbec9b3614ec98&amp;source=constructor"
                            width="550px"
                            height="550px"
                            frameBorder={0}
                            className="iframe"
                        />
                    </div>
                    <div className="contacts__text">
                        <p className="mt" style={{ textAlign: 'justify' }}>Наш полный адрес:<br /> Россия, Москва, улица Лобачевского, 120к1</p>
                        <p className="mt" style={{ textAlign: 'justify' }}>Часы работы: <br /> 11:00 - 23:00</p>
                        <p className="mt" style={{ textAlign: 'justify' }}>Телефон: <br /> <span onClick={this.call} style={{ textDecoration: 'underline', cursor: 'pointer' }} className="phone">+7 (985) 177-10-10</span></p>
                        <p className="mt" style={{ textAlign: 'justify' }}>Социальные сети: <br /><img onClick={this.goInst} title="Instagram: @arszag_detailing" className="animated__top" style={{width: '40px', marginTop: '10px'}} src={instIcon}/><img title="WhatsApp: +7 (985) 177-10-10" onClick={this.GoWhatsApp} className="animated__top" style={{width: '40px', marginTop: '10px', marginLeft: '10px'}} src={whatsAppIcon}/></p>
                    </div>
                </section>
            </section>
        );
    }
}
export default Contacts;