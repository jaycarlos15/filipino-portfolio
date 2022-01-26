/* 
 *  dynamic toggleable dark mode by jay carlos
 */


var darkMode = window.matchMedia("(prefers-color-scheme: dark)");
var pageIsDark;

if (darkMode.matches) {
    // if system is dark, turn pageIsDark to true and move the sun image down
    pageIsDark = true;
    document.getElementById('sunImage').style.marginTop = '0';
    // enable dark.css and disable light.css
    document.getElementsByTagName('link')[1].disabled = false;
    document.getElementsByTagName('link')[2].disabled = true;
    document.getElementById('dmTooltip').innerHTML = 'LIGHT MODE';
} else {
    // if system is light, turn pageIsDark to false and move the sun image up
    pageIsDark = false;
    document.getElementById('sunImage').style.marginTop = '-1em';
    // disable dark.css and enable light.css
    document.getElementsByTagName('link')[1].disabled = true;
    document.getElementsByTagName('link')[2].disabled = false;
    document.getElementById('dmTooltip').innerHTML = 'DARK MODE';
}

function darkModeToggle() {
    if (pageIsDark == true) {
        document.getElementsByTagName('link')[1].disabled = true;
        document.getElementsByTagName('link')[2].disabled = false;
        pageIsDark = false;
        document.getElementById('sunImage').style.marginTop = '-1em';
        document.getElementById('dmTooltip').innerHTML = 'DARK MODE';
    } else {
        document.getElementsByTagName('link')[1].disabled = false;
        document.getElementsByTagName('link')[2].disabled = true;
        pageIsDark = true;
        document.getElementById('sunImage').style.marginTop = '0';
        document.getElementById('dmTooltip').innerHTML = 'LIGHT MODE';
    }
}


/*
 *  scroll percentage detection thanks in part to the lovely folks at
 *  stackoverflow ;)
 */
    
    
document.addEventListener('scroll', function () {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    var adjPercent = percent * 5 - 200;

    getComputedStyle(document.documentElement);

    var pageLabel = 'document.getElementsByClassName("pageLabel")';

    // checks the percentage scrolled and modifies the sidebar text accordingly
    // if (darkMode.matches) checks the css media query and adjusts the colors
    if (percent <= 25) {
        if (pageIsDark == true) {
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
        document.getElementsByClassName("pageLabel")[1].innerHTML = '// BIONOTE';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '// MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '// REPLEKSYON';
    } else if (percent >= 25 && percent <= 50) {
        if (pageIsDark == true) {
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
        document.getElementsByClassName("pageLabel")[1].innerHTML = '· // BIONOTE';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '// MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '// REPLEKSYON';
    } else if (percent >= 50 && percent <= 75) {
        if (pageIsDark == true) {
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
        document.getElementsByClassName("pageLabel")[1].innerHTML = '// BIONOTE';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '· // MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '// REPLEKSYON';
    } else {
        if (pageIsDark == true) {
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
        document.getElementsByClassName("pageLabel")[1].innerHTML = '// BIONOTE';
        document.getElementsByClassName("pageLabel")[2].innerHTML = '// MGA DOKUMENTO';
        document.getElementsByClassName("pageLabel")[3].innerHTML = '· // REPLEKSYON';
    }

    document.getElementById('sidebarContainer').style.marginBottom = adjPercent + 'px';
});


/*
 *  mobile navbar
 */

var sidebarVisible = false;

function sidebarToggle() {
    if (sidebarVisible == false) {
        sidebarVisible = true;
        document.getElementById('sidebar').style.opacity = 1;
        document.getElementById('sidebar').style.zIndex = 1;
    } else {
        sidebarVisible = false;
        document.getElementById('sidebar').style.opacity = 0;
        document.getElementById('sidebar').style.zIndex = -1;
    }

    console.log('sidebar is visible: ' + sidebarVisible);
}