


var tg = {
  initData:
    "user=%7B%22id%22%3A1974611991%2C%22first_name%22%3A%22David%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Davoooooooooooooooooooooooo%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-7558594942258246586&chat_type=private&auth_date=1724299858&hash=33fc3bb7c98d2f14f423f193ec6a6af0ae18cbec776d062cec3ecfe377550264",
};

const getBalance = async () => {
  const response = await fetch(
    "https://toxicwaste.mooo.com/api_gpvfkgsi/getBalance",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:new URLSearchParams({
 'init_data': tg.initData
      })
    }
  );

  const data = await response.json();
  document.querySelector("#Balance_box").innerHTML = data.balance;
};

// getBalance();
var LastGames = [];

const Last = document.getElementById("Last_games");
const Under_last_box = document.getElementById("Under_last_games_box");
const Under_last = document.getElementById("Under_last_games");
const Close_under = document.getElementById("Close_box");
Under_last.classList.add("Disable_under");    
var Count;

var Width = window.innerWidth;

// Для создания Count после открытия игры
if (Width > 300 && Width < 350) {
  Count = 2;
} else if (Width > 350 && Width < 400) {
  Count = 3;
} else if (Width > 400 && Width < 500) {
  Count = 4;
}
//  создания Count во время  игры
window.addEventListener("resize", () => {
  Width = window.innerWidth;
  if (Width > 300 && Width < 350) {
    Count = 2;
  } else if (Width > 350 && Width < 400) {
    Count = 3;
  } else if (Width > 400 && Width < 500) {
    Count = 4;
  }
});
var Open_under_status = true;
function ShowLastGames(games) {
  Last.innerHTML = "";
  Under_last_box.innerHTML = "";

  const limit = Math.min(LastGames.length, Count);

  for (let index = 0; index < limit; index++) {
    var Last_box = document.createElement("div");
    Last_box.innerText = LastGames[index];
    if (index == 0) {
      Last_box.classList.add("first");
    } else {
      Last_box.classList.remove("first");
    }
    Last.append(Last_box);
  }
  if (games.length > Count) {
    for (let index = 0; index < LastGames.length; index++) {
      if(index< 12 ) {
      var Under = document.createElement("div");
      Under.innerText = LastGames[index];
      if (index == 0) {
        Under.classList.add("first");
      } else {
        Under.classList.remove("first");
      }
      Under_last_box.append(Under);
    }
    }
  }
  if (games.length > Count) {
    Last.style.justifyContent = "space-between";
    var Open_under = document.createElement("div");
    Open_under.classList.add("Open_under");
    Open_under.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4C8.44183 4 8.8 4.35817 8.8 4.8V8H11.2C11.6418 8 12 8.35817 12 8.8C12 9.24183 11.6418 9.6 11.2 9.6H8C7.55817 9.6 7.2 9.24183 7.2 8.8V4.8C7.2 4.35817 7.55817 4 8 4Z" fill="#95979D"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14.4 8C14.4 11.5346 11.5346 14.4 8 14.4C4.46538 14.4 1.6 11.5346 1.6 8C1.6 4.46538 4.46538 1.6 8 1.6C11.5346 1.6 14.4 4.46538 14.4 8Z" fill="#95979D"/>
      </svg>`;

    Last.append(Open_under);

    Open_under.addEventListener("click", () => {
      Under_last.classList.remove("Disable_under");

      
    });

    Close_under.addEventListener("click", () => {
      Under_last.classList.add("Disable_under");
    });
  }
}

function initializeWebSocket() {
  let T_MAX, M_MAX, PRECISION_MULTIPLIER;

  const PORT = 18855;

  const EVENT_PREPARE_NEXT_ROUND = "prepare_next_round",
    EVENT_START_ROUND = "start_round",
    EVENT_END_ROUND = "end_round",
    EVENT_BET_CONFIRMATION = "bet_confirmation",
    EVENT_BET = "bet",
    EVENT_CASH_OUT_CONFIRMATION = "cash_out_confirmation",
    EVENT_CASH_OUT = "cash_out",
    EVENT_CANCEL_BET_CONFIRMATION = "cancel_bet_confirmation",
    EVENT_CANCEL_BET = "cancel_bet",
    EVENT_WELCOME = "welcome";

  var CONFIG_BUTTON_BET = {
      id: "bet",
      onclick: playerPlaceBet,
      textContent: `BET`,
    },
    CONFIG_BUTTON_CANCEL_BET = {
      id: "cancel_bet",
      onclick: playerCancelBet,
      textContent: "CANCEL",
    },
    CONFIG_BUTTON_CASH_OUT = {
      id: "cash_out",
      onclick: playerCashOut,
      textContent: "GET",
    };

  const multiplierElement = document.getElementById("multiplier"),
    balanceElement = document.getElementById("Balance_box"),
    counterBox = document.getElementById('Counter_box'),
    autoCounterBox = document.getElementById('Auto_counter_box'),
    betAmountInput = document.getElementById("betAmount"),
    autoAmountInput = document.getElementById("autoAmount"),
    actionButton = document.getElementById("actionButton"),
    autoActionBtn = document.getElementById("Auto_action_btn"),
    cashOutInput = document.getElementById("Cash_out_input"),
    autoCashOutClean = document.getElementById("Clear_auto_cash_out"),
    betsTableElement = document.getElementById("betsTable"),
    plane = document.getElementById("Plane"),
    currPlane = document.getElementById("Plane_curr"),
    linePlane = document.getElementById("Line"),
    multCrash = document.getElementById("CrushTxt"),
    waitLoading = document.getElementById("Waiting"),
    background = document.getElementById("Background"),
    Plus_amount = document.getElementById("Plus_btn"),
    Minus_amount = document.getElementById("Minus_btn"),
    Auto_plus_amount = document.getElementById("Auto_plus_btn"),
    Auto_minus_amount = document.getElementById("Auto_minus_btn"),
    def1 = document.getElementById("1Def"),
    def2 = document.getElementById("2Def"),
    def5 = document.getElementById("5Def"),
    def10 = document.getElementById("10Def"),
    def1_auto = document.getElementById("1Def_auto"),
    def2_auto = document.getElementById("2Def_auto"),
    def5_auto = document.getElementById("5Def_auto"),
    def10_auto = document.getElementById("10Def_auto"),
    pushUp = document.getElementById("Push_up"),
    allResult = document.getElementById("AllResult"),
    topResult = document.getElementById("TopResult"),
    myResults = document.getElementById("MyResult"),
    resultBackground = document.getElementById("ResultBackground"),
    progressBar = document.getElementById("Progress_bar"),
    closeHelp = document.getElementById("Close_help"),
    boxHelp = document.getElementById("Help_box"),
    betTypeBtn = document.getElementById("Bet_type_btn"),
    autoTypeBtn = document.getElementById("Auto_type_btn"),
    betBox = document.getElementById("Bet_box"),
    autoBox = document.getElementById("Auto_box");
    autoActionBtn.classList.remove('Auto_btn_active');
    autoActionBtn.classList.add('Auto_btn_disable');
  betTypeBtn.classList.add("Result_active");
  autoTypeBtn.classList.add("Result_disable");
  autoBox.style.visibility = "hidden";
  actionButton.classList.add('bet')
  autoCashOutClean.addEventListener("click", () => {
    cashOutInput.value = 1.01;
  });
 autoActionBtn.style.border = 'none'
  boxHelp.classList.add("Disable");
  allResult.classList.add("Result_active");
  topResult.classList.add("Result_disable");
  myResults.classList.add("Result_disable");
  allResult.addEventListener("click", () => {
    resultBackground.style.left = "7px";
    resultType.type = "all";
    topResult.classList.remove("Result_active");
    myResults.classList.remove("Result_active");
    topResult.classList.add("Result_disable");
    myResults.classList.add("Result_disable");
    allResult.classList.add("Result_active");
    allResult.classList.remove("Result_disable");
    updateBetsTable();
  });
  myResults.addEventListener("click", () => {
    allResult.classList.remove("Result_active");
    topResult.classList.remove("Result_active");
    allResult.classList.add("Result_disable");
    topResult.classList.add("Result_disable");
    myResults.classList.add("Result_active");
    myResults.classList.remove("Result_disable");
    resultType.type = "my";
    resultBackground.style.left = "35%";
    updateBetsTable();
  });
  topResult.addEventListener("click", () => {
    allResult.classList.remove("Result_active");
    topResult.classList.add("Result_active");
    topResult.classList.remove("Result_disable");
    myResults.classList.remove("Result_active");
    myResults.classList.add("Result_disable");
    allResult.classList.add("Result_disable");
    resultType.type = "top";
    resultBackground.style.left = "68%";
    updateBetsTable();
  });

  let gameState = {
    bets: [],
    lastEvent: false,
  };

  let startTime;
  let multiplierInterval = null;
  var resultType = {
    type: "all",
  };
  var myResult = [];
  var topResultList = [];
  var idCounter = 0;
  var userBet = [];
  var ChangeDef1 = true;
  var ChangeDef2 = true;
  var ChangeDef5 = true;
  var ChangeDef10 = true;
  var ChangeDef1_auto = true;
  var ChangeDef2_auto = true;
  var ChangeDef5_auto = true;
  var ChangeDef10_auto = true;
  var Help_menu = true;
  var Pages = 'bet';
  var AutoBet = false;
  var betStatus = true;
  var Bet = false;
var AutoType = false;
var AutoCashOut = false;
 var hasBet = false;
 var ChangeAutoInput = false;
var AutoCashOutMiltiplier;
var CashOutMultiplier;
var CashOutAmount;
  if (AutoType == false ) {
    autoActionBtn.innerText = "Auto play";
  } else {
    autoActionBtn.innerText = "CANCEL";
  }
  autoActionBtn.addEventListener("click", () => {
   
    CashOutAmount = autoAmountInput.value
CashOutMultiplier = cashOutInput.value.trim()
    CheckAuto();
  });

autoAmountInput.style.textAlign = 'center'

autoAmountInput.addEventListener('blur',()=> {
  CashOutAmount = autoAmountInput.value;
  autoAmountInput.style.textAlign = 'center'

  
  if(ChangeAutoInput == true) {
    autoCounterBox.style.border = '2px solid green'
  
     setTimeout(() => {
       autoCounterBox.style.border = 'none'
     }, 1000);
  }
  if(autoAmountInput.value < 1) {
    AutoBet = false;
    AutoType = false;
    if (AutoType == false ) {
      autoActionBtn.innerText = "Auto play";
      autoActionBtn.classList.add('Auto_btn_disable');
              autoActionBtn.classList.remove('Auto_btn_active');
    } else {
      autoActionBtn.innerText = "CANCEL";
      autoActionBtn.classList.remove('Auto_btn_disable');
              autoActionBtn.classList.add('Auto_btn_active');
    }
  }
})
cashOutInput.addEventListener('blur',()=> {
  if(ChangeAutoInput == true) {
    CashOutMultiplier =cashOutInput.value.trim()
    document.querySelector(".Auto_input_box").style.border = "1px solid green"
  
    setTimeout(() => {
      document.querySelector(".Auto_input_box").style.border = "none";
    }, 1000);
  }
  if(cashOutInput.value < 1.01) {
    AutoType = false;
    AutoBet = false;
    if (AutoType == false ) {
      autoActionBtn.innerText = "Auto play";
      autoActionBtn.classList.remove('Auto_btn_active');
      autoActionBtn.classList.add('Auto_btn_disable');
    } else {
      autoActionBtn.innerText = "CANCEL";
      autoActionBtn.classList.add('Auto_btn_active');
      autoActionBtn.classList.remove('Auto_btn_disable');
    }
  }
  
})
function CheckAuto() {
 
  if(hasBet == true) {
    autoActionBtn.style.border = '2px solid red'
  }
  else {
    autoActionBtn.style.border = 'none'
  }

  updateBetsTable()
  var cashOutValue =  CashOutMultiplier; 

  var isCorrectFormat = /^[0-9]+(\.[0-9]{1,2})?$/.test(cashOutValue);

  if (!isCorrectFormat) {
      document.querySelector(".Auto_input_box").style.border = "1px solid red";
      return;
  }

  var formattedCashOutValue = cashOutValue.includes('.') && cashOutValue.split('.')[1].length === 1
      ? cashOutValue 
      : parseFloat(cashOutValue).toFixed(2);


  var isValid = parseFloat(formattedCashOutValue) > 1;


  if (AutoType == false && Pages == 'auto' ) {
      if (isValid) {
          if (parseFloat(autoAmountInput.value) > 0) {
            if(hasBet == false) {
            autoCounterBox.style.border = 'none'
              betStatus = false;
              document.querySelector(".Auto_input_box").style.border = "none";
              AutoType = true;
              ChangeAutoInput = true;
              autoActionBtn.innerText = "CANCEL";
              autoActionBtn.classList.remove('Auto_btn_disable');
              autoActionBtn.classList.add('Auto_btn_active');
              cashOutInput.value = formattedCashOutValue;
              if (betStatus == true) {  
                  playerPlaceBet();
                  
                  Bet = true;
              }}
          } else {
            autoCounterBox.style.border = '1px solid red'
          }
      } else {
   if(!parseFloat(autoAmountInput.value) > 0) {
autoCounterBox.style.border = '1px solid red'
   }
          document.querySelector(".Auto_input_box").style.border = "1px solid red";
      }
  } else if (AutoType == true && Pages == 'auto') {
    AutoType = false;
    ChangeAutoInput = false;
    AutoBet = false;
      autoActionBtn.innerText = "Auto play";
  if(AutoCashOut == false && gameState.lastEvent !== 'end_round' && gameState.lastEvent !== 'start_round') {
 playerCancelBet()
 

 
  }
      
      
      // myResult = myResult.filter((e) => e.id !== idCounter);

      autoActionBtn.classList.add('Auto_btn_disable');
      autoActionBtn.classList.remove('Auto_btn_active');
  }
}



  betTypeBtn.addEventListener("click", () => {
    Pages = "bet";
    AutoType = false;
    AutoBet = false;
   
    autoActionBtn.innerText = "Auto play";
    autoActionBtn.classList.add('Auto_btn_disable');
    autoActionBtn.classList.remove('Auto_btn_active');
    ChangePage(Pages);
    betTypeBtn.classList.remove("Result_disable");
    betTypeBtn.classList.add("Result_active");
    autoTypeBtn.classList.add("Result_disable");
    autoTypeBtn.classList.remove("Result_active");
    background.style.left = "7px";
  });
  autoTypeBtn.addEventListener("click", () => {
    Pages = "auto";

    ChangePage(Pages);
    autoTypeBtn.classList.remove("Result_disable");
    betTypeBtn.classList.remove("Result_active");
    autoTypeBtn.classList.add("Result_active");
    betTypeBtn.classList.add("Result_disable");
    background.style.left = "48%";
  });

  function ChangePage(page) {
    if (page == "bet") {
      betBox.style.visibility = "visible";
      autoBox.style.visibility = "hidden";
    } else if (page == "auto") {
      autoBox.style.visibility = "visible";
      betBox.style.visibility = "hidden";
    }
  }

  betAmountInput.addEventListener("click", () => {
    if (Help_menu == true) {
      boxHelp.classList.remove("Disable");
      boxHelp.classList.add("Active");
    }
  });
  betAmountInput.style.textAlign = 'center';
betAmountInput.addEventListener('input',()=> {
  betAmountInput.style.textAlign = 'center';
})
  autoAmountInput.addEventListener("click", () => {
    if (Help_menu == true) {
      boxHelp.classList.remove("Disable");
      boxHelp.classList.add("Active");
    }
  });
  closeHelp.addEventListener("click", () => {
    Help_menu = false;
    boxHelp.classList.remove("Active");
    boxHelp.classList.add("Disable");
  });

  def1.addEventListener("click", () => {
    ChangeDef2 = true;
    ChangeDef5 = true;
    ChangeDef10 = true;

    if (ChangeDef1 == true) {
      betAmountInput.value = 1;
      ChangeDef1 = false;
    } else {
      
        
      
      betAmountInput.value = parseFloat(betAmountInput.value) + 1 || 1;
    }
  });
  def2.addEventListener("click", () => {
    ChangeDef1 = true;
    ChangeDef5 = true;
    ChangeDef10 = true;

    if (ChangeDef2 == true) {
      betAmountInput.value = 2;
      ChangeDef2 = false;
    } else {
      
      betAmountInput.value = parseFloat(betAmountInput.value) + 2 || 2;
    }
  });
  def5.addEventListener("click", () => {
    ChangeDef1 = true;
    ChangeDef2 = true;
    ChangeDef10 = true;

    if (ChangeDef5 == true) {
      betAmountInput.value = 5;
      ChangeDef5 = false;
    } else {
      
      betAmountInput.value = parseFloat(betAmountInput.value) + 5 || 5;
    }
  });
  def10.addEventListener("click", () => {
    ChangeDef1 = true;
    ChangeDef5 = true;
    ChangeDef2 = true;

    if (ChangeDef10 == true) {
      betAmountInput.value = 10;
      ChangeDef10 = false;
    } else {
      
      betAmountInput.value = parseFloat(betAmountInput.value) + 10 || 10;
    }
  });

  // auto

  def1_auto.addEventListener("click", () => {
    ChangeDef2_auto = true;
    ChangeDef5_auto = true;
    ChangeDef10_auto = true;
    if (ChangeDef1_auto == true) {
      autoAmountInput.value = 1;
      ChangeDef1_auto = false;
    } else {
      
      autoAmountInput.value = parseFloat(autoAmountInput.value) + 1 || 1;
    }
  });
  def2_auto.addEventListener("click", () => {
    ChangeDef1_auto = true;
    ChangeDef5_auto = true;
    ChangeDef10_auto = true;

    if (ChangeDef2_auto == true) {
      autoAmountInput.value = 2;
      ChangeDef2_auto = false;
    } else {
      
      autoAmountInput.value = parseFloat(autoAmountInput.value) + 2 || 2;
    }
  });
  def5_auto.addEventListener("click", () => {
    ChangeDef1_auto = true;
    ChangeDef2_auto = true;
    ChangeDef10_auto = true;

    if (ChangeDef5_auto == true) {
      autoAmountInput.value = 5;
      ChangeDef5_auto = false;
    } else {
      
      autoAmountInput.value = parseFloat(autoAmountInput.value) + 5 || 5;
    }
  });
  def10_auto.addEventListener("click", () => {
    ChangeDef1_auto = true;
    ChangeDef5_auto = true;
    ChangeDef2_auto = true;

    if (ChangeDef10_auto == true) {
      autoAmountInput.value = 10;
      ChangeDef10_auto = false;
    } else {
      
      autoAmountInput.value = parseFloat(autoAmountInput.value) + 10 || 10;
    }
  });

  Plus_amount.addEventListener("click", () => {
    
    betAmountInput.value++;
  });
  Minus_amount.addEventListener("click", () => {
    if (betAmountInput.value > 1) {
      betAmountInput.value--;
    }

  });

  Auto_plus_amount.addEventListener("click", () => {
  
    autoAmountInput.value++;
    
  });
  Auto_minus_amount.addEventListener("click", () => {
    if (autoAmountInput.value > 1) {
      autoAmountInput.value--;
    }
  });

  function addMessage(message) {
    // console.log(message);
    
  }
  function CashOutConf(bet) {

 
    var Result = myResult.find((e) => e.id == idCounter);

  
    
    Result.status = "win";
    
    Result.multiplier = bet.multiplier ;
    Result.amount = bet.amount;
    if(Result.amount !== undefined) {
    pushUp.classList.add("Visible");
    }
    setTimeout(() => {
      pushUp.classList.remove("Visible");

    }, 5100);

    pushUp.querySelector("#Multiple").innerHTML = bet.multiplier?
      bet.multiplier.toFixed(2) + "x" : '';
    pushUp.querySelector("#Status").innerHTML =
      bet.amount > 0 ? "You took" : "You lose";
    pushUp.querySelector("#Right_status").innerHTML =
      bet.amount > 0 ? "Your win" : "Your lose";
    pushUp.querySelector("#Amount").innerHTML = bet.amount.toFixed(2) / 10;
  }
  function AddMyResult(bet) {
    idCounter++;
    
    
    myResult.unshift({
      id: idCounter,
      status: "lose",
      bet:bet
      
    });
    updateBetsTable()
 
  }

  function roundDownToTwoDecimals(number) {
    return Math.floor(number * PRECISION_MULTIPLIER) / PRECISION_MULTIPLIER;
  }

  function realToGameTime(time) {
    let REAL_T_MAX = T_MAX;
    return Math.pow(time / REAL_T_MAX, 1 / 2) * T_MAX;
  }

  function calculateMultiplierFromElapsedTime(elapsedTime) {
    elapsedTime = realToGameTime(elapsedTime);

    let multiplier =
      elapsedTime < T_MAX ? T_MAX / (T_MAX - elapsedTime) : M_MAX;
    if (multiplier > M_MAX) multiplier = M_MAX;

  let roundedMultiplier = parseFloat(multiplier.toFixed(2));
  let cashOutValue = parseFloat(CashOutMultiplier);




  if (gameState.lastEvent == 'start_round'&& AutoCashOutMiltiplier == true&&   Bet == true &&AutoBet === true && roundedMultiplier >= cashOutValue  && Pages === 'auto') {


 
    
playerCashOut()
AutoCashOut = true
Bet = false
  
    
  }

    
    return roundDownToTwoDecimals(multiplier.toFixed(2));
  }

  function updateMultiplier() {
    const now = performance.now();
    const elapsedTime = (now - startTime) / 1000;


    const multiplier = calculateMultiplierFromElapsedTime(elapsedTime);



    multiplierElement.innerHTML = "<h1>" + multiplier + "x" + "</h1>";
  }

  function disableButton(disabled = true) {
    actionButton.disabled = disabled;
  }
  function autoChangeButton(newButton) {
    autoActionBtn.textContent = newButton.textContent;
    autoActionBtn.classList.remove("bet");
    autoActionBtn.classList.remove("cancel_bet");
    autoActionBtn.classList.remove("cash_out");
    autoActionBtn.classList.add(newButton.id);
    autoActionBtn.onclick = newButton.onclick;
    disableButton(false);
  }
  function changeButton(newButton) {
    actionButton.textContent = newButton.textContent;
    actionButton.classList.remove("bet");
    actionButton.classList.remove("cancel_bet");
    actionButton.classList.remove("cash_out");
    actionButton.classList.add(newButton.id);
    actionButton.onclick = newButton.onclick;
    disableButton(false);
  }





var Visible = 10

  




let lastLoggedScrollY = 0;
document.addEventListener('scroll',(e)=> {
 if(window.scrollY<500){
  lastLoggedScrollY = 0
  Visible = 10
  updateBetsTable()
 };
 if (window.scrollY >= lastLoggedScrollY + 200) {
  console.log('qaqs');
  
  Visible+=5
  updateBetsTable()
  lastLoggedScrollY = window.scrollY;
}
  
})



function updateBetsTable() {
  
 



    

    var tableHtml = `
      <table>
       
        <tbody id="Table">
        `;



    if (resultType.type == "top") {
    
      

sorted = topResultList.sort((a, b) => b.multiplier - a.multiplier);



      for (let bet =0;bet<sorted.length;bet++) {
        if(bet < 10) {
        tableHtml += `<tr class="top">
              <td>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 0C7.69209 0 5.01043 2.66762 5.01043 5.95831C5.01043 9.24899 7.69209 11.9166 11.0001 11.9166C14.3081 11.9166 16.9898 9.24899 16.9898 5.95831C16.9898 2.66762 14.3081 0 11.0001 0ZM6.85341 5.95831C6.85341 3.68015 8.70994 1.83333 11.0001 1.83333C13.2902 1.83333 15.1468 3.68015 15.1468 5.95831C15.1468 8.23647 13.2902 10.0833 11.0001 10.0833C8.70994 10.0833 6.85341 8.23647 6.85341 5.95831Z" fill="url(#paint0_linear_294_244)"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13.1733C7.48355 13.1733 4.21181 14.2274 1.49015 16.0356C0.78825 16.5019 0.318897 17.1203 0.114449 17.821C-0.0885568 18.5166 -0.0113223 19.2288 0.265705 19.8524C0.817896 21.0956 2.1562 22 3.80486 22H18.1951C19.8438 22 21.1821 21.0956 21.7343 19.8524C22.0113 19.2288 22.0886 18.5166 21.8855 17.821C21.6811 17.1203 21.2117 16.5019 20.5098 16.0356C17.7882 14.2274 14.5164 13.1733 11 13.1733ZM2.5137 17.5601C4.9418 15.947 7.85909 15.0066 11 15.0066C14.1409 15.0066 17.0582 15.947 19.4863 17.5601C19.8709 17.8157 20.0461 18.0938 20.1156 18.332C20.1866 18.5752 20.1672 18.8443 20.0485 19.1115C19.8093 19.6501 19.1596 20.1667 18.1951 20.1667H3.80486C2.84041 20.1667 2.19072 19.6501 1.95146 19.1115C1.83276 18.8443 1.8134 18.5752 1.88437 18.332C1.95389 18.0938 2.12907 17.8157 2.5137 17.5601Z" fill="url(#paint1_linear_294_244)"/>
                  <defs>
                    <linearGradient id="paint0_linear_294_244" x1="11" y1="0" x2="11" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4FB7ED"/>
                      <stop offset="1" stop-color="#224CD7"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_294_244" x1="11" y1="0" x2="11" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4FB7ED"/>
                      <stop offset="1" stop-color="#224CD7"/>
                    </linearGradient>
                  </defs>
                </svg>
               <h1> User ${sorted[bet].bet_id}</h1>
              </td>
              <td>  
                <img width="20px" height="20px" src='./assets/coin.png'><span>${
                sorted[bet].amount ? sorted[bet].amount/10 : ""
              }</span></td>
              <td><h4>${
                sorted[bet].multiplier
                  ? sorted[bet].multiplier.toFixed(2) + "x"
                  : ""
              }</h4></td>
              <td><svg width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_294_251)">
      <path d="M34.0644 22.0339C33.9885 22.8222 34.5466 23.5246 35.311 23.6029C36.0753 23.6811 36.7565 23.1056 36.8324 22.3174C37.0556 20.0001 37.0564 18.6806 36.8318 16.4518C36.7638 15.777 36.2465 15.2436 35.5922 15.1735C33.4308 14.9419 32.1512 14.9427 29.904 15.1728C29.1397 15.2511 28.5816 15.9535 28.6575 16.7417C28.7334 17.53 29.4146 18.1055 30.1789 18.0272C31.0945 17.9334 31.8186 17.8812 32.5117 17.8705L26.7892 23.7717L24.3994 21.3073C23.9231 20.8161 23.1509 20.8161 22.6747 21.3073L15.3572 28.8531C14.8809 29.3442 14.8809 30.1405 15.3572 30.6316C15.8335 31.1228 16.6057 31.1228 17.0819 30.6316L23.537 23.9751L25.9269 26.4395C26.1556 26.6754 26.4658 26.8079 26.7892 26.8079C27.1127 26.8079 27.4229 26.6754 27.6516 26.4395L34.2157 19.6704C34.204 20.3725 34.1536 21.1083 34.0644 22.0339Z" fill="#00DB44"/>
      </g>
      <defs>
      <filter id="filter0_d_294_251" x="0" y="0" width="52" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="7.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.858824 0 0 0 0 0.266667 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_294_251"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_294_251" result="shape"/>
      </filter>
      </defs>
      </svg></td>
            </tr>`;
        }
      
}

      tableHtml += `</tbody></table>`;
      betsTableElement.innerHTML = tableHtml;
    
    
    }
    
    
    else if (resultType.type == "all") {
      for (let  [index,bet] of gameState.bets.entries()) {
     if(index < Visible) {
        tableHtml += `<tr id='Res'>
        <td>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 0C7.69209 0 5.01043 2.66762 5.01043 5.95831C5.01043 9.24899 7.69209 11.9166 11.0001 11.9166C14.3081 11.9166 16.9898 9.24899 16.9898 5.95831C16.9898 2.66762 14.3081 0 11.0001 0ZM6.85341 5.95831C6.85341 3.68015 8.70994 1.83333 11.0001 1.83333C13.2902 1.83333 15.1468 3.68015 15.1468 5.95831C15.1468 8.23647 13.2902 10.0833 11.0001 10.0833C8.70994 10.0833 6.85341 8.23647 6.85341 5.95831Z" fill="url(#paint0_linear_294_244)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13.1733C7.48355 13.1733 4.21181 14.2274 1.49015 16.0356C0.78825 16.5019 0.318897 17.1203 0.114449 17.821C-0.0885568 18.5166 -0.0113223 19.2288 0.265705 19.8524C0.817896 21.0956 2.1562 22 3.80486 22H18.1951C19.8438 22 21.1821 21.0956 21.7343 19.8524C22.0113 19.2288 22.0886 18.5166 21.8855 17.821C21.6811 17.1203 21.2117 16.5019 20.5098 16.0356C17.7882 14.2274 14.5164 13.1733 11 13.1733ZM2.5137 17.5601C4.9418 15.947 7.85909 15.0066 11 15.0066C14.1409 15.0066 17.0582 15.947 19.4863 17.5601C19.8709 17.8157 20.0461 18.0938 20.1156 18.332C20.1866 18.5752 20.1672 18.8443 20.0485 19.1115C19.8093 19.6501 19.1596 20.1667 18.1951 20.1667H3.80486C2.84041 20.1667 2.19072 19.6501 1.95146 19.1115C1.83276 18.8443 1.8134 18.5752 1.88437 18.332C1.95389 18.0938 2.12907 17.8157 2.5137 17.5601Z" fill="url(#paint1_linear_294_244)"/>
            <defs>
              <linearGradient id="paint0_linear_294_244" x1="11" y1="0" x2="11" y2="22" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4FB7ED"/>
                <stop offset="1" stop-color="#224CD7"/>
              </linearGradient>
              <linearGradient id="paint1_linear_294_244" x1="11" y1="0" x2="11" y2="22" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4FB7ED"/>
                <stop offset="1" stop-color="#224CD7"/>
              </linearGradient>
            </defs>
          </svg>
         <h1> User ${bet.bet_id}</h1>
        </td>
        <td>
        ${bet.bet / 10}
        </td>
        <td>   <span>${
          bet.cash_out
            ? bet.cash_out /10
            : ''
        }</span></td>
        <td><h4>${
          bet.cash_out_multiplier
            ? bet.cash_out_multiplier.toFixed(2) + "x"
            : ""
        }</h4></td>
        <td>${
          bet.cash_out
            ? `<svg width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_294_251)">
<path d="M34.0644 22.0339C33.9885 22.8222 34.5466 23.5246 35.311 23.6029C36.0753 23.6811 36.7565 23.1056 36.8324 22.3174C37.0556 20.0001 37.0564 18.6806 36.8318 16.4518C36.7638 15.777 36.2465 15.2436 35.5922 15.1735C33.4308 14.9419 32.1512 14.9427 29.904 15.1728C29.1397 15.2511 28.5816 15.9535 28.6575 16.7417C28.7334 17.53 29.4146 18.1055 30.1789 18.0272C31.0945 17.9334 31.8186 17.8812 32.5117 17.8705L26.7892 23.7717L24.3994 21.3073C23.9231 20.8161 23.1509 20.8161 22.6747 21.3073L15.3572 28.8531C14.8809 29.3442 14.8809 30.1405 15.3572 30.6316C15.8335 31.1228 16.6057 31.1228 17.0819 30.6316L23.537 23.9751L25.9269 26.4395C26.1556 26.6754 26.4658 26.8079 26.7892 26.8079C27.1127 26.8079 27.4229 26.6754 27.6516 26.4395L34.2157 19.6704C34.204 20.3725 34.1536 21.1083 34.0644 22.0339Z" fill="#00DB44"/>
</g>
<defs>
<filter id="filter0_d_294_251" x="0" y="0" width="52" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.858824 0 0 0 0 0.266667 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_294_251"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_294_251" result="shape"/>
</filter>
</defs>
</svg>
`
            : `<svg width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_294_281)">
<path d="M32.5119 28.1295C31.8187 28.1188 31.0946 28.0666 30.1789 27.9728C29.4146 27.8945 28.7334 28.47 28.6575 29.2583C28.5816 30.0465 29.1397 30.7489 29.904 30.8272C32.1512 31.0573 33.4308 31.0581 35.5922 30.8265C36.2465 30.7564 36.7638 30.223 36.8318 29.5482C37.0564 27.3194 37.0556 25.9999 36.8324 23.6826C36.7565 22.8944 36.0753 22.3189 35.311 22.3971C34.5466 22.4754 33.9885 23.1779 34.0644 23.9661C34.1536 24.8916 34.204 25.6274 34.2157 26.3294L27.6516 19.5605C27.1753 19.0693 26.4031 19.0693 25.9269 19.5605L23.537 22.0249L17.0819 15.3684C16.6057 14.8772 15.8335 14.8772 15.3572 15.3684C14.8809 15.8595 14.8809 16.6558 15.3572 17.1469L22.6747 24.6927C23.1509 25.1839 23.9231 25.1839 24.3994 24.6927L26.7892 22.2283L32.5119 28.1295Z" fill="#F9562B"/>
</g>
<defs>
<filter id="filter0_d_294_281" x="0" y="0" width="52" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.337255 0 0 0 0 0.168627 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_294_281"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_294_281" result="shape"/>
</filter>
</defs>
</svg>
`
        }</td>
      </tr>`;
      }
      }

      tableHtml += `</tbody>
   
      </table>`;
      betsTableElement.innerHTML = tableHtml;
      // document.querySelectorAll('#Res')[document.querySelectorAll('#Res').length -2] ? document.querySelectorAll('#Res')[document.querySelectorAll('#Res').length -2].dataset.visible = 'false' : '';
      // document.querySelectorAll('#Res')[document.querySelectorAll('#Res').length -2] ? observer.observe(document.querySelectorAll('#Res')[document.querySelectorAll('#Res').length -2]) : ''

      
    } 
    
    
    
    else if (resultType.type == "my") {
     
      
      
      for (let bet=0;bet<myResult.length;bet++) {
        if(bet<10) {
        tableHtml += `<tr>
    <td>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 0C7.69209 0 5.01043 2.66762 5.01043 5.95831C5.01043 9.24899 7.69209 11.9166 11.0001 11.9166C14.3081 11.9166 16.9898 9.24899 16.9898 5.95831C16.9898 2.66762 14.3081 0 11.0001 0ZM6.85341 5.95831C6.85341 3.68015 8.70994 1.83333 11.0001 1.83333C13.2902 1.83333 15.1468 3.68015 15.1468 5.95831C15.1468 8.23647 13.2902 10.0833 11.0001 10.0833C8.70994 10.0833 6.85341 8.23647 6.85341 5.95831Z" fill="url(#paint0_linear_294_244)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13.1733C7.48355 13.1733 4.21181 14.2274 1.49015 16.0356C0.78825 16.5019 0.318897 17.1203 0.114449 17.821C-0.0885568 18.5166 -0.0113223 19.2288 0.265705 19.8524C0.817896 21.0956 2.1562 22 3.80486 22H18.1951C19.8438 22 21.1821 21.0956 21.7343 19.8524C22.0113 19.2288 22.0886 18.5166 21.8855 17.821C21.6811 17.1203 21.2117 16.5019 20.5098 16.0356C17.7882 14.2274 14.5164 13.1733 11 13.1733ZM2.5137 17.5601C4.9418 15.947 7.85909 15.0066 11 15.0066C14.1409 15.0066 17.0582 15.947 19.4863 17.5601C19.8709 17.8157 20.0461 18.0938 20.1156 18.332C20.1866 18.5752 20.1672 18.8443 20.0485 19.1115C19.8093 19.6501 19.1596 20.1667 18.1951 20.1667H3.80486C2.84041 20.1667 2.19072 19.6501 1.95146 19.1115C1.83276 18.8443 1.8134 18.5752 1.88437 18.332C1.95389 18.0938 2.12907 17.8157 2.5137 17.5601Z" fill="url(#paint1_linear_294_244)"/>
        <defs>
          <linearGradient id="paint0_linear_294_244" x1="11" y1="0" x2="11" y2="22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4FB7ED"/>
            <stop offset="1" stop-color="#224CD7"/>
          </linearGradient>
          <linearGradient id="paint1_linear_294_244" x1="11" y1="0" x2="11" y2="22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4FB7ED"/>
            <stop offset="1" stop-color="#224CD7"/>
          </linearGradient>
        </defs>
      </svg>
     <h1> Me</h1>
    </td>
    <td>
    ${myResult[bet].bet /10}
    </td>
    <td>   <img src="./assets/coin.png"><span>${
      myResult[bet].amount
        ? myResult[bet].amount / 10
        : ''
        
        
    }</span></td>
    <td><h4>${myResult[bet].multiplier ? myResult[bet].multiplier.toFixed(2) + "x" : ""}</h4></td>
    <td>${
      myResult[bet].amount !== undefined
        ? `<svg width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_294_251)">
<path d="M34.0644 22.0339C33.9885 22.8222 34.5466 23.5246 35.311 23.6029C36.0753 23.6811 36.7565 23.1056 36.8324 22.3174C37.0556 20.0001 37.0564 18.6806 36.8318 16.4518C36.7638 15.777 36.2465 15.2436 35.5922 15.1735C33.4308 14.9419 32.1512 14.9427 29.904 15.1728C29.1397 15.2511 28.5816 15.9535 28.6575 16.7417C28.7334 17.53 29.4146 18.1055 30.1789 18.0272C31.0945 17.9334 31.8186 17.8812 32.5117 17.8705L26.7892 23.7717L24.3994 21.3073C23.9231 20.8161 23.1509 20.8161 22.6747 21.3073L15.3572 28.8531C14.8809 29.3442 14.8809 30.1405 15.3572 30.6316C15.8335 31.1228 16.6057 31.1228 17.0819 30.6316L23.537 23.9751L25.9269 26.4395C26.1556 26.6754 26.4658 26.8079 26.7892 26.8079C27.1127 26.8079 27.4229 26.6754 27.6516 26.4395L34.2157 19.6704C34.204 20.3725 34.1536 21.1083 34.0644 22.0339Z" fill="#00DB44"/>
</g>
<defs>
<filter id="filter0_d_294_251" x="0" y="0" width="52" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.858824 0 0 0 0 0.266667 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_294_251"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_294_251" result="shape"/>
</filter>
</defs>
</svg>
`
        : myResult[bet].amount == undefined
        ? `<svg width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_294_281)">
<path d="M32.5119 28.1295C31.8187 28.1188 31.0946 28.0666 30.1789 27.9728C29.4146 27.8945 28.7334 28.47 28.6575 29.2583C28.5816 30.0465 29.1397 30.7489 29.904 30.8272C32.1512 31.0573 33.4308 31.0581 35.5922 30.8265C36.2465 30.7564 36.7638 30.223 36.8318 29.5482C37.0564 27.3194 37.0556 25.9999 36.8324 23.6826C36.7565 22.8944 36.0753 22.3189 35.311 22.3971C34.5466 22.4754 33.9885 23.1779 34.0644 23.9661C34.1536 24.8916 34.204 25.6274 34.2157 26.3294L27.6516 19.5605C27.1753 19.0693 26.4031 19.0693 25.9269 19.5605L23.537 22.0249L17.0819 15.3684C16.6057 14.8772 15.8335 14.8772 15.3572 15.3684C14.8809 15.8595 14.8809 16.6558 15.3572 17.1469L22.6747 24.6927C23.1509 25.1839 23.9231 25.1839 24.3994 24.6927L26.7892 22.2283L32.5119 28.1295Z" fill="#F9562B"/>
</g>
<defs>
<filter id="filter0_d_294_281" x="0" y="0" width="52" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.337255 0 0 0 0 0.168627 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_294_281"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_294_281" result="shape"/>
</filter>
</defs>
</svg>
`
        : ""
    }</td>
  </tr>`;
        }
      }
      tableHtml += `</tbody></table>`;
      betsTableElement.innerHTML = tableHtml;
    }
  }

  function getCurrentDateTimeWithSeconds() {
    const now = new Date();
    return now.toISOString().slice(0, 19).replace("T", " ");
  }

  function connect() {
    ws = new WebSocket("wss://toxicwaste.mooo.com:" + PORT);

    ws.onmessage = function (event) {
      const data = JSON.parse(event.data);
  

      handleServerMessage(data);


      if (data.event == "cash_out_confirmation") {
        CashOutConf(data);
 
        
      }
      if (data.event == "bet_confirmation" ) {
      
        AddMyResult(data.amount);
      }
    };

    ws.onclose = function (event) {
      const code = event.code;
      const reason = event.reason || "-";

      if (reason !== "INIT_DATA_VERIFY_ERROR") {
        addMessage(
          `Соединение закрыто. Код: ${code}, причина: ${reason}. Переподключение...`
        );
        if (currentTab === "game") setTimeout(connect, 3000);
      } else
        addMessage(
          `Соединение закрыто. Код: ${code}, причина: ${reason}. Обновите страницу`
        );
    };

    ws.onerror = function (error) {
      console.error("WebSocket ошибка:", error);
      ws.close();
    };

    ws.onopen = function () {
      addMessage("Подключено к WebSocket серверу");
      playerHello();
    };
  }

  const eventHandlers = {
    [EVENT_PREPARE_NEXT_ROUND]: handlePrepareNextRound,
    [EVENT_START_ROUND]: handleStartRound,
    [EVENT_END_ROUND]: handleEndRound,
    [EVENT_BET_CONFIRMATION]: handleBetConfirmation,
    [EVENT_BET]: handleBet,
    [EVENT_CASH_OUT_CONFIRMATION]: handleCashOutConfirmation,
    [EVENT_CASH_OUT]: handleCashOut,
    [EVENT_CANCEL_BET_CONFIRMATION]: handleCancelBetConfirmation,
    [EVENT_CANCEL_BET]: handleCancelBet,
    [EVENT_WELCOME]: handleWelcome,
  };

  function handleServerMessage(data) {
    // console.log(data);
    if(data.button == 'cash_out' && hasBet == true) {
      hasBet = false
      if(hasBet == true) {
        autoActionBtn.style.border = '2px solid red'
      }
      else {
        autoActionBtn.style.border = 'none'
      }
    }



    if(data.event !== 'end_round') {
AutoCashOutMiltiplier = true
    }
    if(data.event == 'end_round') {
      AutoCashOutMiltiplier = false
    }
    
    const handler = eventHandlers[data.event];
    if (handler) {
      handler(data);
    } else {
      console.warn(`Неизвестное событие: ${data.event}`);
    }

    if ("balance" in data)
      balanceElement.textContent = data.balance.toFixed(2) / 10;

    if ("button" in data) {
      switch (data.button) {
        case CONFIG_BUTTON_BET.id:
          changeButton(CONFIG_BUTTON_BET);
          break;

        case CONFIG_BUTTON_CANCEL_BET.id:
          changeButton(CONFIG_BUTTON_CANCEL_BET);
          break;

        case CONFIG_BUTTON_CASH_OUT.id:
          changeButton(CONFIG_BUTTON_CASH_OUT);
          break;
      }
    }
  }

  function startRound() {
AutoCashOut = false
console.log(myResult);

    
    gameState.lastEvent = EVENT_START_ROUND;

    if (multiplierInterval === null) {
      progressBar.value = 0;
      updateMultiplier();
      waitLoading.style.opacity = "0";
      waitLoading.style.visibility = "hidden";

      multCrash.innerHTML = `<span></span>`;
      multiplierInterval = setInterval(updateMultiplier, 50);
      plane.classList.toggle("Flight_anim");
      plane.classList.remove("Crash");
      currPlane.querySelector("img").src = "./assets/planeFlight.png";
   
      linePlane.innerHTML = ` <svg width="270" height="140" viewBox="0 0 270 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M267.527 2C235.342 94.3382 102.004 138.985 2 140H267.527V2Z" fill="url(#paint0_linear_178_1178)" fill-opacity="0.4"/>
    <path d="M2 138C102.004 137 235.342 93 267.527 2" stroke="url(#paint1_linear_178_1178)" stroke-width="3" stroke-linecap="round"/>
    <defs>
    <linearGradient id="paint0_linear_178_1178" x1="135.338" y1="53.75" x2="134.89" y2="153.192" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1B69EB"/>
    <stop offset="1" stop-color="#1F2431"/>
    </linearGradient>
    <linearGradient id="paint1_linear_178_1178" x1="134.763" y1="2" x2="134.763" y2="138" gradientUnits="userSpaceOnUse">
    <stop stop-color="#4FB7ED"/>
    <stop offset="1" stop-color="#224CD7"/>
    </linearGradient>
    </defs>
    </svg>    `;
    }
  
  }

  function handleStartRound() {
    startTime = performance.now();
    startRound();
  }

  function handleBet(data) {
    
    
    addMessage(`Сделана ставка ${data.bet_id}: ${data.amount}`);
    gameState.bets.push({
      bet_id: data.bet_id,
      bet: data.amount,
    });
    
    // console.log(gameState.bets, 'qaqs');
    

    userBet.push({
      bet_id: data.bet_id,
      bet: data.amount,
    });
    updateBetsTable();
  
  }

  function handleCashOut(data) {
    addMessage(
      `Забран выигрыш ${data.bet_id}: ${data.amount} при множителе ${data.multiplier}`
    );
    let bet = gameState.bets.find((bet) => bet.bet_id === data.bet_id);
    if (bet) {
      bet.cash_out = data.amount;
      bet.cash_out_multiplier = data.multiplier;
      bet.amount = data.bet

      
      
topResultList.unshift({
  bet_id: data.bet_id,
  amount:data.amount,
  multiplier:data.multiplier
})

    }

    updateBetsTable();
  }

  function handleWelcome(data) {
    T_MAX = data.game_parameters["t_max"];
    M_MAX = data.game_parameters["m_max"];
    PRECISION_MULTIPLIER = data.game_parameters["precision_multiplier"];

    switch (data.last_event) {
      case EVENT_PREPARE_NEXT_ROUND:
        handlePrepareNextRound(data);
        break;

      case EVENT_START_ROUND:
        const now = performance.now();
        startTime = now - data.elapsed_time * 1000;

        gameState.bets = data.bets;

        updateBetsTable();

        startRound();
        break;

      case EVENT_END_ROUND:
        gameState.bets = data.bets;


        updateBetsTable();
        ShowLastGames(data.end_multiplier);
        handleEndRound(data);
        break;
    }
  }

  function handleCancelBetConfirmation(data) {
    if (data.error !== null)
      addMessage(`Ошибка при отмене ставки: ${data.error}`);
  }

  function handleCancelBet(data) {
    addMessage(`Отменена ставка ${data.bet_id}`);
    
    gameState.bets = gameState.bets.filter((bet) => bet.bet_id !== data.bet_id);
    updateBetsTable();
  }

  function handlePrepareNextRound(data) {

    if(AutoBet == true && Pages == 'auto') {
      playerPlaceBet()
      // console.log('add bet');
      
      
   
      Bet = true
    }
    userBet = [];
    gameState.bets = data.bets;
    updateBetsTable();
    gameState.lastEvent = EVENT_PREPARE_NEXT_ROUND;

    multiplierElement.textContent = "-";
  }

  const PREPARE_NEXT_ROUND_TIME = 5 * 1000,
    END_ROUND_TIME = 3 * 1000;

  function getRandomDelay(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const maxDelay = PREPARE_NEXT_ROUND_TIME + END_ROUND_TIME;
  const randomDelay = getRandomDelay(maxDelay);

  function handleEndRound(data) {
Visible = 20
    AutoCashOut = false
    AutoCashOutMiltiplier = false
if(AutoType == true) {
  AutoBet = true;
}
else {
  AutoBet = false;
}
    updateBetsTable();
    if(Pages == 'auto') {
    // playerCancelBet()
    Bet = false;
    }
    betStatus = true;
    gameState.lastEvent = EVENT_END_ROUND;
progressBar.value = 0;
let progressValue = 0;
const totalDuration = 5000; // Общая продолжительность анимации в миллисекундах
const startTime = performance.now();

waitLoading.style.opacity = "1";
waitLoading.style.visibility = "visible";

function updateProgressBar(currentTime) {
  const elapsedTime = currentTime - startTime;
  const progressFraction = Math.min(elapsedTime / totalDuration, 1); // Расчет прогресса

  progressValue = progressFraction * 100;
  progressBar.value = progressValue;

  if (progressFraction < 1) {
    requestAnimationFrame(updateProgressBar); // Продолжение анимации
  }
}

// Задержка перед началом анимации
setTimeout(() => {
  requestAnimationFrame(updateProgressBar);
}, 800);


    LastGames.unshift(`${data.end_multiplier.toFixed(2)}x`);
    multCrash.innerHTML = `<span>Crushed </span>`;
    plane.classList.remove("Flight_anim");
    plane.classList.toggle("Crash");
    linePlane.innerHTML = `<svg width="315" height="92" viewBox="0 0 315 92" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 89.9999C288 -76.5 247 35.4998 313 89.9997L2 89.9999Z" fill="url(#paint0_linear_194_992)" fill-opacity="0.4"/>
<path d="M2 89.9999C288 -76.5 247 35.4998 313 89.9997" stroke="url(#paint1_linear_194_992)" stroke-width="3" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_194_992" x1="158.173" y1="35.214" x2="158.019" y2="98.3802" gradientUnits="userSpaceOnUse">
<stop stop-color="#1B69EB"/>
<stop offset="1" stop-color="#1F2431"/>
</linearGradient>
<linearGradient id="paint1_linear_194_992" x1="157.5" y1="2.34253" x2="157.5" y2="89.9999" gradientUnits="userSpaceOnUse">
<stop stop-color="#4FB7ED"/>
<stop offset="1" stop-color="#224CD7"/>
</linearGradient>
</defs>
</svg>
`;
linePlane.querySelector('svg').style.width = '313px'
linePlane.querySelector('svg').style.height = '75px'
    currPlane.querySelector("img").src = `./assets/planeCrash.png`;

    ShowLastGames(LastGames);

    if (multiplierInterval !== null) {
      clearInterval(multiplierInterval);
      multiplierInterval = null;
    }
    multiplierElement.innerHTML =
      "<h1 style='text-shadow:0 0 15px #F9562B' >" +
      data.end_multiplier +
      "x" +
      "</h1>";

    setTimeout(() => {
      ws.send(JSON.stringify({ action: "ping" }));
    }, randomDelay);
  }

  function handleBetConfirmation(data) {
    if (data.error !== null)
      addMessage(`Ошибка при размещении ставки: ${data.error}`);
  }

  function handleCashOutConfirmation(data) {
    if (data.error === null) {
      addMessage(`Выигрыш ${data.amount} при множителе ${data.multiplier}`);
    } else {
      addMessage(`Ошибка при выигрыше: ${data.error}`);
    }
  }
  window.addEventListener('offline',()=> {
    ws.close()
  
    
  })
window.addEventListener('online',()=> {
 playerHello();
 location.reload();
})
  function playerHello() {
   
    
    ws.send(JSON.stringify({ action: "hello", init_data: tg.initData }));
    
    
  }

  function playerPlaceBet() {
    
    const amount =
      Pages == "bet"
        ? parseInt(betAmountInput.value)
        : parseInt(CashOutAmount);
    if (amount > 0 && amount <=1000) {
      ws.send(JSON.stringify({ action: "bet", amount: amount * 10 }));
      counterBox.style.border = 'none'
      disableButton();
      if(Pages == 'bet') {
        hasBet = true;
        if(hasBet == true) {
          autoActionBtn.style.border = '2px solid red'
        }
        else {
          autoActionBtn.style.border = 'none'
        }
      }
    } else {
      addMessage("Неверная сумма ставки");
   
      
      counterBox.style.border = '1px solid red'
    }
  }

  function playerCashOut() {
  
    ws.send(JSON.stringify({ action: "cash_out" }));
    disableButton();
  }

  function playerCancelBet() {
    if(AutoCashOut == false && Pages == 'auto') {
      myResult = myResult.filter((e)=> e.id !== idCounter)
      updateBetsTable()
    }

    if (AutoBet == false && Pages == 'auto') {
      autoActionBtn.innerText = "Auto play";
      updateBetsTable()
        
    }
if(Pages == 'bet') {
  // hasBet = false
    myResult = myResult.filter((e)=> e.id !== idCounter)
    updateBetsTable()
}

    ws.send(JSON.stringify({ action: "cancel_bet" }));
    disableButton();
  }

  connect();
}
initializeWebSocket();



