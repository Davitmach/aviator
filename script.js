var Game_btn = document.getElementById('Game_btn');
var Reward_btn = document.getElementById('Reward_btn');
var Content = document.getElementById('Content_box');
var Rewards_background_box = document.getElementById('Rewards_background_box');
var Game_background_box = document.getElementById('Game_background_box');
var Rewards_title = document.getElementById('Rewards_title');
var Game_title = document.getElementById('Game_title');
var Game_icon = document.getElementById('Game_icon');
var Reward_icon = document.getElementById('Rewards_icon')
var Active_link = 'game.html';
var Loading = document.getElementById('Loading');
var Menu = document.getElementById('Menu')
function manageScript(src) {
    if(src == './rewards.js') {
        document.querySelector(`script[src="./game.js"]`).remove()
    }
    let existingScript = document.querySelector(`script[src="${src}"]`);
    

    if (existingScript) {
        existingScript.remove();
    }
    
    // Create and add the new script
    if (src) {
        let newScript = document.createElement('script');
        newScript.src = src;
        document.body.appendChild(newScript);
    }
}
document.body.style.overflow = 'hidden'
Menu.style.visibility = 'hidden'
setTimeout(() => {
     document.body.style.overflow = 'scroll'
     Loading.style.visibility = 'hidden'
      Menu.style.visibility = 'visible'
},2400);
   

  
    

function CheckLink() {
    if (Active_link === 'game.html') {
        Rewards_background_box.classList.remove('Background_active');
        Rewards_background_box.classList.add('Background_disable');
        Game_background_box.classList.remove('Background_disable');
        Game_background_box.classList.add('Background_active');
        Reward_btn.classList.toggle('Border_disable')
        Reward_btn.classList.remove('Border_active');
        Game_btn.classList.toggle('Border_active');
        Game_btn.classList.remove('Border_disable')
        Rewards_title.classList.remove('Title_active');
        Rewards_title.classList.add('Title_disable');
        Game_title.classList.remove('Title_disable');
        Game_title.classList.add('Title_active');
        document.title = 'Aviator';
        Reward_icon.innerHTML = `<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6547 9.43587C16.1647 8.96009 16.1726 8.18118 15.6724 7.69614C15.1722 7.21109 14.3534 7.20358 13.8435 7.67937C12.5174 8.91666 11.5145 10.0352 10.6679 11.3944C10.1253 12.2655 9.65999 13.2146 9.21257 14.3265L7.79677 12.8247C7.3199 12.3189 6.50224 12.2765 5.97047 12.7301C5.4387 13.1838 5.3942 13.9616 5.87107 14.4674L8.74932 17.5204C9.05853 17.8484 9.52851 17.9941 9.9815 17.9024C10.4345 17.8106 10.8013 17.4955 10.9432 17.0761C11.6071 15.1147 12.1929 13.7731 12.8932 12.6486C13.5878 11.5335 14.4262 10.5822 15.6547 9.43587Z" fill="#95979D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C7.9148 0 6.20893 0.0619131 4.46581 0.1804C2.15355 0.337573 0.334303 2.10383 0.200777 4.2989C0.0691237 6.46318 0 8.70447 0 11C0 13.2955 0.0691238 15.5368 0.200777 17.7011C0.334303 19.8962 2.15355 21.6624 4.46581 21.8196C6.20892 21.9381 7.9148 22 10 22C12.0852 22 13.7911 21.9381 15.5342 21.8196C17.8465 21.6624 19.6657 19.8962 19.7992 17.7011C19.9309 15.5368 20 13.2955 20 11C20 10.0493 19.9881 9.10786 19.9649 8.17742C19.9441 7.34588 19.6779 6.5284 19.1798 5.82945C17.7483 3.82073 16.5747 2.52332 14.6903 1.01524C13.8954 0.379083 12.9002 0.0394276 11.8849 0.0185552C11.2854 0.00622944 10.6615 0 10 0ZM4.65017 2.63461C6.33023 2.52041 7.97458 2.46047 10 2.46047C10.6443 2.46047 11.2495 2.46653 11.829 2.47845C12.2779 2.48768 12.6994 2.63736 13.0251 2.89801C14.699 4.23763 15.7183 5.35714 17.0387 7.21002C17.2508 7.50763 17.3697 7.86381 17.379 8.23587C17.4018 9.14679 17.4134 10.0687 17.4134 11C17.4134 13.2488 17.3457 15.4427 17.2169 17.559C17.1581 18.5261 16.3589 19.2968 15.3498 19.3654C13.6698 19.4796 12.0254 19.5395 10 19.5395C7.97458 19.5395 6.33023 19.4796 4.65017 19.3654C3.64106 19.2968 2.84189 18.5261 2.78307 17.559C2.65433 15.4427 2.58661 13.2488 2.58661 11C2.58661 8.75122 2.65433 6.55734 2.78306 4.44103C2.84189 3.47393 3.64106 2.7032 4.65017 2.63461Z" fill="#95979D"/>
</svg>
`
Game_icon.innerHTML = `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3358 2.91192C21.1148 3.32522 21.6786 4.10321 21.8057 5.29277C21.9085 6.25501 21.3172 7.28507 20.4314 7.59403C18.9046 8.12657 17.1512 8.68492 15.3455 9.23158C15.0393 9.3243 14.7822 9.56908 14.641 9.90251C13.9228 11.5976 13.1676 13.24 12.6013 14.4394C12.2857 15.1079 11.6044 15.5026 11.0182 15.4168C10.4503 15.3337 10.1895 14.8567 10.3051 14.2694C10.4091 13.7413 10.5275 13.15 10.6569 12.5208C10.7462 12.0864 10.6378 11.6286 10.3704 11.3116C10.1031 10.9946 9.71532 10.8639 9.34625 10.9666C7.42665 11.5003 5.7049 11.9615 4.44201 12.2947C3.93168 12.4294 3.45177 12.0943 3.30529 11.456C3.29371 11.4056 3.27953 11.356 3.26284 11.3076C3.25567 11.2868 3.24906 11.2643 3.24324 11.24C2.82976 9.51476 2.45768 7.37525 2.2029 5.76778C2.09093 5.06138 2.44 4.33805 2.99686 4.08551C3.52321 3.84681 4.0529 4.10405 4.27937 4.67355C4.60303 5.48743 4.98109 6.46647 5.3421 7.46828C5.45676 7.78649 5.67533 8.03686 5.94848 8.1629C6.22162 8.28894 6.52632 8.28002 6.79382 8.13815C9.79652 6.54567 13.8411 4.47231 17.3616 2.9117C18.437 2.435 19.5243 2.48142 20.3358 2.91192ZM21.2313 0.567102C19.832 -0.175272 18.1414 -0.181247 16.5936 0.504895C13.3934 1.9235 9.78811 3.74855 6.90639 5.26138C6.67865 4.65849 6.45598 4.08788 6.25492 3.58227C5.52886 1.75647 3.77786 0.976113 2.21335 1.68563C0.679354 2.3813 -0.247866 4.30869 0.0582371 6.23996C0.316011 7.86634 0.702501 10.0984 1.14363 11.939C1.16492 12.0279 1.18929 12.1151 1.21664 12.2006C1.67736 14.0649 3.23955 15.247 4.91862 14.804C5.79878 14.5718 6.90084 14.2777 8.13744 13.9402C7.85538 15.9651 9.01671 17.7151 10.7494 17.9686C12.2379 18.1865 13.7697 17.2531 14.5078 15.6897C15.0251 14.594 15.7014 13.1266 16.3688 11.576C18.0207 11.0713 19.627 10.5563 21.0505 10.0597C22.8376 9.43642 24.2221 7.3284 23.9704 4.97156C23.7429 2.84204 22.6631 1.32668 21.2313 0.567102Z" fill="url(#paint0_linear_119_483)"/>
<defs>
<linearGradient id="paint0_linear_119_483" x1="12" y1="0" x2="12" y2="18" gradientUnits="userSpaceOnUse">
<stop stop-color="#4FB7ED"/>
<stop offset="1" stop-color="#224CD7"/>
</linearGradient>
</defs>
</svg>
`
manageScript('./game.js')

    } 
     if (Active_link === 'rewards.html') {
        document.title = 'Rewards';
        Game_background_box.classList.remove('Background_active');
        Game_background_box.classList.add('Background_disable');
        Rewards_background_box.classList.remove('Background_disable');
        Rewards_background_box.classList.add('Background_active');
        Reward_btn.classList.remove('Border_disable')
        Reward_btn.classList.toggle('Border_active');
        Game_btn.classList.remove('Border_active');
        Game_btn.classList.toggle('Border_disable')
        Game_title.classList.remove('Title_active');
        Game_title.classList.add('Title_disable');
        Rewards_title.classList.remove('Title_disable');
        Rewards_title.classList.add('Title_active');
        manageScript('./rewards.js')
        Reward_icon.innerHTML = `<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6547 9.43587C16.1647 8.96009 16.1726 8.18118 15.6724 7.69614C15.1722 7.21109 14.3534 7.20358 13.8435 7.67937C12.5174 8.91666 11.5145 10.0352 10.6679 11.3944C10.1253 12.2655 9.65999 13.2146 9.21257 14.3265L7.79677 12.8247C7.3199 12.3189 6.50224 12.2765 5.97047 12.7301C5.4387 13.1838 5.3942 13.9616 5.87107 14.4674L8.74932 17.5204C9.05853 17.8484 9.52851 17.9941 9.9815 17.9024C10.4345 17.8106 10.8013 17.4955 10.9432 17.0761C11.6071 15.1147 12.1929 13.7731 12.8932 12.6486C13.5878 11.5335 14.4262 10.5822 15.6547 9.43587Z" fill="url(#paint0_linear_119_481)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C7.9148 0 6.20893 0.0619131 4.46581 0.1804C2.15355 0.337573 0.334303 2.10383 0.200777 4.2989C0.0691237 6.46318 0 8.70447 0 11C0 13.2955 0.0691238 15.5368 0.200777 17.7011C0.334303 19.8962 2.15355 21.6624 4.46581 21.8196C6.20892 21.9381 7.9148 22 10 22C12.0852 22 13.7911 21.9381 15.5342 21.8196C17.8465 21.6624 19.6657 19.8962 19.7992 17.7011C19.9309 15.5368 20 13.2955 20 11C20 10.0493 19.9881 9.10786 19.9649 8.17742C19.9441 7.34588 19.6779 6.5284 19.1798 5.82945C17.7483 3.82073 16.5747 2.52332 14.6903 1.01524C13.8954 0.379083 12.9002 0.0394276 11.8849 0.0185552C11.2854 0.00622944 10.6615 0 10 0ZM4.65017 2.63461C6.33023 2.52041 7.97458 2.46047 10 2.46047C10.6443 2.46047 11.2495 2.46653 11.829 2.47845C12.2779 2.48768 12.6994 2.63736 13.0251 2.89801C14.699 4.23763 15.7183 5.35714 17.0387 7.21002C17.2508 7.50763 17.3697 7.86381 17.379 8.23587C17.4018 9.14679 17.4134 10.0687 17.4134 11C17.4134 13.2488 17.3457 15.4427 17.2169 17.559C17.1581 18.5261 16.3589 19.2968 15.3498 19.3654C13.6698 19.4796 12.0254 19.5395 10 19.5395C7.97458 19.5395 6.33023 19.4796 4.65017 19.3654C3.64106 19.2968 2.84189 18.5261 2.78307 17.559C2.65433 15.4427 2.58661 13.2488 2.58661 11C2.58661 8.75122 2.65433 6.55734 2.78306 4.44103C2.84189 3.47393 3.64106 2.7032 4.65017 2.63461Z" fill="url(#paint1_linear_119_481)"/>
<defs>
<linearGradient id="paint0_linear_119_481" x1="10" y1="0" x2="10" y2="22" gradientUnits="userSpaceOnUse">
<stop stop-color="#4FB7ED"/>
<stop offset="1" stop-color="#224CD7"/>
</linearGradient>
<linearGradient id="paint1_linear_119_481" x1="10" y1="0" x2="10" y2="22" gradientUnits="userSpaceOnUse">
<stop stop-color="#4FB7ED"/>
<stop offset="1" stop-color="#224CD7"/>
</linearGradient>
</defs>
</svg>
`
Game_icon.innerHTML = `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3358 2.91192C21.1148 3.32522 21.6786 4.10321 21.8057 5.29277C21.9085 6.25501 21.3172 7.28507 20.4314 7.59403C18.9046 8.12657 17.1512 8.68492 15.3455 9.23158C15.0393 9.3243 14.7822 9.56908 14.641 9.90251C13.9228 11.5976 13.1676 13.24 12.6013 14.4394C12.2857 15.1079 11.6044 15.5026 11.0182 15.4168C10.4503 15.3337 10.1895 14.8567 10.3051 14.2694C10.4091 13.7413 10.5275 13.15 10.6569 12.5208C10.7462 12.0864 10.6378 11.6286 10.3704 11.3116C10.1031 10.9946 9.71532 10.8639 9.34625 10.9666C7.42665 11.5003 5.7049 11.9615 4.44201 12.2947C3.93168 12.4294 3.45177 12.0943 3.30529 11.456C3.29371 11.4056 3.27953 11.356 3.26284 11.3076C3.25567 11.2868 3.24906 11.2643 3.24324 11.24C2.82976 9.51476 2.45768 7.37525 2.2029 5.76778C2.09093 5.06138 2.44 4.33805 2.99686 4.08551C3.52321 3.84681 4.0529 4.10405 4.27937 4.67355C4.60303 5.48743 4.98109 6.46647 5.3421 7.46828C5.45676 7.78649 5.67533 8.03686 5.94848 8.1629C6.22162 8.28894 6.52632 8.28002 6.79382 8.13815C9.79652 6.54567 13.8411 4.47231 17.3616 2.9117C18.437 2.435 19.5243 2.48142 20.3358 2.91192ZM21.2313 0.567102C19.832 -0.175272 18.1414 -0.181247 16.5936 0.504895C13.3934 1.9235 9.78811 3.74855 6.90639 5.26138C6.67865 4.65849 6.45598 4.08788 6.25492 3.58227C5.52886 1.75647 3.77786 0.976113 2.21335 1.68563C0.679354 2.3813 -0.247866 4.30869 0.0582371 6.23996C0.316011 7.86634 0.702501 10.0984 1.14363 11.939C1.16492 12.0279 1.18929 12.1151 1.21664 12.2006C1.67736 14.0649 3.23955 15.247 4.91862 14.804C5.79878 14.5718 6.90084 14.2777 8.13744 13.9402C7.85538 15.9651 9.01671 17.7151 10.7494 17.9686C12.2379 18.1865 13.7697 17.2531 14.5078 15.6897C15.0251 14.594 15.7014 13.1266 16.3688 11.576C18.0207 11.0713 19.627 10.5563 21.0505 10.0597C22.8376 9.43642 24.2221 7.3284 23.9704 4.97156C23.7429 2.84204 22.6631 1.32668 21.2313 0.567102Z" fill="#95979D"/>
</svg>
`
    }
}

function loadPage(pageUrl) {
    Content.innerHTML = ''
    const xhr = new XMLHttpRequest();
    xhr.open('GET', pageUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                Content.innerHTML = xhr.responseText;         
                CheckLink();              
       

        }
    };
    xhr.send();
}


loadPage(Active_link);

Game_btn.addEventListener('click', () => {
    if(Active_link !== 'game.html') {
     document.body.style.overflow = 'hidden'
    Loading.style.visibility = 'visible'
    setTimeout(() => {
             document.body.style.overflow = 'scroll'
    Loading.style.visibility = 'hidden'
    }, 1000);
    if (Active_link !== 'game.html') {
        Active_link = 'game.html';
        loadPage(Active_link);
        
    }
    }
});

Reward_btn.addEventListener('click', () => {
    if (Active_link !== 'rewards.html') {
    document.body.style.overflow = 'hidden'
    Loading.style.visibility = 'visible'
    setTimeout(() => {
        document.body.style.overflow = 'scroll'
Loading.style.visibility = 'hidden'
}, 2000);
    if (Active_link !== 'rewards.html') {
        Active_link = 'rewards.html';
        loadPage(Active_link);
        
    }
}
});

