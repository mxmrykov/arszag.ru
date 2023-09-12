
import Parallax from 'react-scroll-parallax'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import NotFound from './Components/NotFound'
import PriceType from './Components/PriceType'
import Price from './Components/Price'
import Tirechange from './Components/Tirechange'
import TiresAndDisks from './Components/TiresAndDisks';
import Strahovka from './Components/Strahovka';
import Seller from './Components/Seller';
import Helmet from "react-helmet";
import Gift from './Components/Gift';
export default function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} />
      <Route path='/%D0%BF%D1%80%D0%B0%D0%B9%D1%81' element={<Price />} />
      <Route path='/%D0%BF%D1%80%D0%B0%D0%B9%D1%81/:type' element={<PriceType />} />
      <Route path='/%D0%A8%D0%B8%D0%BD%D1%8B%20%D0%B8%20%D0%B4%D0%B8%D1%81%D0%BA%D0%B8' element={<TiresAndDisks />} />
      <Route path='/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B' element={<Contacts />} />
      <Route path='/%D1%88%D0%B8%D0%BD%D0%BE%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6/:select' element={<Tirechange />} />
      <Route path='*' element={<NotFound />} /> */}
      <Route path='/' element={<Home />} />
      <Route path='/gift_certificate' element={<Gift />} />
      <Route path='/' element={<Home />} />
      <Route path='/osago/:id' element={<Strahovka />} />
      <Route path='/whatsapp' element={<Redir_whats />} />
      <Route path='/osago' element={<Main_osago />} />
      <Route path='/price/:type' element={<PriceType />} />
      <Route path='/seller/:id/:hash' element={<Seller />} />
      <Route path='/tires_disks' element={<TiresAndDisks />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/tirechange/:select' element={<Tirechange />} />
      <Route path='/tinkoff' element={<Redir_tinkoff />} />
      <Route path='/unionpaygazprom' element={<Redir_unionpaygazprom />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
  );
}
export function Redir_unionpaygazprom() {
  return (
    <Helmet>
      <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
      <script>
        window.location.href = 'https://amdgstat.ru/pampadu_unionpay?affiliate_id=79657&source=pampadu';
      </script>
    </Helmet>

  )
}
export function Redir_tinkoff() {
  return (
    <Helmet>
      <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
      <script>
        window.location.href = 'https://rfnd.io/t/mynmp/?pid=782&sub1=79657';
      </script>
    </Helmet>

  )
}
export function Redir_whats() {
  return (
    <Helmet>
      <script type="text/javascript" src='https://arszag.ru/server/yametrica.js'></script>
      <script>
        window.location.href = 'whatsapp://send?phone=79851771010&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%21%20%0A%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%3A%0A%D0%A4%D0%98%D0%9E%3A%20%0A%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%3A%0A%D0%93%D0%BE%D1%81.%20%D0%9D%D0%BE%D0%BC%D0%B5%D1%80%3A%0A%D0%94%D0%B0%D1%82%D0%B0%20%D0%B8%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%3A%20'
      </script>
    </Helmet>
  )
}
export function Main_osago() {
  return (
    <div className="App" style={{ height: '100vh', paddingTop: 120, background: 'white' }}>
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
        <iframe src='https://b2c.pampadu.ru/index.html#93c4edf6-1c57-4c0e-bf98-d76e7fa31054' style={{ width: '100%', border: 'none', height: 650, minWidth: 320, overflow: "hidden" }} id='ppdwi' scrolling='no'></iframe>
      </div>
    </div>
  )
}