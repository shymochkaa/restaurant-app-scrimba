import { menuArray } from './data.js'

//menu items
const menuContainer = document.querySelector('#menu-container')

//order items 
const orderItems = document.querySelector('#order-items')
const orderArr = []
const orderDetails = document.querySelector('#order-details')
const totalPriceEl = document.querySelector('#total-price')
let total = 0
totalPriceEl.textContent = `$${total}`

//order completion
const completeOrderBtn = document.querySelector('#complete-order-btn')

//modal
const modalSection = document.querySelector('#modal-section')

//order confirmation
const orderConfirmationMessage = document.querySelector('#order-confirmation-message')

// inputform
const paymentForm = document.querySelector('#payment-form')
const userFullNameInput = document.querySelector('#user-full-name-input')
const userCardNumberInput= document.querySelector('#user-card-number-input')
const userCvvInput= document.querySelector('#user-cvv-input')

//Rendering the menu

const renderMenu = (arr) => {
    
    const html = arr.map((menuItem, index) => {

        const {name, ingredients, id, price, emoji} = menuItem

        return `<div id="${id}" class="menu-item">
                        <p class="emoji inter-font">${emoji}</p>
                        <div class="menu-item-details">
                            <h3 class="item-name font-size-28">${name}</h3>
                            <p class="ingredients">${ingredients.join(', ')}</p>
                            <p class="price">$${price}</p>
                        </div>
                        <button class="add-to-order-btn inter-font" data-button-index="${index}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none" data-button-index="${index}" >
                                <path d="M6.83949 13.8068V0.011363H8.16903V13.8068H6.83949ZM0.612216 7.57955V6.23864H14.3963V7.57955H0.612216Z" fill="#3C3C3C"/>
                            </svg>
                        </button>
                </div>`

    }).join('')

    menuContainer.innerHTML = html

}

 renderMenu(menuArray)

// End of the rendering the menu


//Event listener for add order button 

document.addEventListener('click',(e) => {
    
    const button = e.target.closest('.add-to-order-btn') // Get the button regardless of what inside is clicked
    button && button.dataset.buttonIndex && handleAddToOrderBtnClick(button.dataset.buttonIndex)
       
})


// handling the click on the order button
const handleAddToOrderBtnClick = (menuItemId) => {
    
    const newItem = menuArray[menuItemId]
    orderArr.push(newItem)
    const itemIndex = orderArr.length - 1
    renderOrderItem(newItem, itemIndex)
    updateTotal(orderArr)
    orderDetails.scrollIntoView({ behavior: 'smooth' })
}

// rendering a new order item

const renderOrderItem = (menuItem, index) => {
    
    const { name, price } = menuItem
    
    const orderItemDiv = document.createElement('div')
    orderItemDiv.className = 'order-item'
    orderItemDiv.innerHTML =`  <p class="font-size-28">${name}</p>
                                <button class="remove-btn" data-remove-button="${index}">remove</button>
                                <p class="price price-order-item">$${price}</p>
                            `

    orderItems.appendChild(orderItemDiv)
    displayOrders()
}

// update total sum 

const updateTotal = (arr) => {
    const priceArr = arr.map((orderItem) => orderItem.price)
    if(priceArr.length > 0) {
        const totalPrice  = priceArr.reduce((total, currentPrice) => total + currentPrice)
        total = totalPrice
        totalPriceEl.textContent = `$${total}`
    }
    
}
// End the event listener for add order button

// removing item from the order 

document.addEventListener('click', (e) => e.target.dataset.removeButton && deleteItemFromOrder(e.target.dataset.removeButton))

const deleteItemFromOrder = (orderItemIndex) => {

    orderArr.splice(orderItemIndex, 1)
    const orderToRemove = document.querySelector(`[data-remove-button="${orderItemIndex}"]`)
    orderToRemove.parentElement.remove()
    const orderItems = document.querySelectorAll('.order-item button[data-remove-button]')
    orderItems.forEach((button, newIndex) => button.setAttribute('data-remove-button', newIndex))
    updateTotal(orderArr)
    displayOrders()
}

// display orders

const displayOrders = () => orderDetails.classList.toggle('hidden', orderArr.length === 0)

// order confirmation 

completeOrderBtn.addEventListener('click', ()=> {
    orderDetails.classList.add('hidden')
    modalSection.classList.remove('hidden')
})


// Input form validation

userFullNameInput.addEventListener('input', (e) => {
    let input = e.target.value

    // Remove invalid characters (no numbers allowed)
    input = input.replace(/[^a-zA-Z\s-]/g, '')

    // Remove leading spaces
    input = input.replace(/^\s+/g, '')

    // Replace multiple spaces with a single space
    input = input.replace(/\s+/g, ' ')

    // Capitalize the first letter after a hyphen or space
    input = input.replace(/(^|\s|-)([a-z])/g,(match, separator, letter) => separator + letter.toUpperCase())

    // Update the input field value
    e.target.value = input

})


userFullNameInput.addEventListener('blur', (e) => {

    let input = e.target.value

    input = input
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

    input = input.trim()    
})


userCardNumberInput.addEventListener('input', (e) => {
    let input = e.target.value

    // Remove all non-digit characters
    input = input.replace(/\D/g, '')

    // Add a space after every 4 digits
    input = input.replace(/(.{4})/g, '$1 ').trim()

    // Update the input field value
    e.target.value = input
})

userCvvInput.addEventListener('input', (e) => {
    let input = e.target.value

    // Remove all non-digit characters
    input = input.replace(/\D/g, '')

     // Update the input field value
     e.target.value = input

})


paymentForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const paymentFormData = new FormData(paymentForm)
    const customerName = paymentFormData.get('fullName')

    orderConfirmationMessage.textContent = `Thanks, ${customerName}! Your order is on its way!`

    modalSection.classList.add('hidden')
    orderConfirmationMessage.classList.remove('hidden')
    orderConfirmationMessage.scrollIntoView({ behavior: 'smooth' })
})

// End of input form validation