import React, { useEffect } from "react";
import Helmet from "react-helmet";
import './scss/price.css'
class Price extends React.Component {

    navigateHome() {
        window.location.href = '/';
    }
    render() {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Прайс-лист</title>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <link rel="canonical" href="https://arszag.ru/price" />
                    <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
                    <meta name="description" content="Прайс-лист на услуги ARSZAG DETAILING.Представлены услуги трёх основных категорий: Детейлинг, Шиномонтаж и Автомойка." />
                </Helmet>
                <div className="top__logo" onClick={this.navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <div className="main_activity">
                    <h1 className="bt">Прайс-лист</h1>
                </div>
                <section className="pricelist_globalsection">
                    <div className="moika-table-price">
                        <h1 id="price-list-washing" className="bt border__bottom_white">Кузов автомобиля</h1>
                        <table id="price-list-washing-table" cellpading >
                            <thead>
                                <tr>
                                    <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                    <td rowSpan="2" style={{ borderTop: 'unset' }}>Описание</td>
                                    <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>1</td>
                                    <td style={{ textAlign: "center" }}>2</td>
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
                                    <td rowSpan="2" style={{ borderTop: 'unset' }}>Описание</td>
                                    <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>1</td>
                                    <td style={{ textAlign: "center" }}>2</td>
                                    <td>3</td>
                                    <td style={{ borderRight: 'unset' }}>4</td>
                                </tr>
                            </thead>
                            <tbody>
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
                            </tbody>
                        </table>
                    </div>
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Кожа и алькантара</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td rowSpan="2" style={{ borderTop: 'unset' }}>Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>1</td>
                                <td style={{ textAlign: "center" }}>2</td>
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
                        </tbody>
                    </table>
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Ткань и велюр</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td rowSpan="2" style={{ borderTop: 'unset' }}>Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>1</td>
                                <td style={{ textAlign: "center" }}>2</td>
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
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Защитная плёнка</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td rowSpan="2" style={{ borderTop: 'unset' }}>Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Стоимость</td>
                            </tr>
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
                                <td style={{ borderRight: 'unset' }}>от 245<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория с</td>
                                <td style={{ borderRight: 'unset' }}>от 260<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория d</td>
                                <td style={{ borderRight: 'unset' }}>от 270<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория g</td>
                                <td style={{ borderRight: 'unset' }}>от 370<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td colspan="3" style={{ borderRight: 'unset', borderLeft: 'unset' }}>комплексная оклейка защитной пленкой лкп зон риска:</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория а</td>
                                <td style={{ borderBottom: 'unset' }} rowspan="5">частичная оклейка автомобиля в защитную полиуретановую пленку для предотвращения появления сколов и царапин на лкп(передний бампер, передние крылья, капот,боковые зеркала, стойки лобового стекла,<div>проемы под ручками дверей)<br></br></div></td>
                                <td style={{ borderRight: 'unset' }}>от 95<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория в</td>
                                <td style={{ borderRight: 'unset' }}>от 105<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория с</td>
                                <td style={{ borderRight: 'unset' }}>от 110<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>

                            <tr>
                                <td style={{ borderLeft: 'unset' }}>категория d</td>
                                <td style={{ borderRight: 'unset' }}>от 125<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderBottom: 'unset', borderLeft: 'unset' }}>категория g</td>
                                <td style={{ borderRight: 'unset', borderBottom: 'unset' }}>от 170<span style={{ marginRight: 5 }}></span>000</td>
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
                                <td rowSpan="2" style={{ borderTop: 'unset' }}>Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Стоимость</td>
                            </tr>
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
                                <td rowSpan="2" style={{ borderTop: 'unset' }}>Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Стоимость</td>
                            </tr>
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
                                <td style={{ borderRight: 'unset' }}>от 7<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>тонировка лобового стекла</td>
                                <td style={{ borderRight: 'unset' }}>от 6<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td width="20%" style={{ borderLeft: 'unset' }}>тонировка задней полусферы</td>
                                <td width="60%" rowSpan="3">оклейка окон керамической тонирующей пленкой (5,15%)
                                </td>
                                <td width="20%" style={{ borderRight: 'unset' }}>от 24<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>тонировка боковых окон</td>
                                <td style={{ borderRight: 'unset' }}>от 14<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>тонировка лобового стекла</td>
                                <td style={{ borderRight: 'unset' }}>от 12<span style={{ marginRight: 5 }}></span>000</td>
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
                                <td rowSpan="2" style={{ borderTop: 'unset' }}>Описание</td>
                                <td colSpan="4" style={{ borderTop: 'unset', borderRight: 'unset' }}>Стоимость</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width="20%" style={{ borderLeft: 'unset' }}>оклейка задней полусферы</td>
                                <td width="60%" rowSpan="3">оклейка окон атермальной плёнкой (75-90% по ГОСТ)
                                </td>
                                <td width="20%" style={{ borderRight: 'unset' }}>от 12<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>оклейка боковых окон</td>
                                <td style={{ borderRight: 'unset' }}>от 7<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>оклейка лобового стекла</td>
                                <td style={{ borderRight: 'unset' }}>от 6<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Полировка кузова</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td width="25%" rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td width="50%" rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Описание</td>
                                <td width="25%" colSpan="5" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
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
                                <td colSpan="3" style={{ borderRight: 'unset' }}>2<span style={{ marginRight: 5 }}></span>800</td>
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
                    <div className="chimchistka_table_price">
                        <h1 className="bt border__bottom_white">Защитные покрытия</h1>
                    </div>
                    <table id="price-list-shin-table">
                        <thead>
                            <tr>
                                <td width="30%" rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Услуга</td>
                                <td width="30%" rowSpan="2" style={{ borderTop: 'unset', borderLeft: 'unset' }}>Описание</td>
                                <td width="40%" colSpan="5" style={{ borderTop: 'unset', borderRight: 'unset' }}>Категория</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
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
                                <td style={{ textAlign: "center" }}>30<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>32<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>34<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>36<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>38<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>керамика ServFaces 3 слоя</td>
                                <td style={{ textAlign: "center" }}>36<span style={{ marginRight: 5 }}></span>000</td>
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
                            <tr>
                                <td style={{ borderLeft: 'unset' }}>жидкое стекло ServFaces Sueve 1 слой (ЛКП,ПЛЕНКА)</td>
                                <td>шикарный блеск, мощный гидрофоб и защита от органических загрязнений (смола, насекомые) на срок от 6 месяцев до 1.5 лет</td>
                                <td style={{ textAlign: "center" }}>15<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>17<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>19<span style={{ marginRight: 5 }}></span>000</td>
                                <td style={{ textAlign: "center" }}>21<span style={{ marginRight: 5 }}></span>000</td>
                                <td colSpan="3" style={{ borderRight: 'unset' }}>23<span style={{ marginRight: 5 }}></span>000</td>
                            </tr>
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
                    <div className="shin-table-price">
                        <h1 id="price-list-shin" className="bt border__bottom_white">Шиномонтаж</h1>
                        <table id="price-list-shin-table">
                            <thead>
                                <tr>
                                    <td rowSpan="2" style={{ borderLeft: 'unset', borderTop: 'unset' }}>Услуга</td>
                                    <td rowSpan="2" style={{ borderLeft: 'unset', borderTop: 'unset' }}>Описание</td>
                                    <td colSpan="4" style={{ borderRight: 'unset', borderTop: 'unset' }}>Диаметр колеса</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>r15-17</td>
                                    <td style={{ textAlign: "center" }}>r18-20</td>
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
            </section>
        );
    }
}
export default Price;