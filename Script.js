points = [];


tittle = document.getElementById("tittle");
Button = document.getElementById("button");
bg = document.getElementById("body");

Button.addEventListener('click', function(event){
    event.preventDefault;

    rng = Math.floor(Math.random() * 5 ) + 1

    points.push(1);

    switch (points.length){

        case 1:
            tittle.innerHTML = "Never gonna give you up"
            break;

        case 2:
            tittle.innerHTML = "Never gonna let you down"
            break;
        
        case 3:
            tittle.innerHTML = "Never gonna turn around and desert you"
            break;

        case 4:
            tittle.innerHTML = "Never gonna make you cry"
            break;

        case 5:
            tittle.innerHTML = "Never gonna say goodbye"
            break;

        case 6: 
            tittle.innerHTML = "Never gonna tell a lie and hurt you"
            break;
    }

    if (points.length == 6){
        points = [];
    }

    if (points.length != 0){
        Button.innerHTML = "PLEASE PRESS THE BUTTON"
    }
    
console.log(rng)
    switch (rng) {
        case 1:
            Button.backgroundColor = '#51e2f5'
            bg.style.backgroundColor = '#51e2f5'
            break;
        case 2:
            Button.backgroundColor = '#d0bdf4'
            bg.style.backgroundColor = '#d0bdf4'
            break;
        case 3:
            Button.backgroundColor = '#f75990'
            bg.style.backgroundColor = '#f75990'
            break;
        case 4:
            Button.backgroundColor = '#e8f9fd'
            bg.style.backgroundColor = '#e8f9fd'
            break;
        case 5:
            Button.backgroundColor = '#59ce8f'
            bg.style.backgroundColor = '#59ce8f'
            break;
    }
})

