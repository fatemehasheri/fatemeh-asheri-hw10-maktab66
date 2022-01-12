document.querySelectorAll(".tile").forEach(tile => tile.addEventListener('click',onClick))
function onClick() {
   const fill = document.querySelector(".fill-x").getAttribute(style,visible)
   
}


function fillXO() {
   let fillX =document.getElementsByClassName('tile')
   let arrayfillX =Array.from(fillX)
   arrayfillX.map((item) => {
      item.style.visibility =visible;
      });
   
}