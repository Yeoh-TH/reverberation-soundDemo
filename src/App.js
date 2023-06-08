import logo from './logo.svg';
import './App.css';

function App() {
var frequencyFetcher = document.getElementById("frequency")
var frequencyDisplay = document.getElementById("frequencyDisplay")
var amplitudeFetcher = document.getElementById("amplitude")
var amplitudeDisplay = document.getElementById("amplitudeDisplay")

const canvas = document.getElementById("graph")
const ctx = canvas.getContext('2d')

frequencyDisplay.innerHTML = frequencyFetcher.value
var frequency = frequencyFetcher.value
frequencyFetcher.oninput = function(){
  stopSound()
  frequencyDisplay.innerHTML = this.value
  frequency = this.value
  redrawCanvas()
  playSound()
}

amplitudeDisplay.innerHTML = amplitudeFetcher.value
var amplitude = amplitudeFetcher.value
amplitudeFetcher.oninput = function(){
  stopSound()
  amplitudeDisplay.innerHTML = this.value
  amplitude = this.value
  redrawCanvas()
  playSound()
}

var audioContext;
var source;

function sine_wave(amplitude, frequency, duration, sr) {
  const samples = duration * sr
  const wave = []
  for (let i = 0; i < samples; i++) {
    const sample = amplitude * Math.sin((2 * Math.PI * frequency * i) / sr)
    wave.push(sample)
  }
  return wave
}

function redrawCanvas() {
  var duration = 0.1
  var sr = 44100


  const wave = sine_wave(amplitude, frequency, duration, sr)

  canvas.width = wave.length
  canvas.height = 200

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.beginPath()
  ctx.moveTo(0, canvas.height / 2)
  for (let i = 0; i < wave.length; i++) {
    const x = (canvas.width * i) / wave.length;
    const y = (canvas.height / 2) - wave[i] * (canvas.height / 2)
    ctx.lineTo(x, y)
  }
  ctx.strokeStyle = '#0077c5'
  ctx.lineWidth = 2
  ctx.stroke()
}
function playSound() {
  audioContext = new (window.AudioContext || window.webkitAudioContext)()
  var duration = 10
  var sr = 44100
  var samples = duration * sr
  var wave = sine_wave(amplitude, frequency, duration, sr)
  var buffer = audioContext.createBuffer(1, samples, sr)
  var data = buffer.getChannelData(0)
  for (let i = 0; i < samples; i++) {
    data[i] = wave[i]
  }
  source = audioContext.createBufferSource()
  source.buffer = buffer
  source.connect(audioContext.destination)
  source.start()
}

function stopSound() {
  if (source) {
    source.stop()
    source.disconnect()
    source = null
  }
  if (audioContext) {
    audioContext.close().then(function() {
      audioContext = null
    })
  }
}

redrawCanvas()

}

export default App;
