import React from "react";
import './scss/tirechange.css';
import Helmet from "react-helmet";
import shinomontazh from './img/2.png'
import HuntRev1 from './img/hunter-rev_1.jpeg'
import HuntRev2 from './img/hunter-rev_2.jpeg'
import HuntRev3 from './img/hunter-rev_3.jpeg'
import HuntRev4 from './img/hunter-rev_4.jpeg'
import HuntRev5 from './img/hunter-rev_5.jpeg'
import HuntRev6 from './img/hunter-rev_6.jpeg'
import HuntRev7 from './img/hunter-rev_7.jpeg'
import HuntRev8 from './img/hunter-rev_8.jpeg'
import HuntRev10 from './img/hunter-rev_10.jpeg'
import HuntRev11 from './img/hunter-rev_11.jpeg'
import HuntRev12 from './img/hunter-rev_12.jpeg'
import HuntRev13 from './img/hunter-rev_13.jpeg'
import { useParams } from "react-router-dom";

export default function Tirechange() {
    const params = useParams();
    function navigateHome() {
        window.location.href = '/'
    }
    function goPrice_tirechange() {
        window.location.href = '/price/tirechange'
    }
    function goSafe_tirechange() {
        window.location.href = '/tirechange/safe_tirechange'
    }
    function goVibro_control() {
        window.location.href = '/tirechange/vibrocontrol'
    }
    if (params.select == 'safe_tirechange') {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Безопасный шиномонтаж</title>
                    <link rel="canonical" href="https://arszag.ru" />
                    <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
                    <link rel="shortcut icon" href="https://arszag.ru/fav.ico" />
                    <meta name="description" content="ARSZAG DETAILING - профессиональный уход за вашим авто." />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
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
                <div className="first_tirechange_block">
                    <h1 className="bt">Безопасный шиномонтаж на уникальном роботизированном станке
                        <br></br><span className="selected__text">Hunter Revolution</span>!</h1>
                    <p className="mt t_justify">Станок сам поднимает, опускает, разбирает и собирает колесо, оператору
                        остается лишь подкатить его. Колесо закрепляется на валу, имитирующим
                        ступицу, и зажимается через пластиковую проставку, тем самым избегаются
                        любые возможные повреждения диска при его установке на станок.
                        Оператор задает размер диска и положение датчика давления, чтобы
                        избежать его повреждения при демонтаже покрышки. Затем, оператор
                        запускает нужную программу и контролирует процесс, станок сам отделяет
                        борта и производит монтаж/демонтаж покрышки. <span className="selected__text">При демонтаже шины не
                            используется монтажка</span>, так как станок оснащен специальным крюком,
                        который безопасно зацепляет шину и производит демонтаж. После монтажа
                        шины, оператор запускает программу «Массаж бортов», чтобы шина
                        плотно села на диск. Так как станок роботизирован и выполняет все
                        процедуры сам, <span className="selected__text">человеческий фактор отсутсвует и повреждение диска
                            полностью исключается.</span></p>
                    <div className="img__box">
                        <img src={HuntRev1} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                        <img src={HuntRev2} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                    </div>
                </div>
                <div className="second_tirechange_block">
                    <p className="mt t_justify"><h1 className="bt">Демонтаж колёс с автомобиля</h1>При демонтаже колес с автомобиля применяются <span className="selected__text">специальные головки с
                        пластиковой защитой</span>, чтобы избежать повреждения отверстий под болты на
                        дисках. Для болтов автомобилей <span className="selected__text">Mercedes AMG</span>, у нас есть <span className="selected__text">специальная
                            головка в виде звездочки</span>, так как хромированные колпачки на болтах очень
                        хрупкие и откручивать их обычной головкой нельзя. Также, для автомобилей
                        Mercedes AMG у нас имеется <span className="selected__text">оригинальный ключ для снятия колпаков с
                            имитацией центральной гайки</span>. Он плотно прилегает ко всем граням и
                        позволяет снять колпак без повреждений.</p>
                    <div className="img__box">
                        <img src={HuntRev3} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                        <img src={HuntRev4} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                        <img src={HuntRev5} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                    </div>
                    <p className="mt t_justify">
                        Для достижения хороших результатов балансировки, колесо
                        предварительно моется, удаляются груза, а также следы клея от
                        самоклеющихся балансировочных грузов.<br></br>
                        Перед установкой колеса, мы производим зачистку и смазку посадочных
                        мест, чтобы колесо плотно и ровно прилегало к ступице.
                        <br></br>
                        <span className="selected__text">Все болты протягиваются динамометрическим ключом</span> по специальным
                        значениям для каждой марки и модели автомобиля, рекомендованными
                        производителями.
                    </p>
                </div>
                <div className="navigation">
                    <ul>
                        <li className="service__block wow fadeInDown" onClick={() => {
                            window.location.href = '/price/tirechange'
                        }}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Прайс-лист</p>
                        </li>
                        <li className="service__block wow fadeInDown" onClick={() => {
                            window.location.href = '/tires_disks'
                        }}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Шины и диски</p>
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
    else if (params.select == 'menu') {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Меню</title>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <script src="https://arszag.ru/yametrika.js" type="text/javascript"></script>
                    <link rel="canonical" href="https://arszag.ru" />
                    <link rel="shortcut icon" href="https://arszag.ru/fav.ico" />
                    <meta name="description" content="ARSZAG DETAILING - профессиональный уход за вашим авто." />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
                </Helmet>
                <div className="top__logo" onClick={navigateHome}>
                    <article className="article_t">ARSZAG</article>
                    <article className="article_b">DETAILING</article>
                </div>
                <h1 className="bt">Выберете необходимую страницу:</h1>
                <div className="navigation">
                    <ul>
                        <li className="service__block wow fadeInDown" onClick={goPrice_tirechange}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Прайс-лист</p>
                        </li>
                        <li className="service__block wow fadeInDown" onClick={() => {
                            window.location.href = '/tires_disks'
                        }}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Шины и диски</p>
                        </li>
                        <li className="service__block wow fadeInDown" onClick={goSafe_tirechange}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Безопасный<br />шиномонтаж</p>
                        </li>
                        <li className="service__block wow fadeInDown" onClick={goVibro_control}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Балансировка<br />и виброконтроль</p>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
    else if (params.select == 'vibrocontrol') {
        return (
            <section className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Балансировка и виброконтроль</title>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <script src="https://arszag.ru/yametrika.js" type="text/javascript"></script>
                    <link rel="canonical" href="https://arszag.ru" />
                    <link rel="shortcut icon" href="https://arszag.ru/fav.ico" />
                    <meta name="description" content="ARSZAG DETAILING - профессиональный уход за вашим авто." />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
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
                <div className="third_tirechange_block">
                    <h1 className="bt">Уникальная и самая точная балансировка с виброконтролем на стенде
                        <br></br><span className="selected__text">Hunter Road Force Elite</span>!</h1>
                    <p className="mt t_justify">Hunter RFE выполняет сразу несколько функций: балансировка, лазерная
                        диагностика диска, определение однородности шины, виброконтроль и
                        измерение бокового увода. </p>
                    <div className="img__box">
                        <img src={HuntRev6} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                        <img src={HuntRev7} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                        <img src={HuntRev8} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                    </div>
                    <p className="mt t_justify"><span className="selected__text">Виброконтроль</span> - диагностика неоднородности шины под нагрузкой 650 кг
                        специальным прижимным роликом, который имитирует движение колеса по
                        дорожному покрытию на автомобиле. Абсолютно каждая шина имеет
                        неоднородность, а обод диска имеет незначительные углубления. Биение и вибрация это два разных параметра, независящих друг от друга. Биение устраняется балансировочными грузами, а виброконтроль - подгонкой шины к диску.<span> </span>
                        <span className="selected__text">Даже идеально отбалансированное колесо может создавать вибрации, если его не
                            проверять под нагрузкой!</span> Разница между мягкими и жесткими местами на
                        шине является неоднородностью. При наезде на жесткое место шины,
                        колесо подпрыгивает и создает удар по ступице, который передаётся вашей
                        подвеске, что вызывает вибрации на высоких скоростях (80+ км/ч), так как
                        подвеска не успевает отрабатывать удары с такой высокой частотой.
                        Измерительные инструменты на стенде точно определяют причины
                        возникновения вибраций. После завершения виброконтроля, стенд
                        показывает значение силовой неоднородности и предлагает выполнить
                        подгонку для снижения вибраций. При подгонке, стенд предлагает
                        провернуть шину относительно диска на определённый угол, чтобы жесткое
                        место покрышки село в углубление на диске, тем самым  <span className="selected__text">компенсируется
                            неоднородность шины и минимизируются вибрации в колесе. После удачной
                            подгонки повышается комфорт и улучшается управляемость</span>. Передвигаться
                        на автомобиле становится значительно приятнее и безопаснее.
                    </p>
                    <div className="img__box">
                        <img src={HuntRev10} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                        <img src={HuntRev11} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                    </div>
                    <p className="mt t_justify">
                        Технология Smart Weight позволяет <span className="selected__text">снизить количество устанавливаемых грузов
                            на внутреннюю полку диска без ухудшения качества балансировки</span>.
                        Станок полностью устраняет динамический дисбаланс (смесь статического и
                        парного дисбаланса, где статический дисбаланс - биение колеса
                        относительно оси вращения, а парный дисбаланс - биение колеса
                        относительно плоскости вращения). Лазерный указать помогает точно
                        установить балансировочный груз.
                        Система центрирования Bull’s Eye состоящая из двухсторонних конусов с
                        малым углом обеспечивает <span className="selected__text">превосходную центровку и предотвращает
                            повреждения колес</span>.<br />
                        Измерение бовового увода StraightTrak
                        Стенд Hunter RFE позволяет выявить <span className="selected__text">боковой увод, связанный с
                            конусностью шины</span>. Если присутствует боковой увод автомобиля, но при
                        этом значение углов установки колес находятся в норме, то возможно дело
                        не в «сход-развале». Стенд измеряет боковой увод каждого колеса при
                        измерении силовой неоднородности нагрузочным роликом, выявляет
                        проблему и предлагает решение. Конусность шины можно измерить только
                        когда колесо находится под нагрузкой. <span className="selected__text">Стенд подсказывает оптимальное
                            размещение колес для минимизации эффекта бокового увода</span>.
                    </p>
                    <div className="img__box">
                        <img src={HuntRev12} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                        <img src={HuntRev13} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px', }} />
                    </div>
                </div>
                <div className="navigation">
                    <ul>
                        <li className="service__block wow fadeInDown" onClick={() => {
                            window.location.href = '/price/tirechange'
                        }}>
                            <img className="service__logo" src={shinomontazh} style={{ marginRight: '25px' }} />
                            <p style={{ margin: '0' }} className="bt">Прайс-лист</p>
                        </li>
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
                    </ul>
                </div>
            </section>
        );
    }
    return (
        <section className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Шиномонтаж</title>
                <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                <script src="https://arszag.ru/yametrika.js" type="text/javascript"></script>
                <link rel="canonical" href="https://arszag.ru" />
                <link rel="shortcut icon" href="https://arszag.ru/fav.ico" />
                <meta name="description" content="ARSZAG DETAILING - профессиональный уход за вашим авто." />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
            </Helmet>
            <div className="top__logo" onClick={navigateHome}>
                <article className="article_t">ARSZAG</article>
                <article className="article_b">DETAILING</article>
            </div>
        </section>
    );
}
