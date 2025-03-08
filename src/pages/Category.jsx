import React, { useState, useEffect } from 'react';

let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(function () {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let formattedHours = hours < 10 ? "0" + hours : hours;
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById('timer').innerText = `Возраст: ${formattedHours}:${formattedMinutes}:${formattedSeconds}⏳`;
}, 1000);

function Category() {

  const texts = ['O_O', 'X_X', 'T_T', '￣へ￣', '⌐■_■'];

  const loadFromStorage = (key, defaultValue) => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : defaultValue;
  };

  const [clicks, setClicks] = useState(loadFromStorage('clicks', 0));
  const [index, setIndex] = useState(0);
  const [dogs, setDogs] = useState(loadFromStorage('dogs', []));
  const [golem, setGolem] = useState(loadFromStorage('golem', []));
  const [damage, setDamage] = useState(loadFromStorage('damage', 1));
  const [superHitLevel, setSuperHitLevel] = useState(loadFromStorage('superHitLevel', 1));
  const [swordBought, setSwordBought] = useState(loadFromStorage('swordBought', false));
  const [hammerBought, setHammerBought] = useState(loadFromStorage('hammerBought', false));
  const [golemBought, setGolemBought] = useState(loadFromStorage('golemBought', false));
  const [lastSuperHitTime, setLastSuperHitTime] = useState(loadFromStorage('lastSuperHitTime', null));
  const [dogPrice, setDogPrice] = useState(loadFromStorage('dogPrice', 30));
  const [golemPrice, setGolemPrice] = useState(loadFromStorage('golemPrice', 75));

  const roundClicks = (value) => {
    return parseFloat(value.toFixed(1));
  };

  const handleClick = () => {
    setClicks((prevClicks) => {
      const newClicks = roundClicks(prevClicks + damage);
      localStorage.setItem('clicks', JSON.stringify(newClicks));
      return newClicks;
    });
    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handleBuyDog = () => {
    if (clicks >= dogPrice) {
      const newDogs = [];
      const dogCount = Math.floor(clicks / dogPrice);

      for (let i = 0; i < dogCount; i++) {
        newDogs.push("https://pngfre.com/wp-content/uploads/dog-135-300x287.png");
      }

      setDogs((prevDogs) => {
        const updatedDogs = [...prevDogs, ...newDogs];
        localStorage.setItem('dogs', JSON.stringify(updatedDogs));
        return updatedDogs;
      });

      setClicks((prevClicks) => {
        const newClicks = roundClicks(prevClicks - dogCount * dogPrice);
        localStorage.setItem('clicks', JSON.stringify(newClicks));
        return newClicks;
      });

      const newDogPrice = dogPrice * 1.4;
      setDogPrice(newDogPrice);
      localStorage.setItem('dogPrice', JSON.stringify(newDogPrice.toFixed(2)));
    } else {
      alert(`Не хватает кликов для покупки собаки, стоимость: ${dogPrice} ударов`);
    }
  };

  const handleBuyGolem = () => {
    if (clicks >= golemPrice) {
      const newGolems = [];
      const golemCount = Math.floor(clicks / golemPrice);

      for (let i = 0; i < golemCount; i++) {
        newGolems.push("https://illustrators.ru/uploads/illustration/image/1542320/square_%D1%81%D0%BA%D0%B0%D1%80%D0%BD.png");
      }

      setDogs((prevGolems) => {
        const updatedGolems = [...prevGolems, ...newGolems];
        localStorage.setItem('dogs', JSON.stringify(updatedGolems));
        return updatedGolems;
      });

      setClicks((prevClicks) => {
        const newClicksG = roundClicks(prevClicks - golemCount * golemPrice);
        localStorage.setItem('clicks', JSON.stringify(newClicksG));
        return newClicksG;
      });

      const newGolemPrice = golemPrice * 1.4;
      setGolemPrice(newGolemPrice);
      localStorage.setItem('golemPrice', JSON.stringify(newGolemPrice.toFixed(2)));
    } else {
      alert(`Не хватает кликов для покупки голема, стоимость: ${golemPrice} ударов`);
    }
  };

  const handleBuySword = () => {
    if (clicks >= 150 && !swordBought) {
      setDamage((prevDamage) => {
        const newDamage = prevDamage + 5;
        localStorage.setItem('damage', JSON.stringify(newDamage));
        return newDamage;
      });
      setClicks((prevClicks) => {
        const newClicks = roundClicks(prevClicks - 150);
        localStorage.setItem('clicks', JSON.stringify(newClicks));
        return newClicks;
      });
      setSwordBought(true);
      localStorage.setItem('swordBought', JSON.stringify(true));
      alert('Вы успешно купили меч!');
    } else if (swordBought) {
      alert("Вы уже купили меч!");
    } else {
      alert("Не хватает кликов для покупки меча, стоимость 150 ударов");
    }
  };

  const handleBuyHammer = () => {
    if (clicks >= 300 && !hammerBought) {
      setDamage((prevDamage) => {
        const newDamage = prevDamage + 10;
        localStorage.setItem('damage', JSON.stringify(newDamage));
        return newDamage;
      });
      setClicks((prevClicks) => {
        const newClicks = roundClicks(prevClicks - 300);
        localStorage.setItem('clicks', JSON.stringify(newClicks));
        return newClicks;
      });
      setHammerBought(true);
      localStorage.setItem('hammerBought', JSON.stringify(true));
      alert('Вы успешно купили молот!');
    } else if (hammerBought) {
      alert("Вы уже купили молот!");
    } else {
      alert("Не хватает кликов для покупки молота, стоимость 300 ударов");
    }
  };

  const handleSuperHit = () => {
    const currentTime = new Date().getTime();
    if (lastSuperHitTime && currentTime - lastSuperHitTime < 60000) {
      alert("Супер удар можно забрать только раз в минуту!");
      return;
    }
    setDamage((prevDamage) => {
      const newDamage = prevDamage + (superHitLevel + 2);
      localStorage.setItem('damage', JSON.stringify(newDamage));
      return newDamage;
    });
    setLastSuperHitTime(currentTime);
    localStorage.setItem('lastSuperHitTime', JSON.stringify(currentTime));
    alert(`Вы успешно использовали супер удар! Урон увеличен на ${superHitLevel * 2}!`);
  };

  const handleUpgradeSuperHit = () => {
    if (clicks >= 250) {
      setClicks((prevClicks) => {
        const newClicks = roundClicks(prevClicks - 250);
        localStorage.setItem('clicks', JSON.stringify(newClicks));
        return newClicks;
      });
      setSuperHitLevel((prevLevel) => {
        const newLevel = prevLevel + 1;
        localStorage.setItem('superHitLevel', JSON.stringify(newLevel));
        return newLevel;
      });
      alert(`Супер удар улучшен до уровня ${superHitLevel + 1}!`);
    } else {
      alert("Не хватает кликов для улучшения супер удара.");
    }
  };

  const style = 'mt-[15px] bg-[#a0d8ff] border border-[#084f81] border-[4px] rounded-[15px] p-[10px] hover:bg-[#7bc6ff] transition-all duration-225 ease-out';

  return (
    <div className='flex'>
      <div className=''>
        <div className="ff gap-[50px] w-full h-[100px] opacity-75 bg-[#90e6ff] ">
          <a className="text-[50px] gap-[50px] ml-[30px] font-extrabold text-[#0061ff]" href="https://finally-project-kappa.vercel.app/">Домой</a>
          <a className="text-[50px] gap-[50px] ml-[100px] font-extrabold text-[#0061ff]" href="https://finally-project-kappa.vercel.app/pl">Что-то</a>
        </div>
        <div className='flex'></div>
        <div className='flex justify-center w-screen h-auto bg-[url("https://www.fabricsandpapers.com/media/catalog/product/cache/6eb7ad2e23ee8696c4e64c0befcff895/j/a/jaggedstripe_denim-1024x1024.jpg")]'>
          <div className='flex flex-col mr-[100px]'>
            <button onClick={handleClick} className='mt-[85px] drop-shadow-[0_35px_35px_black] w-[400px] text-[70px] h-[400px] rounded-[185px] px-6 py-3 bg-[#aed4ff] active:w-[325px] active:h-[325px] active:mt-[100px] active:animate-temp-color active:bg-[#91bdef] transition-all duration-225 ease-out'>
              {texts[index]}
            </button>
           
          </div>

             
              
            
          <div className='flex gap-[70px]'>
            {/* Олег */}
            <div className={`flex flex-col items-center rounded-[15px] p-[10px] h-auto bg-[#a0d8ff] border border-[#084f81] flip-right w-[600px]`}>
              <h1 className='mt-[4px] font-extrabold text-[30px] text-[#084f81] '>Имя: Олег😎</h1>
              <h2 className='mt-[4px] font-extrabold text-[30px] text-[#084f81] '>Ударов: {clicks}👊</h2>
              <div className='mt-[4px] font-extrabold text-[30px] text-[#084f81] ' id='timer'>Возраст: 00:00:00⏳</div>
              <button onClick={handleSuperHit} className="font-bold text-[#850000] mt-[15px] bg-[#ffdc2c] border border-[#8b0000] border-[4px] rounded-[15px] p-[10px] hover:bg-[#c69c29] transition-all duration-225 ease-out">Забрать Супер Удар🧨</button>
              <button onClick={handleBuyDog} className="font-bold text-[#784003] mt-[15px] bg-[#ffc6a3] border border-[#482900] border-[4px] rounded-[15px] p-[10px] hover:bg-[#d3bca3] transition-all duration-225 ease-out">Купить собаку🐺</button>
              <button onClick={handleBuyGolem} className="font-bold text-[#3b3b3b] mt-[15px] bg-[#eaeaea] border border-[#363636] border-[4px] rounded-[15px] p-[10px] hover:bg-[#c3c3c3] transition-all duration-225 ease-out">Купить Голема🪨</button>
              

               
            
              <div className='flex-col items-center justify-center'>
                 <div className="mt-5 flex flex-wrap gap-4">
                {dogs.map((dog, index) => (
                  <img key={index} src={dog} alt="Собака" className="w-25  h-25 rounded-lg" />
                ))}
              </div>
            
           
            <div className="mt-5 flex flex-wrap gap-4">
                {golem.map((golemImage, indexb) => (
                  <img key={indexb} src={golemImage} alt="Голем" className="w-75 h-75 rounded-lg" />
                ))}
              </div>
              </div>
            </div>

            
            <div className='flex flex-col items-center rounded-[15px] p-[10px] h-screen bg-[#a0d8ff] border border-[#084f81] flip-right w-[600px]'>
              <h1 className='mt-[4px] font-extrabold text-[30px] text-[#084f81] '>Прокачка:</h1>

              <button onClick={handleBuySword} className="font-bold text-[#00488b] mt-[15px] bg-[#a0d8ff] border border-[#084f81] border-[4px] rounded-[15px] p-[10px] hover:bg-[#7bc6ff] transition-all duration-225 ease-out">Купить Меч ⚔️(150 ударов)</button>
              <button onClick={handleBuyHammer} className="font-bold text-[#00488b] mt-[15px] bg-[#a0d8ff] border border-[#084f81] border-[4px] rounded-[15px] p-[10px] hover:bg-[#7bc6ff] transition-all duration-225 ease-out">Купить Молот⛏️(300 ударов)</button>
              <button onClick={handleUpgradeSuperHit} className="font-bold text-[#00488b] mt-[15px] bg-[#a0d8ff] border border-[#084f81] border-[4px] rounded-[15px] p-[10px] hover:bg-[#7bc6ff] transition-all duration-225 ease-out">Улучшить Супер Удар💥(250 ударов)</button>
              
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
