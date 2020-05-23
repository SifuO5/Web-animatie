var blokjes = document.querySelectorAll('.blokje');
var width = window.innerWidth;





/*responsive buttons*/
console.log(width);

if (width < 1400) {
    console.log("mobile");


    blokjes.forEach(blokje => blokje.addEventListener('click', function (event) {
        console.log(event.currentTarget);
        var currentTarget = event.currentTarget;
        currentTarget.classList.toggle("animatie");

    }))


} else {
    console.log("desktop");

    blokjes.forEach(blokje => blokje.addEventListener('mouseenter', function (event) {
        console.log(event.currentTarget);
        var currentTarget = event.currentTarget;
        currentTarget.classList.add("animatie");
    }))

    blokjes.forEach(blokje => blokje.addEventListener('mouseleave', function (event) {
        var currentTarget = event.currentTarget;
        setTimeout(() => {
            currentTarget.classList.remove("animatie")
        }, 500);
    }))
}

/*Buro click*/
var buro1 = document.getElementById('buro_1');
var buro2 = document.getElementById('buro_2');
var sectie1 = document.getElementById('sectie1');

sectie1.addEventListener("click", veranderKleur);

function veranderKleur() {
    console.log("klik");
    buro1.classList.toggle("rood");
    buro2.classList.toggle("zwart");
}
document.onkeypress = veranderKleur;
blokjes.onkeypress = veranderKleur;

if (width > 1400) {
/*    var blokjeDiv = document.querySelectorAll('.blokje div');*/
    blokjes.forEach(blokjeKlik => blokjeKlik.addEventListener("click", resize));

    function resize(broodjeAap) {
        console.log("hee22")
        console.log(broodjeAap.currentTarget)
        broodjeAap.currentTarget.classList.toggle("groter");
    }
}
