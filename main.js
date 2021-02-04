
setInterval(OnlineClock,1000)

function OnlineClock(){
    let date = new Date()
    let hourTime = document.querySelector('.hour')
    let minTime = document.querySelector('.min')
    let secTime = document.querySelector('.sec')
    


    let Timehour = date.getHours();
    let Timemin = date.getMinutes();
    let Timesec = date.getSeconds();
    let milTime = date.getMilliseconds()
    let hourrotatePosition = Timehour * 360/12 + ((Timemin * 360/60)/12)
    let minrotatePosition = Timemin * 360/60 + (Timesec * 360/60)/60
    let secrotatePosition = Timesec * 360/60 ;

    hourTime.style.transform = "rotate("+ hourrotatePosition +"deg)"
    minTime.style.transform = "rotate("+ minrotatePosition +"deg)"
    secTime.style.transform = "rotate("+ secrotatePosition +"deg)"


    // console.log(HOUR);
}
// OnlineClock()

let darkTime = document.querySelector(".dark")
let lightTime = document.querySelector(".light")
let watch = document.querySelector('.clock')

darkTime.onclick = () =>{
    document.body.style.background = 'black'
    document.body.style.transition = '1s'
    watch.style.boxShadow = '0px 25px 40px #726CEE';
}

lightTime.onclick = () =>{
    document.body.style.background = 'white';
    document.body.style.transition = '1s'
}