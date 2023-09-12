import React from "react";
import wheel from './img/22.png'
import Helmet from "react-helmet";
class NotFound extends React.Component {
    render() {
        return (

            <section className="App">
                <Helmet>
                    <script src="https://arszag.ru/backgroundAnimation.js" type="text/javascript"></script>
                    <meta charSet="utf-8" />
                    <title>Страница не найдена.</title>
                    <meta name="description" content="Данная страница не найдена." />
                </Helmet>
                <div className="not__found_main">
                    <div className="not__found_top_block">
                        <img style={{ width: '85px' }} src={wheel} className='not__found_wheel' />
                        <div>
                            <h1 className="bt facon">404</h1>
                            <h1 className="mt">Страница не найдена.</h1>
                        </div>
                    </div>
                    <p>
                        Похоже, введённый вами адрес не существует.<br></br>
                        Измените URL или повторите попытку позже.
                    </p>
                </div>
            </section>
        );
    }
}
export default NotFound;