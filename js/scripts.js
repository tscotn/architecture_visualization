div#sink {
  width: 52.5vw;
  height: 70vw;
  max-width: 300px;
  max-height: 400px;
  overflow: hidden; }
div#sink figure {
  background-image: url('../assets/images/sink.jpg');
  background-size: cover;
  position: relative;
  font-size: 0;
  width: 100%;
  height: 100%;
  margin: 0;
}
div#sink figure > img {
  position: relative;
  width: 100%;
}
div#sink figure div {
  background-image: url('../assets/images/sink_after.jpg');
  background-size: cover;
  position: absolute;
  width: 100%;
  box-shadow: 0 5px 10px -2px rgba(0,0,0,0.3);
  overflow: hidden;
  bottom: 0;
  height: 100%;
}

input[type=range]{
  -webkit-appearance:none;
  -moz-appearance:none;
  position: relative;
  top: -2rem; left: -2%;
  background-color: rgba(255,255,255,0.1);
  width: 102%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]:active {
  outline: none;
}

input[type=range]::-moz-range-track {
  -moz-appearance:none;
    height:15px;
    width: 98%;
    background-color: rgba(255,255,255,0.1);
    position: relative;
    outline: none;
 }
input[type=range]::active {
  border: none;
  outline: none;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance:none;
    width: 20px; height: 15px;
    background: #fff;
    border-radius: 0;
   }
input[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  width: 20px;
  height: 15px;
  background: #fff;
  border-radius: 0;
     }
input[type=range]:focus::-webkit-slider-thumb {
    background: rgba(255,255,255,0.5);
   }
input[type=range]:focus::-moz-range-thumb {
    background: rgba(255,255,255,0.5);
   }
