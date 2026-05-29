const phone = document.querySelector(".phone");
const splashScreen = document.querySelector(".splash-screen");
const authScreen = document.querySelector(".auth-screen");
const authTitle = document.querySelector("#authTitle");
const authSubtitle = document.querySelector("#authSubtitle");
const authForm = document.querySelector(".auth-form");
const authName = document.querySelector("#authName");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const authConfirm = document.querySelector("#authConfirm");
const authTerms = document.querySelector("#authTerms");
const authMessage = document.querySelector(".auth-message");
const authSubmit = document.querySelector(".auth-submit");
const authSwitchText = document.querySelector("#authSwitchText");
const authSwitchButton = document.querySelector("#authSwitchButton");
const authBack = document.querySelector(".auth-back");
const authClose = document.querySelector(".auth-close");
const googleLogin = document.querySelector(".google-login");
const guestLogin = document.querySelector(".guest-login");
const passwordToggle = document.querySelector(".password-toggle");
const usernameForm = document.querySelector(".username-form");
const usernameInput = document.querySelector("#usernameInput");
const usernameMessage = document.querySelector(".username-message");
const profileAvatar = document.querySelector("#profileAvatar");
const avatarInput = document.querySelector("#avatarInput");
const profileGreeting = document.querySelector("#profileGreeting");
const profileUsername = document.querySelector("#profileUsername");
const profileEmail = document.querySelector("#profileEmail");
const guestSignupButton = document.querySelector("#guestSignupButton");
const friendsBack = document.querySelector(".friends-back");
const friendsSearchInput = document.querySelector("#friendsSearchInput");
const friendRequestsList = document.querySelector("#friendRequestsList");
const allFriendsList = document.querySelector("#allFriendsList");
const friendRequestCount = document.querySelector("#friendRequestCount");
const allFriendsTitle = document.querySelector("#allFriendsTitle");
const friendRequestsSection = document.querySelector("#friendRequestsSection");
const allFriendsSection = document.querySelector("#allFriendsSection");
const friendsPageEmpty = document.querySelector("#friendsPageEmpty");
const groupInvitesSection = document.querySelector("#groupInvitesSection");
const groupInvitesList = document.querySelector("#groupInvitesList");
const groupInviteCount = document.querySelector("#groupInviteCount");
const addFriendButton = document.querySelector(".add-friend-button");
const addFriendsBack = document.querySelector(".add-friends-back");
const addFriendSearchInput = document.querySelector("#addFriendSearchInput");
const addFriendsSectionTitle = document.querySelector("#addFriendsSectionTitle");
const suggestedUsersList = document.querySelector("#suggestedUsersList");
const suggestedEmpty = document.querySelector("#suggestedEmpty");
const shareUsernameText = document.querySelector("#shareUsernameText");
const copyUsernameButton = document.querySelector("#copyUsernameButton");
const groupOrderBack = document.querySelector(".group-order-back");
const groupNameInput = document.querySelector("#groupNameInput");
const groupNameCount = document.querySelector("#groupNameCount");
const groupRestaurantSearch = document.querySelector("#groupRestaurantSearch");
const groupRestaurantRows = document.querySelectorAll(".group-restaurant-row");
const groupLocationButton = document.querySelector("#groupLocationButton");
const groupTimeButton = document.querySelector("#groupTimeButton");
const groupTimePanel = document.querySelector("#groupTimePanel");
const groupTimeOptions = document.querySelectorAll(".group-time-option");
const createGroupButton = document.querySelector(".create-group-button");
const createdBack = document.querySelector(".created-back");
const createdGroupName = document.querySelector("#createdGroupName");
const createdCloseTime = document.querySelector("#createdCloseTime");
const createdHostAvatar = document.querySelector("#createdHostAvatar");
const createdHostName = document.querySelector("#createdHostName");
const createdMembersTitle = document.querySelector(".created-members-section h2");
const createdMembersRow = document.querySelector(".created-members-row");
const startGroupOrderButton = document.querySelector(".start-group-order-button");
const chatBack = document.querySelector(".chat-back");
const chatGroupName = document.querySelector("#chatGroupName");
const chatMemberCount = document.querySelector("#chatMemberCount");
const chatCloseCountdown = document.querySelector("#chatCloseCountdown");
const chatCreatedTime = document.querySelector("#chatCreatedTime");
const chatCreatedText = document.querySelector("#chatCreatedText");
const chatCreatedClose = document.querySelector("#chatCreatedClose");
const chatAddItemsButton = document.querySelector(".chat-add-items-card button");
const chatMenuButton = document.querySelector(".chat-menu-button");
const chatCartButton = document.querySelector(".chat-cart-button");
const chatInviteButton = document.querySelector(".chat-invite-button");
const chatMessages = document.querySelector(".chat-messages");
const chatInput = document.querySelector(".chat-composer input");
const chatSendButton = document.querySelector(".chat-send-button");
const inviteFriendsBack = document.querySelector(".invite-friends-back");
const inviteFriendSearchInput = document.querySelector("#inviteFriendSearchInput");
const inviteFriendsList = document.querySelector("#inviteFriendsList");
const inviteFriendsEmpty = document.querySelector("#inviteFriendsEmpty");
const locationBack = document.querySelector(".location-back");
const locationCards = document.querySelectorAll(".location-card");
const confirmLocationButton = document.querySelector(".confirm-location-button");
const notificationButtons = document.querySelectorAll(".bell");
const notificationsBack = document.querySelector(".notifications-back");
const notificationsTabs = document.querySelectorAll("[data-notification-filter]");
const notificationsList = document.querySelector("#notificationsList");
const notificationsEmpty = document.querySelector("#notificationsEmpty");
let selectedGroupLocation = "";
let currentGroupName = "Group Order";
let currentGroupCloseTime = "1:30 PM";
let currentGroupMemberCount = 1;
let currentGroupId = "";
let groupMembers = [];
let groupInvites = [];
let inviteReturnScreen = "group-chat";
let groupInviteUnsubscribe = null;
let groupMessagesUnsubscribe = null;
let groupCartUnsubscribe = null;
let notificationReturnScreen = "home";
let activeNotificationFilter = "all";
let firebaseGroupInvites = [];
let firebaseGroupInvitesLoaded = false;
let notificationItems = [];
let detailReturnScreen = "home";
let cartReturnScreen = "detail";

function setAppHeight() {
  document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
}

setAppHeight();
window.addEventListener("resize", setAppHeight);
window.addEventListener("orientationchange", setAppHeight);

window.addEventListener("load", () => {
  setTimeout(() => {
    splashScreen.classList.add("is-hidden");
  }, 2000);
});

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
const deliveryPill = document.querySelector(".delivery-pill");
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
const cartInlineDelivery = document.querySelector("#cartInlineDelivery");
const cartFreeRow = document.querySelector(".cart-free-row");
const clearCartButton = document.querySelector(".cart-delete");
const cartShopNoteButton = document.querySelector(".cart-shop-note");
const cartNoteEditor = document.querySelector(".cart-note-editor");
const cartShopNoteInput = document.querySelector("#cartShopNoteInput");
const cartShopNoteCount = document.querySelector("#cartShopNoteCount");
const checkoutButton = document.querySelector(".cart-page-bar .cart-active");
const summaryCheckoutButton = document.querySelector(".cart-summary .checkout-button");
const checkoutBack = document.querySelector(".checkout-back");
const checkoutItems = document.querySelector("#checkoutItems");
const checkoutItemsTitle = document.querySelector("#checkoutItemsTitle");
const checkoutSubtotal = document.querySelector("#checkoutSubtotal");
const checkoutDelivery = document.querySelector("#checkoutDelivery");
const checkoutTotal = document.querySelector("#checkoutTotal");
const placeOrderTotal = document.querySelector("#placeOrderTotal");
const placeOrderButton = document.querySelector(".place-order-bar button");

const FREE_DELIVERY_TARGET = 50;
const DELIVERY_FEE = 3;
const firebaseConfig = {
  apiKey: "AIzaSyACnUILcO28dC9pZvXzSrCYxxfSL-fPe7Q",
  authDomain: "nova-63fc5.firebaseapp.com",
  projectId: "nova-63fc5",
  storageBucket: "nova-63fc5.firebasestorage.app",
  messagingSenderId: "615245427236",
  appId: "1:615245427236:web:4e5eac0dcd0bf3e4621eb1",
  measurementId: "G-TWSG5VQRGY",
};

let db = null;
let auth = null;
let googleProvider = null;
let isSignupMode = false;
let onboardingUser = null;
let suppressAuthRedirect = false;
let authRouting = false;
let authStateReady = false;
let isGuestUser = false;
let currentProfile = null;
let firebaseFriendRequests = [];
let firebaseFriendRequestsLoaded = false;
let addFriendSearchTimer = null;
let addFriendSearchToken = 0;

function initFirebase() {
  if (!window.firebase) return false;

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  if (!db && firebase.firestore) {
    db = firebase.firestore();
  }

  if (!auth && firebase.auth) {
    auth = firebase.auth();
    googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(() => {});
  }

  return Boolean(auth);
}

initFirebase();

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

const normalCart = new Map();
const groupCart = new Map();
let cartMode = "normal";
let detailCartMode = "normal";

function money(value) {
  return `RM${value.toFixed(2)}`;
}

function activeCart() {
  return cartMode === "group" ? groupCart : normalCart;
}

function totals(sourceCart = activeCart(), mode = cartMode) {
  const subtotal = [...sourceCart.values()].reduce((sum, item) => sum + item.price * item.qty, 0);
  const qty = [...sourceCart.values()].reduce((sum, item) => sum + item.qty, 0);
  const freeDelivery = mode === "group" && subtotal >= FREE_DELIVERY_TARGET;
  const delivery = freeDelivery || subtotal === 0 ? 0 : DELIVERY_FEE;
  return { subtotal, qty, delivery, total: subtotal + delivery };
}

function deliveryMessage(subtotal) {
  const remaining = Math.max(FREE_DELIVERY_TARGET - subtotal, 0);
  return remaining > 0 ? `Add ${money(remaining)} more for free delivery` : "Free delivery unlocked";
}

function activeChoice(groupId) {
  return document.querySelector(`#${groupId} .choice.active`)?.dataset.value || "";
}

function setScreen(screen) {
  phone.classList.remove("auth-view", "home-view", "detail-view", "cart-view", "checkout-view", "profile-view", "friends-view", "add-friends-view", "group-order-view", "group-created-view", "group-chat-view", "invite-friends-view", "location-view", "notifications-view");
  phone.classList.add(`${screen}-view`);
}

function showAuthMessage(message = "") {
  authMessage.textContent = message;
}

function setAuthLoading(isLoading) {
  authScreen.classList.toggle("is-loading", isLoading);
}

function setAuthRoutingView(isRouting) {
  authScreen.classList.toggle("is-routing", isRouting);
  setAuthLoading(isRouting);
}

function continueToHome() {
  localStorage.setItem("novaLoggedIn", "1");
  authScreen.classList.remove("onboarding-mode");
  authScreen.classList.remove("is-routing");
  authScreen.classList.remove("is-loading");
  setScreen("home");
  seedPromoNotifications().then(loadNotifications).catch(() => {});
}

function firstLetter(value) {
  return (value || "Guest").trim().charAt(0).toUpperCase() || "G";
}

function setAvatarContent(letter, imageUrl = "") {
  profileAvatar.innerHTML = imageUrl
    ? `<img src="${imageUrl}" alt="" />`
    : `<span>${letter}</span>`;
}

function updateProfileView() {
  const user = auth?.currentUser || null;
  const profile = currentProfile || {};
  const username = profile.username || localStorage.getItem(`novaUsername:${user?.uid}`) || "";
  const email = user?.email || profile.email || "";
  const displayName = username || user?.displayName || "Guest";
  const avatarKey = user?.uid ? `novaAvatar:${user.uid}` : "";
  const savedAvatar = avatarKey ? localStorage.getItem(avatarKey) : "";
  const guest = isGuestUser || !user;

  phone.classList.toggle("guest-profile", guest);
  profileGreeting.textContent = guest ? "Hey, Guest!" : `Hey, ${displayName}!`;
  profileUsername.textContent = guest ? "@guest" : `@${username || displayName}`;
  profileEmail.textContent = guest ? "" : email;
  if (guest) {
    profileAvatar.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1.1-4 4-6 8-6s6.9 2 8 6" />
      </svg>
    `;
  } else {
    setAvatarContent(firstLetter(displayName), savedAvatar);
  }
}

async function openProfile() {
  if (!isGuestUser && auth?.currentUser) {
    try {
      currentProfile = await getUserProfile(auth.currentUser);
    } catch {
      currentProfile = currentProfile || {};
    }
  }
  updateProfileView();
  setScreen("profile");
}

function readFriendData(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function relativeTime(timestamp) {
  const value = timestamp?.toDate ? timestamp.toDate().getTime() : Number(timestamp || Date.now());
  const diff = Math.max(Date.now() - value, 0);
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return "Yesterday";
}

function notificationGroup(timestamp) {
  const value = timestamp?.toDate ? timestamp.toDate() : new Date(Number(timestamp || Date.now()));
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (value.toDateString() === today.toDateString()) return "Today";
  if (value.toDateString() === yesterday.toDateString()) return "Yesterday";
  return "This Week";
}

function promoNotifications() {
  return [
    ["35", "10% off group delivery fee", "Spend RM35 in a group order to unlock 10% off delivery fee."],
    ["40", "20% off group delivery fee", "Spend RM40 in a group order to unlock 20% off delivery fee."],
    ["45", "30% off group delivery fee", "Spend RM45 in a group order to unlock 30% off delivery fee."],
    ["50", "Free group delivery fee", "Spend RM50 in a group order to unlock free delivery fee."],
  ].map(([amount, title, body], index) => ({
    id: `promo-${amount}`,
    type: "promos",
    icon: "promo",
    title,
    body,
    read: false,
    createdAtMs: Date.now() - index * 1000,
  }));
}

async function seedPromoNotifications() {
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || isGuestUser) return;
  const marker = localStorage.getItem(`novaPromosSeeded:${user.uid}`);
  if (marker) return;
  try {
    const batch = db.batch();
    promoNotifications().forEach((item) => {
      const ref = db.collection("users").doc(user.uid).collection("notifications").doc(item.id);
      batch.set(ref, {
        type: item.type,
        icon: item.icon,
        title: item.title,
        body: item.body,
        read: false,
        createdAtMs: item.createdAtMs,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
    });
    await batch.commit();
    localStorage.setItem(`novaPromosSeeded:${user.uid}`, "1");
  } catch (error) {
    console.warn("Promo notifications could not be seeded yet.", error);
  }
}

function friendAvatar(name) {
  return firstLetter(name || "Friend");
}

async function loadFirebaseGroupInvites() {
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || isGuestUser) {
    firebaseGroupInvites = [];
    firebaseGroupInvitesLoaded = false;
    return;
  }
  const snapshot = await db
    .collection("groupInvites")
    .where("toUid", "==", user.uid)
    .get();

  firebaseGroupInvites = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((data) => data.status === "pending");
  firebaseGroupInvitesLoaded = true;
}

function notificationIcon(type) {
  if (type === "social") return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="3" /><path d="M2.5 20c.8-4 3-6 6-6s5.2 2 6 6" /><path d="M13 20c.5-2.7 2-4.3 4-4.3 2.3 0 3.8 1.6 4.5 4.3" /></svg>`;
  if (type === "group") return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9h10l1 11H6L7 9Z" /><path d="M9 9a3 3 0 0 1 6 0" /><circle cx="10" cy="14" r="1.3" /><circle cx="14" cy="14" r="1.3" /></svg>`;
  if (type === "promos") return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12 12 20l-8-8V4h8l8 8Z" /><circle cx="8.5" cy="8.5" r="1.5" /></svg>`;
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9h10l1 11H6L7 9Z" /><path d="M9 9a3 3 0 0 1 6 0" /></svg>`;
}

function renderNotifications() {
  const items = notificationItems.filter((item) => activeNotificationFilter === "all" || item.type === activeNotificationFilter);
  notificationsEmpty.hidden = items.length > 0;
  notificationsList.innerHTML = "";
  if (items.length === 0) return;

  const groups = ["Today", "Yesterday", "This Week"];
  notificationsList.innerHTML = groups
    .map((group) => {
      const groupItems = items.filter((item) => notificationGroup(item.createdAt || item.createdAtMs) === group);
      if (groupItems.length === 0) return "";
      return `
        <section class="notification-day">
          <h2>${group}</h2>
          <div class="notification-card">
            ${groupItems.map((item) => {
              const canRespond = !item.read && (item.actionType === "friendRequest" || item.actionType === "groupInvite");
              return `
              <article class="notification-row ${item.read ? "is-read" : ""}" data-notification-id="${item.id || ""}" data-type="${item.type}">
                <div class="notification-icon ${item.type}">${notificationIcon(item.type)}</div>
                <div>
                  <h3>${item.title}</h3>
                  <p>${item.body || relativeTime(item.createdAt || item.createdAtMs)}</p>
                </div>
                <i></i>
                ${canRespond ? `
                  <div class="notification-actions">
                    <button class="notification-reject" type="button" data-action-type="${item.actionType}" data-action-id="${item.id}" aria-label="Reject">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                    <button class="notification-accept" type="button" data-action-type="${item.actionType}" data-action-id="${item.id}" aria-label="Accept">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg>
                    </button>
                  </div>
                ` : `<b>›</b>`}
              </article>
            `;
            }).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

async function loadNotifications() {
  initFirebase();
  const user = auth?.currentUser;
  notificationItems = [];

  if (db && user && !isGuestUser) {
    await seedPromoNotifications();
    const [requestSnap, inviteSnap, notificationSnap] = await Promise.all([
      db.collection("friendRequests").where("toUid", "==", user.uid).get(),
      db.collection("groupInvites").where("toUid", "==", user.uid).get(),
      db.collection("users").doc(user.uid).collection("notifications").get(),
    ]);

    notificationItems.push(...requestSnap.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        type: "social",
        actionType: data.status === "pending" ? "friendRequest" : "",
        title: `${data.fromName || data.fromUsername || "Someone"} sent you a friend request`,
        body: relativeTime(data.createdAt || data.createdAtMs),
        read: data.status !== "pending",
        createdAt: data.createdAt,
        createdAtMs: data.createdAtMs || Date.now(),
      };
    }));

    notificationItems.push(...inviteSnap.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        type: "group",
        actionType: data.status === "pending" ? "groupInvite" : "",
        title: `${data.fromName || data.fromUsername || "Someone"} invited you to join "${data.groupName || "Group Order"}"`,
        body: data.status === "pending" ? relativeTime(data.updatedAt || data.createdAtMs) : `Invite ${data.status}`,
        read: data.status !== "pending",
        createdAt: data.updatedAt,
        createdAtMs: data.createdAtMs || Date.now(),
      };
    }));

    notificationItems.push(...notificationSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  } else {
    notificationItems = promoNotifications();
  }

  notificationItems.sort((a, b) => {
    const aTime = a.createdAt?.toDate ? a.createdAt.toDate().getTime() : Number(a.createdAtMs || 0);
    const bTime = b.createdAt?.toDate ? b.createdAt.toDate().getTime() : Number(b.createdAtMs || 0);
    return bTime - aTime;
  });

  updateNotificationBadges();
  renderNotifications();
}

function updateNotificationBadges() {
  const unread = notificationItems.filter((item) => !item.read).length;
  notificationButtons.forEach((button) => {
    button.classList.toggle("has-count", unread > 0);
    const badge = button.querySelector("span");
    if (badge) badge.textContent = unread > 9 ? "9+" : unread ? String(unread) : "";
  });
}

async function openNotifications(returnScreen = "home") {
  notificationReturnScreen = returnScreen;
  activeNotificationFilter = "all";
  notificationsTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.notificationFilter === "all"));
  await loadNotifications();
  setScreen("notifications");
}

function friendAvatar(name) {
  return firstLetter(name || "Friend");
}

function renderFriends() {
  const query = friendsSearchInput.value.trim().toLowerCase();
  const requests = firebaseFriendRequestsLoaded ? firebaseFriendRequests : readFriendData("novaFriendRequests");
  const groupInvites = firebaseGroupInvitesLoaded ? firebaseGroupInvites : [];
  const friends = readFriendData("novaFriends").filter((friend) => {
    const username = (friend.username || "").toLowerCase();
    return !query || username.includes(query);
  });

  friendRequestCount.textContent = requests.length;
  groupInviteCount.textContent = groupInvites.length;
  allFriendsTitle.textContent = `All Friends (${friends.length})`;
  groupInvitesSection.hidden = groupInvites.length === 0;
  friendRequestsSection.hidden = requests.length === 0;
  allFriendsSection.hidden = friends.length === 0;
  friendsPageEmpty.hidden = groupInvites.length > 0 || requests.length > 0 || friends.length > 0;

  groupInvitesList.innerHTML = groupInvites
    .map((invite) => `
      <article class="friend-row group-invite-row">
        <div class="friend-avatar">${friendAvatar(invite.fromName || invite.fromUsername)}</div>
        <div class="friend-info">
          <h3>${invite.groupName || "Group Order"}</h3>
          <p>${invite.fromName || invite.fromUsername || "Someone"} invited you</p>
        </div>
        <div class="request-actions">
          <button class="reject-group-invite" type="button" data-invite-id="${invite.id}" aria-label="Reject invite">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
          <button class="accept-request accept-group-invite" type="button" data-invite-id="${invite.id}" aria-label="Accept invite">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg>
          </button>
        </div>
      </article>
    `)
    .join("");

  friendRequestsList.innerHTML = requests
    .map(
      (friend) => `
        <article class="friend-row" data-request-id="${friend.id || ""}">
          <div class="friend-avatar">${friendAvatar(friend.name || friend.username)}</div>
          <div class="friend-info">
            <h3>${friend.name || friend.username}</h3>
            <p>@${friend.username || ""}</p>
          </div>
          <div class="request-actions">
            <button class="reject-friend-request" type="button" aria-label="Decline ${friend.username || "request"}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
            <button class="accept-request accept-friend-request" type="button" aria-label="Accept ${friend.username || "request"}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg>
            </button>
          </div>
        </article>
      `
    )
    .join("");

  allFriendsList.innerHTML = friends
    .map(
      (friend) => `
        <article class="friend-row">
          <div class="friend-avatar">${friendAvatar(friend.name || friend.username)}</div>
          <div class="friend-info">
            <h3>${friend.name || friend.username}</h3>
            <p>@${friend.username || ""}</p>
          </div>
          <button class="message-friend" type="button">Message</button>
        </article>
      `
    )
    .join("");
}

async function loadFirebaseFriendRequests() {
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || isGuestUser) {
    firebaseFriendRequests = [];
    firebaseFriendRequestsLoaded = false;
    return;
  }

  const snapshot = await db
    .collection("friendRequests")
    .where("toUid", "==", user.uid)
    .get();

  firebaseFriendRequests = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((data) => data.status === "pending")
    .map((data) => ({
      id: data.id,
      name: data.fromName || data.fromUsername || "Friend",
      username: data.fromUsername || "",
      uid: data.fromUid || "",
    }));
  firebaseFriendRequestsLoaded = true;
}

async function openFriends() {
  friendsSearchInput.value = "";
  try {
    await Promise.all([loadFirebaseFriendRequests(), loadFirebaseGroupInvites()]);
  } catch (error) {
    console.error(error);
  }
  renderFriends();
  setScreen("friends");
}

async function updateGroupInviteStatus(inviteId, status) {
  initFirebase();
  const invite = firebaseGroupInvites.find((item) => item.id === inviteId);
  const user = auth?.currentUser;
  if (!db || !user || !invite) return;

  await db.collection("groupInvites").doc(inviteId).set({
    status,
    respondedAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });

  if (invite.groupId) {
    await db.collection("groups").doc(invite.groupId).collection("invites").doc(user.uid).set({
      status,
      respondedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    if (status === "accepted") {
      await db.collection("groups").doc(invite.groupId).collection("messages").add({
        type: "event",
        text: `${getOwnUsername() || user.displayName || "Someone"} joined the group`,
        senderUid: user.uid,
        senderUsername: getOwnUsername() || user.displayName || "User",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        clientCreatedAt: Date.now(),
      });
    } else {
      await db.collection("groups").doc(invite.groupId).collection("messages").add({
        type: "event",
        text: `${getOwnUsername() || user.displayName || "Someone"} rejected the invite`,
        small: "You can invite again",
        senderUid: user.uid,
        senderUsername: getOwnUsername() || user.displayName || "User",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        clientCreatedAt: Date.now(),
      });
    }
  }

  await loadFirebaseGroupInvites();
  renderFriends();
  await loadNotifications();
}

async function updateFriendRequestStatus(requestId, status) {
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || !requestId) return;
  const requestRef = db.collection("friendRequests").doc(requestId);
  const requestDoc = await requestRef.get();
  if (!requestDoc.exists) return;
  const request = requestDoc.data();

  await requestRef.set({
    status,
    respondedAt: firebase.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });

  if (status === "accepted") {
    const myUsername = getOwnUsername() || user.displayName || "User";
    await Promise.all([
      db.collection("users").doc(user.uid).collection("friends").doc(request.fromUid).set({
        uid: request.fromUid,
        username: request.fromUsername || "",
        name: request.fromName || request.fromUsername || "Friend",
        email: request.fromEmail || "",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true }),
      db.collection("users").doc(request.fromUid).collection("friends").doc(user.uid).set({
        uid: user.uid,
        username: myUsername,
        name: currentProfile?.name || myUsername,
        email: user.email || "",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true }),
    ]);
  }

  await loadFirebaseFriendRequests();
  renderFriends();
  await loadNotifications();
}

function getOwnUsername() {
  const user = auth?.currentUser || null;
  return currentProfile?.username || localStorage.getItem(`novaUsername:${user?.uid}`) || "";
}

function normalizeUsernameSearch(value) {
  return value.trim().replace(/^@+/, "").replace(/\s+/g, "").toLowerCase();
}

function addFriendRow(user, buttonText = "Add", disabled = false) {
  return `
    <article class="suggested-user-row">
      <div class="suggested-avatar">${friendAvatar(user.name || user.username)}</div>
      <span>
        <strong>${user.name || user.username}</strong>
        <em>@${user.username || ""}</em>
        <small>${user.mutualFriends ? `${user.mutualFriends} mutual friend${Number(user.mutualFriends) === 1 ? "" : "s"}` : "Nova user"}</small>
      </span>
      <button type="button" data-add-uid="${user.uid || ""}" data-add-username="${user.username || ""}" data-add-name="${user.name || user.username || ""}" ${disabled ? "disabled" : ""}>${buttonText}</button>
    </article>
  `;
}

async function getRelationshipStatus(otherUid) {
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || !otherUid) return { label: "Add", disabled: false };

  const friendDoc = await db.collection("users").doc(user.uid).collection("friends").doc(otherUid).get();
  if (friendDoc.exists) {
    return { label: "Friends", disabled: true };
  }

  const requestId = `${otherUid}_${user.uid}`;
  const requestDoc = await db.collection("friendRequests").doc(requestId).get();
  if (!requestDoc.exists) {
    return { label: "Add", disabled: false };
  }

  const status = requestDoc.data()?.status;
  if (status === "pending") return { label: "Sent", disabled: true };
  if (status === "accepted") return { label: "Friends", disabled: true };
  return { label: "Add", disabled: false };
}

function renderSuggestedUsers() {
  const query = normalizeUsernameSearch(addFriendSearchInput.value);
  const suggested = readFriendData("novaSuggestedUsers").filter((user) => {
    const username = (user.username || "").toLowerCase();
    return Number(user.mutualFriends || 0) >= 1 && (!query || username.includes(query));
  });
  addFriendsSectionTitle.textContent = "Suggested users";
  suggestedUsersList.innerHTML = suggested
    .map((user) => addFriendRow(user))
    .join("");
  suggestedEmpty.hidden = suggested.length > 0;
  suggestedEmpty.textContent = "No suggested users yet";
}

function renderAddFriendMessage(message) {
  suggestedUsersList.innerHTML = "";
  suggestedEmpty.hidden = false;
  suggestedEmpty.textContent = message;
}

async function searchFirebaseUserByUsername() {
  const token = ++addFriendSearchToken;
  const usernameLower = normalizeUsernameSearch(addFriendSearchInput.value);

  if (!usernameLower) {
    renderSuggestedUsers();
    return;
  }

  addFriendsSectionTitle.textContent = "Search result";
  renderAddFriendMessage("Searching...");
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || isGuestUser) {
    renderAddFriendMessage("Please login to add friends");
    return;
  }

  try {
    const snapshot = await db
      .collection("users")
      .where("usernameLower", "==", usernameLower)
      .limit(1)
      .get();

    if (token !== addFriendSearchToken) return;

    if (snapshot.empty) {
      renderAddFriendMessage("No user found");
      return;
    }

    const doc = snapshot.docs[0];
    if (doc.id === user.uid) {
      renderAddFriendMessage("This is your username");
      return;
    }

    const data = doc.data();
    const relationship = await getRelationshipStatus(doc.id);
    if (token !== addFriendSearchToken) return;

    suggestedUsersList.innerHTML = addFriendRow({
      uid: doc.id,
      username: data.username || "",
      name: data.name || data.username || "Nova user",
    }, relationship.label, relationship.disabled);
    suggestedEmpty.hidden = true;
  } catch (error) {
    console.error(error);
    renderAddFriendMessage("Could not search right now");
  }
}

function queueFirebaseUserSearch() {
  clearTimeout(addFriendSearchTimer);
  addFriendSearchTimer = setTimeout(searchFirebaseUserByUsername, 500);
}

function openAddFriends() {
  addFriendSearchInput.value = "";
  const username = getOwnUsername();
  shareUsernameText.textContent = username ? `@${username}` : "@your.username";
  renderSuggestedUsers();
  setScreen("add-friends");
}

function openGroupOrder() {
  setScreen("group-order");
}

function openLocationScreen() {
  setScreen("location");
}

function groupCloseTime(slot) {
  if (slot === "7pm") return "6:30 PM";
  return "1:30 PM";
}

function closeCountdownText(closeTime) {
  const match = closeTime.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return "Order closes soon";
  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  const now = new Date();
  const close = new Date(now);
  close.setHours(hours, minutes, 0, 0);
  const diff = close - now;
  if (diff <= 0) return "Order closed";
  const totalMinutes = Math.ceil(diff / 60000);
  const diffHours = Math.floor(totalMinutes / 60);
  const diffMinutes = totalMinutes % 60;
  if (diffHours <= 0) return `Order closes in ${diffMinutes}m`;
  return `Order closes in ${diffHours}h ${diffMinutes}m`;
}

function currentClockTime() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function groupNowLabel() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function groupFriendKey(friend) {
  return friend.uid || friend.username || friend.name || "";
}

function currentHostMember() {
  const username = getOwnUsername() || auth?.currentUser?.displayName || "You";
  return {
    uid: auth?.currentUser?.uid || "host",
    name: username,
    username,
    status: "host",
  };
}

function groupInviteStatus(friend) {
  const key = groupFriendKey(friend);
  if (groupMembers.some((member) => groupFriendKey(member) === key)) return "joined";
  const invite = groupInvites.find((item) => groupFriendKey(item) === key);
  return invite?.status || "invite";
}

function renderGroupMembers() {
  if (!createdMembersRow || !createdMembersTitle) return;
  currentGroupMemberCount = groupMembers.length;
  createdMembersTitle.textContent = `Members (${currentGroupMemberCount}/5)`;

  const joinedMarkup = groupMembers
    .map((member) => {
      const label = member.status === "host" ? "Host" : "Joined";
      return `
        <div class="created-member">
          <div class="created-member-avatar">${firstLetter(member.name || member.username)}</div>
          <strong><b>${member.name || member.username}</b> <span>${label}</span></strong>
        </div>
      `;
    })
    .join("");

  const waitingMarkup = groupInvites
    .filter((invite) => invite.status !== "accepted")
    .map((invite) => {
      const label = invite.status === "rejected" ? "Rejected" : "Waiting";
      return `
        <div class="created-member ${invite.status === "rejected" ? "rejected" : "waiting"}">
          <div class="created-member-avatar">${firstLetter(invite.name || invite.username)}</div>
          <strong><b>${invite.name || invite.username}</b> <span>${label}</span></strong>
        </div>
      `;
    })
    .join("");

  const filledSlots = groupMembers.length + groupInvites.filter((invite) => invite.status !== "accepted").length;
  const openSlots = Math.max(0, 5 - filledSlots);
  const inviteMarkup = Array.from({ length: openSlots }, () => (
    `<button class="created-invite-slot" type="button" aria-label="Invite friend"><i>+</i><span>Invite</span></button>`
  )).join("");

  createdMembersRow.innerHTML = joinedMarkup + waitingMarkup + inviteMarkup;
  const startHint = startGroupOrderButton.querySelector("small");
  if (startHint) {
    startHint.textContent = currentGroupMemberCount >= 2
      ? "Start ordering with your group"
      : "Invite at least 1 friend to start ordering";
  }
}

function appendLocalChatSystem(text, small = "") {
  if (!chatMessages) return;
  const message = document.createElement("div");
  message.className = "chat-system-message cart-chat-message";
  message.innerHTML = `<span>${text}</span>${small ? `<small>${small}</small>` : ""}`;
  chatMessages.appendChild(message);
}

async function addGroupMessage(data) {
  if (!db || !currentGroupId) {
    appendLocalChatSystem(data.text || "", data.small || "");
    return;
  }

  try {
    await db.collection("groups").doc(currentGroupId).collection("messages").add({
      ...data,
      senderUid: auth?.currentUser?.uid || "",
      senderUsername: getOwnUsername() || auth?.currentUser?.displayName || "You",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      clientCreatedAt: Date.now(),
    });
  } catch (error) {
    console.warn("Group message could not be saved yet.", error);
    appendLocalChatSystem(data.text || "", data.small || "");
  }
}

function renderGroupMessages(snapshot) {
  if (!chatMessages) return;
  chatMessages.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    if (data.type === "created") {
      const time = document.createElement("time");
      time.textContent = data.timeLabel || groupNowLabel();
      chatMessages.appendChild(time);
    }

    const message = document.createElement("div");
    if (data.type === "text") {
      const isMine = data.senderUid && data.senderUid === auth?.currentUser?.uid;
      message.className = `chat-bubble-row ${isMine ? "mine" : ""}`;
      message.innerHTML = `
        <div class="chat-bubble-avatar">${firstLetter(data.senderUsername || "U")}</div>
        <div>
          <strong>${data.senderUsername || "User"}</strong>
          <p>${data.text || ""}</p>
          <small>${data.timeLabel || ""}</small>
        </div>
      `;
    } else {
      message.className = "chat-system-message cart-chat-message";
      message.innerHTML = `<span>${data.text || ""}</span>${data.small ? `<small>${data.small}</small>` : ""}`;
    }
    chatMessages.appendChild(message);
  });
}

function watchGroupMessages() {
  if (groupMessagesUnsubscribe) {
    groupMessagesUnsubscribe();
    groupMessagesUnsubscribe = null;
  }
  if (!db || !currentGroupId) return;
  groupMessagesUnsubscribe = db
    .collection("groups")
    .doc(currentGroupId)
    .collection("messages")
    .orderBy("clientCreatedAt", "asc")
    .onSnapshot(renderGroupMessages, () => {});
}

function applyGroupInviteSnapshot(snapshot) {
  snapshot.forEach((doc) => {
    const data = doc.data();
    const key = data.toUid || data.toUsername || doc.id;
    const existing = groupInvites.find((invite) => groupFriendKey(invite) === key || invite.uid === data.toUid);
    if (!existing) return;

    const previousStatus = existing.status;
    existing.status = data.status || existing.status;
    if (existing.status === "accepted" && !groupMembers.some((member) => groupFriendKey(member) === groupFriendKey(existing))) {
      groupMembers.push({ ...existing, status: "joined" });
      addGroupMessage({
        type: "event",
        text: `${existing.name || existing.username || "A friend"} joined the group`,
        timeLabel: groupNowLabel(),
      }).catch(() => {});
    }
    if (existing.status === "rejected" && previousStatus !== "rejected") {
      addGroupMessage({
        type: "event",
        text: `${existing.name || existing.username || "A friend"} rejected the invite`,
        small: "You can invite again",
        timeLabel: groupNowLabel(),
      }).catch(() => {});
    }
  });
  renderGroupMembers();
  renderInviteFriends();
}

function watchGroupInvites() {
  if (groupInviteUnsubscribe) {
    groupInviteUnsubscribe();
    groupInviteUnsubscribe = null;
  }
  if (!db || !currentGroupId) return;
  groupInviteUnsubscribe = db
    .collection("groups")
    .doc(currentGroupId)
    .collection("invites")
    .onSnapshot(applyGroupInviteSnapshot, () => {});
}

function groupCartDoc(item) {
  return {
    code: item.code,
    name: item.name,
    chineseName: item.cn,
    price: item.price,
    qty: item.qty,
    addedByUid: auth?.currentUser?.uid || "",
    addedByUsername: getOwnUsername() || auth?.currentUser?.displayName || "You",
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
}

function applyGroupCartSnapshot(snapshot) {
  groupCart.clear();
  snapshot.forEach((doc) => {
    const data = doc.data();
    groupCart.set(doc.id, {
      code: data.code || doc.id,
      name: data.name || "",
      cn: data.chineseName || "",
      price: Number(data.price) || 0,
      qty: Number(data.qty) || 0,
    });
  });
  if (cartMode === "group") updateAllCartViews();
}

function watchGroupCart() {
  if (groupCartUnsubscribe) {
    groupCartUnsubscribe();
    groupCartUnsubscribe = null;
  }
  if (!db || !currentGroupId) return;
  groupCartUnsubscribe = db
    .collection("groups")
    .doc(currentGroupId)
    .collection("cartItems")
    .onSnapshot(applyGroupCartSnapshot, () => {});
}

async function saveGroupCartItem(item) {
  if (!db || !currentGroupId) return;
  await db.collection("groups").doc(currentGroupId).collection("cartItems").doc(item.code).set(groupCartDoc(item), { merge: true });
}

async function removeGroupCartItem(code) {
  if (!db || !currentGroupId) return;
  await db.collection("groups").doc(currentGroupId).collection("cartItems").doc(code).delete();
}

async function openGroupCreated() {
  if (createGroupButton.disabled) return;
  const name = groupNameInput.value.trim() || "Group Order";
  const slot = groupTimeButton.textContent.trim();
  currentGroupName = name;
  currentGroupCloseTime = groupCloseTime(slot);
  currentGroupId = `group_${Date.now()}_${auth?.currentUser?.uid || "guest"}`;
  groupMembers = [currentHostMember()];
  groupInvites = [];
  groupCart.clear();
  createdGroupName.textContent = name;
  createdCloseTime.textContent = currentGroupCloseTime;
  createdHostAvatar.textContent = firstLetter(groupMembers[0].name);
  createdHostName.textContent = groupMembers[0].name;
  renderGroupMembers();
  if (db) {
    try {
      await db.collection("groups").doc(currentGroupId).set({
        groupId: currentGroupId,
        groupName: currentGroupName,
        restaurant: "Mori Cafe",
        closeTime: currentGroupCloseTime,
        hostUid: auth?.currentUser?.uid || "",
        hostUsername: getOwnUsername() || auth?.currentUser?.displayName || "You",
        memberLimit: 5,
        members: groupMembers.map((member) => ({
          uid: member.uid || "",
          username: member.username || member.name || "",
          status: member.status || "joined",
        })),
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
    } catch (error) {
      console.warn("Group could not be saved yet.", error);
    }
  }
  await addGroupMessage({
    type: "created",
    text: `You created the group "${currentGroupName}"`,
    small: `Order closes at ${currentGroupCloseTime}`,
    timeLabel: groupNowLabel(),
  });
  watchGroupInvites();
  watchGroupMessages();
  watchGroupCart();
  setScreen("group-created");
}

function openGroupChat() {
  chatGroupName.textContent = currentGroupName;
  chatMemberCount.textContent = `${currentGroupMemberCount} of 5 members`;
  chatCloseCountdown.textContent = closeCountdownText(currentGroupCloseTime);
  if (!db || !currentGroupId) {
    chatCreatedTime.textContent = currentClockTime();
    chatCreatedText.textContent = `You created the group "${currentGroupName}"`;
    chatCreatedClose.textContent = `Order closes at ${currentGroupCloseTime}`;
  }
  setScreen("group-chat");
}

function openSelectedRestaurantMenu() {
  window.scrollTo(0, 0);
  detailScroll.scrollTo(0, 0);
  detailReturnScreen = "group-chat";
  detailCartMode = "group";
  cartMode = "group";
  updateAllCartViews();
  setScreen("detail");
}

function openGroupCart() {
  cartMode = "group";
  cartReturnScreen = "group-chat";
  updateAllCartViews();
  window.scrollTo(0, 0);
  setScreen("cart");
  requestAnimationFrame(() => cartPageScroll.scrollTo(0, 0));
}

function renderInviteFriends() {
  const query = inviteFriendSearchInput.value.trim().toLowerCase();
  const friends = readFriendData("novaFriends").filter((friend) => {
    const username = (friend.username || "").toLowerCase();
    return !query || username.includes(query);
  });
  inviteFriendsList.innerHTML = friends
    .map((friend) => {
      const key = groupFriendKey(friend);
      const status = groupInviteStatus(friend);
      const labels = {
        invite: "Invite",
        pending: "Waiting",
        rejected: "Invite",
        joined: "Joined",
      };
      const disabled = status === "pending" || status === "joined" ? "disabled" : "";
      const statusClass = status === "rejected" ? " is-rejected" : "";
      return `
        <article class="invite-friend-row">
          <div class="friend-avatar">${friendAvatar(friend.name || friend.username)}</div>
          <span>
            <strong>${friend.name || friend.username}</strong>
            <em>@${friend.username || ""}</em>
          </span>
          <button class="${statusClass}" type="button" data-invite-key="${key}" ${disabled}>${labels[status]}</button>
        </article>
      `;
    })
    .join("");
  inviteFriendsEmpty.hidden = friends.length > 0;
}

function openInviteFriends(returnScreen = "group-chat") {
  inviteReturnScreen = returnScreen;
  inviteFriendSearchInput.value = "";
  renderInviteFriends();
  setScreen("invite-friends");
}

async function inviteGroupFriend(friend) {
  const key = groupFriendKey(friend);
  if (!key) return;
  const existing = groupInvites.find((invite) => groupFriendKey(invite) === key);
  if (existing?.status === "pending" || existing?.status === "accepted") return;

  const inviteData = {
    ...friend,
    status: "pending",
    invitedAt: Date.now(),
  };

  if (existing) {
    Object.assign(existing, inviteData);
  } else {
    groupInvites.push(inviteData);
  }

  if (db && currentGroupId && friend.uid) {
    try {
      const invitePayload = {
        groupId: currentGroupId,
        groupName: currentGroupName,
        closeTime: currentGroupCloseTime,
        fromUid: auth?.currentUser?.uid || "",
        fromUsername: getOwnUsername() || "",
        fromName: currentProfile?.name || getOwnUsername() || "You",
        toUid: friend.uid,
        toUsername: friend.username || "",
        status: "pending",
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await db.collection("groups").doc(currentGroupId).collection("invites").doc(friend.uid).set({
        ...invitePayload,
      }, { merge: true });
      await db.collection("groupInvites").doc(`${currentGroupId}_${friend.uid}`).set(invitePayload, { merge: true });
      await addGroupMessage({
        type: "event",
        text: `${getOwnUsername() || "You"} invited ${friend.name || friend.username}`,
        timeLabel: groupNowLabel(),
      });
    } catch (error) {
      console.warn("Group invite could not be saved yet.", error);
    }
  }

  renderGroupMembers();
  renderInviteFriends();
}

async function appendCartChatMessage(itemName) {
  const username = getOwnUsername() || auth?.currentUser?.displayName || "You";
  await addGroupMessage({
    type: "cart",
    text: `${username} added ${itemName}`,
    timeLabel: groupNowLabel(),
  });
}

function updateCreateGroupButton() {
  const hasRestaurant = Array.from(groupRestaurantRows).some((row) => row.classList.contains("is-selected"));
  const hasName = groupNameInput.value.trim().length > 0;
  const hasLocation = Boolean(selectedGroupLocation);
  const hasTime = groupTimeButton.textContent.trim() === "2pm" || groupTimeButton.textContent.trim() === "7pm";
  createGroupButton.disabled = !(hasRestaurant && hasName && hasLocation && hasTime);
}

async function getUserProfile(user) {
  if (!user) return null;

  const cachedUsername = localStorage.getItem(`novaUsername:${user.uid}`);
  if (cachedUsername) {
    return { username: cachedUsername };
  }

  initFirebase();
  if (!db) return null;

  const snapshot = await db.collection("users").doc(user.uid).get();
  const profile = snapshot.exists ? snapshot.data() : null;
  if (profile?.username) {
    localStorage.setItem(`novaUsername:${user.uid}`, profile.username);
  }
  currentProfile = profile;
  return profile;
}

async function waitForUserProfile(user) {
  let profile = await getUserProfile(user);
  if (profile?.username) return profile;

  await new Promise((resolve) => setTimeout(resolve, 700));
  profile = await getUserProfile(user);
  return profile;
}

async function routeAfterAuth(user) {
  if (authRouting) return;
  authRouting = true;
  setAuthRoutingView(true);
  isGuestUser = false;
  authScreen.classList.remove("onboarding-mode");

  try {
    const profile = await waitForUserProfile(user);
    if (profile?.username) {
      currentProfile = profile;
      await new Promise((resolve) => setTimeout(resolve, 250));
      continueToHome();
      return;
    }
    showOnboarding(user);
    await new Promise((resolve) => requestAnimationFrame(resolve));
  } finally {
    authRouting = false;
    if (authScreen.classList.contains("onboarding-mode")) {
      setTimeout(() => {
        if (authScreen.classList.contains("onboarding-mode")) {
          setAuthRoutingView(false);
        }
      }, 180);
    }
  }
}

function showOnboarding(user) {
  onboardingUser = user;
  usernameInput.value = "";
  usernameMessage.textContent = "";
  authScreen.classList.add("onboarding-mode");
  setScreen("auth");
  requestAnimationFrame(() => {
    if (!authScreen.classList.contains("is-loading")) {
      usernameInput.focus();
    }
  });
}

function cleanUsername(value) {
  return value.trim().replace(/\s+/g, "");
}

function setAuthMode(signup) {
  isSignupMode = signup;
  authScreen.classList.remove("onboarding-mode");
  authScreen.classList.toggle("signup-mode", signup);
  authScreen.classList.toggle("login-mode", !signup);
  authTitle.textContent = signup ? "Create your account" : "Welcome back!";
  authSubtitle.textContent = signup ? "Sign up to enjoy exclusive deals and group orders." : "Login to continue discovering amazing restaurants.";
  authSubmit.textContent = signup ? "Sign up" : "Login";
  authSwitchText.textContent = signup ? "Already have an account?" : "Don't have an account?";
  authSwitchButton.textContent = signup ? "Login" : "Sign up";
  authPassword.autocomplete = signup ? "new-password" : "current-password";
  showAuthMessage();
}

function authErrorMessage(error) {
  const messages = {
    "auth/email-already-in-use": "This email is already registered.",
    "auth/invalid-email": "Please enter a valid email.",
    "auth/missing-password": "Please enter your password.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Wrong password.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/popup-closed-by-user": "Google login was closed.",
    "auth/weak-password": "Password must be at least 6 characters.",
  };
  return messages[error?.code] || "Login failed. Please try again.";
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

document.querySelectorAll(".home-nav").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    setScreen("home");
  });
});

document.querySelectorAll(".profile-nav").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    openProfile();
  });
});

notificationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const currentScreen = phone.classList.contains("profile-view") ? "profile" : phone.classList.contains("cart-view") ? "cart" : "home";
    openNotifications(currentScreen);
  });
});

notificationsBack.addEventListener("click", () => setScreen(notificationReturnScreen));
notificationsTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeNotificationFilter = tab.dataset.notificationFilter;
    notificationsTabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderNotifications();
  });
});
notificationsList.addEventListener("click", async (event) => {
  const accept = event.target.closest(".notification-accept");
  const reject = event.target.closest(".notification-reject");
  const button = accept || reject;
  if (!button) return;
  const status = accept ? "accepted" : "rejected";
  button.closest(".notification-actions")?.querySelectorAll("button").forEach((item) => {
    item.disabled = true;
  });
  if (button.dataset.actionType === "groupInvite") {
    await updateGroupInviteStatus(button.dataset.actionId, status);
  }
  if (button.dataset.actionType === "friendRequest") {
    await updateFriendRequestStatus(button.dataset.actionId, status);
  }
});

document.querySelectorAll(".nav-item.group").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    openGroupOrder();
  });
});

document.querySelectorAll(".profile-card").forEach((card) => {
  const title = card.querySelector("h2")?.textContent.trim();
  if (title === "My Friends") {
    card.addEventListener("click", openFriends);
  }
});

friendsBack.addEventListener("click", openProfile);
friendsSearchInput.addEventListener("input", renderFriends);
addFriendButton.addEventListener("click", openAddFriends);
addFriendsBack.addEventListener("click", openFriends);
addFriendSearchInput.addEventListener("input", queueFirebaseUserSearch);
suggestedUsersList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-add-uid]");
  if (!button || button.disabled) return;

  initFirebase();
  const user = auth?.currentUser;
  const toUid = button.dataset.addUid;
  const toUsername = button.dataset.addUsername;
  if (!db || !user || !toUid || isGuestUser) return;

  button.disabled = true;
  button.textContent = "Sending";
  try {
    const fromUsername = getOwnUsername();
    const requestId = `${toUid}_${user.uid}`;
    const relationship = await getRelationshipStatus(toUid);
    if (relationship.disabled) {
      button.textContent = relationship.label;
      return;
    }

    await db.collection("friendRequests").doc(requestId).set(
      {
        fromUid: user.uid,
        fromUsername,
        fromName: currentProfile?.name || user.displayName || fromUsername,
        fromEmail: user.email || "",
        toUid,
        toUsername,
        status: "pending",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    button.textContent = "Sent";
  } catch (error) {
    console.error(error);
    button.disabled = false;
    button.textContent = "Add";
  }
});
copyUsernameButton.addEventListener("click", async () => {
  const username = getOwnUsername();
  if (!username) return;
  await navigator.clipboard?.writeText(`@${username}`);
  copyUsernameButton.lastChild.textContent = "Copied";
  setTimeout(() => {
    copyUsernameButton.lastChild.textContent = "Copy";
  }, 1100);
});
groupOrderBack.addEventListener("click", () => setScreen("home"));
groupNameInput.addEventListener("input", () => {
  groupNameCount.textContent = `${groupNameInput.value.length}/30`;
  updateCreateGroupButton();
});
groupRestaurantSearch.addEventListener("input", () => {
  const query = groupRestaurantSearch.value.trim().toLowerCase();
  groupRestaurantRows.forEach((row) => {
    row.hidden = query && !row.dataset.restaurantName.includes(query);
  });
});
groupRestaurantRows.forEach((row) => {
  row.addEventListener("click", () => {
    const shouldSelect = !row.classList.contains("is-selected");
    groupRestaurantRows.forEach((item) => item.classList.remove("is-selected"));
    row.classList.toggle("is-selected", shouldSelect);
    updateCreateGroupButton();
  });
});
groupLocationButton.addEventListener("click", openLocationScreen);
groupTimeButton.addEventListener("click", () => {
  groupTimePanel.hidden = !groupTimePanel.hidden;
});
groupTimeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    groupTimeOptions.forEach((item) => item.classList.remove("is-selected"));
    option.classList.add("is-selected");
    groupTimeButton.textContent = option.dataset.time;
    groupTimePanel.hidden = true;
    updateCreateGroupButton();
  });
});
createGroupButton.addEventListener("click", openGroupCreated);
createdBack.addEventListener("click", openGroupOrder);
startGroupOrderButton.addEventListener("click", openGroupChat);
chatBack.addEventListener("click", () => setScreen("group-created"));
chatAddItemsButton.addEventListener("click", openSelectedRestaurantMenu);
chatMenuButton.addEventListener("click", openSelectedRestaurantMenu);
chatCartButton.addEventListener("click", openGroupCart);
chatSendButton.addEventListener("click", async () => {
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = "";
  await addGroupMessage({
    type: "text",
    text,
    timeLabel: groupNowLabel(),
  });
});
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    chatSendButton.click();
  }
});
chatInviteButton.addEventListener("click", () => openInviteFriends("group-chat"));
createdMembersRow.addEventListener("click", (event) => {
  if (event.target.closest(".created-invite-slot")) openInviteFriends("group-created");
});
inviteFriendsBack.addEventListener("click", () => {
  if (inviteReturnScreen === "group-created") {
    setScreen("group-created");
    return;
  }
  openGroupChat();
});
inviteFriendSearchInput.addEventListener("input", renderInviteFriends);
inviteFriendsList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-invite-key]");
  if (!button || button.disabled) return;
  const friends = readFriendData("novaFriends");
  const friend = friends.find((item) => groupFriendKey(item) === button.dataset.inviteKey);
  if (friend) inviteGroupFriend(friend);
});
groupInvitesList.addEventListener("click", async (event) => {
  const accept = event.target.closest(".accept-group-invite");
  const reject = event.target.closest(".reject-group-invite");
  const inviteId = accept?.dataset.inviteId || reject?.dataset.inviteId;
  if (!inviteId) return;
  await updateGroupInviteStatus(inviteId, accept ? "accepted" : "rejected");
});
friendRequestsList.addEventListener("click", async (event) => {
  const row = event.target.closest("[data-request-id]");
  if (!row) return;
  const accept = event.target.closest(".accept-friend-request");
  const reject = event.target.closest(".reject-friend-request");
  if (!accept && !reject) return;
  await updateFriendRequestStatus(row.dataset.requestId, accept ? "accepted" : "rejected");
});
locationBack.addEventListener("click", openGroupOrder);
locationCards.forEach((card) => {
  card.addEventListener("click", () => {
    selectedGroupLocation = card.dataset.location;
    locationCards.forEach((item) => item.classList.remove("is-selected"));
    card.classList.add("is-selected");
    confirmLocationButton.disabled = false;
  });
});
confirmLocationButton.addEventListener("click", () => {
  if (!selectedGroupLocation) return;
  groupLocationButton.textContent = selectedGroupLocation;
  updateCreateGroupButton();
  openGroupOrder();
});

updateCreateGroupButton();

guestSignupButton.addEventListener("click", () => {
  isGuestUser = false;
  setAuthMode(true);
  setScreen("auth");
});

avatarInput.addEventListener("change", () => {
  const file = avatarInput.files?.[0];
  const user = auth?.currentUser;
  if (!file || !user || isGuestUser) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const dataUrl = String(reader.result || "");
    localStorage.setItem(`novaAvatar:${user.uid}`, dataUrl);
    setAvatarContent(firstLetter(currentProfile?.username || user.displayName || "User"), dataUrl);
  });
  reader.readAsDataURL(file);
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
    detailReturnScreen = "home";
    detailCartMode = "normal";
    cartMode = "normal";
    updateAllCartViews();
    setScreen("detail");
  });
});

restaurantCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    window.scrollTo(0, 0);
    detailScroll.scrollTo(0, 0);
    detailReturnScreen = "home";
    detailCartMode = "normal";
    cartMode = "normal";
    updateAllCartViews();
    setScreen("detail");
  }
});

backButton.addEventListener("click", () => setScreen(detailReturnScreen));
cartBack.addEventListener("click", () => setScreen(cartReturnScreen));
checkoutBack.addEventListener("click", () => setScreen("cart"));

authSwitchButton.addEventListener("click", () => setAuthMode(!isSignupMode));
authBack.addEventListener("click", () => setAuthMode(false));
authClose?.addEventListener("click", () => setScreen("home"));
guestLogin.addEventListener("click", () => {
  isGuestUser = true;
  currentProfile = null;
  setScreen("home");
  loadNotifications().catch(() => {});
});

passwordToggle.addEventListener("click", () => {
  const nextType = authPassword.type === "password" ? "text" : "password";
  authPassword.type = nextType;
  authConfirm.type = nextType;
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  showAuthMessage();

  if (!auth) {
    initFirebase();
  }

  if (!auth) {
    showAuthMessage("Firebase Auth is not ready.");
    return;
  }

  const email = authEmail.value.trim();
  const password = authPassword.value;
  const name = authName.value.trim();

  if (isSignupMode && password !== authConfirm.value) {
    showAuthMessage("Passwords do not match.");
    return;
  }

  authSubmit.disabled = true;
  authSubmit.textContent = isSignupMode ? "Signing up..." : "Logging in...";
  setAuthRoutingView(true);
  suppressAuthRedirect = true;

  try {
    if (isSignupMode) {
      const credential = await auth.createUserWithEmailAndPassword(email, password);
      await credential.user.updateProfile({ displayName: name });
      if (db) {
        await db.collection("users").doc(credential.user.uid).set(
          {
            name,
            email,
            provider: "password",
            username: "",
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      }
      await new Promise((resolve) => setTimeout(resolve, 600));
      showOnboarding(credential.user);
      setAuthRoutingView(false);
    } else {
      const credential = await auth.signInWithEmailAndPassword(email, password);
      await new Promise((resolve) => setTimeout(resolve, 450));
      await routeAfterAuth(credential.user);
    }
  } catch (error) {
    showAuthMessage(authErrorMessage(error));
    setAuthRoutingView(false);
  } finally {
    suppressAuthRedirect = false;
    if (!authScreen.classList.contains("onboarding-mode") && phone.classList.contains("auth-view")) {
      setAuthRoutingView(false);
    }
    authSubmit.disabled = false;
    authSubmit.textContent = isSignupMode ? "Sign up" : "Login";
  }
});

usernameForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  usernameMessage.textContent = "";

  const username = cleanUsername(usernameInput.value);
  if (username.length < 3) {
    usernameMessage.textContent = "Username must be at least 3 characters.";
    return;
  }

  if (!onboardingUser) {
    usernameMessage.textContent = "Please login again.";
    return;
  }

  setAuthRoutingView(true);
  try {
    if (db) {
      await db.collection("users").doc(onboardingUser.uid).set(
        {
          username,
          usernameLower: username.toLowerCase(),
          email: onboardingUser.email || "",
          name: onboardingUser.displayName || authName.value.trim() || username,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    }
    localStorage.setItem(`novaUsername:${onboardingUser.uid}`, username);
    currentProfile = {
      ...(currentProfile || {}),
      username,
      usernameLower: username.toLowerCase(),
      email: onboardingUser.email || "",
      name: onboardingUser.displayName || authName.value.trim() || username,
    };
    isGuestUser = false;
    await new Promise((resolve) => setTimeout(resolve, 450));
    continueToHome();
  } catch (error) {
    usernameMessage.textContent = "Could not save username. Please try again.";
  } finally {
    setAuthLoading(false);
  }
});

googleLogin.addEventListener("click", async () => {
  showAuthMessage();
  initFirebase();

  if (!auth || !googleProvider) {
    showAuthMessage("Firebase Auth is not ready.");
    return;
  }

  googleLogin.disabled = true;
  setAuthLoading(true);

  try {
    googleLogin.querySelector("strong").textContent = "Opening Google...";
    const credential = await auth.signInWithPopup(googleProvider);
    if (db && credential.user) {
      await db.collection("users").doc(credential.user.uid).set(
        {
          name: credential.user.displayName || "",
          email: credential.user.email || "",
          provider: "google",
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    }
    await routeAfterAuth(credential.user);
  } catch (error) {
    if (error?.code === "auth/popup-blocked" || error?.code === "auth/popup-closed-by-user" || error?.code === "auth/cancelled-popup-request") {
      try {
        await auth.signInWithRedirect(googleProvider);
        return;
      } catch (redirectError) {
        showAuthMessage(authErrorMessage(redirectError));
      }
    } else {
      showAuthMessage(authErrorMessage(error));
    }
    googleLogin.disabled = false;
    googleLogin.querySelector("strong").textContent = "Continue with Google";
    setAuthRoutingView(false);
  } finally {
    if (phone.classList.contains("auth-view") && !authScreen.classList.contains("onboarding-mode")) {
      setAuthRoutingView(false);
    }
  }
});

setAuthMode(false);

initFirebase();

if (auth) {
  setAuthRoutingView(true);

  auth
    .getRedirectResult()
    .then(async (credential) => {
      if (credential?.user && db) {
        await db.collection("users").doc(credential.user.uid).set(
          {
            name: credential.user.displayName || "",
            email: credential.user.email || "",
            provider: "google",
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      }
      if (credential?.user) {
        await routeAfterAuth(credential.user);
      }
    })
    .catch((error) => {
      showAuthMessage(authErrorMessage(error));
      googleLogin.disabled = false;
      googleLogin.querySelector("strong").textContent = "Continue with Google";
      setAuthRoutingView(false);
    });

  auth.onAuthStateChanged((user) => {
    authStateReady = true;

    if (user && phone.classList.contains("auth-view") && !suppressAuthRedirect && !authScreen.classList.contains("onboarding-mode") && !authRouting) {
      routeAfterAuth(user);
      return;
    }

    if (!user && phone.classList.contains("auth-view") && !suppressAuthRedirect) {
      setAuthRoutingView(false);
    }
  });
} else {
  authStateReady = true;
}

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
  const sourceCart = activeCart();
  const current = totals(sourceCart, cartMode);
  const isGroupCart = cartMode === "group";
  const message = deliveryMessage(current.subtotal);
  const remaining = Math.max(FREE_DELIVERY_TARGET - current.subtotal, 0);
  const progress = Math.min((current.subtotal / FREE_DELIVERY_TARGET) * 100, 100);
  const normalDeliveryText = current.qty > 0 ? `${money(DELIVERY_FEE)} delivery fee` : "Delivery fee RM3.00";

  cartQty.textContent = current.qty;
  cartTotal.textContent = money(current.subtotal);
  detailDeliveryText.textContent = isGroupCart ? message : normalDeliveryText;
  deliveryPill.textContent = isGroupCart ? "Free delivery over RM50" : "Delivery fee RM3.00";
  viewCart.disabled = current.qty === 0;
  phone.classList.toggle("has-cart", current.qty > 0);

  cartItemsTitle.textContent = `Items (${current.qty})`;
  cartDeliveryText.textContent = remaining > 0 ? `Add ${money(remaining)} more to enjoy free delivery!` : "You have unlocked free delivery!";
  cartDeliveryRemain.innerHTML = remaining > 0 ? `${money(remaining)}<br />to go` : `Free<br />delivery`;
  deliveryProgress.style.width = `${progress}%`;
  summarySubtotal.textContent = money(current.subtotal);
  summaryDelivery.textContent = current.delivery === 0 ? "Free" : money(current.delivery);
  summaryTotal.textContent = money(current.total);
  cartPageQty.textContent = current.qty;
  cartPageSubtotal.textContent = money(current.total);
  cartPageDelivery.textContent = isGroupCart ? message : "";
  cartInlineDelivery.textContent = isGroupCart ? message : "";
  cartFreeRow.style.setProperty("--free-progress", `${progress}%`);
  checkoutItemsTitle.textContent = `Order Items (${current.qty})`;
  checkoutSubtotal.textContent = money(current.subtotal);
  checkoutDelivery.textContent = current.delivery === 0 ? "Free" : money(current.delivery);
  checkoutTotal.textContent = money(current.total);
  placeOrderTotal.textContent = money(current.total);
  phone.classList.toggle("group-cart-mode", isGroupCart);

  cartItems.innerHTML = [...sourceCart.values()]
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

  checkoutItems.innerHTML = [...sourceCart.values()]
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
  cartMode = detailCartMode;
  const sourceCart = activeCart();
  const code = button.dataset.code;
  const item = sourceCart.get(code) || {
    code,
    name: button.dataset.name,
    cn: button.dataset.cn,
    price: Number(button.dataset.price),
    qty: 0,
  };
  item.qty += 1;
  sourceCart.set(code, item);
  updateAllCartViews();
  if (cartMode === "group") {
    saveGroupCartItem(item).catch(() => {});
    appendCartChatMessage(item.name).catch(() => {});
  }
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
  const sourceCart = activeCart();
  if (!code || !sourceCart.has(code)) return;

  let changedItem = null;
  let removedCode = "";
  if (remove) {
    removedCode = code;
    sourceCart.delete(code);
  } else if (qtyButton.dataset.action === "increase") {
    sourceCart.get(code).qty += 1;
    changedItem = sourceCart.get(code);
  } else {
    const item = sourceCart.get(code);
    item.qty -= 1;
    if (item.qty <= 0) {
      removedCode = code;
      sourceCart.delete(code);
    } else {
      changedItem = item;
    }
  }

  updateAllCartViews();
  if (cartMode === "group") {
    if (removedCode) removeGroupCartItem(removedCode).catch(() => {});
    if (changedItem) saveGroupCartItem(changedItem).catch(() => {});
  }
});

clearCartButton.addEventListener("click", () => {
  const clearCodes = cartMode === "group" ? [...groupCart.keys()] : [];
  activeCart().clear();
  updateAllCartViews();
  if (cartMode === "group") {
    clearCodes.forEach((code) => removeGroupCartItem(code).catch(() => {}));
  }
});

cartShopNoteButton.addEventListener("click", () => {
  cartNoteEditor.hidden = !cartNoteEditor.hidden;
  if (!cartNoteEditor.hidden) cartShopNoteInput.focus();
});

cartShopNoteInput.addEventListener("input", () => {
  cartShopNoteCount.textContent = cartShopNoteInput.value.length;
});

viewCart.addEventListener("click", () => {
  if (viewCart.disabled) return;
  window.scrollTo(0, 0);
  cartMode = detailCartMode;
  cartReturnScreen = "detail";
  setScreen("cart");
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    cartPageScroll.scrollTo(0, 0);
  });
});

checkoutButton.addEventListener("click", () => {
  if (cartMode === "group") {
    alert("Group order checkout is coming soon.");
    return;
  }
  if (activeCart().size === 0) return;
  window.scrollTo(0, 0);
  setScreen("checkout");
});

summaryCheckoutButton.addEventListener("click", () => {
  if (cartMode === "group") {
    alert("Group order checkout is coming soon.");
    return;
  }
  if (activeCart().size === 0) return;
  window.scrollTo(0, 0);
  setScreen("checkout");
});

placeOrderButton.addEventListener("click", async () => {
  const sourceCart = activeCart();
  if (cartMode === "group" || sourceCart.size === 0 || placeOrderButton.disabled) return;
  if (!db) {
    alert("Firebase is not ready. Please check your connection.");
    return;
  }

  const current = totals();
  const originalText = placeOrderButton.innerHTML;
  placeOrderButton.disabled = true;
  placeOrderButton.innerHTML = "<span>Placing Order...</span>";

  try {
    await db.collection("orders").add({
      restaurant: "Mori Cafe Bukit Beruang",
      address: activeChoice("addressChoices"),
      slot: activeChoice("slotChoices"),
      paymentMethod: "Touch 'n Go eWallet",
      items: [...sourceCart.values()].map((item) => ({
        code: item.code,
        name: item.name,
        chineseName: item.cn,
        price: item.price,
        quantity: item.qty,
        lineTotal: Number((item.price * item.qty).toFixed(2)),
      })),
      subtotal: Number(current.subtotal.toFixed(2)),
      deliveryFee: Number(current.delivery.toFixed(2)),
      total: Number(current.total.toFixed(2)),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    alert("Order placed successfully!");
    sourceCart.clear();
    updateAllCartViews();
    setScreen("home");
  } catch (error) {
    console.error(error);
    alert("Order failed. Please try again.");
  } finally {
    placeOrderButton.disabled = false;
    placeOrderButton.innerHTML = originalText;
  }
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
