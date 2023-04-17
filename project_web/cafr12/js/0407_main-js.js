window.onload = function(){
    //------------------------- section 카페 소개 - now - 디지털 시계 -------------------------
    setInterval(setWatch, 1000);  //함수 호출

    function setWatch(){
        const date = new Date();
        let now = date.toLocaleTimeString();   //시간 형식으로
        document.getElementById("demo").innerHTML = now;
    }

    //----------------- header 배경 이미지 변경 [소나무, 사막, 기타] -----------------
    let picture = ["./images/header1.jpg", "./images/header2.jpg", "./images/header3.jpg"];
    let imgIdx = 0;

    showPicture();

    function showPicture(){
        let img = document.getElementById("pic");
        img.src = picture[imgIdx];
        imgIdx++;

        if(imgIdx == picture.length){
            imgIdx = 0;
        }

        setTimeout(showPicture, 3000);  //콜백함수 - 자기 자신을 호출해
    }
}
