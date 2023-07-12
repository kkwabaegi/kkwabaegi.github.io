/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
const todayDiv = document.getElementById("today")
const timeDiv = document.getElementById("time")

function getTime(){
let now = new Date();
timeDiv.textContent = now;
let year=now.getFullYear();
let month=now.getMonth() + 1;
let date=now.getDate();
let hour=now.getHours();
let minute=now.getMinutes();
let second =now.getSeconds();

month = month < 10 ? `0${month}` : month
date = date < 10 ? `0${date}` : date
hour = hour < 10 ? `0${hour}` : hour
minute = minute < 10 ? `0${minute}` : minute 
second = second < 10 ? `0${second}` : second

todayDiv. textContent = `${year}년 ${month}월 ${date}일`
timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`
}
getTime()
setInterval(getTime, 1000)

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
