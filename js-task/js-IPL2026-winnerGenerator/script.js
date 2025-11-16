var arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'white',
        trophy: 5,
        captain: 'MS Dhoni',
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'lightSkyBlue',
        trophy: 5,
        captain: 'Hardik Pandya',
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'purple',
        trophy: 0,
        captain: 'Faf du Plessis',
    },
    {
        team: 'RR',
        primary: 'pink',
        secondary: 'purple',
        trophy: 1,
        captain: 'Sanju Samson',
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        trophy: 3,
        captain: 'Shreyas Iyer',
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'purple',
        trophy: 1,
        captain: 'Pat Cummins',
    },
    {
        team: 'DC',
        primary: 'blue',
        secondary: 'red',
        trophy: 0,
        captain: 'Rishabh Pant',
    },
    {
        team: 'PBKS',
        primary: 'red',
        secondary: 'silver',
        trophy: 0,
        captain: 'Shikhar Dhawan',
    },
    {
        team: 'GT',
        primary: 'darkBlue',
        secondary: 'gold',
        trophy: 1,
        captain: 'Shubman Gill',
    },
    {
        team: 'LSG',
        primary: 'skyBlue',
        secondary: 'orange',
        trophy: 0,
        captain: 'KL Rahul',
    }
];


var btn =document.querySelector('button')
var h1 =document.querySelector('h1')
var main =document.querySelector('main')


btn.addEventListener('click',function(){
    var winner = arr[Math.floor(Math.random()*arr.length)]
    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary
    main.style.backgroundColor = winner.primary
})