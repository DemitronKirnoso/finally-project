import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react'
import 'swiper/css';
const Home = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('https://ccaee13e37507cdd.mokky.dev/games')
            .then((response) => {
                setCars(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    
    return (
        <div className="">
            
            <div className="ff gap-[50px] w-full h-[100px] opacity-75 bg-[#90e6ff] ">
            <a className="text-[50px] gap-[50px] ml-[30px] font-extrabold text-[#0061ff]" href="http://localhost:5173/clicker">Кликер</a>
            <a className="text-[50px] gap-[50px] ml-[100px] font-extrabold text-[#0061ff]" href="http://localhost:5173/pl">Что-то</a>
            </div>            
            <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><a href="https://doom.bethesda.net/en-US/doom_doomii"><img className="w-[700px] h-[350px] rounded-[36px]" src="https://habrastorage.org/getpro/habr/upload_files/0e5/9ae/520/0e59ae5203393efe41eba9fbbc9c2ed1.jpg" alt="" /></a> </SwiperSlide>
      <SwiperSlide><a href="https://www.counter-strike.net/cs2"><img className="w-[700px] h-[350px] rounded-[36px]" src="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg" alt="" /></a></SwiperSlide>
      <SwiperSlide><a href="https://www.ea.com/ru-ru/games/zuma/zuma" ><img className="w-[700px] h-[350px] rounded-[36px]" src="https://store-images.s-microsoft.com/image/apps.6228.67411114035750393.2854ca19-b4a9-4344-8f1d-e8b2bc93c210.4c3bec85-8c72-462b-a8ca-8d9ed502b225?q=90&w=480&h=270" alt="" /></a></SwiperSlide>
      <SwiperSlide><a href="https://supercell.com/en/games/brawlstars/" ><img className="w-[700px] h-[350px] rounded-[36px]" src="https://assetsio.gnwcdn.com/brawl-stars-tier-list.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" alt="" /></a></SwiperSlide>
      <SwiperSlide><a href="https://store.steampowered.com/app/3330/Zuma_Deluxe/" ><img className="w-[700px] h-[350px] rounded-[36px]" src="https://images.launchbox-app.com/e0f68234-12b9-46dc-b890-cf7f4839b9be.jpg" alt="" /></a></SwiperSlide>
      <SwiperSlide><a href="https://doom.bethesda.net/en-US/the-dark-ages" ><img className="w-[700px] h-[350px] rounded-[36px]" src="https://images.mweb.bethesda.net/_images/doom-the-dark-ages/doom-tda-premium-banner.webp?f=jpg&h=1030&w=1858&s=RUEHO3D3bUaIF88RAvCBhkU75xNd6nnDXHv5TaiDOAw" alt="" /></a></SwiperSlide>
      <SwiperSlide><a href="https://store.steampowered.com/app/730/CounterStrike_2/" ><img className="w-[700px] h-[350px] rounded-[36px]" src="https://i.ytimg.com/vi/aRRQuvD4E5E/maxresdefault.jpg" alt="" /></a></SwiperSlide>
      <SwiperSlide><a href="https://play.google.com/store/apps/details/Brawl_Stars?id=com.supercell.brawlstars&hl=ru&pli=1" ><img className="w-[700px] h-[350px] rounded-[36px]" src="https://zastavki.gas-kvas.com/uploads/posts/2024-05/zastavki-gas-kvas-com-8yis-p-zastavki-pervie-bravo-stars-3.jpg" alt="" /></a></SwiperSlide>
      
    </Swiper>
                <h1 className="ml-[25px] text-[40px] text-[#1e275f]">Список игр:</h1>
                {cars.map((item, index) => (
                    <div className="items center">
                        <h3 className=" text-[35px] text-[#3b124d] text-center text-b" key={index}>{item.title} <span className="b5 text-[#c10000]  font-extrabold">Price {item.price}</span></h3>

                        <div className="flex">
                            <img src={item.photo} alt="" className="w-[300px]  items-center ml-[25px]" />
                            <p className="mt-[55px] ml-[300px] text-[25px] w-[400px] text-left items-center">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="tt gap-[50px] w-full h-[100px] opacity-75 bg-[#90e6ff] "></div>
        </div>

    )
}

export default Home