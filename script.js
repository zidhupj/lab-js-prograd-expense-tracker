const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const text = document.querySelector('#text').value;
    const amount = document.querySelector('#amount').value;
    window.localStorage.setItem(text, amount);
});
let income = 0;
let expense = 0;
const display = () => {
    const tl = document.querySelector('#list');

    for (let i = 0; i < localStorage.length; i++) {
        const listItem = document.createElement('li');

        amount = localStorage.getItem(localStorage.key(i))
        if (amount > 0) {
            income += parseInt(amount);

            listItem.classList.add('plus');
            listItem.innerHTML = `${localStorage.key(i)} : +$${Math.abs(amount).toFixed(2)}`

        } else {
            expense += parseInt(amount);

            listItem.classList.add('minus');
            listItem.innerHTML = `${localStorage.key(i)} : -$${Math.abs(amount).toFixed(2)}`
        }
        tl.appendChild(listItem);
    }
    document.querySelector('#money-plus').innerHTML = `+$${Math.abs(income).toFixed(2)}`;
    document.querySelector('#money-minus').innerHTML = `-$${Math.abs(expense).toFixed(2)}`;

    const balance = income + expense;
    document.querySelector('#balance').innerHTML = balance > 0 ? `+$${Math.abs(balance).toFixed(2)}` : `-$${Math.abs(balance).toFixed(2)}`;


}

window.onload = () => {
    display();
}
