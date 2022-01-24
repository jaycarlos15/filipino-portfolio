document.addEventListener('scroll', function () {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    var adjPercent = percent * 5 - 200;

    getComputedStyle(document.documentElement);

    var darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    var pageLabel = 'document.getElementsByClassName("pageLabel")';

    // checks the percentage scrolled and modifies the sidebar text accordingly
    // if (darkMode.matches) checks the css media query and adjusts the colors
    if (percent <= 15) {
        if (darkMode.matches) {
            document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(135, 135, 190)';
            document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(105, 105, 125)';
            document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(105, 105, 125)';
            document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(105, 105, 125)';
        } else {
            document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(100, 100, 180)';
            document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(120, 120, 140)';
            document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(120, 120, 140)';
            document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(120, 120, 140';
        }

        document.getElementsByClassName("pageLabel")[0].innerHTML = '· // WELCOME';
        document.getElementsByClassName("pageLabel")[1].innerHTML = '// MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '// REPLEKSYON';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '// BIONOTE';
    } else if (percent >= 15 && percent <= 50) {
        if (darkMode.matches) {
            document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(105, 105, 125)';
            document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(135, 135, 190)';
            document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(105, 105, 125)';
            document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(105, 105, 125)';
        } else {
            document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(120, 120, 140)';
            document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(100, 100, 180)';
            document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(120, 120, 140)';
            document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(120, 120, 140)';   
        }

        document.getElementsByClassName("pageLabel")[0].innerHTML = '// WELCOME';
        document.getElementsByClassName("pageLabel")[1].innerHTML = '· // MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '// REPLEKSYON';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '// BIONOTE';
    } else if (percent >= 50 && percent <= 75) {
        if (darkMode.matches) {
            document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(105, 105, 125)';
            document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(105, 105, 125)';
            document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(135, 135, 190)';
            document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(105, 105, 125)';
        } else {
            document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(120, 120, 140)';
            document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(120, 120, 140)';
            document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(100, 100, 180)';
            document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(120, 120, 140)';   
        }

        document.getElementsByClassName("pageLabel")[0].innerHTML = '// WELCOME';
        document.getElementsByClassName("pageLabel")[1].innerHTML = '// MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '· // REPLEKSYON';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '// BIONOTE';
    } else {
        if (darkMode.matches) {
            document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(105, 105, 125)';
            document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(105, 105, 125)';
            document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(105, 105, 125)';
            document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(135, 135, 190)';
        } else {
            document.getElementsByClassName("pageLabel")[0].style.color = 'rgb(120, 120, 140)';
            document.getElementsByClassName("pageLabel")[1].style.color = 'rgb(120, 120, 140)';
            document.getElementsByClassName("pageLabel")[2].style.color = 'rgb(120, 120, 140)';
            document.getElementsByClassName("pageLabel")[3].style.color = 'rgb(100, 100, 180)';
        }
        
        document.getElementsByClassName("pageLabel")[0].innerHTML = '// WELCOME';
        document.getElementsByClassName("pageLabel")[1].innerHTML = '// MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '// REPLEKSYON';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '· // BIONOTE';
    }

    document.getElementById('sidebarContainer').style.marginBottom = adjPercent + 'px';
});