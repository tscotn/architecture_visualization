//sink slider function
var sink_divisor = document.getElementById("sink_divisor"),
  sink_slider = document.getElementById("sink_slider");
  function moveSink_Divisor() {
    sink_divisor.style.width = sink_slider.value+"%";
  }

//island slider function
var island_divisor = document.getElementById("island_divisor"),
  island_slider = document.getElementById("island_slider");
  function moveIsland_Divisor() {
    island_divisor.style.width = island_slider.value+"%";
}

//oven slider function
var oven_divisor = document.getElementById("oven_divisor"),
  oven_slider = document.getElementById("oven_slider");
  function moveOven_Divisor() {
    oven_divisor.style.width = oven_slider.value+"%";
}
