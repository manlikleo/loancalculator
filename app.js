



// form variables 
const loanForm = document.getElementById('loan-form');
let amount = loanForm.amount;
let  interest = loanForm.interest;
let years = loanForm.years;



let monthlypay = loanForm.monthlypay;
let totalpay = loanForm.totalpay;
let totalinterest = loanForm.totalinterest;
 
const loader = document.querySelector('.loading');
const results = document.querySelector('.results');


document.addEventListener('DOMContentLoaded', function(){

    

    loanForm.addEventListener('submit', e =>{

        e.preventDefault();
        loader.classList.add('activated')
        results.classList.remove('activated')
        setTimeout(calculateLoan,2000);
       

    });



});


function ShowError(errormessage){

    const errorEle = document.createElement('div');

    // add class to div
    errorEle.className = "alert alert-danger"
    errorEle.setAttribute("role","alert");

    errorEle.appendChild(document.createTextNode(errormessage));


    const cardEle = document.querySelector('.card');
    const headEle = document.querySelector('.heading');

    cardEle.insertBefore(errorEle,headEle);

    setTimeout(popup,3000);

    results.classList.remove('activated');
    loader.classList.remove('activated');

}


function popup(){
    document.querySelector('.alert').remove()
}


function calculateLoan(){


    let principal = parseFloat(amount.value); 
        let calcInterest = parseFloat(interest.value)/100/12;
        let calcPayment = parseFloat(years.value)*12;

        // computing values 
        const varx =  Math.pow(1 + calcInterest,calcPayment);
        const monthly = (principal * varx * calcInterest)/( varx-1);
        
        if (isFinite(monthly)){
            monthlypay.value = monthly.toFixed(2);
            totalpay.value = (monthly * calcPayment).toFixed(2);
            totalinterest.value = ((monthly * calcPayment)- principal).toFixed(2);
            results.classList.add('activated');
            loader.classList.remove('activated');
            amount.value = '';
            interest.value = '';
            years.value = '';
            
        
        }else{
            ShowError('Kindly check your input')
            
        }

        
}