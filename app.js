const phone = document.querySelector(".phone");
const tabs = document.querySelectorAll(".tab");
const heart = document.querySelector(".heart");
const search = document.querySelector('input[type="search"]');
const restaurantCard = document.querySelector(".restaurant-card");
const openButtons = document.querySelectorAll(".restaurant-card, .next");
const backButton = document.querySelector(".back-button");
const menuList = document.querySelector("#menuList");
const cartQty = document.querySelector("#cartQty");
const cartTotal = document.querySelector("#cartTotal");
const detailDeliveryText = document.querySelector("#detailDeliveryText");
const viewCart = document.querySelector(".cart-bar .view-cart");
const detailScroll = document.querySelector(".detail-scroll");
const cartBack = document.querySelector(".cart-back");
const cartPageScroll = document.querySelector(".cart-page-scroll");
const cartItems = document.querySelector("#cartItems");
const cartItemsTitle = document.querySelector("#cartItemsTitle");
const cartDeliveryText = document.querySelector("#cartDeliveryText");
const cartDeliveryRemain = document.querySelector("#cartDeliveryRemain");
const deliveryProgress = document.querySelector("#deliveryProgress");
const summarySubtotal = document.querySelector("#summarySubtotal");
const summaryDelivery = document.querySelector("#summaryDelivery");
const summaryTotal = document.querySelector("#summaryTotal");
const cartPageQty = document.querySelector("#cartPageQty");
const cartPageSubtotal = document.querySelector("#cartPageSubtotal");
const cartPageDelivery = document.querySelector("#cartPageDelivery");
const clearCartButton = document.querySelector(".cart-delete");
const checkoutButton = document.querySelector(".cart-page-bar .cart-active");
const checkoutBack = document.querySelector(".checkout-back");
const checkoutItems = document.querySelector("#checkoutItems");
const checkoutItemsTitle = document.querySelector("#checkoutItemsTitle");
const checkoutSubtotal = document.querySelector("#checkoutSubtotal");
const checkoutDelivery = document.querySelector("#checkoutDelivery");
const checkoutTotal = document.querySelector("#checkoutTotal");
const placeOrderTotal = document.querySelector("#placeOrderTotal");

const FREE_DELIVERY_TARGET = 50;
const DELIVERY_FEE = 3;

const menuSections = [
  {
    id: "recommend",
    title: "Recommend",
    items: [
      ["101", "Chicken Chop Rice", "鸡扒饭", 9.9, "Crispy chicken chop served with rice and coleslaw.", true],
      ["102", "Curry Sauce Chicken Rice", "咖喱酱鸡饭", 9.9, "Tender chicken with creamy curry sauce.", true],
      ["104", "Mushroom Chicken Rice", "蘑菇鸡饭", 9.9, "Chicken rice topped with mushroom sauce.", true],
      ["115", "Chicken Chop", "鸡扒", 13.9, "Chicken chop with salad and potato.", true],
    ],
  },
  {
    id: "rice",
    title: "Rice 饭",
    items: [
      ["101", "Chicken Chop Rice", "鸡扒饭", 9.9],
      ["102", "Curry Sauce Chicken Rice", "咖喱酱鸡饭", 9.9],
      ["103", "Black Pepper Chicken Rice", "黑胡椒鸡饭", 9.9],
      ["104", "Mushroom Chicken Rice", "蘑菇鸡饭", 9.9],
      ["105", "Sweet n Spicy Chicken Rice", "泰式甜辣鸡饭", 9.9],
      ["106", "Mongolia Sauce Chicken Rice", "蒙古酱鸡饭", 9.9],
      ["107", "Penang Chicken Roll Rice", "槟城鸡肉卷饭", 9.9],
      ["108", "Dori Fish Rice", "鱼扒饭", 9.9],
      ["109", "Curry Sauce Fish Rice", "咖喱酱鱼饭", 9.9],
      ["110", "Black Pepper Fish Rice", "黑胡椒鱼饭", 9.9],
      ["111", "Mushroom Fish Rice", "蘑菇鱼饭", 9.9],
      ["112", "Sweet n Spicy Fish Rice", "泰式甜辣鱼饭", 9.9],
      ["113", "Mongolia Sauce Fish Rice", "蒙古酱鱼饭", 9.9],
      ["114", "Thai Style BBQ Fish Rice", "泰式烤鱼饭", 9.9],
    ],
  },
  {
    id: "mains",
    title: "Mains 主食",
    items: [
      ["115", "Chicken Chop", "鸡扒", 13.9],
      ["116", "Curry Sauce Chicken Chop", "咖喱酱鸡扒", 13.9],
      ["117", "Black Pepper Chicken Chop", "黑胡椒鸡扒", 13.9],
      ["118", "Mushroom Chicken Chop", "蘑菇鸡扒", 13.9],
      ["119", "Sweet n Spicy Chicken Chop", "泰式甜辣鸡扒", 13.9],
      ["120", "Mongolia Sauce Chicken Chop", "蒙古酱鸡扒", 13.9],
      ["121", "Dori Fish Fillet", "鱼扒", 13.9],
      ["122", "Curry Sauce Fish Fillet", "咖喱酱鱼扒", 13.9],
      ["123", "Black Pepper Fish Fillet", "黑胡椒鱼扒", 13.9],
      ["124", "Mushroom Fish Fillet", "蘑菇鱼扒", 13.9],
      ["125", "Sweet n Spicy Fish Fillet", "泰式甜辣鱼扒", 13.9],
      ["126", "Mongolia Sauce Fish Fillet", "蒙古酱鱼扒", 13.9],
    ],
  },
  {
    id: "drinks",
    title: "Drinks 饮料",
    items: [
      ["01", "Oolong Tea", "乌龙青茶", 8.9],
      ["02", "Oolong Milk Tea", "乌龙奶茶", 8.9],
      ["03", "Red Tea", "红茶", 8.9],
      ["04", "Milk Tea", "奶茶", 8.9],
      ["05", "Green Tea", "绿茶", 8.9],
      ["06", "Green Milk Tea", "奶绿", 8.9],
      ["07", "Plum Green Tea", "梅子绿茶", 8.9],
      ["08", "Plum Oolong Tea", "梅子乌龙", 8.9],
      ["09", "Plum Honey", "梅子蜂蜜", 8.9],
      ["10", "Pearl Oolong Milk Tea", "乌龙珍奶", 8.9],
      ["11", "Pearl Milk Tea", "珍珠奶茶", 8.9],
      ["12", "Pearl Green Milk Tea", "珍珠奶绿", 8.9],
      ["13", "Pearl Green Tea", "珍珠绿", 8.9],
      ["14", "Pearl Oolong", "珍珠乌龙", 8.9],
      ["15", "Honey Milk Tea", "蜂蜜奶茶", 8.9],
      ["16", "Honey Green Tea", "蜂蜜绿茶", 8.9],
      ["17", "Honey Oolong Milk Tea", "蜂蜜乌龙", 8.9],
      ["18", "Passion Green Tea", "百香绿茶", 8.9],
      ["19", "Passion Aloe Vera", "百香芦荟", 8.9],
      ["20", "Honey Aloe Vera", "蜂蜜芦荟", 8.9],
      ["21", "Lemon Grapefruit", "柠檬柚子", 8.9],
      ["22", "Honey Grapefruit", "蜂蜜柚子", 8.9],
      ["23", "Lemon Green", "柠檬绿", 8.9],
      ["24", "Mango Green", "芒果绿", 8.9],
      ["25", "Peach Green", "桃子绿", 8.9],
      ["26", "Pudding Milk Tea", "布丁奶茶", 8.9],
      ["27", "Pudding Oolong Milk Tea", "乌龙布丁", 8.9],
      ["28", "Pudding Green Milk Tea", "奶绿布丁", 8.9],
      ["29", "Apple Green Milk Tea", "苹果奶绿", 8.9],
      ["30", "Witchery Milk Tea", "魔力点子奶茶", 8.9],
      ["31", "Lychee Oolong Milk Tea", "贵妃椰果", 8.9],
      ["32", "Lychee Green Milk Tea", "椰果奶绿", 8.9],
      ["33", "Azuki Milk Tea", "红豆奶茶", 8.9],
      ["34", "Azuki Green Milk Tea", "红豆奶绿", 8.9],
      ["35", "Azuki Oolong Milk Tea", "红豆乌龙", 8.9],
      ["36", "Crystal Oolong Milk Tea", "寒天乌龙", 8.9],
      ["37", "Crystal Green Milk Tea", "寒天奶绿", 8.9],
      ["38", "Dirty Milky", "脏脏奶", 9.9],
      ["39", "Dirty Milk Tea", "脏奶茶", 9.9],
      ["40", "Dirty Green Milk Tea", "脏奶绿", 9.9],
      ["41", "Dirty Wulong Milk Tea", "脏乌龙", 9.9],
      ["42", "Peach Pudding", "桃子布丁鲜奶", 11.9],
      ["43", "Mango Pudding", "芒果布丁鲜奶", 11.9],
      ["44", "Passion Pudding", "百香布丁鲜奶", 11.9],
      ["45", "Mocha", "摩卡", 8.9],
      ["46", "Cappuccino", "卡布奇诺", 8.9],
      ["47", "Tiramisu", "提拉米苏", 8.9],
      ["48", "Italian Coffee", "意大利咖啡", 8.9],
      ["49", "Italian Cham", "意大利掺", 8.9],
      ["50", "Columbia Chocolate", "哥伦比亚", 8.9],
      ["51", "Chocolate", "巧克力", 8.9],
      ["52", "Honey Lemon", "蜂蜜柠檬", 8.9],
      ["53", "Honey Milk", "蜂蜜牛奶", 8.9],
      ["55", "Classic Mojito", "经典物语", 9.9],
      ["56", "Blue Ocean", "蓝色海洋", 9.9],
      ["57", "Passion Vines", "百香の藤", 9.9],
      ["58", "Mango Tango", "芒里偷闲", 9.9],
      ["59", "Momotaro", "桃太郎君", 9.9],
      ["67", "Pepsi", "百事可乐", 3.9],
      ["68", "Cheers Soda", "苏打汽水", 3.9],
      ["69", "Plain Water", "白开水", 0.8],
    ],
  },
  { id: "cake", title: "Cake 蛋糕", items: [["90", "Assorted Cake", "精选蛋糕", 12.9]] },
  {
    id: "addons",
    title: "Add-on 另加",
    items: [
      ["A1", "Rice Large", "大饭", 1.5],
      ["A2", "Rice Small", "小饭", 1.3],
      ["A3", "Fried Egg", "荷包蛋", 1.5],
      ["A4", "Fried Vegetable", "炒包菜", 2],
      ["A5", "Mayonnaise", "美乃滋", 1],
    ],
  },
];

const cart = new Map();

function money(value) {
  return `RM${value.toFixed(2)}`;
}

function totals() {
  const subtotal = [...cart.values()].reduce((sum, item) => sum + item.price * item.qty, 0);
  const qty = [...cart.values()].reduce((sum, item) => sum + item.qty, 0);
  const delivery = subtotal >= FREE_DELIVERY_TARGET || subtotal === 0 ? 0 : DELIVERY_FEE;
  return { subtotal, qty, delivery, total: subtotal + delivery };
}

function deliveryMessage(subtotal) {
  const remaining = Math.max(FREE_DELIVERY_TARGET - subtotal, 0);
  return remaining > 0 ? `Add ${money(remaining)} more for free delivery` : "Free delivery unlocked";
}

function setScreen(screen) {
  phone.classList.remove("home-view", "detail-view", "cart-view", "checkout-view");
  phone.classList.add(`${screen}-view`);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

heart.addEventListener("click", (event) => {
  event.stopPropagation();
  heart.classList.toggle("is-liked");
});

search.addEventListener("input", () => {
  const value = search.value.trim().toLowerCase();
  restaurantCard.style.display = !value || "mori cafe".includes(value) ? "grid" : "none";
});

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.scrollTo(0, 0);
    detailScroll.scrollTo(0, 0);
    setScreen("detail");
  });
});

restaurantCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    window.scrollTo(0, 0);
    detailScroll.scrollTo(0, 0);
    setScreen("detail");
  }
});

backButton.addEventListener("click", () => setScreen("home"));
cartBack.addEventListener("click", () => setScreen("detail"));
checkoutBack.addEventListener("click", () => setScreen("cart"));

function renderMenus() {
  menuList.innerHTML = menuSections
    .map((section) => {
      const items = section.items
        .map(([code, english, chinese, price, desc, popular]) => {
          const description = desc || `${english} · ${chinese}`;
          return `
            <article class="menu-item">
              <div class="menu-copy">
                <h3><span>${code}</span> ${english}</h3>
                <p class="cn">${chinese}</p>
                <p>${description}</p>
              </div>
              <div class="menu-side">
                ${popular ? '<span class="popular-pill">Popular</span>' : ""}
                <strong>RM ${price.toFixed(2)}</strong>
                <button class="add-item" data-code="${code}" data-name="${english}" data-cn="${chinese}" data-price="${price}" aria-label="Add ${english}">+</button>
              </div>
            </article>
          `;
        })
        .join("");

      return `<section class="menu-section" id="${section.id}"><h2>${section.title}</h2>${items}</section>`;
    })
    .join("");
}

function updateAllCartViews() {
  const current = totals();
  const message = deliveryMessage(current.subtotal);
  const remaining = Math.max(FREE_DELIVERY_TARGET - current.subtotal, 0);
  const progress = Math.min((current.subtotal / FREE_DELIVERY_TARGET) * 100, 100);

  cartQty.textContent = current.qty;
  cartTotal.textContent = money(current.subtotal);
  detailDeliveryText.textContent = message;
  viewCart.disabled = current.qty === 0;

  cartItemsTitle.textContent = `Items (${current.qty})`;
  cartDeliveryText.textContent = remaining > 0 ? `Add ${money(remaining)} more to enjoy free delivery!` : "You have unlocked free delivery!";
  cartDeliveryRemain.innerHTML = remaining > 0 ? `${money(remaining)}<br />to go` : `Free<br />delivery`;
  deliveryProgress.style.width = `${progress}%`;
  summarySubtotal.textContent = money(current.subtotal);
  summaryDelivery.textContent = current.delivery === 0 ? "Free" : money(current.delivery);
  summaryTotal.textContent = money(current.total);
  cartPageQty.textContent = current.qty;
  cartPageSubtotal.textContent = money(current.subtotal);
  cartPageDelivery.textContent = message;
  checkoutItemsTitle.textContent = `Order Items (${current.qty})`;
  checkoutSubtotal.textContent = money(current.subtotal);
  checkoutDelivery.textContent = current.delivery === 0 ? "Free" : money(current.delivery);
  checkoutTotal.textContent = money(current.total);
  placeOrderTotal.textContent = money(current.total);

  cartItems.innerHTML = [...cart.values()]
    .map(
      (item) => `
        <article class="cart-item text-only-cart">
          <div class="cart-item-main">
            <div class="cart-item-title">
              <h3>${item.name}</h3>
              <strong>RM ${item.price.toFixed(2)}</strong>
            </div>
            <p class="cart-cn">${item.cn}</p>
          </div>
          <button class="tiny-trash" data-code="${item.code}" aria-label="Remove ${item.name}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16" /><path d="M10 11v6M14 11v6" /><path d="M6 7l1 14h10l1-14" /><path d="M9 7V4h6v3" /></svg>
          </button>
          <div class="qty-control">
            <button data-action="decrease" data-code="${item.code}" aria-label="Decrease ${item.name}">−</button>
            <span>${item.qty}</span>
            <button data-action="increase" data-code="${item.code}" aria-label="Increase ${item.name}">+</button>
          </div>
          <strong class="line-total">RM ${(item.price * item.qty).toFixed(2)}</strong>
        </article>
      `
    )
    .join("");

  checkoutItems.innerHTML = [...cart.values()]
    .map(
      (item) => `
        <article class="checkout-item">
          <div>
            <h3>${item.name}</h3>
            <p>${item.cn}</p>
          </div>
          <strong>RM ${(item.price * item.qty).toFixed(2)}</strong>
          <em>x ${item.qty}</em>
        </article>
      `
    )
    .join("");
}

function addToCart(button) {
  const code = button.dataset.code;
  const item = cart.get(code) || {
    code,
    name: button.dataset.name,
    cn: button.dataset.cn,
    price: Number(button.dataset.price),
    qty: 0,
  };
  item.qty += 1;
  cart.set(code, item);
  updateAllCartViews();
}

renderMenus();
updateAllCartViews();

menuList.addEventListener("click", (event) => {
  const button = event.target.closest(".add-item");
  if (button) addToCart(button);
});

cartItems.addEventListener("click", (event) => {
  const remove = event.target.closest(".tiny-trash");
  const qtyButton = event.target.closest(".qty-control button");
  const code = remove?.dataset.code || qtyButton?.dataset.code;
  if (!code || !cart.has(code)) return;

  if (remove) {
    cart.delete(code);
  } else if (qtyButton.dataset.action === "increase") {
    cart.get(code).qty += 1;
  } else {
    const item = cart.get(code);
    item.qty -= 1;
    if (item.qty <= 0) cart.delete(code);
  }

  updateAllCartViews();
});

clearCartButton.addEventListener("click", () => {
  cart.clear();
  updateAllCartViews();
});

viewCart.addEventListener("click", () => {
  if (viewCart.disabled) return;
  window.scrollTo(0, 0);
  setScreen("cart");
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    cartPageScroll.scrollTo(0, 0);
  });
});

checkoutButton.addEventListener("click", () => {
  if (cart.size === 0) return;
  window.scrollTo(0, 0);
  setScreen("checkout");
});

document.querySelectorAll(".choice-grid").forEach((group) => {
  group.addEventListener("click", (event) => {
    const choice = event.target.closest(".choice");
    if (!choice) return;
    group.querySelectorAll(".choice").forEach((item) => item.classList.remove("active"));
    choice.classList.add("active");
  });
});

document.querySelectorAll(".menu-tabs a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".menu-tabs a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
