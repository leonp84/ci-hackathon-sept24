// create web audio api context

let myDiv = document.getElementById('test');
let audio = document.getElementById('test-sound')

myDiv.addEventListener('mousedown', (e) => {
    const audioCtx = new AudioContext();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = "square";
    let volume = audioCtx.createGain();
    oscillator.connect(volume);
    volume.connect(audioCtx.destination);
    volume.gain.value = e.clientY / 1000;
    oscillator.frequency.setValueAtTime(e.clientX, audioCtx.currentTime);
    myDiv.style.backgroundColor = 'red';
    oscillator.start();
    
    myDiv.addEventListener('mousemove', (e) => { 
        console.log(e.clientY / 1000);
        volume.gain.value = e.clientY / 1000;
        oscillator.frequency.setValueAtTime(e.clientX, audioCtx.currentTime);

    });

    myDiv.addEventListener('mouseup', () => {
        myDiv.style.backgroundColor = 'white';
        oscillator.stop();
    })
})