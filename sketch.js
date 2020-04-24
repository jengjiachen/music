function preload(){
  sound = loadSound('tango.mp3');
}

function setup(){
  let cnv = createCanvas(1000,600);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
 
}

function draw(){
  background('#D94E41');



let waveform = fft.waveform();

  beginShape();
  fill('#D9725B');
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    ellipse(500,300, x/2, y);
  }
  endShape();


  let spectrum = fft.analyze();

  stroke('#D7D9A7');
  fill('#D7D9A7');
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length/2, 0, width*2);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }



  textSize(40);
  noStroke();
  fill('white'); 
  text('Tres Esquinas Tango', 280, 80);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}