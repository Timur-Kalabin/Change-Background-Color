let colors = ['red', 'OliveDrab', 'LightSeaGreen', 'blue', 'green', 'Purple', 'DarkSalmon', 'pink', 'Crimson', 'LightCoral', 'MediumVioletRed', 'DarkOrange', 'DarkKhaki', 'DimGrey']
let colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let index = 0
// работа с селектором body
body = document.querySelector('body')
document.body.style.backgroundColor = '#913BFF' // записываем цвет начального фона

// создать функцию перебора массива при нажатии на кнопку через событие onclick

// function changeColor(){
    // 1 Вариант 
    // index = Math.floor(Math.random() * colors.length)
    // let color = colors[index]
    // body.style.backgroundColor = color
    // console.log(index, color)

    // 2 Вариант
    // let color = colors[index++]
    // index = index % 14
    // body.style.backgroundColor = color
    // console.log(index, color)

    // 3 Вариант
    // let arr = []
    // let color
    // for(let i = 0; i < 6; i++){
    //     index = Math.floor(Math.random() * colorHex.length)
    //     arr.push(colorHex[index])
    //     color = '#' + arr.join('')
    // }

    // 4 Вариант
    // let color = '#'
    // for(let i = 0; i < 6; i++){
    //     index = Math.floor(Math.random() * colorHex.length)
    //     color += colorHex[index]
    // }

    // body.style.backgroundColor = color
// }

// создать функцию перебора массива при нажатии на кнопку через слелектор

document.querySelector('#changeColor').addEventListener('click', () => {
    let color = '#'
    for(i = 0; i < 6; i++){
        index = Math.floor(Math.random() * colorHex.length)
        color += colorHex[index]
    }
    
    body.style.backgroundColor = color
})