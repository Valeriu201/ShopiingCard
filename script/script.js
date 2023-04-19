const products = [
  {
    name: "Husă Xiaomi Redmi 10C Frosted Shield Peacock Blue e",
    price: 200,
    img: "./img/husa-1.webp",
  },
  {
    name: "Husă Samsung Galaxy A23 (EF-OA235TPEGWW) Peach Orange",
    price: 349,
    img: "./img/husa-2.webp",
  },
  {
    name: "Stație de încărcare și curățare aspirator Xiaomi Vacuum-Mop 2 Ultra Auto-Empty Dock Black",
    price: 380,
    img: "./img/statie.webp",
  },
  {
    name: "Rucsac pentru laptop American Tourister Upbeat zip M 15.6 Black",
    price: 1000,
    img: "./img/bag.webp",
  },
  {
    name: "Încărcător de rețea Apple MHJE3ZM (20 W) White",
    price: 250,
    img: "./img/charge.webp",
  },
  {
    name: "Husă Portmoneu Apple iPhone 12/ 12 Mini/ 12 Pro/ 12 Pro Max (MHLP3ZE/ A) California Poppy Brown",
    price: 1599,
    img: "./img/husa-3.webp",
  },
  {
    name: "USB-C to USB Adapter, White",
    price: 649,
    img: "./img/usc-c.webp",
  },
  {
    name: "Încărcător Apple Magsafe Duo Charger (14 W) White",
    price: 3499,
    img: "./img/magsave.webp",
  },
];

const productDiv = document.querySelector("#products");
const cartDiv = document.querySelector("#card");
const totalDiv = document.querySelector("#total");

products.forEach((item) => {
  productDiv.innerHTML += `
  <div class="product-card">
  <img src="${item.img}">
  <h2>${item.name}</h2>
  <div class="card-price">
  <p>${item.price} Lei</p>
  <button class="btn-add">Add to card</button>
  </div>
  </div>
  `;
});

const cardBtn = document.querySelectorAll(".btn-add");
let card = [];

cardBtn.forEach((item, idx) => {
  item.addEventListener("click", () => {
    console.log(products[idx]);
    if (!card.includes(products[idx])) card.push(products[idx]);
    showMyCard();
  });
});

function showMyCard() {
  cartDiv.innerHTML = "";
  card.forEach((item) => {
    cartDiv.innerHTML += `
        <div class="card-item">
        <img class="card-img" src="${item.img}">
        <h2>${item.name}</h2>
        <p>${item.price} Lei</p>
        <button class="delete-btn">X</button>
        </div>
        `;
  });



  
  const deliteBtns = document.querySelectorAll(".delete-btn");
  deliteBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      card = card.filter((item, i) => i !== idx);
      showMyCard();
    });
  });
  let total = card.reduce((s, item) => s + item.price, 0);
  if (!total == 0) {
    totalDiv.innerHTML = `
  Suma totala este : ${total}
  `;
  } else {
    totalDiv.innerHTML = `

  `;
  }
}
