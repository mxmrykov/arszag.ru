import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import keramika from './img/6.png'
import './scss/price.css'
import Helmet from "react-helmet";
import shinomontazh from './img/2.png'
import Tirechange from "./Tirechange";
// class PriceType extends React.Component {
// navigateHome() {
//     window.location.href = '/';
// }

// render() {
const PriceType = () => {

    const { type } = useParams();
    function navigateHome() {
        window.location.href = '/';
    }
    if (type == decodeURIComponent('%D0%B4%D0%B5%D1%82%D0%B5%D0%B9%D0%BB%D0%B8%D0%BD%D0%B3')) {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <title>Прайс-лист</title>
                    <link rel="canonical" href="https://arszag.ru/price/detailing" />
                    <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
                    <meta name="description" content="Прайс-лист на услуги детейлинга" />
                </Helmet>
                <div className="top__logo" onClick={navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <section className="pricelist_globalsection">
                    <div className="detailing-table-price">
                        <h1 id="price-list-detailing" className="bt border__bottom_white">Детейлинг</h1>
                        <table id="price-list-detailing-table">
                            <thead>
                                <tr>
                                    <td style={{ borderLeft: 'unset', borderTop: 'unset' }}>Услуга</td>
                                    <td style={{ borderTop: 'unset' }} className="not-a-child">Описание</td>
                                    <td style={{ borderRight: 'unset', borderTop: 'unset' }}>Цена</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>тонировка задней полусферы</td>
                                    <td rowSpan="3">оклейка окон<div>металлизированной тонирующей пленкой<br></br>
                                        <div>(5,15,20,30,35,50%)<br></br> </div></div></td>
                                    <td style={{ borderRight: 'unset' }}>12000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>тонировка боковых окон</td>
                                    <td style={{ borderRight: 'unset' }}>7000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>тонировка лобового стекла</td>
                                    <td style={{ borderRight: 'unset' }}>6000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антидождь на все остекление и панорамную крышу</td>
                                    <td>нанесение долговечного гидрофобного покрытия на все остекление и панорамную крышу</td>
                                    <td style={{ borderRight: 'unset' }}>10000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>защита фар или фонарей</td>
                                    <td>легкая полировка и оклейка фар в защитную полиуретановую прозрачную пленку</td>
                                    <td style={{ borderRight: 'unset' }}>10000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>тонировка фар или фонарей</td>
                                    <td>легкая полировка и оклейка фар в защитную полиуретановую тонирующую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>12000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антихром молдингов рамки остекления</td>
                                    <td>оклейка хромированной рамки остекления в черную виниловую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>20000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антихром ручек дверей</td>
                                    <td>оклейка ручек дверей в черную винилозую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>5000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антихром молдингов бампера</td>
                                    <td>оклейка молдингов бампера в черную виниловую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>3000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>спойлер крышки багажника</td>
                                    <td>оклейка спойлера крышки багажника в черную виниловую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>5000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антихром молдингов дверей</td>
                                    <td>оклейка молдингов дверей в черную виниловую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>5000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антихром молдингов бампера</td>
                                    <td>оклейка молдингов переднего бампера в черную виниловую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>5000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антихром решетки бампера</td>
                                    <td>покраска передней решетки бампера в черный цвет</td>
                                    <td style={{ borderRight: 'unset' }}>20000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>чёрная виниловая пленка на корпус боковых зеркал</td>
                                    <td>оклейка корпуса боковых зеркал в черную виниловую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>6000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>чёрная полиуретановая пленка на корпус боковых зеркал</td>
                                    <td>оклейка корпуса боковых зеркал в черную полиуретановую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>15000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>чёрная виниловая пленка на крышу</td>
                                    <td>оклейка крыши в черную виниловую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>14000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>чёрная полиуретановая пленка на крышу</td>
                                    <td>оклейка крыши в черную полиуретановую пленку</td>
                                    <td style={{ borderRight: 'unset' }}>35000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>восстановительная полировка (2-3 дня)</td>
                                    <td>абразивная полировка лкп для придания автомобилю безупречного вида</td>
                                    <td style={{ borderRight: 'unset' }}>от 18000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>предпродажная полировка (1 день)</td>
                                    <td>легкая, освежающая вид автомобиля, полировка лкп</td>
                                    <td style={{ borderRight: 'unset' }}>от 8000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>подготовка лкп к нанесению керамичсеких покрытий и пленки</td>
                                    <td>комплекс подготовительных работ для автомобиля перед оклейкой</td>
                                    <td style={{ borderRight: 'unset' }}>5000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>защита лобового стекла пленкой</td>
                                    <td>оклейка лобового стекла в прочную защитную пленку для предотвращения сколов</td>
                                    <td style={{ borderRight: 'unset' }}>20000</td>
                                </tr>
                                <tr>
                                    <td colspan="2" style={{ borderLeft: 'unset' }}>выпрямление вмятин без покраски</td>
                                    <td style={{ borderRight: 'unset' }}>индивидуально</td>
                                </tr>
                                <tr>
                                    <td colspan="3" style={{ borderRight: 'unset', borderLeft: 'unset' }}>комплексная оклейка защитной пленкой лкп:</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>категория а</td>
                                    <td rowspan="5">
                                        <div>полная оклейка автомобиля в защитную полиуретановую пленку<span>для предотвращения появления сколов и царапин на лкп</span><span>(передний бампер, передние крылья, капот, боковые зеркала.</span><span> </span><span>двери, пороги, задние крылья, дверь багажника, задний бампер,</span><span>передняя и задняя оптика)</span>
                                        </div></td>
                                    <td style={{ borderRight: 'unset' }}>200000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>категория в</td>
                                    <td style={{ borderRight: 'unset' }}>225000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>категория с</td>
                                    <td style={{ borderRight: 'unset' }}>240000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>категория d</td>
                                    <td style={{ borderRight: 'unset' }}>250000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>категория g</td>
                                    <td style={{ borderRight: 'unset' }}>350000</td>
                                </tr>
                                <tr>
                                    <td colspan="3" style={{ borderRight: 'unset', borderLeft: 'unset' }}>комплексная оклейка защитной пленкой лкп зон риска:</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>категория а</td>
                                    <td style={{ borderBottom: 'unset' }} rowspan="5">частичная оклейка автомобиля в защитную полиуретановую пленку для предотвращения появления сколов и царапин на лкп(передний бампер, передние крылья, капот,боковые зеркала, стойки лобового стекла,<div>проемы под ручками дверей)<br></br></div></td>
                                    <td style={{ borderRight: 'unset' }}>75000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>категория в</td>
                                    <td style={{ borderRight: 'unset' }}>85000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>категория с</td>
                                    <td style={{ borderRight: 'unset' }}>90000</td>
                                </tr>

                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>категория d</td>
                                    <td style={{ borderRight: 'unset' }}>95000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderBottom: 'unset', borderLeft: 'unset' }}>категория g</td>
                                    <td style={{ borderRight: 'unset', borderBottom: 'unset' }}>130000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        );
    }
    else if (type == 'washing') {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <title>Прайс-лист</title>
                    <link rel="canonical" href="https://arszag.ru/price/washing" />
                    <meta name="description" content="Прайс-лист на услуги автомойки" />
                </Helmet>
                <div className="top__logo" onClick={navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <section className="pricelist_globalsection" style={{ marginBottom: 40 }}>
                    <div className="moika-table-price">
                        <h1 id="price-list-washing" className="bt border__bottom_white">Кузов автомобиля</h1>
                        <table id="price-list-washing-table" cellpading >
                            <thead>
                                <tr>
                                    <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                    <td rowSpan="2" style={{ borderTop: 'unset' }} className="notachild">Описание</td>
                                    <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: "center"}}>1</td>
                                    <td className="notachild" style={{textAlign: "center"}}>2</td>
                                    <td>3</td>
                                    <td style={{ borderRight: 'unset' }}>4</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>Комплекс</td>
                                    <td>трехфазная мойка кузова, ковриков, влажная уборка и пылесос в салоне, турбосушка горячим воздухом, протирка безопасной микрофиброй, чернение резины</td>
                                    <td>2<span style={{ marginRight: 5 }}></span>200</td>
                                    <td>2<span style={{ marginRight: 5 }}></span>400</td>
                                    <td>2<span style={{ marginRight: 5 }}></span>600</td>
                                    <td style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>800</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг мойка кузова</td>
                                    <td>трехфазная мойка кузова с использованием кисточки в труднодоступных местах, чистка дисков, турбосушка горячим воздухом,протирка безопасной микрофиброй,чернение резины</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>700</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>800</td>
                                    <td>2<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>100</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг уборка салона</td>
                                    <td>влажная уборка, пылесос салона, деликатная чистка воздуховодов и удаление пыли из щелей в торпеде</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>700</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>800</td>
                                    <td>2<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>100</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>ARSZAG комплекс</td>
                                    <td>детейлинг мойка кузова, детейлинг уборка салона, химчистка колес, уборка в багажнике</td>
                                    <td>3<span style={{ marginRight: 5 }}></span>200</td>
                                    <td>3<span style={{ marginRight: 5 }}></span>400</td>
                                    <td>3<span style={{ marginRight: 5 }}></span>600</td>
                                    <td style={{ borderRight: 'unset' }}>3<span style={{ marginRight: 5 }}></span>800</td>
                                </tr>
                                {/* <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка дисков</td>
                                    <td>чистка дисков от битума и колодочной пыли</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>1900</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>безопасная химчистка двигателя</td>
                                    <td>мойка моторного отсека, сушка горячим воздухом, консервация пластиковых элементов</td>
                                    <td>5000</td>
                                    <td>5500</td>
                                    <td>6500</td>
                                    <td style={{ borderRight: 'unset' }}>7000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>мойка днища</td>
                                    <td>мойка днища, производится с применением специальной насадки, химии и высокого давления</td>
                                    <td>1700</td>
                                    <td>1800</td>
                                    <td>1950</td>
                                    <td style={{ borderRight: 'unset' }}>2050</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг мойка днища</td>
                                    <td>мойка днища, демонтаж колес, ручная мойка дисков, мойка колесных арок, подвески автомобиля кисточками и щетками</td>
                                    <td>9000</td>
                                    <td>10000</td>
                                    <td>11000</td>
                                    <td style={{ borderRight: 'unset' }}>12000</td>
                                </tr> */}
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антибитум кузова</td>
                                    <td>удаление органических загрязнений с кузова (битумные пятна, чёрные точки)</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>200</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>600</td>
                                    <td>2<span style={{ marginRight: 5 }}></span>200</td>
                                    <td style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>700</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антиметал кузова</td>
                                    <td>удаление неорганических загрязнений с кузова автомобиля (металл, окислы)</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>400</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>900</td>
                                    <td>2<span style={{ marginRight: 5 }}></span>400</td>
                                    <td style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>900</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антимошки</td>
                                    <td>Удаление следов от насекомых</td>
                                    <td>500</td>
                                    <td>600</td>
                                    <td>700</td>
                                    <td style={{ borderRight: 'unset' }}>800</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антисмола</td>
                                    <td>Удаление органических загрязнений в виде капель и пятен смолы</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>от 1<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антидождь передней сферы</td>
                                    <td>нанесение долговечного гидрофобного покрытия на переднее остекление (лобовое стекло и боковые стекла)</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>4<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антидождь все остекление</td>
                                    <td>нанесение долговечного гидрофобного покрытия на все остекление</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>7<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                                {/* <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг чистка сидений из кожи</td>
                                    <td>чистка и увлажняющая пропитка кожи на сидениях (переднее водительское, переднее пассажирское и задний диван)</td>
                                    <td>7000</td>
                                    <td>7500</td>
                                    <td>8500</td>
                                    <td style={{ borderRight: 'unset' }}>9500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг чистка расширенной кожаной отделки салона</td>
                                    <td >чистка и увлажняющая пропитка кожи на торпеде и дверных картах автомобиля</td>
                                    <td>7000</td>
                                    <td>7500</td>
                                    <td>8500</td>
                                    <td style={{ borderRight: 'unset' }}>9500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка коврового покрытия пола</td>
                                    <td>чистка коврового покрытия автомобиля с применением химии и специального инструмента</td>
                                    <td>4000</td>
                                    <td>4500</td>
                                    <td>5000</td>
                                    <td style={{ borderRight: 'unset' }}>5500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка потолка и стоек крыши</td>
                                    <td>химчистка потолка и стоек крыши</td>
                                    <td>4000</td>
                                    <td>4500</td>
                                    <td>5000</td>
                                    <td style={{ borderRight: 'unset' }}>5500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка багажного отделения</td>
                                    <td>чистка багажного отделения автомобиля с применением химии и специального инструмента</td>
                                    <td>2000</td>
                                    <td>2500</td>
                                    <td>2500</td>
                                    <td style={{ borderRight: 'unset' }}>3000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка передних кресел</td>
                                    <td>чистка тканевых передних кресел автомобиля с применением химии и специального инструмента</td>
                                    <td>2000</td>
                                    <td>2500</td>
                                    <td>2500</td>
                                    <td style={{ borderRight: 'unset' }}>3000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка заднего дивана</td>
                                    <td>чистка тканевого заднего дивана автомобиля с применением химии и специального инструмента</td>
                                    <td>2500</td>
                                    <td>3000</td>
                                    <td>3000</td>
                                    <td style={{ borderRight: 'unset' }}>3500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка обшивки дверей</td>
                                    <td>чистка обшивок дверей автомобиля с применением химии и специального инструмента</td>
                                    <td>2500</td>
                                    <td>3000</td>
                                    <td>3000</td>
                                    <td style={{ borderRight: 'unset' }}>3500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка напольных ковриков</td>
                                    <td>чистка велюровых напольных ковриков автомобиля с применением химии и специального инструмента</td>
                                    <td>2000</td>
                                    <td>2500</td>
                                    <td>2500</td>
                                    <td style={{ borderRight: 'unset' }}>3000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>мойка мотоцикла</td>
                                    <td>трехфазная мойка, турбосушка горячим воздухом</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>1000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset', borderBottom: 'unset' }}>озонация салона</td>
                                    <td style={{ borderBottom: 'unset' }}>антибактериальная обработка салона озоном</td>
                                    <td style={{ borderBottom: 'unset' }}>2000</td>
                                    <td style={{ borderBottom: 'unset' }}>2000</td>
                                    <td style={{ borderBottom: 'unset' }}>3000</td>
                                    <td style={{ borderRight: 'unset', borderBottom: 'unset' }}>3000</td>
                                </tr> */}
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>мойка мотоцикла</td>
                                    <td>трехфазная мойка, турбосушка горячим воздухом</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>от 1<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>Полимер</td>
                                    <td>шикарный блеск и мощный гидрофоб на срок от 1 до 3 месяцев</td>
                                    <td style={{ textAlign: "center" }}>4<span style={{ marginRight: 5 }}></span>500</td>
                                    <td style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>500</td>
                                    <td colSpan="3" style={{ borderRight: 'unset' }}>6<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>Твёрдый воск</td>
                                    <td>маскировка царапин, шикарный блеск и мощный гидрофоб на срок от 4 до 6 месяцев</td>
                                    <td style={{ textAlign: "center" }}>10<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>11<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>12<span style={{ marginRight: 5 }}></span>000</td>
                                    <td colSpan="3" style={{ borderRight: 'unset' }}>13<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 id="price-list-washing" className="bt border__bottom_white">Двигатель и шасси</h1>
                        <table id="price-list-washing-table" cellpading >
                            <thead>
                                <tr>
                                    <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                    <td rowSpan="2" style={{ borderTop: 'unset' }} className="notachild">Описание</td>
                                    <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: "center"}}>1</td>
                                    <td className="notachild" style={{textAlign: "center"}}>2</td>
                                    <td>3</td>
                                    <td style={{ borderRight: 'unset' }}>4</td>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                <td style={{ borderLeft: 'unset' }}>Комплекс</td>
                                <td>трехфазная мойка кузова, ковриков, влажная уборка и пылесос в салоне, турбосушка горячим воздухом, протирка безопасной микрофиброй, чернение резины</td>
                                <td>2200</td>
                                <td>2350</td>
                                <td>2550</td>
                                <td style={{ borderRight: 'unset' }}>2800</td>
                            </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг мойка кузова</td>
                                    <td>трехфазная мойка кузова с использованием кисточки в труднодоступных местах, чистка дисков, турбосушка горячим воздухом,протирка безопасной микрофиброй,чернение резины</td>
                                    <td>1700</td>
                                    <td>1800</td>
                                    <td>1950</td>
                                    <td style={{ borderRight: 'unset' }}>2050</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг уборка салона</td>
                                    <td>влажная уборка, пылесос салона, деликатная чистка воздуховодов и удаление пыли из щелей в торпеде</td>
                                    <td>1700</td>
                                    <td>1800</td>
                                    <td>1950</td>
                                    <td style={{ borderRight: 'unset' }}>2050</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>ARSZAG комплекс</td>
                                    <td>детейлинг мойка кузова, детейлинг уборка салона, химчистка колес, уборка в багажнике</td>
                                    <td>3200</td>
                                    <td>3350</td>
                                    <td>3550</td>
                                    <td style={{ borderRight: 'unset' }}>3800</td>
                                </tr> */}
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка дисков</td>
                                    <td>чистка дисков от битума и колодочной пыли</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>безопасная химчистка двигателя</td>
                                    <td>мойка моторного отсека, сушка горячим воздухом, консервация пластиковых элементов</td>
                                    <td>6<span style={{ marginRight: 5 }}></span>500</td>
                                    <td>7<span style={{ marginRight: 5 }}></span>000</td>
                                    <td>7<span style={{ marginRight: 5 }}></span>500</td>
                                    <td style={{ borderRight: 'unset' }}>8<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>консервация подкапотного пространства</td>
                                    <td>влажная уборка моторного отсека, консервация пластиковых элементов</td>
                                    <td>4<span style={{ marginRight: 5 }}></span>000</td>
                                    <td>4<span style={{ marginRight: 5 }}></span>500</td>
                                    <td>5<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>5<span style={{ marginRight: 5 }}></span>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>экспресс мойка днища</td>
                                    <td>бесконтактная мойка днища производится с применением специальной насадки, химии и высокого давления</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>700</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>800</td>
                                    <td>2<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>100</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг мойка днища</td>
                                    <td>ручная мойка днища с применением 5 составов и различных инструментов</td>
                                    <td>9<span style={{ marginRight: 5 }}></span>000</td>
                                    <td>10<span style={{ marginRight: 5 }}></span>000</td>
                                    <td>11<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>12<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>экспресс мойка арок и подвески</td>
                                    <td>бесконтактная мойка арок и подвески производится с применением специальной насадки, химии и высокого давления</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>700</td>
                                    <td>1<span style={{ marginRight: 5 }}></span>800</td>
                                    <td>2<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>100</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг мойка арок и подвески</td>
                                    <td>ручная мойка арок и подвески с применением 5 составов и различных инструментов</td>
                                    <td>8<span style={{ marginRight: 5 }}></span>000</td>
                                    <td>9<span style={{ marginRight: 5 }}></span>000</td>
                                    <td>10<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>11<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                                {/* <tr>
                                    <td style={{ borderLeft: 'unset' }}>антибитум кузова</td>
                                    <td>удаление органических загрязнений с кузова (битум, следы от насекомых, следы от древесной смолы)</td>
                                    <td>1000</td>
                                    <td>1500</td>
                                    <td>2000</td>
                                    <td style={{ borderRight: 'unset' }}>2500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антиметал кузова</td>
                                    <td>удаление неорганических загрязнений с кузова автомобиля (металл, окислы)</td>
                                    <td>1300</td>
                                    <td>1800</td>
                                    <td>2300</td>
                                    <td style={{ borderRight: 'unset' }}>2800</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антидождь передней сферы</td>
                                    <td>нанесение долговечного гидрофобного покрытия на переднее остекление (лобовое стекло и боковые стекла)</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>3500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>антидождь все остекление</td>
                                    <td>нанесение долговечного гидрофобного покрытия на все остекление</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>6500</td>
                                </tr> */}
                                {/* <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг чистка сидений из кожи</td>
                                    <td>чистка и увлажняющая пропитка кожи на сидениях (переднее водительское, переднее пассажирское и задний диван)</td>
                                    <td>7000</td>
                                    <td>7500</td>
                                    <td>8500</td>
                                    <td style={{ borderRight: 'unset' }}>9500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>детейлинг чистка расширенной кожаной отделки салона</td>
                                    <td >чистка и увлажняющая пропитка кожи на торпеде и дверных картах автомобиля</td>
                                    <td>7000</td>
                                    <td>7500</td>
                                    <td>8500</td>
                                    <td style={{ borderRight: 'unset' }}>9500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка коврового покрытия пола</td>
                                    <td>чистка коврового покрытия автомобиля с применением химии и специального инструмента</td>
                                    <td>4000</td>
                                    <td>4500</td>
                                    <td>5000</td>
                                    <td style={{ borderRight: 'unset' }}>5500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка потолка и стоек крыши</td>
                                    <td>химчистка потолка и стоек крыши</td>
                                    <td>4000</td>
                                    <td>4500</td>
                                    <td>5000</td>
                                    <td style={{ borderRight: 'unset' }}>5500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка багажного отделения</td>
                                    <td>чистка багажного отделения автомобиля с применением химии и специального инструмента</td>
                                    <td>2000</td>
                                    <td>2500</td>
                                    <td>2500</td>
                                    <td style={{ borderRight: 'unset' }}>3000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка передних кресел</td>
                                    <td>чистка тканевых передних кресел автомобиля с применением химии и специального инструмента</td>
                                    <td>2000</td>
                                    <td>2500</td>
                                    <td>2500</td>
                                    <td style={{ borderRight: 'unset' }}>3000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка заднего дивана</td>
                                    <td>чистка тканевого заднего дивана автомобиля с применением химии и специального инструмента</td>
                                    <td>2500</td>
                                    <td>3000</td>
                                    <td>3000</td>
                                    <td style={{ borderRight: 'unset' }}>3500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка обшивки дверей</td>
                                    <td>чистка обшивок дверей автомобиля с применением химии и специального инструмента</td>
                                    <td>2500</td>
                                    <td>3000</td>
                                    <td>3000</td>
                                    <td style={{ borderRight: 'unset' }}>3500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка напольных ковриков</td>
                                    <td>чистка велюровых напольных ковриков автомобиля с применением химии и специального инструмента</td>
                                    <td>2000</td>
                                    <td>2500</td>
                                    <td>2500</td>
                                    <td style={{ borderRight: 'unset' }}>3000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>мойка мотоцикла</td>
                                    <td>трехфазная мойка, турбосушка горячим воздухом</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>1000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset', borderBottom: 'unset' }}>озонация салона</td>
                                    <td style={{ borderBottom: 'unset' }}>антибактериальная обработка салона озоном</td>
                                    <td style={{ borderBottom: 'unset' }}>2000</td>
                                    <td style={{ borderBottom: 'unset' }}>2000</td>
                                    <td style={{ borderBottom: 'unset' }}>3000</td>
                                    <td style={{ borderRight: 'unset', borderBottom: 'unset' }}>3000</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        );
    }
    else if (type == 'tirechange') {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Шиномонтаж Прайс-лист</title>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <link rel="canonical" href="https://arszag.ru/price/tirechange" />
                    <meta name="description" content="Прайс-лист на услуги шиномонтажа" />
                </Helmet>
                <div className="top__logo" onClick={navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <div className="back_to_menu_btn" onClick={() => {
                    window.location.href = '/tirechange/menu'
                }}>
                    <p className="back_to_menu_text">назад к меню</p>
                </div>
                <section className="pricelist_globalsection non_bottomed">
                    <div className="shin-table-price">
                        <h1 id="price-list-shin" className="bt border__bottom_white">Шиномонтаж</h1>
                        <table id="price-list-shin-table">
                            <thead>
                                <tr>
                                    <td rowSpan="2" style={{ borderLeft: 'unset', borderTop: 'unset' }}>Услуга</td>
                                    <td rowSpan="2" style={{ borderLeft: 'unset', borderTop: 'unset' }} className="notachild">Описание</td>
                                    <td colSpan="4" style={{ borderRight: 'unset', borderTop: 'unset' }}>Диаметр колеса</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>r15-17</td>
                                    <td style={{ textAlign: "center" }} className="notachild">r18-20</td>
                                    <td style={{ textAlign: "center" }}>r21-22</td>
                                    <td style={{ borderRight: 'unset' }}>r23-32</td>
                                </tr>
                            </thead>
                            <tbody><tr>
                                <td style={{ borderLeft: 'unset' }}>ARSZAG шиномонтаж</td>
                                <td>химчистка колес, безопасный шиномонтаж, балансировка, виброконтроль и подгонка, снятие и установка, зачистка посадочных мест</td>
                                <td style={{ textAlign: "center" }}>13<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>15<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>17<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ borderRight: 'unset' }}>20<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>комплекс шиномонтажа</td>
                                    <td>мойка, безопасный шиномонтаж на уникальном роботизированном станке, балансировка, снятие и установка, лазерная диагностика диска</td>
                                    <td style={{ textAlign: "center" }}>7<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>8<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>10<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>12<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>ARSZAG балансировка</td>
                                    <td>химчистка колес, балансировка, виброконтроль и подгонка, снятие и установка, зачистка посадочных мест</td>
                                    <td style={{ textAlign: "center" }}>11<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>12<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>13<span style={{ marginRight: 5 }}></span>500</td>
                                    <td style={{ borderRight: 'unset' }}>15<span style={{ marginRight: 5 }}></span>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>балансировка колес</td>
                                    <td>мойка, балансировка, снятие и установка, лазерная диагностика диска</td>
                                    <td style={{ textAlign: "center" }}>4<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>4<span style={{ marginRight: 5 }}></span>700</td>
                                    <td style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>500</td>
                                    <td style={{ borderRight: 'unset' }}>6<span style={{ marginRight: 5 }}></span>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>виброконтроль и увод шин</td>
                                    <td>уникальная услуга по диагностике шины. проверяется однородность шины, боковой увод, а также виброконтроль. по возможности вносятся корректировки и даются рекомендации по эксплуатации</td>
                                    <td style={{ textAlign: "center" }}>4<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>4<span style={{ marginRight: 5 }}></span>700</td>
                                    <td style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>500</td>
                                    <td style={{ borderRight: 'unset' }}>6<span style={{ marginRight: 5 }}></span>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>монтаж/демонтаж датчика давления</td>
                                    <td>снятие и установка одного датчика давления на диск</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>устранение прокола</td>
                                    <td>снятие - установка, мойка, балансировка колеса, установка заплатки или грибка</td>
                                    <td style={{ textAlign: "center" }}>4<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>4<span style={{ marginRight: 5 }}></span>500</td>
                                    <td style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>5<span style={{ marginRight: 5 }}></span>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>монтаж/демонтаж колес</td>
                                    <td></td>
                                    <td style={{ textAlign: "center" }}>2<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ textAlign: "center" }}>2<span style={{ marginRight: 5 }}></span>500</td>
                                    <td style={{ textAlign: "center" }}>3<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>3<span style={{ marginRight: 5 }}></span>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>подготовка посадочных мест</td>
                                    <td>зачистка ступицы от коррозии, нанесение специальной смазки</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>1<span style={{ marginRight: 5 }}></span>700</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>химчистка колес</td>
                                    <td>удаление металлических вкраплений и битума с диска, чистка резины</td>
                                    <td colSpan="4" style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset', borderBottom: 'unset' }}>замена ниппеля</td>
                                    <td style={{ borderBottom: 'unset' }}>замена комплекта ниппелей на выбор из наличия</td>
                                    <td colSpan="4" style={{ borderRight: 'unset', borderBottom: 'unset' }}>от 2<span style={{ marginRight: 5 }}></span>500</td>
                                </tr>
                                <tr>
                                    <td style={{ borderLeft: 'unset' }}>хранение колес</td>
                                    <td>мойка, консервация и бережное хранение колес на специально оборудованном складе 6 месяцев</td>
                                    <td style={{ textAlign: "center" }}>6<span style={{ marginRight: 5 }}></span>500</td>
                                    <td style={{ textAlign: "center" }}>7<span style={{ marginRight: 5 }}></span>500</td>
                                    <td style={{ textAlign: "center" }}>8<span style={{ marginRight: 5 }}></span>000</td>
                                    <td style={{ borderRight: 'unset' }}>9<span style={{ marginRight: 5 }}></span>000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <div className="navigation mb_30vh">
                    <ul>
                        <li className="service__block wow fadeInDown" onClick={() => {
                            window.location.href = '/tires_disks'
                        }}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Шины и диски</p>
                        </li>
                        <li className="service__block wow fadeInDown" onClick={() => {
                            window.location.href = '/tirechange/safe_tirechange'
                        }}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Безопасный<br />шиномонтаж</p>
                        </li>
                        <li className="service__block wow fadeInDown" onClick={() => {
                            window.location.href = '/tirechange/vibrocontrol'
                        }}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Балансировка<br />и виброконтроль</p>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
    else if (type == 'cleaning') {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Химчистка</title>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <link rel="canonical" href="https://arszag.ru/price/tirechange" />
                    <meta name="description" content="Прайс-лист на услуги шиномонтажа" />
                </Helmet>
                <div className="top__logo" onClick={navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <section className="pricelist_globalsection">
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Кожа и алькантара</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td rowSpan="2" style={{ borderTop: 'unset' }} className="notachild">Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "center"}}>1</td>
                                <td className="notachild" style={{textAlign: "center"}}>2</td>
                                <td>3</td>
                                <td style={{ borderRight: 'unset' }}>4</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Детейлинг чистка сидений из кожи</td>
                                <td>Чистка и увлажняющая пропитка кожи на сидениях (переднее водительское, переднее пассажирское и задний диван)</td>
                                <td>8<span style={{ marginRight: 5 }}></span>000</td>
                                <td>8<span style={{ marginRight: 5 }}></span>500</td>
                                <td>9<span style={{ marginRight: 5 }}></span>500</td>
                                <td style={{ borderRight: 'unset' }}>10<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Детейлинг чистка расширенной кожаной отделки салона</td>
                                <td >Чистка и увлажняющая пропитка кожи на торпеде и дверных картах автомобиля</td>
                                <td>8<span style={{ marginRight: 5 }}></span>000</td>
                                <td>8<span style={{ marginRight: 5 }}></span>500</td>
                                <td>9<span style={{ marginRight: 5 }}></span>500</td>
                                <td style={{ borderRight: 'unset' }}>10<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Детейлинг чистка потолка и стоек крыши из кожи</td>
                                <td >Чистка и увлажняющая пропитка кожи потолка и стоек крыши</td>
                                <td>7<span style={{ marginRight: 5 }}></span>000</td>
                                <td>7<span style={{ marginRight: 5 }}></span>500</td>
                                <td>8<span style={{ marginRight: 5 }}></span>500</td>
                                <td style={{ borderRight: 'unset' }}>9<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Химчистка руля из кожи</td>
                                <td >Чистка и увлажняющая пропитка кожи на рулевом колесе</td>
                                <td colSpan="4" style={{ borderRight: 'unset' }}>от 2<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Химчистка руля из алькантары</td>
                                <td >Чистка алькантары на рулевом колесе</td>
                                <td colSpan="4" style={{ borderRight: 'unset' }}>от 3<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            {/* */}
                        </tbody>
                    </table>
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Ткань и велюр</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td rowSpan="2" style={{ borderTop: 'unset' }} className="notachild">Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "center"}}>1</td>
                                <td className="notachild" style={{textAlign: "center"}}>2</td>
                                <td>3</td>
                                <td style={{ borderRight: 'unset' }}>4</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>химчистка передних кресел</td>
                                <td>чистка тканевых передних кресел автомобиля с применением химии и специального инструмента</td>
                                <td>3<span style={{ marginRight: 5 }}></span>500</td>
                                <td>4<span style={{ marginRight: 5 }}></span>000</td>
                                <td>4<span style={{ marginRight: 5 }}></span>500</td>
                                <td style={{ borderRight: 'unset' }}>5<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>химчистка заднего дивана</td>
                                <td>чистка тканевого заднего дивана автомобиля с применением химии и специального инструмента</td>
                                <td>4<span style={{ marginRight: 5 }}></span>000</td>
                                <td>4<span style={{ marginRight: 5 }}></span>500</td>
                                <td>5<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ borderRight: 'unset' }}>5<span style={{ marginRight: 5 }}></span>500</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>химчистка обшивки дверей</td>
                                <td>чистка обшивок дверей автомобиля с применением химии и специального инструмента</td>
                                <td>3<span style={{ marginRight: 5 }}></span>500</td>
                                <td>4<span style={{ marginRight: 5 }}></span>000</td>
                                <td>4<span style={{ marginRight: 5 }}></span>500</td>
                                <td style={{ borderRight: 'unset' }}>5<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>химчистка потолка и стоек крыши</td>
                                <td>химчистка потолка и стоек крыши</td>
                                <td>5<span style={{ marginRight: 5 }}></span>000</td>
                                <td>5<span style={{ marginRight: 5 }}></span>500</td>
                                <td>6<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ borderRight: 'unset' }}>6<span style={{ marginRight: 5 }}></span>500</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>химчистка коврового покрытия пола</td>
                                <td>чистка коврового покрытия автомобиля с применением химии и специального инструмента</td>
                                <td>5<span style={{ marginRight: 5 }}></span>000</td>
                                <td>5<span style={{ marginRight: 5 }}></span>500</td>
                                <td>6<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ borderRight: 'unset' }}>6<span style={{ marginRight: 5 }}></span>500</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>химчистка напольных ковриков</td>
                                <td>чистка велюровых напольных ковриков автомобиля с применением химии и специального инструмента</td>
                                <td colSpan="4" style={{ borderRight: 'unset' }}>от 4<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>химчистка багажного отделения</td>
                                <td>чистка багажного отделения автомобиля с применением химии и специального инструмента</td>
                                <td>3<span style={{ marginRight: 5 }}></span>500</td>
                                <td>4<span style={{ marginRight: 5 }}></span>000</td>
                                <td>4<span style={{ marginRight: 5 }}></span>500</td>
                                <td style={{ borderRight: 'unset' }}>5<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset', borderBottom: 'unset' }}>озонация салона</td>
                                <td style={{ borderBottom: 'unset' }}>антибактериальная обработка салона озоном</td>
                                <td style={{ borderBottom: 'unset' }}>2<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ borderBottom: 'unset' }}>2<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ borderBottom: 'unset' }}>3<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ borderRight: 'unset', borderBottom: 'unset' }}>3<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        );
    }
    else if (type == 'pasting') {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Оклейка плёнкой</title>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <link rel="canonical" href="https://arszag.ru/price/tirechange" />
                    <meta name="description" content="Прайс-лист на услуги шиномонтажа" />
                </Helmet>
                <div className="top__logo" onClick={navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <section className="pricelist_globalsection">
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Защитная плёнка</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td rowSpan="2" style={{ borderTop: 'unset' }} className="notachild">Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Стоимость</td>
                            </tr>
                            {/* <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td style={{ borderRight: 'unset' }}>4</td>
                            </tr> */}
                        </thead>
                        <tbody>
                            <tr>
                                <td width="20%" style={{ borderLeft: 'unset' }}>защита лобового стекла пленкой</td>
                                <td width="60%">оклейка лобового стекла в прочную защитную пленку для предотвращения сколов и царапин</td>
                                <td width="20%" style={{ borderRight: 'unset' }}>от 25<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>защита фар или фонарей</td>
                                <td>оклейка фар в защитную полиуретановую прозрачную пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 10<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>тонировка фар или фонарей</td>
                                <td>оклейка фар в защитную полиуретановую тонирующую пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 12<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>защита глянцевых дверных стоек</td>
                                <td>оклейка дверных стоек в прочную защитную пленку для предотвращения царапин</td>
                                <td style={{ borderRight: 'unset' }}>от 6<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>защита корпуса боковых зеркал</td>
                                <td>оклейка боковых зеркал в прочную защитную пленку для предотвращения сколов и царапин</td>
                                <td style={{ borderRight: 'unset' }}>от 6<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td colspan="3" style={{ borderRight: 'unset', borderLeft: 'unset' }}>комплексная оклейка защитной пленкой лкп:</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория а</td>
                                <td rowSpan="5">полная оклейка автомобиля в защитную полиуретановую пленку для предотвращения появления сколов и царапин на лкп (передний бампер, передние крылья, капот, боковые зеркала. двери, пороги, задние крылья, дверь багажника, задний бампер, передняя и задняя оптика)</td>
                                <td style={{ borderRight: 'unset' }}>от 220<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория в</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 245<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория с</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 260<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория d</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 270<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория g</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 370<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td colspan="3" style={{ borderRight: 'unset', borderLeft: 'unset' }}>комплексная оклейка защитной пленкой лкп зон риска:</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория а</td>
                                <td style={{ borderBottom: 'unset' }} rowspan="5">частичная оклейка автомобиля в защитную полиуретановую пленку для предотвращения появления сколов и царапин на лкп(передний бампер, передние крылья, капот,боковые зеркала, стойки лобового стекла, проемы под ручками дверей)</td>
                                <td style={{ borderRight: 'unset' }} >от 95<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория в</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 105<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория с</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 110<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>

                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория d</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 125<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderBottom: 'unset', borderLeft: 'unset' }}>категория g</td>
                                <td style={{ borderRight: 'unset', borderBottom: 'unset' }} className="notachild">от 170<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Антихром</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td rowSpan="2" style={{ borderTop: 'unset' }} className="notachild">Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Стоимость</td>
                            </tr>
                            {/* <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td style={{ borderRight: 'unset' }}>4</td>
                            </tr> */}
                        </thead>
                        <tbody>
                            <tr>
                                <td width="20%" style={{ borderLeft: 'unset' }}>антихром молдингов рамки остекления</td>
                                <td width="60%">оклейка хромированной рамки остекления в черную виниловую пленку</td>
                                <td width="20%" style={{ borderRight: 'unset' }}>от 20<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>антихром ручек дверей</td>
                                <td>оклейка ручек дверей в черную виниловую пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 8<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>спойлер крышки багажника</td>
                                <td>оклейка спойлера крышки багажника в черную виниловую пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 8<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>антихром молдингов дверей</td>
                                <td>оклейка молдингов дверей в черную виниловую пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 8<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>антихром молдингов бампера</td>
                                <td>оклейка молдингов переднего бампера в черную виниловую пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 8<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>антихром решетки бампера</td>
                                <td>покраска передней решетки бампера в черный цвет</td>
                                <td style={{ borderRight: 'unset' }}>от 25<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>чёрная виниловая пленка на корпус боковых зеркал</td>
                                <td>оклейка корпуса боковых зеркал в черную виниловую пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 6<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            {/* <tr>
                                <td style={{ borderLeft: 'unset' }}>чёрная полиуретановая пленка на корпус боковых зеркал</td>
                                <td>оклейка корпуса боковых зеркал в черную полиуретановую пленку</td>
                                <td style={{ borderRight: 'unset' }}>15000</td>
                            </tr> */}
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>чёрная виниловая пленка на крышу</td>
                                <td>оклейка крыши в черную виниловую пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 18<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>чёрная полиуретановая пленка на крышу</td>
                                <td>оклейка крыши в черную полиуретановую пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 35<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Тонировка</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td rowSpan="2" style={{ borderTop: 'unset' }} className="notachild">Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Стоимость</td>
                            </tr>
                            {/* <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td style={{ borderRight: 'unset' }}>4</td>
                            </tr> */}
                        </thead>
                        <tbody>
                            <tr>
                                <td width="20%" style={{ borderLeft: 'unset' }}>тонировка задней полусферы</td>
                                <td width="60%" rowSpan="3">оклейка окон металлизированной тонирующей пленкой (5,15,20,30,35,50%)
                                </td>
                                <td width="20%" style={{ borderRight: 'unset' }}>от 12<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>тонировка боковых окон</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 7<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>тонировка лобового стекла</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 6<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td width="20%" style={{ borderLeft: 'unset' }}>тонировка задней полусферы</td>
                                <td width="60%" rowSpan="3">оклейка окон керамической тонирующей пленкой (5,15%)
                                </td>
                                <td width="20%" style={{ borderRight: 'unset' }}>от 24<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>тонировка боковых окон</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 14<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>тонировка лобового стекла</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 12<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>тонировка фар или фонарей</td>
                                <td>оклейка фар в защитную полиуретановую тонирующую пленку</td>
                                <td style={{ borderRight: 'unset' }}>от 12000</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Атермальная плёнка на стекла</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td rowSpan="2" style={{ borderTop: 'unset' }} className="notachild">Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Стоимость</td>
                            </tr>
                            {/* <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td style={{ borderRight: 'unset' }}>4</td>
                            </tr> */}
                        </thead>
                        <tbody>
                            <tr>
                                <td width="20%" style={{ borderLeft: 'unset' }}>оклейка задней полусферы</td>
                                <td width="60%" rowSpan="3">оклейка окон атермальной плёнкой (75-90% по ГОСТ)
                                </td>
                                <td width="20%" style={{ borderRight: 'unset' }}>от 16<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>оклейка боковых окон</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 10<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>оклейка лобового стекла</td>
                                <td style={{ borderRight: 'unset' }} className="notachild">от 9<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        );
    }
    //%D0%9F%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0
    else if (type == 'polishing') {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Полировка</title>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <link rel="canonical" href="https://arszag.ru/price/tirechange" />
                    <meta name="description" content="Прайс-лист на услуги шиномонтажа" />
                </Helmet>
                <div className="top__logo" onClick={navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <section className="pricelist_globalsection non_bottomed">
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Полировка кузова</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td width="25%" rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td width="50%" rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }} className="notachild">Описание</td>
                                <td width="25%" colSpan="5" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td className="notachild">2</td>
                                <td>3</td>
                                <td>4</td>
                                <td style={{ borderRight: 'unset' }}>5</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Подготовка кузова авто к полировке</td>
                                <td>Комплексная мойка, деконтаминация кузова, очистка глиной</td>
                                <td style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>6<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Восстановительная полировка кузова</td>
                                <td>полировка кузова в несколько этапов</td>
                                <td style={{ textAlign: "center" }}>22<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>24<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>26<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>28<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>31<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Мягкая полировка кузова</td>
                                <td>придание блеска кузову автомобиля</td>
                                <td style={{ textAlign: "center" }}>16<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>17<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>18<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>20<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>22<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Полировка одного элемента</td>
                                <td>удаление царапин с одного элемента автомобиля</td>
                                <td colSpan="5" style={{ borderRight: 'unset' }}>от 3<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <div className="navigation mb_30vh">
                    <ul>
                        <li className="service__block wow fadeInDown" onClick={() => {
                            window.location.href = '/price/ceramics'
                        }}>
                            <img className="service__logo" src={keramika} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }}>Керамика</p>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
    else if (type == 'ceramics') {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Керамика</title>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <link rel="canonical" href="https://arszag.ru/price/tirechange" />
                    <meta name="description" content="Прайс-лист на услуги шиномонтажа" />
                </Helmet>
                <div className="top__logo" onClick={navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <section className="pricelist_globalsection">
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Защитные покрытия</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td width="30%" rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td width="30%" rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }} className="notachild">Описание</td>
                                <td width="40%" colSpan="5" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td className="notachild">2</td>
                                <td>3</td>
                                <td>4</td>
                                <td style={{ borderRight: 'unset' }}>5</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Подготовка кузова авто к нанесению покрытий</td>
                                <td>Комплексная мойка, деконтаминация кузова, очистка глиной (после полировки не требуется)</td>
                                <td colSpan="2" style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>6<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>керамика ServFaces 1 слой</td>
                                <td rowSpan="3">шикарный блеск, мощный гидрофоб и защита от органических загрязнений (смола, насекомые) на срок от 1 до 2-ух лет</td>
                                <td style={{ textAlign: "center" }}>23<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>25<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>27<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>29<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>31<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>керамика ServFaces 2 слоя (рекомендуется)</td>
                                <td style={{ textAlign: "center" }} className="notachild">30<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }} >32<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>34<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>36<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>38<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>керамика ServFaces 3 слоя</td>
                                <td style={{ textAlign: "center" }} className="notachild">36<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>38<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>40<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>42<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>44<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>жидкое стекло ServFaces Sueve 1 слой (ЛКП,ПЛЕНКА)</td>
                                <td>шикарный блеск, мощный гидрофоб и защита от органических загрязнений (смола, насекомые) на срок от 6 месяцев до 1.5 лет</td>
                                <td style={{ textAlign: "center" }}>15<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>17<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>19<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>21<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>23<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            {/* <tr>
                                <td style={{ borderLeft: 'unset' }}>жидкое стекло ServFaces Sueve 1 слой (ЛКП,ПЛЕНКА)</td>
                                <td>шикарный блеск, мощный гидрофоб и защита от органических загрязнений (смола, насекомые) на срок от 6 месяцев до 1.5 лет</td>
                                <td style={{ textAlign: "center" }}>15<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>17<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>19<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>21<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>23<span style={{ marginRight: 5 }}></span>000</td>
                            </tr> */}
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Полимер</td>
                                <td>шикарный блеск и мощный гидрофоб на срок от 1 до 3 месяцев</td>
                                <td style={{ textAlign: "center" }}>4<span style={{ marginRight: 5 }}></span>500</td>
                                <td style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>5<span style={{ marginRight: 5 }}></span>500</td>
                                <td style={{ textAlign: "center" }}>6<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>6<span style={{ marginRight: 5 }}></span>500</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>Твёрдый воск</td>
                                <td>маскировка царапин, шикарный блеск и мощный гидрофоб на срок от 4 до 6 месяцев</td>
                                <td style={{ textAlign: "center" }}>10<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>11<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>12<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>13<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>14<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        );
    }
    else {
        return (
            <NotFound />
        );
    }
    //     }
    // }
}
export default PriceType