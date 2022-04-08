//Productos
function dropdownMenu() {
    var nav = document.getElementsByClassName("Nav-a");
    var subNav = document.getElementsByClassName("sub-Nav-bar");
    if (subNav[0].style.display == "none") {
        nav[0] = setNavStyle(nav[0], 1);
    } else {
        nav[0] = setNavStyle(nav[0], 0);
    }
    subNav[0] = setSubNavStyle(subNav[0], nav[0]);
}

//Mas
function dropdownMenuExtra() {
    var nav = document.getElementsByClassName("Nav-a");
    var subNav = document.getElementsByClassName("sub-Nav-extra");
    if (subNav[0].style.display == "none") {
        nav[nav.length - 1] = setNavStyle(nav[nav.length - 1], 1);
    } else {
        nav[nav.length - 1] = setNavStyle(nav[nav.length - 1], 0);
    }
    subNav[0] = setSubNavExtraStyle(subNav[0], nav[nav.length - 1]);
}

function setNavStyle(nav, op) {
    nav.style.borderRadius = "3px 3px 0 0";
    if (op != 0) {
        nav.style.color = "#131313";
        nav.style.backgroundColor = "#E7BD70";
        nav.style.border = "1px solid black";
        nav.style.padding = "3px 3px 15px 3px";
    } else {
        nav.style.color = "#E7BD70";
        nav.style.backgroundColor = "#131313";
        nav.style.borderColor = "transparent";
    }
    return nav;
}

function hoverStyle() {
    var subnav = document.getElementsByClassName("sub-Nav-bar");
    var nav = document.getElementsByClassName("Nav-a");
    if (subnav[0].style.display != "flex") {
        nav[0].style.color = "#131313";
        nav[0].style.backgroundColor = "#E7BD70";
        nav[0].style.borderColor = "#E7BD70";
        nav[0].style.padding = "3px"
    }
}

function hoverStyleExtra() {
    var subnav = document.getElementsByClassName("sub-Nav-extra");
    var nav = document.getElementsByClassName("Nav-a");
    if (subnav[0].style.display != "flex") {
        nav[nav.length - 1].style.color = "#131313";
        nav[nav.length - 1].style.backgroundColor = "#E7BD70";
        nav[nav.length - 1].style.borderColor = "#E7BD70";
        nav[nav.length - 1].style.padding = "3px"
    }
}

function resetHoverStyle() {
    var subnav = document.getElementsByClassName("sub-Nav-bar");
    var nav = document.getElementsByClassName("Nav-a");
    if (subnav[0].style.display != "flex") {
        nav[0] = setNavStyle(nav[0], 0);
    }
}

function resetHoverStyleExtra() {
    var subnav = document.getElementsByClassName("sub-Nav-extra");
    var nav = document.getElementsByClassName("Nav-a");
    if (subnav[0].style.display != "flex") {
        nav[nav.length - 1] = setNavStyle(nav[nav.length - 1], 0);
    }
}

function setSubNavStyle(subNav, nav) {
    subNav.style.backgroundColor = "#E7BD70";
    subNav.style.borderRadius = "0 3px 3px 3px";
    subNav.style.left = nav.getBoundingClientRect().left + 1; //crea el submenu 'productos' en la posicion justa
    controlSubMenu();
    return subNav;
}

function setSubNavExtraStyle(subNav, nav) {
    subNav.style.backgroundColor = "#E7BD70";
    subNav.style.borderRadius = "0 3px 3px 3px";
    subNav.style.left = nav.getBoundingClientRect().left + 1; //crea el submenu 'productos' en la posicion justa
    controlSubMenuExtra();
    return subNav;
}

function controlLogin() {
    var loginMenu = document.getElementsByClassName("login-menu");
    if (loginMenu[0].style.display != "none") {
        loginMenu[0].style.display = "none";
    } else {
        loginMenu[0].style.display = "block";
    }
}

function controlSubMenu() {
    var subnav = document.getElementsByClassName("sub-Nav-bar");
    if (subnav[0].style.display != "none") {
        subnav[0].style.display = "none";
    } else {
        subnav[0].style.display = "flex";
    }
}

function controlSubMenuExtra() {
    var subnav = document.getElementsByClassName("sub-Nav-extra");
    console.log(subnav[0]);
    if (subnav[0].style.display != "none") {
        subnav[0].style.display = "none";
    } else {
        subnav[0].style.display = "flex";
    }
}

function controlLoginForm() {
    var loginForm = document.getElementsByClassName("login-container");
    if (loginForm[0].style.display != "none") {
        loginForm[0].style.display = "none";
    } else {
        loginForm[0].style.display = "flex";
    }
}

function controlSignUpForm() {
    var SignUp = document.getElementsByClassName("signUp-container");
    if (SignUp[0].style.display != "none") {
        SignUp[0].style.display = "none";
    } else {
        SignUp[0].style.display = "flex";
    }
}

function modifyMenu() {
    var nav = document.getElementsByClassName("Nav-a");
    var login = document.getElementById("Login-icon");
    var loginShow = document.getElementsByClassName("login-menu-li");
    var loginButtons = document.getElementsByClassName("login-button");
    var signUpButtons = document.getElementsByClassName("signUp-button");

    controlSubMenu();
    controlSubMenuExtra();
    controlLogin();
    controlLoginForm();
    controlSignUpForm();

    nav[0].addEventListener("click", dropdownMenu);
    nav[0].addEventListener("mouseover", hoverStyle);
    nav[0].addEventListener("mouseout", resetHoverStyle);

    nav[nav.length - 1].addEventListener("click", dropdownMenuExtra);
    nav[nav.length - 1].addEventListener("mouseover", hoverStyleExtra);
    nav[nav.length - 1].addEventListener("mouseout", resetHoverStyleExtra);

    login.addEventListener("click", controlLogin);
    loginShow[0].addEventListener("click", controlSignUpForm);
    loginShow[1].addEventListener("click", controlLoginForm);
    signUpButtons[1].addEventListener("click", controlSignUpForm);
    loginButtons[2].addEventListener("click", controlLoginForm);
}

document.addEventListener("DOMContentLoaded", function() {
    modifyMenu();
});