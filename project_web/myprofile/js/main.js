//이미지 show
window.onload = function(){
    let picture = ["images/header1.jpg", "images/header2.jpg", "images/header3.jpg"]
    let p_idx = 0;

    showPicture(); 

    function showPicture() {
        document.querySelector("#pic").src = picture[p_idx];
        p_idx++;
        if(p_idx === picture.length)
            p_idx = 0;
        setTimeout(showPicture, 2000); //콜백 함수
    }

    // 디지털 시계
    setInterval(myWatch, 1000);

    function myWatch(){
        var date = new Date();
        var now = date.toLocaleTimeString();
        document.getElementById("demo").innerHTML = "접속시간: " + now;
    }
}

