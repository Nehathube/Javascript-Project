//Initialise the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName : "Tu mera koi na", filepath : "songs/1.mp3", coverpath : "covers/1.jpg"},
    {songName : "Khali Salam Dua", filepath : "songs/2.mp3", coverpath : "covers/2.jpg"},
    {songName : "Deevane Deevane", filepath : "songs/3.mp3", coverpath : "covers/3.jpg"},
    {songName : "Ham Tere Bin", filepath : "songs/4.mp3", coverpath : "covers/4.jpg"},
    {songName : "Dekha Hajaro Dafa", filepath : "songs/5.mp3", coverpath : "covers/5.jpg"},
    {songName : "Bullesha Saudai", filepath : "songs/6.mp3", coverpath : "covers/6.jpg"},
    {songName : "maheru", filepath : "songs/7.mp3", coverpath : "covers/7.jpg"},
    {songName : "Teri Zuki Najar", filepath : "songs/8.mp3", coverpath : "covers/8.jpg"},
    {songName : "O Jalima", filepath : "songs/9.mp3", coverpath : "covers/9.jpg"},
    {songName : "khwab", filepath : "songs/10.mp3", coverpath : "covers/10.jpg"}   
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to Event
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress

})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
        
        })
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        element.classList.add('fa-pause-circle')
        element.classList.remove('fa-play-circle');
        audioElement.src =`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
          
    })
    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');  
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');  
    
})





