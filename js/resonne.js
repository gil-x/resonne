const menu = document.getElementById('menu-menu-principal');
const burger = document.getElementById('burger');
const logos = document.getElementsByClassName('logos')[0];
const partners = document.querySelectorAll('.logos li');
// const iframeContainer = document.getElementById('background-video');


/*
    ================
        PARTNERS
    ================
*/
const t = 1000;
let roll;
let partnerDirection = "right";

function stepPartner() {
    let current = parseInt(logos.style.transform.replace("translateX(", '').replace("%)", ''));
    // console.log(`current: ${current}`);
    let step, unit;
    if (screenW <= 720) {
        step = 260;
        unit = 'px';
    } else {
        step = 25;
        unit = '%';
    }

    if (partnerDirection == "right") {
        if (Math.abs(current) < (partners.length - 4) * step) {
            return current - step + unit;
        }
        else {
            partnerDirection = "left";
            return current + unit;
        }
    }
    else if (partnerDirection == "left") {
        if (current >= 0) {
            partnerDirection = "right";
            return current + unit;
        }
        else {

            return current + step + unit;
        }
    }
}

function rollPartners() {
    logos.style.transform = `translateX(${stepPartner()})`;
}

/*
    ====================
        CLICK EVENTS
    ====================
*/
document.addEventListener("click", function(event) {
    if (event.target.classList.contains('arrow-left')) {
        clearInterval(roll);
        partnerDirection = "left";
        rollPartners();
    }
    else if (event.target.classList.contains('arrow-right')) {
        clearInterval(roll);
        partnerDirection = "right";
        rollPartners();
    }
    else if (event.target.classList.contains('menu-open')) {
        event.preventDefault();
        toggleMenu();
    }
    else if (event.target.classList.contains('menu-close')) {
        event.preventDefault();
        toggleMenu();
    }
    else if (event.target.parentNode.classList.contains('menu-item')) {
        toggleMenu();
    }
});


/*
    ======================
        YOUTUBE IFRAME
    ======================
*/
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

const screenW = window.innerWidth;
const screenH = window.innerHeight;

setTimeout(function(){
    document.querySelector('h1').classList.add('playbutton-visible');
}, 1000);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('background-video', {
        videoId: 'Kn4fee6GzPA',
        width: screenW,
        height: screenH,
        host: 'https://www.youtube.com',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'modestbranding': 1,
            'showinfo': 1,
            'rel': 0,
            'playlist': ['Kn4fee6GzPA',
            'Kn4fee6GzPA', 'Kn4fee6GzPA',
            'Kn4fee6GzPA', 'Kn4fee6GzPA'],
            },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
let videotime = 0;
let timeupdater;



function onProgress(currentTime) {
    if (currentTime > 107) {
        document.querySelector('header').classList.add('border-white');
    }
    if (currentTime > 110.5) {
        // if (screenW > 785) {
        //     document.getElementById('scrollbox').click();
        // }
        player.pauseVideo();
        clearInterval(timeupdater);
    }
}

// let videoPlaying = false;

function onPlayerReady(event) {
    // console.log('player ready');
    document.getElementById('background-video').setAttribute('allow', 'autoplay');
    
    // if (!videoPlaying) {
    //     setTimeout(function(){
    //         document.querySelector('h1').classList.add('playbutton-visible');
    //     }, 1000);
    // }

    // setTimeout(function(){
    //     document.querySelector('h1').classList.add('playbutton-visible');
    // }, 1000);
    
    player.setLoop(true);

    function updateTime() {
        var oldTime = videotime;
        if(player && player.getCurrentTime) {
          videotime = player.getCurrentTime();
        }
        if(videotime !== oldTime) {
          onProgress(videotime);
        }
    }
    timeupdater = setInterval(updateTime, 100);
}




function resizeIframe() {
    if ((screenW <= 785) && (screen.orientation.angle == 0)) {
        let iframeH = screenW * 9 /16;
        document.getElementById('background-video').style.height = `${iframeH}px`;
        document.querySelector('.header-principal-container').style.minHeight = `${iframeH}px`;
        // document.documentElement.style.setProperty('--mask-opacity', 0);
        document.querySelector('header').classList.add('border-transparent');
    }
}

function resetIframe() {
    if ((screenW < 500) && (screen.orientation.angle == 90)) {
        let iframeH = screenW * 9 /16;
        document.getElementById('background-video').style.height = "100vh";
        document.querySelector('.header-principal-container').style.minHeight = "100vh";
        // document.documentElement.style.setProperty('--mask-opacity', 0);
    }
}

window.addEventListener("orientationchange", function() {
    if (screen.orientation.angle == 90) {
        resetIframe();
    } else if (screen.orientation.angle == 0) {
        resizeIframe();
    }
});

function onPlayerStateChange(event) {
    resizeIframe();
    if (event.data == 1) {
        // videoPlaying = true;
        document.querySelector('h1').classList.add('nobutton');
        document.getElementById('background-video').classList.remove('stealth');
    }
    // else {
    //     if (!videoPlaying) {
    //         setTimeout(function(){
    //             document.querySelector('h1').classList.add('playbutton-visible');
    //         }, 500);
    //     }
    // }
}


// const parallax = function(entries) {
//     entries.forEach(function(entry) {
//         if (entry.target.id == "ecosysteme" && entry.intersectionRatio > 0){

//         }
//         else if (entry.target.id == "scrollbox" && entry.intersectionRatio > 0) {
//             // cadres.forEach(cadre => {
//             //     cadre.classList.add('desax');
//             // })
//         }
//     })
// }



const soundControl = document.getElementById('sound');
const ecosysteme = document.getElementById("ecosysteme");
const scrollBox = document.getElementById("scrollbox");
const mainMenu = document.querySelector('.menu-menu-principal-container');
// const menuContainer = document.getElementById('menu-menu-principal-container');
let menuPlaceHolder = document.createElement("div");
menuPlaceHolder.id = 'menu-old-space';
mainMenu.appendChild(menuPlaceHolder);

// const observer = new IntersectionObserver(parallax, {});
// observer.observe(scrollBox);
// observer.observe(ecosysteme);



soundControl.addEventListener('change', function() {
    if(this.checked) {
        player.mute();
    } else {
        player.unMute();
    }
});



/*
    ================
        PARALLAX
    ================
*/
const cadres = document.querySelectorAll('.cadre');
const menuUl = document.getElementById('menu-menu-principal');

window.addEventListener('scroll', function(event){

    let menuToTop = mainMenu.getBoundingClientRect().top;
    // console.log(`menuToTop: ${menuToTop}`);

    // mmargin = getComputedStyle(menuUl, null).getPropertyValue("margin");
    menuMargin = parseInt(getComputedStyle(menuUl, null).getPropertyValue('margin-top').replace('px', ''));
    // console.log(`margin of menu: ${mmargin}`);

    if (menuToTop < 50) {
        // mainMenu.style.transition = 'all 0.5s';
        // mainMenu.style.position = 'fixed';
        // mainMenu.style.top = 0;
        // mainMenu.style.transform = `translateY(-${menuMargin}px)`;
        // mainMenu.style.width = '100%';
        // mainMenu.style.zIndex = '500';
        menuUl.classList.add('fixed');
        menuPlaceHolder.classList.add('fixed');
    }
    if (window.pageYOffset <= screenH - 100) {
        // mainMenu.style.position = 'static';
        // // mainMenu.style.top = 0;
        // mainMenu.style.width = 'auto';
        // mainMenu.style.transform = 'none';
        // // mainMenu.style.zIndex = '500';

        menuUl.classList.remove('fixed');
        menuPlaceHolder.classList.remove('fixed');
    }
    
    cadres.forEach(cadre => {
        let distanceToTop = cadre.getBoundingClientRect().top;
        let height = cadre.getBoundingClientRect().height;
        let delta = (screenH - height) / 2 - distanceToTop;

        if (cadre.classList.contains('color-brown')) {
            document.documentElement.style.setProperty('--w-eco', delta / 22 - 40 + 'px');
        }
        else if (cadre.classList.contains('color-purple')) {
            document.documentElement.style.setProperty('--h-agence', -delta / 14 - 180 + 'px');
            document.documentElement.style.setProperty('--h-agence-mobile', -delta / 13 - 70 + 'px');
        }
        else if (cadre.classList.contains('color-green')) {
            document.documentElement.style.setProperty('--h-ops', delta / 14 - 40 + 'px');
        }
        else if (cadre.classList.contains('color-blue')) {
            document.documentElement.style.setProperty('--h-deezer', -delta / 12 - 24 + 'px');
        }
        else if (cadre.classList.contains('color-pink')) {
            document.documentElement.style.setProperty('--h-apple', delta / 15 - 40 + 'px');
        }
    })
});
/*
    =============================================
        GENERAL: STUFF TO DO WHEN DOM'S READY
    =============================================
*/
document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM loaded");

    soundControl.checked = false;

    partners.forEach(partner => {
        if (screenW <= 720) {
            logos.style.transform = `translateX(50px)`;
        } else {
            logos.style.transform = `translateX(0%)`;
        }
    })

    setTimeout(function(){
        roll = setInterval(rollPartners, t);
    }, t);

    
});


function toggleMenu() {
    menu.classList.toggle('menu-on');
    burger.classList.toggle('menu-on');
    menu.classList.toggle('menu-off');
    burger.classList.toggle('menu-off');
}
