import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Brot mit italienischem Olivenöl und Rosmarin.",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomatensauce und Mozzarella.",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomatensauce, Mozzarella, Spinat und Ricotta-Käse.",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomatensauce, Mozzarella, Pilze und Zwiebeln.",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salami",
    ingredients: "Tomatensauce, Mozzarella, Salami und Pepperoni.",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomatensauce, Mozzarella, Schinken, Rucola und Burrata-Käse.",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>React Pizzeria</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Unser Menü</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentische Italienische Küche. <br></br> Alles aus unserem
            Steinofen.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizzas.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Aktuell keine Pizzen verfügbar!</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img className="grow" alt={pizzaObj.name} src={pizzaObj.photoName}></img>
      <div className="grow pointer">
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "AUSVERKAUFT" : pizzaObj.price + "€"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const time = new Date().toLocaleTimeString();
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} time={time} />
      ) : (
        <div className="order1">
          <p>Wir haben aktuell geschlossen unsere Öffnungszeiten sind von</p>
          <p>
            {openHour}:00 Uhr bis {closeHour}:00 Uhr.
          </p>
        </div>
      )}
    </footer>
  );
}

function Order({ closeHour, time }) {
  return (
    <div className="order">
      <span>{time}</span>
      <p>Wir haben bis {closeHour}:00 Uhr geöffnet!</p>
      <button className="btn grow">Bestellen</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
