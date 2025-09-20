##Color Changer with random color using start and stop buttons
```javascript
const randomColor = function(){
  const hex ="0123456789ABCDEF"
  let color = '#'
  for(let i =0; i < 6; i++ ){
    color += hex[Math.floor(Math.random()* 16)]
  }
  return color;
};
const startChangingColor = function(){
  intervalId = setInterval(ChangeBgcolor, 1000);
 function ChangeBgcolor(){
   document.body.style.backgroundColor = randomColor()
 }
 
}
const StopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', StopChangingColor)
```
