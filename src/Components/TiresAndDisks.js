import React, {useState} from "react";
import './scss/price.css'
import {Helmet} from "react-helmet";
import shinomontazh from './img/2.png'
import {FaCaretDown} from "react-icons/fa";

export default function TiresAndDisks() {

    const [tiresSize, setTiresSized] = useState("R15-17")

    const prices = {
        "R15-17": [
            "25 000",
            "35 000",
            "35 000",
            "5 000"
        ],
        "R18-20": [
            "30 000",
            "40 000",
            "40 000",
            "6 000"
        ],
        "R21-22": [
            "35 000",
            "45 000",
            "45 000",
            "7 000"
        ],
        "R23": [
            "40 000",
            "50 000",
            "50 000",
            "8 000"
        ],
        "R24": [
            "40 000",
            "50 000",
            "50 000",
            "8 000"
        ],
        "R25-32": [
            "40 000",
            "50 000",
            "50 000",
            "8 000"
        ]
    }

    return (
        <section className="App">
            <Helmet>
                <meta charSet="utf-8"/>
                <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                <title>Шины и диски</title>
                <link rel="canonical" href="https://arszag.ru/price/washing"/>
                <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
                <meta name="description" content="Прайс-лист на услуги автомойки"/>
            </Helmet>
            <div className="top__logo" onClick={() => {
                window.location.href = '/'
            }}>
                <article className="article_t">ARSZAG</article>
                <article className="article_b">DETAILING</article>
            </div>
            <div className="back_to_menu_btn" onClick={() => {
                window.location.href = '/tirechange/menu'
            }}>
                <p className="back_to_menu_text">назад к меню</p>
            </div>
            <section className="pricelist_globalsection non_bottomed">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    className={"swa"}
                >
                    <h5
                        style={{margin: 0, marginTop: 10}}
                    >Выбор диаметра: </h5>
                    <div>
                        <select
                            className={"tirechange-select"}
                            onChange={e => {
                                setTiresSized(e.target.value)
                            }}
                            style={{margin: 0, marginTop: 10, marginLeft: 20}}
                        >
                            <option
                                value="R15-17">R15-17
                            </option>
                            <option
                                value="R18-20">R18-20
                            </option>
                            <option
                                value="R21-22">R21-22
                            </option>
                            <option
                                value="R23">R23
                            </option>
                            <option
                                value="R24">R24
                            </option>
                            <option
                                value="R25-32">R25-32
                            </option>
                        </select>
                        <FaCaretDown style={{position: "relative", left: -26, top: 2}} size={15} color={"white"}/>
                    </div>
                </div>
                <div className="chimchistka_table_price">
                    <h1
                        className="bt border__bottom_white"
                        style={{
                            marginTop: 10
                        }}
                    >Реставрация дисков</h1>
                </div>
                <table id="price-list-shin-table">
                    <thead>
                    <tr>
                        <td width="25%" rowSpan="2" style={{borderTop: 'unset', borderLeft: 'unset'}}>Услуга</td>
                        <td width="55%" rowSpan="2" style={{borderTop: 'unset', borderLeft: 'unset'}}
                            className="notachild">Описание
                        </td>
                        <td width="20%" colSpan="5" style={{borderTop: 'unset', borderRight: 'unset'}}>Цена
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>Покраска в один цвет<br/>(4 диска)</td>
                        <td>пескоструйная обработка диска, порошковая окраска диска в один цвет</td>
                        <td style={{borderRight: 'unset'}}>{prices[tiresSize][0]}</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>Покраска в два цвета<br/>(4 диска)</td>
                        <td>пескоструйная обработка диска, порошковая окраска диска в два цвета</td>
                        <td style={{borderRight: 'unset'}}>{prices[tiresSize][1]}</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>Покраска со шлифовкой<br/>(4 диска)</td>
                        <td>пескоструйная обработка диска, порошковая окраска диска в один цвет, алмазная проточка
                            лицевой части диска
                        </td>
                        <td style={{borderRight: 'unset'}}>{prices[tiresSize][2]}</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>Правка дисков</td>
                        <td>устранение осевого и радиального смещения диска</td>
                        <td style={{borderRight: 'unset'}}>{prices[tiresSize][3]}</td>
                    </tr>
                    </tbody>
                </table>
                <div className="chimchistka_table_price">
                    <h1 className="bt border__bottom_white">Изготовление кованых дисков по дизайну</h1>
                </div>
                <table id="price-list-shin-table" style={{width: "100%"}} className="tiresanddisks_second">
                    <thead>
                    <tr>
                        <td width="20%" rowSpan="2" style={{borderTop: 'unset', borderLeft: 'unset'}}>Диаметр, in</td>
                        <td width="20%" rowSpan="2" style={{borderTop: 'unset', borderLeft: 'unset'}}
                            className="notachild">Ширина, in
                        </td>
                        <td width="40%" colSpan="2" style={{borderTop: 'unset', borderRight: 'unset'}}>Стоимость</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>1 диск</td>
                        <td style={{borderRight: 'unset'}} className="notachild">4 диска</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>R18</td>
                        <td style={{paddingTop: 7, paddingBottom: 7}} className="notachild">8-11</td>
                        <td style={{textAlign: "center"}}>50<span style={{marginRight: 5}}></span>000</td>
                        <td style={{borderRight: 'unset'}}>200<span style={{marginRight: 5}}></span>000</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>R19</td>
                        <td style={{paddingTop: 7, paddingBottom: 7}} className="notachild">8-11</td>
                        <td style={{textAlign: "center"}}>57<span style={{marginRight: 5}}></span>000</td>
                        <td style={{borderRight: 'unset'}}>228<span style={{marginRight: 5}}></span>000</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>R20</td>
                        <td style={{paddingTop: 7, paddingBottom: 7}} className="notachild">8-12.5</td>
                        <td style={{textAlign: "center"}}>65<span style={{marginRight: 5}}></span>000</td>
                        <td style={{borderRight: 'unset'}}>260<span style={{marginRight: 5}}></span>000</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>R21</td>
                        <td style={{paddingTop: 7, paddingBottom: 7}} className="notachild">8.5-13</td>
                        <td style={{textAlign: "center"}}>72<span style={{marginRight: 5}}></span>500</td>
                        <td style={{borderRight: 'unset'}}>290<span style={{marginRight: 5}}></span>000</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>R22</td>
                        <td style={{paddingTop: 7, paddingBottom: 7}} className="notachild">8.5-12.5</td>
                        <td style={{textAlign: "center"}}>80<span style={{marginRight: 5}}></span>000</td>
                        <td style={{borderRight: 'unset'}}>320<span style={{marginRight: 5}}></span>000</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>R23</td>
                        <td style={{paddingTop: 7, paddingBottom: 7}} className="notachild">9.5-12.5</td>
                        <td style={{textAlign: "center"}}>115<span style={{marginRight: 5}}></span>000</td>
                        <td style={{borderRight: 'unset'}}>460<span style={{marginRight: 5}}></span>000</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset'}}>R24</td>
                        <td style={{paddingTop: 7, paddingBottom: 7}} className="notachild">9.5-12</td>
                        <td style={{textAlign: "center"}}>122<span style={{marginRight: 5}}></span>500</td>
                        <td style={{borderRight: 'unset'}}>490<span style={{marginRight: 5}}></span>000</td>
                    </tr>
                    </tbody>
                </table>
                <div className="chimchistka_table_price">
                    <h1 className="bt border__bottom_white">Доп. Опции</h1>
                </div>
                <table id="price-list-shin-table" style={{width: '100%'}}>
                    <thead>
                    <tr>
                        <td style={{
                            borderTop: 'unset',
                            borderLeft: 'unset',
                            paddingTop: 7,
                            paddingBottom: 7
                        }}>Услуга
                        </td>
                        <td style={{borderTop: 'unset', borderRight: 'unset'}} className="notachild">Стоимость</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>проточка (machined face)</td>
                        <td style={{borderRight: 'unset'}} className="notachild">5<span style={{marginRight: 5}}></span>500
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>Брашт</td>
                        <td style={{borderRight: 'unset'}} className="notachild">13<span
                            style={{marginRight: 5}}></span>000
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>Полоса по ободу</td>
                        <td style={{borderRight: 'unset'}} className="notachild">5<span style={{marginRight: 5}}></span>500
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>двойной цвет</td>
                        <td style={{borderRight: 'unset'}} className="notachild">6<span style={{marginRight: 5}}></span>500
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>плашка-табличка</td>
                        <td style={{borderRight: 'unset'}} className="notachild">5<span style={{marginRight: 5}}></span>500
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>гравировка на диске</td>
                        <td style={{borderRight: 'unset'}} className="notachild">3<span style={{marginRight: 5}}></span>500
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>выделение гравировки цветом
                        </td>
                        <td style={{borderRight: 'unset'}} className="notachild">2<span style={{marginRight: 5}}></span>500
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>дизайн с широкой полкой</td>
                        <td style={{borderRight: 'unset'}} className="notachild">6<span style={{marginRight: 5}}></span>500
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>декоративные болты</td>
                        <td style={{borderRight: 'unset'}} className="notachild">6<span style={{marginRight: 5}}></span>000
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>Покрытие полировочной части
                            диска тонирующим лаком
                        </td>
                        <td style={{borderRight: 'unset'}} className="notachild">3<span style={{marginRight: 5}}></span>500
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>крышка-спиннер</td>
                        <td style={{borderRight: 'unset'}} className="notachild">4<span style={{marginRight: 5}}></span>000
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>крышка-спиннер под Brushed
                        </td>
                        <td style={{borderRight: 'unset'}} className="notachild">12<span
                            style={{marginRight: 5}}></span>500
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="chimchistka_table_price">
                    <h1 className="bt border__bottom_white">Срок изготовления кованых дисков</h1>
                </div>
                <table id="price-list-shin-table" style={{width: '100%'}}>
                    <thead>
                    <tr>
                        <td width="30%"
                            style={{borderTop: 'unset', borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>Пакет
                        </td>
                        <td width="30%" style={{
                            borderTop: 'unset',
                            borderLeft: 'unset',
                            paddingTop: 7,
                            paddingBottom: 7,
                            textAlign: "center"
                        }} className="notachild">Срок
                        </td>
                        <td width="40%" style={{borderTop: 'unset', borderRight: 'unset'}}>Стоимость</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>Стандартный</td>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7, textAlign: "center"}}
                            className="notachild">4-6 недель
                        </td>
                        <td style={{borderRight: 'unset'}}>0</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>VIP пакет</td>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7, textAlign: "center"}}
                            className="notachild">14 дней
                        </td>
                        <td style={{borderRight: 'unset'}}>65<span style={{marginRight: 5}}></span>000</td>
                    </tr>
                    <tr>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7}}>super VIP пакет</td>
                        <td style={{borderLeft: 'unset', paddingTop: 7, paddingBottom: 7, textAlign: "center"}}
                            className="notachild">5 дней
                        </td>
                        <td style={{borderRight: 'unset'}}>135<span style={{marginRight: 5}}></span>000</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <div className="navigation mb_30vh">
                <ul>
                    <li className="service__block wow fadeInDown" onClick={() => {
                        window.location.href = '/price/tirechange'
                    }}>
                        <img className="service__logo" src={shinomontazh} style={{marginRight: '25px'}}/>
                        <p style={{margin: '0'}} className="bt">Прайс-лист</p>
                    </li>
                    <li className="service__block wow fadeInDown" onClick={() => {
                        window.location.href = '/tirechange/safe_tirechange'
                    }}>
                        <img className="service__logo" src={shinomontazh} style={{marginRight: '25px'}}/>
                        <p style={{margin: '0'}} className="bt">Безопасный<br/>шиномонтаж</p>
                    </li>
                    <li className="service__block wow fadeInDown" onClick={() => {
                        window.location.href = '/tirechange/vibrocontrol'
                    }}>
                        <img className="service__logo" src={shinomontazh} style={{marginRight: '25px'}}/>
                        <p style={{margin: '0'}} className="bt">Балансировка<br/>и виброконтроль</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}