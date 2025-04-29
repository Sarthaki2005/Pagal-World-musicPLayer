
console.log("Welcome to PagalWorld");

let songIndex = 0;
let audioElement=new Audio('songs/motivational.mp3')
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let play = document.getElementById("play");
let songItems = Array.from(document.getElementsByClassName("songsItem"));
let songPhotos = Array.from(document.getElementsByClassName("songItem"));
let songPlayButtons = Array.from(document.getElementsByClassName("itemPlay"));
let nextPlay=document.getElementById("next")
let previousPlay=document.getElementById("previous")
let currentSongTime=0

let songs = [
    { songName: "Motivational", filePath: "songs/motivational.mp3", coverPath: "Covers/cover2.jpg" },
    { songName: "Ik-Mulaqat", filePath: "songs/ik-mulaqat.mp3", coverPath: "Covers/ik-mulaqat.jpg" },
    { songName: "Jaan-Nisaar", filePath: "songs/jaan-nisaar.mp3", coverPath: "Covers/jaan-nisaar.jpeg" },
    { songName: "Main-Rahu", filePath: "songs/main-rahu.mp3", coverPath: "Covers/main-rahu.jpg" },
    { songName: "Main-Tere-Nal", filePath: "songs/main-tere-nal.mp3", coverPath: "Covers/main-tere-nal.jpg" }
];



// const getFileName = (path) => path.split('/').pop
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.currentTime = currentSongTime;
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        play.style.opacity = 1;
    } else {
        currentSongTime=audioElement.currentTime
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        play.style.opacity = 0;
        makeAllPlays()
    }
});


audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    let bar = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = bar;
});


progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value / 100) * audioElement.duration;
});


songItems.forEach((element, i) => {
    console.log(element, i);
    element.innerHTML = songs[i].songName;
});


songPhotos.forEach((photo, i) => {
    photo.getElementsByTagName("img")[0].src = songs[i].coverPath;
});


const makeAllPlays = () => {
    songPlayButtons.forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-circle-play');
    });
};



songPlayButtons.forEach((element,i)=>{
    element.addEventListener('click', (e) => {
        
           
           
if(e.target.classList.contains('fa-circle-play')){
    makeAllPlays();
    console.log(e)
    // if(audioElement.src!==)
    songIndex=parseInt(e.target.id)
    console.log(songIndex)
    audioElement.src=songs[i].filePath
    audioElement.currentTime=currentSongTime
    audioElement.play()
    play.style.opacity=1
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-pause')
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
    document.getElementsByClassName("name")[0].innerHTML=songs[i].songName
    }
   else{
        console.log("Else is working")
        e.target.classList.remove('fa-pause')
        e.target.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-circle-play')
        audioElement.pause()
        currentSongTime=audioElement.currentTime
        play.style.opacity=0
    }
})
})

//NEXT AND PREVIOUS HANDLERS
nextPlay.addEventListener('click',()=>{
if(songIndex>4){
  songIndex=0

}
else{
   songIndex+=1 
}

audioElement.src=songs[songIndex].filePath
audioElement.currentTime=0
audioElement.play()
makeAllPlays()
songPlayButtons[songIndex].classList.remove('fa-play-circle')
songPlayButtons[songIndex].classList.add('fa-pause')
masterPlay.classList.remove('fa-play-circle')
masterPlay.classList.add('fa-pause')
document.getElementsByClassName("name")[0].innerHTML=songs[songIndex].songName
play.style.opacity=1
})
previousPlay.addEventListener('click',()=>{
    if(songIndex<0){
      songIndex=0
    
    }
    else{
       songIndex-=1 
    }
    audioElement.src=songs[songIndex].filePath
    audioElement.currentTime=0
    audioElement.play()
    makeAllPlays()
    songPlayButtons[songIndex].classList.remove('fa-play-circle')
songPlayButtons[songIndex].classList.add('fa-pause')
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause')
    document.getElementsByClassName("name")[0].innerHTML=songs[songIndex].songName
play.style.opacity=1
    })
    

