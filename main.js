const sliderInterval = 7 * 1000

const nextSlider = (slider, current) => {
  const next = (current + 2) % slider.children.length
  console.log('about to run', {current, next});
  slider.children[current].className = ''
  slider.children[current + 1].className = ''
  slider.children[next].className = 'active'
  slider.children[next + 1].className = 'active'
  setTimeout(() => nextSlider(slider, next), sliderInterval)
}

document.addEventListener("DOMContentLoaded", function(event) { 
  const slider = document.getElementsByTagName('slider')[0]

  setTimeout(() => nextSlider(slider, 0), sliderInterval)
});
