let masterPlay = new Audio('./Static/audio/song.mp3');
let elementD = document.getElementById('songP');
elementD.addEventListener('click',()=>{
    if(masterPlay.paused || masterPlay.currentTime<=0){
        masterPlay.play();
    }
    else{
        masterPlay.pause();
    }
})


