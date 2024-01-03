
let bankSolde = '10000';
// check if solde in localStorage exist or not.
if (localStorage.getItem('solde') == null) {
    localStorage.setItem('solde', '10000')
} else {
    bankSolde = localStorage.getItem('solde');
}

// select HTML elements
let soldeSpan = document.querySelector('#solde');
let inpt = document.querySelector('input');
let form = document.querySelector('form')
let error = document.querySelector('#error')
let depotBtn = document.querySelector('#depot')

// show solde in span element and change solor
solde.innerText = localStorage.getItem('solde') + ' DH';
changeColor(bankSolde, soldeSpan)


// submit retrait
form.addEventListener('submit', (e) => {
    e.preventDefault();
    bankSolde = localStorage.getItem('solde')
    let retrait = inpt.value;
    if(retrait <= 0) {
        error.innerText = "Vous devez faire un retrait de min 1 DH";
        setTimeout(() => {
            error.innerText = '';
        }, 5000)
    } else {
        console.log(retrait, bankSolde)
        if(Number(retrait) > Number(bankSolde)) {
            error.innerText = "Solde Insuffisant";
            setTimeout(() => {
                error.innerText = '';
            }, 5000)
        } else {
            error.innerText = '';
            let result = bankSolde - retrait
            localStorage.setItem('solde', result)
            soldeSpan.innerText = localStorage.getItem('solde') + ' DH';
            changeColor(result, soldeSpan)
        }
    }

    inpt.value = '';
})


depotBtn.addEventListener('click', () => {
    bankSolde = localStorage.getItem('solde')
    let depot = inpt.value;
    if(depot <= 0) {
        error.innerText = "Vous devez faire un depot de min 1 DH";
        setTimeout(() => {
            error.innerText = '';
        }, 5000)
    } else {
        error.innerText = '';
        let result = Number(bankSolde) + Number(depot)
        localStorage.setItem('solde', result)
        soldeSpan.innerText = localStorage.getItem('solde') + ' DH';
        changeColor(result, soldeSpan)
    }

    inpt.value = ''
})

/**
 * change color of span element
 * @param {*} solde 
 * @param {*} element 
 */
function changeColor(solde, element) {
    if(solde >= 1000) {
        element.style.color = "green";
    } else {
        element.style.color = "red";
    }
}

