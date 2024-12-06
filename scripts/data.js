import { v4 as uuidv4 } from 'https://jspm.dev/uuid'


const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: uuidv4(),
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        id: uuidv4(),
        price: 12,
        emoji: "🍔",
        
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        id: uuidv4(),
        price: 12,
        emoji: "🍺",

    }
]

export { menuArray }