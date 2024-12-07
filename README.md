
# 🍕 Restaurant Order App

## 📖 Description

The **Restaurant Order App** is a web application that allows users to browse menu items, add them to an order, and proceed to checkout. The app dynamically updates the order list, calculates totals, and validates user input in the payment form. This project demonstrates responsive UI design, DOM manipulation, and form validation using vanilla JavaScript.

---

## 🚀 Features

- **Dynamic Menu Rendering**: Display a list of menu items fetched from a JavaScript array.
- **Add to Order**: Add selected menu items to the order list with a click.
- **Order Management**: Remove individual items from the order dynamically.
- **Real-Time Order Total**: Automatically update the total price when items are added or removed.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Form Validation**: Validate user inputs for payment (name, card number, and CVV).

---

## 🖥️ Demo

You can view the live demo of this project [here](https://shymochkaa.github.io/restaurant-app-scrimba/)

---

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic layout of the app.
- **CSS3**: Styling for responsiveness and aesthetics.
- **JavaScript (ES6)**: Logic for menu rendering, user interaction, and form validation.
- **UUID**: For generating unique IDs for menu items.
- **SVG**: Used for interactive icons (e.g., "Add to Order" button).

---

## 📂 Project Structure

```
project-folder/
│
├── css/
│   └── styles.css          # Styles for the app
├── images/
│   └── header-bg-img.png   # Background image for the header
├── scripts/
│   ├── index.js              # Main JavaScript logic
│   └── data.js             # Contains menu data
├── index.html              # Main HTML file
└── README.md               # Project README
```

---

## 🔧 Setup & Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Open in a Browser**
   Open `index.html` in any modern browser to view the app.

3. **Optional**: Use a local server (e.g., Live Server in VS Code) for better experience:
   ```bash
   npx live-server
   ```

---

## ✨ How to Use

1. Browse the available menu items.
2. Click the **Add to Order** button to add an item to your order list.
3. View your order summary in real-time.
4. Remove an item from the order by clicking the "Remove" button next to it.
5. Fill out the payment form with your details and submit the order.

---


## 🐛 Known Issues

- SVG icons may not appear on certain mobile browsers. (Possible issue: scaling or rendering quirks.)
- Images may not load on GitHub Pages due to incorrect paths. Ensure relative paths are correct.

---

## ✍️ Author

Created by **[Hanna Shymanovych](https://github.com/shymochkaa)**.  
Feel free to reach out or contribute to this project!

---

## 🌟 Acknowledgments
Project developed as part of [Scrimba](https://scrimba.com) Frontend Developer Career Path.
