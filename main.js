document.addEventListener('scroll', function(){
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    
    getComputedStyle(document.documentElement);

    if (percent <= 25) {
        document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(100, 100, 180)';
        document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(80, 80, 90)';
        document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(80, 80, 90)';
        document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(80, 80, 90)';

        document.getElementsByClassName("pageLabel")[0].innerHTML = '· // WELCOME';
        document.getElementsByClassName("pageLabel")[1].innerHTML = '// MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '// REPLEKSYON';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '// BIONOTE';
    } else if (percent >= 25 && percent <= 50) {
        document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(80, 80, 90)';
        document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(100, 100, 180)';
        document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(80, 80, 90)';
        document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(80, 80, 90)';

        document.getElementsByClassName("pageLabel")[0].innerHTML = '// WELCOME';
        document.getElementsByClassName("pageLabel")[1].innerHTML = '· // MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '// REPLEKSYON';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '// BIONOTE';
    } else if (percent >= 50 && percent <= 75) {
        document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(80, 80, 90)';
        document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(80, 80, 90)';
        document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(100, 100, 180)';
        document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(80, 80, 90)';

        document.getElementsByClassName("pageLabel")[0].innerHTML = '// WELCOME';
        document.getElementsByClassName("pageLabel")[1].innerHTML = '// MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '· // REPLEKSYON';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '// BIONOTE';
    } else {
        document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(80, 80, 90)';
        document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(80, 80, 90)';
        document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(80, 80, 90)';
        document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(100, 100, 180)';
        
        document.getElementsByClassName("pageLabel")[0].innerHTML = '// WELCOME';
        document.getElementsByClassName("pageLabel")[1].innerHTML = '// MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '// REPLEKSYON';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '· // BIONOTE';
    }
    console.log("scrolled: " + percent);
});