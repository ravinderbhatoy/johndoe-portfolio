const navbar = document.getElementById('navbar')
const numbers = document.querySelectorAll('.number')

// navbar background color

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = '#fff'
        navbar.style.boxShadow = '0px 5px 5px 0px rgba(0, 0, 0, 0.1)'
    } else {
        navbar.style.backgroundColor = '#fffaeb'
        navbar.style.boxShadow = 'none'
    }
})

// timeline numbers

numbers.forEach(number=>{
    if(number.innerText%2==0){
        number.style.left = '-3%'
        number.style.bottom = '40%'
    }
})