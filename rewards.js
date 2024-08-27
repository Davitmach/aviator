(function() {
  const PORT = 18855;
  const tg = {
      initData: "user=%7B%22id%22%3A1974611991%2C%22first_name%22%3A%22David%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Davidqaqq%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-7558594942258246586&chat_type=private&auth_date=1723549119&hash=ec5d0f027d1c30f7de46c08dea3577bb8e396e4c5b3c04de0f731d28f5a4767d"
  };
const Daily  = document.getElementById('Daily_btn');
const Flight = document.getElementById('Flight_btn');
const Maining = document.getElementById('Mining_btn');
const Mining_claim = document.getElementById('Mining_claim');
const Fly_title = document.getElementById('Fly_title');
// const Flight_time = document.getElementById('Flight_time');
  const getBalance = async () => {
      const response = await fetch('https://toxicwaste.mooo.com/api_gpvfkgsi/getBalance', {
          method: 'POST',
          headers: {
              'accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({ 'init_data': tg.initData })
      });

      const data = await response.json();

      document.querySelector('#Rewards_balance_box').innerHTML = (data.balance.toFixed(2) / 10).toString();
      setTimeout(() => {
        getBalance()
      }, 100);
  };

  getBalance();

  const getRewards = async () => {
      const response = await fetch('https://toxicwaste.mooo.com/api_gpvfkgsi/rewards', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({ 'init_data': tg.initData })
      });

      const data = await response.json();
 console.log(data);
 
      Daily.addEventListener('click',()=> {
    getClaim('daily')
  })
  Flight.addEventListener('click',()=> {
    if(data.flight_task.current_flight_time >=data.flight_task.required_time ) {
    getClaim('flight')
    }
  })
  Maining.addEventListener('click',()=> {
    getClaim('mining')
    document.querySelector('#Mining_btn').classList.add('Disable_claim');

  })
      
Fly_title.innerHTML =`Fly by for ${data.flight_task.required_time} seconds`
      Mining_claim.innerHTML =`+${data.mining_claim.current_mined/10}`
      Flight_time.innerHTML =Flight_time.innerHTML.replace(/{flight_time}/g, `${data.flight_task.current_flight_time < data.flight_task.required_time ? data.flight_task.current_flight_time :data.flight_task.required_time} / ${data.flight_task.required_time}` )
      if (data.daily_claim.current_period_reward == false) {
          document.querySelector('#Daily_btn').classList.add('Active_claim');
      } else {
          document.querySelector('#Daily_btn').classList.add('Disable_claim');
      }

      if (data.flight_task.current_period_reward == false &&  parseInt(data.flight_task.current_flight_time) >= parseInt(data.flight_task.required_time)) {
       
        
          document.querySelector('#Flight_btn').classList.add('Active_claim');
      } else {
          document.querySelector('#Flight_btn').classList.add('Disable_claim');
      }

      if (data.mining_claim.current_mined > (0.1*10)) {
        document.querySelector('#Mining_btn').classList.remove('Disable_claim');
          document.querySelector('#Mining_btn').classList.add('Active_claim');
      } else {
        document.querySelector('#Mining_btn').classList.remove('Active_claim');
          document.querySelector('#Mining_btn').classList.add('Disable_claim');
      }
   

      setTimeout(() => {
        getRewards()
      }, 2000);
  };


  getRewards();

  const getClaim = async (claim) => {
      
      const response = await fetch('https://toxicwaste.mooo.com/api_gpvfkgsi/rewards', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({ 'init_data': tg.initData, 'claim': claim })
      });

      const data = await response.json();
  };
  


})();
