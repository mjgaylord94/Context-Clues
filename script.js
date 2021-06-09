document.addEventListener(`DOMContentLoaded`, function () {
    var friend = [`Darren`, `Rachel`, `Zoe`, `Kenzie`, `Emily Mountain`]

    var location = [`Sun Room`, `Balcony`, `Kitchen`, `Foyer`, `Living Room`,
        `Master Bedroom`, `Guest Room`, `Wine Cellar`, `Powder Room`, `Study`]

    var object = [`Pringles Can`, `Pill Bottle`, `Monitor`, `iPhone`, `Piggy Bank`,
        `Oscillating Fan`, `Suitcase`, `GameCube`, `Birkenstock`, `Bee Movie`,
        `Pillow`, `Headphones`, `Power Strip`, `Wooden Spoon`, `Pokemon Card Collection`,
        `Rope`, `Lead Pipe`, `Candlestick`, `Revolver`, `Rope`]

    for (i = 1; i < 101; i++) {
        var header = document.createElement(`h3`)
        header.id = i
        var headerText = document.createTextNode(`Accusation ${i}`)

        header.appendChild(headerText)
        document.body.appendChild(header)

        header.addEventListener(`click`, function (e) {
            accusation(e.target.id)

            function accusation(number) {
                if (number < 21) {
                    var suspect = friend[0]
                    e.target.style.color = "#a50000"
                } else if (number < 41) {
                    var suspect = friend[1]
                    e.target.style.color = "#00c3ff"
                } else if (number < 61) {
                    var suspect = friend[2]
                    e.target.style.color = "#4d0180"
                } else if (number < 81) {
                    var suspect = friend[3]
                    e.target.style.color = "#bea200"
                } else if (number < 101) {
                    var suspect = friend[4]
                    e.target.style.color = "#006d09"
                }

                var scene = location[(number - 1) % 10]

                var weapon = object[(number - 1) % 20]

                alert(`Accusation ${number}: I accuse ${suspect}, with the ${weapon} in the ${scene}!`)
            }
        })
    }



})