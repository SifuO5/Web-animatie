var blokjes = document.querySelectorAll('.blokje');

blokjes.forEach(blokje => blokje.addEventListener('mouseenter', function (event) {
    console.log(event.currentTarget);
    var currentTarget = event.currentTarget;
    currentTarget.classList.add("zwart");
}))

blokjes.forEach(blokje => blokje.addEventListener('mouseleave', function (event) {
    var currentTarget = event.currentTarget;
    setTimeout(() => {
        currentTarget.classList.remove("zwart")
    }, 500);
}))
