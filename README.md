## Css file style sheet

##### style 부분 1번째라인 맨 윗부분 root 전체를 콘트롤할때.

````C

:root {
    --text-color: #f0f0f0;
    --background-color: #332741;
    --accent-color: #ff9009;
}

body{
    margin: 0;
    font-family: 'Oswald';
}

````
##### root 부분은 전체를 일괄적으로 변경시 사용.
````c
body{
    margin: 0;
    font-family: 'Oswald';
}
a {
    text-decoration: none;
    color: var(--text-color);
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #332741;
    padding: 8px 12px;
}
.navbar__logo{
    font-size: 24px;
    color: #ff9009;
}
.navbar__logo i {
    color: hsl(34, 100%, 50%);
}
.navbar__menu {
    display: flex;
    list-style: none;
    padding-left: 0;
}
.navbar__menu li {
    padding: 8px 12px;
}
.navbar__menu li :hover {
    background-color: rgb(255, 146, 4);
    border-radius: 4px; 
    width: 100%;

}
.navbar__icons {
    list-style: none;
    color: white;
    display: flex;
    padding-left: 0;
}
.navbar__icons li {
    padding: 8px 12px;
}
.navbar__toggleBtn {
    display: none;
    position: absolute;
}
@media screen and (max-width: 768px) {
    .navbar{
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 24px;

    }
    .navbar__menu {
        display: none;
        flex-direction: column;
        align-items: center;
        width: 100%; 
    }
    
    .navbar__menu li {
        width: 100%;
        text-align: center;
    }
    
    .navbar__icons {
        display: none;
        justify-content: center;
        width: 100%;
         
    }
    .navbar__toggleBtn {
        display: block;
        position: absolute;
        right: 32px;
        font-size: 24;
        color: rgb(255, 145, 2);
    }
    .navbar__menu.active,
    .navbar__icons.active {
        display: flex;
    }
     
}
 
````
##### main.js 스크립트부분 메뉴 보이기 숨기기 부분
````c
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

````

##### js 작성시 첫부분에 항상 들어가서 작업하는것 use strict 부분

````c

// Whole-script strict mode syntax
'use strict';
console.log('hello World');

````
##### index.html 부분 " async" or "defer"

````c
    <!-- <script async src="js/main.js"></script> -->
    <script defer src="main.js"></script>
````
##### icon 부분은 api 에서 불어서 사용하지 않고 예제로 만들어서 넣어봤음

````c
<nav class="navbar">
    <div class="navbar__logo">
    <img src="logo.png" alt="logo-image" width="40px" height="40px"><a href="index.html">LimSite-Test</a>
    </div>
    <ul class="navbar__menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Weddings</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Bookings</a></li>  
    </ul>
    <ul class="navbar__icons">
        <li><img src="logo1.png" alt="logo-image" width="40px" height="40px"></li>
        <li><img src="logo2.png" alt="logo-image" width="40px" height="40px"></li>
    </ul>
    <a href="#" class="navbar__toggleBtn"><img src="thee1.png" alt="logo-image" width="14px"></a>

</nav>    

````
