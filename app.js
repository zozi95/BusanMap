const 





createFlowers();

setInterval(createFlowers, 200);

function createFlowers() {
  const flowers = document.createElement("i");
  flowers.classList.add("fas");
  flowers.classList.add("fa-egg");
  flowers.style.left = Math.random() * window.innerWidth + "px";
  flowers.style.animationDuration = Math.random() * 20 + 10 + "s";
  flowers.style.opacity = Math.random();
  flowers.style.fontSize = Math.random() * 2 + 5 + "px";

  document.body.appendChild(flowers);

  setTimeout(() => {
    flowers.remove();
  }, 10000);
}


