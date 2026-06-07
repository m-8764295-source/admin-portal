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
const avatarSheetOverlay = document.querySelector(".avatar-sheet-overlay");
const avatarSheetClose = document.querySelector(".avatar-sheet-close");
const avatarOptions = document.querySelector("#avatarOptions");
const avatarConfirm = document.querySelector("#avatarConfirm");
const avatarSheetMessage = document.querySelector("#avatarSheetMessage");
const groupInviteModalOverlay = document.querySelector(".group-invite-modal-overlay");
const inviteHostAvatar = document.querySelector("#inviteHostAvatar");
const inviteModalSubtitle = document.querySelector("#inviteModalSubtitle");
const inviteRestaurantImage = document.querySelector("#inviteRestaurantImage");
const inviteRestaurantName = document.querySelector("#inviteRestaurantName");
const inviteDeliveryTime = document.querySelector("#inviteDeliveryTime");
const inviteDeliveryTo = document.querySelector("#inviteDeliveryTo");
const inviteGroupName = document.querySelector("#inviteGroupName");
const inviteModalDecline = document.querySelector(".invite-modal-decline");
const inviteModalAccept = document.querySelector(".invite-modal-accept");
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
const groupOrdersList = document.querySelector("#groupOrdersList");
const groupOrdersEmpty = document.querySelector("#groupOrdersEmpty");
const groupListBack = document.querySelector(".group-list-back");
const homeStartGroupOrder = document.querySelector(".home-start-group-order");
const startNewGroupOrder = document.querySelector(".start-new-group-order");
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
const createdInviteAction = document.querySelector(".created-invite-action");
const createdShareAction = document.querySelector(".created-share-action");
const createdSheetOverlay = document.querySelector(".created-sheet-overlay");
const createdSheetClose = document.querySelector(".created-sheet-close");
const createdSheetDone = document.querySelector(".created-sheet-done");
const createdSharePanel = document.querySelector(".created-share-panel");
const createdInvitePanel = document.querySelector(".created-invite-panel");
const createdInviteSearchInput = document.querySelector("#createdInviteSearchInput");
const createdInviteList = document.querySelector("#createdInviteList");
const createdInviteEmpty = document.querySelector("#createdInviteEmpty");
const createdCopyLink = document.querySelector(".created-copy-link");
const createdSocialRow = document.querySelector(".created-social-row");
const chatBack = document.querySelector(".chat-back");
const chatGroupName = document.querySelector("#chatGroupName");
const chatMemberCount = document.querySelector("#chatMemberCount");
const chatCloseCountdown = document.querySelector("#chatCloseCountdown");
const chatCreatedTime = document.querySelector("#chatCreatedTime");
const chatCreatedText = document.querySelector("#chatCreatedText");
const chatCreatedClose = document.querySelector("#chatCreatedClose");
const chatDeliveryTo = document.querySelector("#chatDeliveryTo");
const chatDeliveryTime = document.querySelector("#chatDeliveryTime");
const chatAddItemsButton = document.querySelector(".chat-plus-button");
const chatMenuButton = document.querySelector(".chat-menu-button");
const chatCartButtons = document.querySelectorAll(".chat-cart-button");
const chatInviteButton = document.querySelector(".chat-invite-button");
const chatMembersButtons = document.querySelectorAll(".chat-members-button");
const chatMembersPanel = document.querySelector(".chat-members-panel");
const chatMembersClose = document.querySelector(".chat-members-close");
const chatMembersList = document.querySelector(".chat-members-list");
const chatMembersCount = document.querySelector("#chatMembersCount");
const chatPanelInvite = document.querySelector(".chat-panel-invite");
const groupInviteLinkInput = document.querySelector("#groupInviteLink");
const copyGroupLinkButton = document.querySelector(".copy-group-link");
const chatDiscountFill = document.querySelector(".chat-discount-fill");
const chatDiscountSteps = document.querySelectorAll(".chat-discount-track i");
const chatRewardCards = document.querySelectorAll(".chat-reward-card");
const chatSpendAmount = document.querySelector("#chatSpendAmount");
const chatSpendBubble = document.querySelector("#chatSpendBubble");
const chatMinimumText = document.querySelector("#chatMinimumText");
const chatCurrentTotal = document.querySelector("#chatCurrentTotal");
const chatCartCount = document.querySelector("#chatCartCount");
const chatOrderBadge = document.querySelector("#chatOrderBadge");
const chatOrderRow = document.querySelector(".chat-order-row");
const chatCheckoutHint = document.querySelector("#chatCheckoutHint");
const chatCheckoutButton = document.querySelector(".chat-checkout-button");
const chatUnlockMessage = document.querySelector(".chat-unlock-message");
const chatUnlockText = document.querySelector("#chatUnlockText");
const chatTopMemberCount = document.querySelector("#chatTopMemberCount");
const chatMessages = document.querySelector(".chat-messages");
const chatInput = document.querySelector(".chat-message-box input");
const chatSendButton = document.querySelector(".chat-send-button");
const groupCartBack = document.querySelector(".group-cart-back");
const groupCartParticipants = document.querySelector("#groupCartParticipants");
const groupCartRestaurantImage = document.querySelector("#groupCartRestaurantImage");
const groupCartRestaurantName = document.querySelector("#groupCartRestaurantName");
const groupCartItemCount = document.querySelector("#groupCartItemCount");
const groupCartItemTotal = document.querySelector("#groupCartItemTotal");
const groupCartDeliveryFee = document.querySelector("#groupCartDeliveryFee");
const groupCartGroupTotal = document.querySelector("#groupCartGroupTotal");
const groupCartYourName = document.querySelector("#groupCartYourName");
const groupCartYourItems = document.querySelector("#groupCartYourItems");
const groupCartYourDelivery = document.querySelector("#groupCartYourDelivery");
const groupCartYouPay = document.querySelector("#groupCartYouPay");
const groupCartCheckout = document.querySelector(".group-cart-checkout");
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
let currentGroupDeliveryTo = "Select location";
let currentGroupDeliveryTime = "Select time";
let currentGroupMemberCount = 1;
let currentGroupId = "";
let currentGroupRestaurant = "Mori Cafe";
let currentGroupRestaurantImage = "assets/mori.png";
let groupMembers = [];
let groupInvites = [];
let inviteReturnScreen = "group-chat";
let groupInviteUnsubscribe = null;
let groupMessagesUnsubscribe = null;
let groupCartUnsubscribe = null;
let incomingGroupInviteUnsubscribe = null;
let friendRequestInboxUnsubscribe = null;
let friendRequestSentUnsubscribe = null;
let friendRequestRefreshTimer = null;
let activeIncomingGroupInvite = null;
let notificationReturnScreen = "home";
let activeNotificationFilter = "all";
let firebaseGroupInvites = [];
let firebaseGroupInvitesLoaded = false;
let notificationItems = [];
let notificationLoadToken = 0;
let groupListLoadToken = 0;
let cachedGroupOrders = [];
let detailReturnScreen = "home";
let cartReturnScreen = "detail";
let paymentSuccessLottie = null;
const PROFILE_AVATARS = Array.from({ length: 5 }, (_, index) => `assets/avatars/avatar_${index + 1}.png`);
const DEFAULT_AVATAR_URL = "assets/avatars/avatar_2.png";
let pendingProfileAvatarUrl = "";

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
const summarySubtotal = document.querySelector("#summarySubtotal");
const summaryDelivery = document.querySelector("#summaryDelivery");
const summaryTotal = document.querySelector("#summaryTotal");
const cartPageQty = document.querySelector("#cartPageQty");
const cartPageSubtotal = document.querySelector("#cartPageSubtotal");
const cartPageDelivery = document.querySelector("#cartPageDelivery");
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
const paymentBack = document.querySelector(".payment-back");
const paymentAmount = document.querySelector("#paymentAmount");
const paymentScreenshotInput = document.querySelector("#paymentScreenshotInput");
const paymentUploadTitle = document.querySelector("#paymentUploadTitle");
const paymentUploadHint = document.querySelector("#paymentUploadHint");
const submitPaymentButton = document.querySelector(".submit-payment-bar button");
const paymentSuccessAnimation = document.querySelector("#paymentSuccessAnimation");
const paymentSuccessTitle = document.querySelector(".payment-success-content h1");
const orderPlacedId = document.querySelector("#orderPlacedId");
const orderPlacedTime = document.querySelector("#orderPlacedTime");
const orderPlacedRestaurantTotal = document.querySelector("#orderPlacedRestaurantTotal");
const orderPlacedItems = document.querySelector("#orderPlacedItems");
const orderPlacedSubtotal = document.querySelector("#orderPlacedSubtotal");
const orderPlacedDelivery = document.querySelector("#orderPlacedDelivery");
const orderPlacedTotal = document.querySelector("#orderPlacedTotal");
const orderProgressCard = document.querySelector(".order-progress-card");

const FREE_DELIVERY_TARGET = 50;
const DELIVERY_FEE = 3;
const GROUP_DELIVERY_FEE = 2;
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
let storage = null;
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
let firebaseFriends = [];
let firebaseFriendsLoaded = false;
let addFriendSearchTimer = null;
let addFriendSearchToken = 0;
let compressedPaymentScreenshot = null;
let compressedPaymentScreenshotName = "";

const PAYMENT_SCREENSHOT_MAX_SIZE = 2 * 1024 * 1024;

function initFirebase() {
  if (!window.firebase) return false;

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  if (!db && firebase.firestore) {
    db = firebase.firestore();
  }

  if (!storage && firebase.storage) {
    storage = firebase.storage();
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
      ["101", "Chicken Chop Rice", "é¸¡æ‰’é¥­", 9.9, "Crispy chicken chop served with rice and coleslaw.", true],
      ["102", "Curry Sauce Chicken Rice", "å’–å–±é…±é¸¡é¥­", 9.9, "Tender chicken with creamy curry sauce.", true],
      ["104", "Mushroom Chicken Rice", "è˜‘è‡é¸¡é¥­", 9.9, "Chicken rice topped with mushroom sauce.", true],
      ["115", "Chicken Chop", "é¸¡æ‰’", 13.9, "Chicken chop with salad and potato.", true],
    ],
  },
  {
    id: "rice",
    title: "Rice é¥­",
    items: [
      ["101", "Chicken Chop Rice", "é¸¡æ‰’é¥­", 9.9],
      ["102", "Curry Sauce Chicken Rice", "å’–å–±é…±é¸¡é¥­", 9.9],
      ["103", "Black Pepper Chicken Rice", "é»‘èƒ¡æ¤’é¸¡é¥­", 9.9],
      ["104", "Mushroom Chicken Rice", "è˜‘è‡é¸¡é¥­", 9.9],
      ["105", "Sweet n Spicy Chicken Rice", "æ³°å¼ç”œè¾£é¸¡é¥­", 9.9],
      ["106", "Mongolia Sauce Chicken Rice", "è’™å¤é…±é¸¡é¥­", 9.9],
      ["107", "Penang Chicken Roll Rice", "æ§ŸåŸŽé¸¡è‚‰å·é¥­", 9.9],
      ["108", "Dori Fish Rice", "é±¼æ‰’é¥­", 9.9],
      ["109", "Curry Sauce Fish Rice", "å’–å–±é…±é±¼é¥­", 9.9],
      ["110", "Black Pepper Fish Rice", "é»‘èƒ¡æ¤’é±¼é¥­", 9.9],
      ["111", "Mushroom Fish Rice", "è˜‘è‡é±¼é¥­", 9.9],
      ["112", "Sweet n Spicy Fish Rice", "æ³°å¼ç”œè¾£é±¼é¥­", 9.9],
      ["113", "Mongolia Sauce Fish Rice", "è’™å¤é…±é±¼é¥­", 9.9],
      ["114", "Thai Style BBQ Fish Rice", "æ³°å¼çƒ¤é±¼é¥­", 9.9],
    ],
  },
  {
    id: "mains",
    title: "Mains ä¸»é£Ÿ",
    items: [
      ["115", "Chicken Chop", "é¸¡æ‰’", 13.9],
      ["116", "Curry Sauce Chicken Chop", "å’–å–±é…±é¸¡æ‰’", 13.9],
      ["117", "Black Pepper Chicken Chop", "é»‘èƒ¡æ¤’é¸¡æ‰’", 13.9],
      ["118", "Mushroom Chicken Chop", "è˜‘è‡é¸¡æ‰’", 13.9],
      ["119", "Sweet n Spicy Chicken Chop", "æ³°å¼ç”œè¾£é¸¡æ‰’", 13.9],
      ["120", "Mongolia Sauce Chicken Chop", "è’™å¤é…±é¸¡æ‰’", 13.9],
      ["121", "Dori Fish Fillet", "é±¼æ‰’", 13.9],
      ["122", "Curry Sauce Fish Fillet", "å’–å–±é…±é±¼æ‰’", 13.9],
      ["123", "Black Pepper Fish Fillet", "é»‘èƒ¡æ¤’é±¼æ‰’", 13.9],
      ["124", "Mushroom Fish Fillet", "è˜‘è‡é±¼æ‰’", 13.9],
      ["125", "Sweet n Spicy Fish Fillet", "æ³°å¼ç”œè¾£é±¼æ‰’", 13.9],
      ["126", "Mongolia Sauce Fish Fillet", "è’™å¤é…±é±¼æ‰’", 13.9],
    ],
  },
  {
    id: "drinks",
    title: "Drinks é¥®æ–™",
    items: [
      ["01", "Oolong Tea", "ä¹Œé¾™é’èŒ¶", 8.9],
      ["02", "Oolong Milk Tea", "ä¹Œé¾™å¥¶èŒ¶", 8.9],
      ["03", "Red Tea", "çº¢èŒ¶", 8.9],
      ["04", "Milk Tea", "å¥¶èŒ¶", 8.9],
      ["05", "Green Tea", "ç»¿èŒ¶", 8.9],
      ["06", "Green Milk Tea", "å¥¶ç»¿", 8.9],
      ["07", "Plum Green Tea", "æ¢…å­ç»¿èŒ¶", 8.9],
      ["08", "Plum Oolong Tea", "æ¢…å­ä¹Œé¾™", 8.9],
      ["09", "Plum Honey", "æ¢…å­èœ‚èœœ", 8.9],
      ["10", "Pearl Oolong Milk Tea", "ä¹Œé¾™çå¥¶", 8.9],
      ["11", "Pearl Milk Tea", "çç å¥¶èŒ¶", 8.9],
      ["12", "Pearl Green Milk Tea", "çç å¥¶ç»¿", 8.9],
      ["13", "Pearl Green Tea", "çç ç»¿", 8.9],
      ["14", "Pearl Oolong", "çç ä¹Œé¾™", 8.9],
      ["15", "Honey Milk Tea", "èœ‚èœœå¥¶èŒ¶", 8.9],
      ["16", "Honey Green Tea", "èœ‚èœœç»¿èŒ¶", 8.9],
      ["17", "Honey Oolong Milk Tea", "èœ‚èœœä¹Œé¾™", 8.9],
      ["18", "Passion Green Tea", "ç™¾é¦™ç»¿èŒ¶", 8.9],
      ["19", "Passion Aloe Vera", "ç™¾é¦™èŠ¦èŸ", 8.9],
      ["20", "Honey Aloe Vera", "èœ‚èœœèŠ¦èŸ", 8.9],
      ["21", "Lemon Grapefruit", "æŸ æª¬æŸšå­", 8.9],
      ["22", "Honey Grapefruit", "èœ‚èœœæŸšå­", 8.9],
      ["23", "Lemon Green", "æŸ æª¬ç»¿", 8.9],
      ["24", "Mango Green", "èŠ’æžœç»¿", 8.9],
      ["25", "Peach Green", "æ¡ƒå­ç»¿", 8.9],
      ["26", "Pudding Milk Tea", "å¸ƒä¸å¥¶èŒ¶", 8.9],
      ["27", "Pudding Oolong Milk Tea", "ä¹Œé¾™å¸ƒä¸", 8.9],
      ["28", "Pudding Green Milk Tea", "å¥¶ç»¿å¸ƒä¸", 8.9],
      ["29", "Apple Green Milk Tea", "è‹¹æžœå¥¶ç»¿", 8.9],
      ["30", "Witchery Milk Tea", "é­”åŠ›ç‚¹å­å¥¶èŒ¶", 8.9],
      ["31", "Lychee Oolong Milk Tea", "è´µå¦ƒæ¤°æžœ", 8.9],
      ["32", "Lychee Green Milk Tea", "æ¤°æžœå¥¶ç»¿", 8.9],
      ["33", "Azuki Milk Tea", "çº¢è±†å¥¶èŒ¶", 8.9],
      ["34", "Azuki Green Milk Tea", "çº¢è±†å¥¶ç»¿", 8.9],
      ["35", "Azuki Oolong Milk Tea", "çº¢è±†ä¹Œé¾™", 8.9],
      ["36", "Crystal Oolong Milk Tea", "å¯’å¤©ä¹Œé¾™", 8.9],
      ["37", "Crystal Green Milk Tea", "å¯’å¤©å¥¶ç»¿", 8.9],
      ["38", "Dirty Milky", "è„è„å¥¶", 9.9],
      ["39", "Dirty Milk Tea", "è„å¥¶èŒ¶", 9.9],
      ["40", "Dirty Green Milk Tea", "è„å¥¶ç»¿", 9.9],
      ["41", "Dirty Wulong Milk Tea", "è„ä¹Œé¾™", 9.9],
      ["42", "Peach Pudding", "æ¡ƒå­å¸ƒä¸é²œå¥¶", 11.9],
      ["43", "Mango Pudding", "èŠ’æžœå¸ƒä¸é²œå¥¶", 11.9],
      ["44", "Passion Pudding", "ç™¾é¦™å¸ƒä¸é²œå¥¶", 11.9],
      ["45", "Mocha", "æ‘©å¡", 8.9],
      ["46", "Cappuccino", "å¡å¸ƒå¥‡è¯º", 8.9],
      ["47", "Tiramisu", "ææ‹‰ç±³è‹", 8.9],
      ["48", "Italian Coffee", "æ„å¤§åˆ©å’–å•¡", 8.9],
      ["49", "Italian Cham", "æ„å¤§åˆ©æŽº", 8.9],
      ["50", "Columbia Chocolate", "å“¥ä¼¦æ¯”äºš", 8.9],
      ["51", "Chocolate", "å·§å…‹åŠ›", 8.9],
      ["52", "Honey Lemon", "èœ‚èœœæŸ æª¬", 8.9],
      ["53", "Honey Milk", "èœ‚èœœç‰›å¥¶", 8.9],
      ["55", "Classic Mojito", "ç»å…¸ç‰©è¯­", 9.9],
      ["56", "Blue Ocean", "è“è‰²æµ·æ´‹", 9.9],
      ["57", "Passion Vines", "ç™¾é¦™ã®è—¤", 9.9],
      ["58", "Mango Tango", "èŠ’é‡Œå·é—²", 9.9],
      ["59", "Momotaro", "æ¡ƒå¤ªéƒŽå›", 9.9],
      ["67", "Pepsi", "ç™¾äº‹å¯ä¹", 3.9],
      ["68", "Cheers Soda", "è‹æ‰“æ±½æ°´", 3.9],
      ["69", "Plain Water", "ç™½å¼€æ°´", 0.8],
    ],
  },
  { id: "cake", title: "Cake è›‹ç³•", items: [["90", "Assorted Cake", "ç²¾é€‰è›‹ç³•", 12.9]] },
  {
    id: "addons",
    title: "Add-on å¦åŠ ",
    items: [
      ["A1", "Rice Large", "å¤§é¥­", 1.5],
      ["A2", "Rice Small", "å°é¥­", 1.3],
      ["A3", "Fried Egg", "è·åŒ…è›‹", 1.5],
      ["A4", "Fried Vegetable", "ç‚’åŒ…èœ", 2],
      ["A5", "Mayonnaise", "ç¾Žä¹ƒæ»‹", 1],
    ],
  },
];

function fixMojibakeText(value) {
  if (typeof value !== "string" || !/[ÃÂÄÅÆÇÈÉãäåæçèé‰ŠŒŽ‘’“”•–—˜™š›œžŸ]/.test(value)) return value;
  const cp1252Bytes = {
    "€": 0x80,
    "‚": 0x82,
    "ƒ": 0x83,
    "„": 0x84,
    "…": 0x85,
    "†": 0x86,
    "‡": 0x87,
    "ˆ": 0x88,
    "‰": 0x89,
    "Š": 0x8a,
    "‹": 0x8b,
    "Œ": 0x8c,
    "Ž": 0x8e,
    "‘": 0x91,
    "’": 0x92,
    "“": 0x93,
    "”": 0x94,
    "•": 0x95,
    "–": 0x96,
    "—": 0x97,
    "˜": 0x98,
    "™": 0x99,
    "š": 0x9a,
    "›": 0x9b,
    "œ": 0x9c,
    "ž": 0x9e,
    "Ÿ": 0x9f,
  };
  try {
    const bytes = Array.from(value, (char) => {
      const code = char.charCodeAt(0);
      const byte = code <= 0xff ? code : cp1252Bytes[char];
      if (byte === undefined) throw new Error("Not mojibake");
      return `%${byte.toString(16).padStart(2, "0")}`;
    }).join("");
    return decodeURIComponent(bytes);
  } catch {
    return value;
  }
}

menuSections.forEach((section) => {
  section.title = fixMojibakeText(section.title);
  section.items.forEach((item) => {
    item[2] = fixMojibakeText(item[2]);
  });
});

const normalCart = new Map();
const groupCart = new Map();
let cartMode = "normal";
let detailCartMode = "normal";

function money(value) {
  return `RM${value.toFixed(2)}`;
}

function blobFromCanvas(canvas, type, quality) {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

async function compressPaymentScreenshot(file) {
  const imageUrl = URL.createObjectURL(file);
  try {
    const image = await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = imageUrl;
    });

    const maxSide = 1400;
    const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.width * scale));
    canvas.height = Math.max(1, Math.round(image.height * scale));
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const outputType = file.type === "image/png" ? "image/png" : "image/jpeg";
    let blob = await blobFromCanvas(canvas, outputType, 0.82);
    if (!blob || blob.size > PAYMENT_SCREENSHOT_MAX_SIZE) {
      blob = await blobFromCanvas(canvas, "image/jpeg", 0.72);
    }
    if (!blob || blob.size > PAYMENT_SCREENSHOT_MAX_SIZE) {
      throw new Error("Compressed screenshot is still larger than 2MB.");
    }
    return blob;
  } finally {
    URL.revokeObjectURL(imageUrl);
  }
}

function activeCart() {
  return cartMode === "group" ? groupCart : normalCart;
}

function totals(sourceCart = activeCart(), mode = cartMode) {
  const subtotal = [...sourceCart.values()].reduce((sum, item) => sum + item.price * item.qty, 0);
  const qty = [...sourceCart.values()].reduce((sum, item) => sum + item.qty, 0);
  const delivery = subtotal === 0 ? 0 : mode === "group" ? discountedGroupDeliveryFee(subtotal) : DELIVERY_FEE;
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
  phone.classList.remove("auth-view", "home-view", "detail-view", "cart-view", "checkout-view", "profile-view", "friends-view", "add-friends-view", "group-list-view", "group-order-view", "group-created-view", "group-chat-view", "group-cart-view", "invite-friends-view", "location-view", "notifications-view", "payment-view", "payment-success-view", "order-placed-view", "payment-success-overlay-active", "payment-success-ready");
  phone.classList.add(`${screen}-view`);
}

window.setNovaScreen = setScreen;

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
  watchFriendRequests();
  watchIncomingGroupInvites();
  seedPromoNotifications().then(loadNotifications).catch(() => {});
}

function firstLetter(value) {
  return (value || "Guest").trim().charAt(0).toUpperCase() || "G";
}

function setAvatarContent(letter, imageUrl = "") {
  profileAvatar.innerHTML = `<img src="${imageUrl || DEFAULT_AVATAR_URL}" alt="" />`;
}

function getProfileAvatarUrl(user = auth?.currentUser || null, profile = currentProfile || {}) {
  if (!user?.uid) return DEFAULT_AVATAR_URL;
  const profileAvatar = PROFILE_AVATARS.includes(profile.avatarUrl) ? profile.avatarUrl : "";
  const authAvatar = PROFILE_AVATARS.includes(user.photoURL) ? user.photoURL : "";
  return profileAvatar || authAvatar || DEFAULT_AVATAR_URL;
}

function renderAvatarOptions(selectedUrl = "") {
  if (!avatarOptions) return;
  avatarOptions.innerHTML = PROFILE_AVATARS.map((url, index) => `
    <button class="avatar-option ${url === selectedUrl ? "is-selected" : ""}" type="button" data-avatar-url="${url}" aria-label="Choose avatar ${index + 1}">
      <img src="${url}" alt="" />
    </button>
  `).join("");
  if (avatarConfirm) {
    avatarConfirm.disabled = !PROFILE_AVATARS.includes(selectedUrl);
  }
}

function selectPendingAvatar(avatarUrl) {
  if (!PROFILE_AVATARS.includes(avatarUrl)) return;
  pendingProfileAvatarUrl = avatarUrl;
  renderAvatarOptions(pendingProfileAvatarUrl);
}

function openAvatarSheet() {
  const user = auth?.currentUser || null;
  if (!user || isGuestUser) return;
  pendingProfileAvatarUrl = getProfileAvatarUrl(user);
  renderAvatarOptions(pendingProfileAvatarUrl);
  if (avatarSheetMessage) avatarSheetMessage.textContent = "Pick one profile photo for your Nova account.";
  avatarSheetOverlay?.classList.add("is-open");
  avatarSheetOverlay?.setAttribute("aria-hidden", "false");
}

function closeAvatarSheet() {
  avatarSheetOverlay?.classList.remove("is-open");
  avatarSheetOverlay?.setAttribute("aria-hidden", "true");
  pendingProfileAvatarUrl = "";
}

async function saveProfileAvatar(avatarUrl) {
  const user = auth?.currentUser || null;
  if (!user?.uid || isGuestUser || !PROFILE_AVATARS.includes(avatarUrl)) return false;

  initFirebase();
  if (!db) return false;

  try {
    const userDoc = db.collection("users").doc(user.uid);
    await userDoc.set(
      {
        avatarUrl,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    await user.updateProfile?.({ photoURL: avatarUrl }).catch(() => {});
    const verifySnapshot = await userDoc.get();
    const verifiedAvatar = verifySnapshot.exists ? verifySnapshot.data()?.avatarUrl : "";
    if (verifiedAvatar !== avatarUrl) return false;
  } catch {
    return false;
  }

  currentProfile = {
    ...(currentProfile || {}),
    avatarUrl,
  };
  setAvatarContent(firstLetter(currentProfile?.username || user.displayName || "User"), avatarUrl);
  renderAvatarOptions(avatarUrl);
  groupMembers = groupMembers.map((member) => (
    member.uid === user.uid ? { ...member, avatarUrl } : member
  ));
  cachedGroupOrders = cachedGroupOrders.map((group) => ({
    ...group,
    hostAvatar: group.hostUid === user.uid ? avatarUrl : group.hostAvatar,
    memberDetails: (group.memberDetails || []).map((member) => member.uid === user.uid ? { ...member, avatarUrl } : member),
    members: (group.members || []).map((member) => member.uid === user.uid ? { ...member, avatarUrl } : member),
  }));
  renderGroupOrders(cachedGroupOrders, { hideEmpty: true });
  renderGroupMembers();
  renderChatMembersPanel();
  renderGroupCart();
  return true;
}

function updateProfileView() {
  const user = auth?.currentUser || null;
  const profile = currentProfile || {};
  const username = profile.username || localStorage.getItem(`novaUsername:${user?.uid}`) || "";
  const email = user?.email || profile.email || "";
  const displayName = username || user?.displayName || "Guest";
  const savedAvatar = getProfileAvatarUrl(user, profile);
  const guest = isGuestUser || !user;

  phone.classList.toggle("guest-profile", guest);
  profileGreeting.textContent = guest ? "Hey, Guest!" : `Hey, ${displayName}!`;
  profileUsername.textContent = guest ? "@guest" : `@${username || displayName}`;
  profileEmail.textContent = guest ? "" : email;
  if (guest) {
    setAvatarContent("G", DEFAULT_AVATAR_URL);
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

function currentFriendsList() {
  return firebaseFriendsLoaded ? firebaseFriends : readFriendData("novaFriends");
}

function refreshFriendsForInvites() {
  loadFirebaseFriends()
    .then(() => {
      renderCreatedInviteFriends();
      renderInviteFriends();
      renderChatMembersPanel();
    })
    .catch((error) => console.error(error));
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

function restaurantInviteMeta(name = "Mori Cafe") {
  const normalized = name.toLowerCase();
  if (normalized.includes("mori")) {
    return {
      name: "Mori Cafe",
      image: "assets/mori.png",
      rating: "4.9",
      distance: "0.8 km",
    };
  }
  return {
    name: name || "Restaurant",
    image: "assets/mori.png",
    rating: "4.9",
    distance: "0.8 km",
  };
}

function inviteTimeLabel(value = "") {
  const clean = String(value || "").trim();
  if (!clean) return "Today 2pm";
  return clean.toLowerCase().startsWith("today") ? clean : `Today ${clean}`;
}

function setInviteHostAvatar(invite) {
  const avatarUrl = invite.fromAvatar || "";
  inviteHostAvatar.innerHTML = `<img src="${avatarUrl || DEFAULT_AVATAR_URL}" alt="" />`;
}

function openIncomingGroupInvite(invite) {
  if (!groupInviteModalOverlay || !invite) return;
  activeIncomingGroupInvite = invite;
  const restaurant = restaurantInviteMeta(invite.restaurant || "Mori Cafe");
  setInviteHostAvatar(invite);
  inviteModalSubtitle.textContent = `${invite.fromName || invite.fromUsername || "Someone"} invited you to a group order.`;
  inviteRestaurantImage.src = invite.restaurantImage || restaurant.image;
  inviteRestaurantName.textContent = restaurant.name;
  document.querySelector(".invite-rating-row b")?.replaceChildren(document.createTextNode(restaurant.rating));
  const ratingValues = document.querySelectorAll(".invite-rating-row b");
  if (ratingValues[0]) ratingValues[0].textContent = restaurant.rating;
  if (ratingValues[1]) ratingValues[1].textContent = restaurant.distance;
  inviteDeliveryTime.textContent = inviteTimeLabel(invite.deliveryTime);
  inviteDeliveryTo.textContent = invite.deliveryTo || "Select location";
  inviteGroupName.textContent = invite.groupName || "Group Order";
  groupInviteModalOverlay.classList.add("is-open");
  groupInviteModalOverlay.setAttribute("aria-hidden", "false");
}

function closeIncomingGroupInvite() {
  activeIncomingGroupInvite = null;
  groupInviteModalOverlay?.classList.remove("is-open");
  groupInviteModalOverlay?.setAttribute("aria-hidden", "true");
}

function showNextIncomingGroupInvite() {
  const nextInvite = firebaseGroupInvites.find((invite) => invite.status === "pending");
  if (nextInvite) {
    if (activeIncomingGroupInvite?.id !== nextInvite.id) openIncomingGroupInvite(nextInvite);
  } else {
    closeIncomingGroupInvite();
  }
}

function stopIncomingGroupInviteWatcher() {
  if (incomingGroupInviteUnsubscribe) {
    incomingGroupInviteUnsubscribe();
    incomingGroupInviteUnsubscribe = null;
  }
  firebaseGroupInvites = [];
  firebaseGroupInvitesLoaded = false;
  closeIncomingGroupInvite();
}

function refreshFriendRequestViews() {
  clearTimeout(friendRequestRefreshTimer);
  friendRequestRefreshTimer = setTimeout(() => {
    Promise.all([loadFirebaseFriends(), loadFirebaseFriendRequests(), loadNotifications()])
      .then(() => {
        if (phone.classList.contains("friends-view")) renderFriends();
      })
      .catch(() => {});
  }, 120);
}

function stopFriendRequestWatchers() {
  clearTimeout(friendRequestRefreshTimer);
  if (friendRequestInboxUnsubscribe) {
    friendRequestInboxUnsubscribe();
    friendRequestInboxUnsubscribe = null;
  }
  if (friendRequestSentUnsubscribe) {
    friendRequestSentUnsubscribe();
    friendRequestSentUnsubscribe = null;
  }
}

function watchFriendRequests() {
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || isGuestUser) {
    stopFriendRequestWatchers();
    return;
  }
  if (friendRequestInboxUnsubscribe || friendRequestSentUnsubscribe) return;

  friendRequestInboxUnsubscribe = db
    .collection("friendRequests")
    .where("toUid", "==", user.uid)
    .onSnapshot(refreshFriendRequestViews);

  friendRequestSentUnsubscribe = db
    .collection("friendRequests")
    .where("fromUid", "==", user.uid)
    .onSnapshot(refreshFriendRequestViews);
}

function watchIncomingGroupInvites() {
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || isGuestUser) {
    stopIncomingGroupInviteWatcher();
    return;
  }
  if (incomingGroupInviteUnsubscribe) return;

  incomingGroupInviteUnsubscribe = db
    .collection("groupInvites")
    .where("toUid", "==", user.uid)
    .onSnapshot((snapshot) => {
      firebaseGroupInvites = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((data) => data.status === "pending");
      firebaseGroupInvitesLoaded = true;
      loadNotifications().catch(() => {});
      if (phone.classList.contains("friends-view")) renderFriends();
      showNextIncomingGroupInvite();
    });
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
                ` : `<b>&rsaquo;</b>`}
              </article>
            `;
            }).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function uniqueNotifications(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.type || ""}:${item.id || item.title || ""}:${item.actionType || ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function loadNotifications() {
  initFirebase();
  const loadToken = ++notificationLoadToken;
  const user = auth?.currentUser;
  let nextItems = [];

  if (db && user && !isGuestUser) {
    await seedPromoNotifications();
    const [requestSnap, sentRequestSnap, inviteSnap, notificationSnap] = await Promise.all([
      db.collection("friendRequests").where("toUid", "==", user.uid).get(),
      db.collection("friendRequests").where("fromUid", "==", user.uid).get(),
      db.collection("groupInvites").where("toUid", "==", user.uid).get(),
      db.collection("users").doc(user.uid).collection("notifications").get(),
    ]);

    nextItems.push(...requestSnap.docs.map((doc) => {
      const data = doc.data();
      const fromName = data.fromUsername || data.fromName || "Someone";
      const title = data.status === "accepted"
        ? `You and ${fromName} are now friends`
        : data.status === "rejected"
          ? `You rejected ${fromName}'s friend request`
          : `${fromName} sent you a friend request`;
      return {
        id: doc.id,
        type: "social",
        actionType: data.status === "pending" ? "friendRequest" : "",
        title,
        body: relativeTime(data.respondedAt || data.createdAt || data.createdAtMs),
        read: data.status !== "pending",
        createdAt: data.respondedAt || data.createdAt,
        createdAtMs: data.createdAtMs || Date.now(),
      };
    }));

    nextItems.push(...sentRequestSnap.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((data) => data.status === "accepted" || data.status === "rejected")
      .map((data) => ({
        id: `sent-${data.id}`,
        type: "social",
        actionType: "",
        title: data.status === "accepted"
          ? `You and ${data.toUsername || "your friend"} are now friends`
          : `${data.toUsername || "Your friend"} rejected your friend request`,
        body: relativeTime(data.respondedAt || data.createdAtMs),
        read: false,
        createdAt: data.respondedAt,
        createdAtMs: data.createdAtMs || Date.now(),
      })));

    nextItems.push(...inviteSnap.docs.map((doc) => {
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

    nextItems.push(...notificationSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  } else {
    nextItems = promoNotifications();
  }

  nextItems = uniqueNotifications(nextItems);
  nextItems.sort((a, b) => {
    const aTime = a.createdAt?.toDate ? a.createdAt.toDate().getTime() : Number(a.createdAtMs || 0);
    const bTime = b.createdAt?.toDate ? b.createdAt.toDate().getTime() : Number(b.createdAtMs || 0);
    return bTime - aTime;
  });

  if (loadToken !== notificationLoadToken) return;
  notificationItems = nextItems;
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
  setScreen("notifications");
  renderNotifications();
  loadNotifications().catch((error) => console.error(error));
}

function friendAvatar(name) {
  return firstLetter(name || "Friend");
}

function renderFriends() {
  const query = friendsSearchInput.value.trim().toLowerCase();
  const requests = firebaseFriendRequestsLoaded ? firebaseFriendRequests : readFriendData("novaFriendRequests");
  const groupInvites = firebaseGroupInvitesLoaded ? firebaseGroupInvites : [];
  const friends = currentFriendsList().filter((friend) => {
    const username = (friend.username || "").toLowerCase();
    const name = (friend.name || "").toLowerCase();
    const email = (friend.email || "").toLowerCase();
    return !query || username.includes(query) || name.includes(query) || email.includes(query);
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
        ${roundAvatarMarkup("friend-avatar", invite.fromName || invite.fromUsername || "Friend", invite.fromAvatar || "")}
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
          ${roundAvatarMarkup("friend-avatar", friend.name || friend.username || "Friend", friend.avatarUrl || "")}
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
          ${roundAvatarMarkup("friend-avatar", friend.name || friend.username || "Friend", friend.avatarUrl || "")}
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
      avatarUrl: data.fromAvatar || DEFAULT_AVATAR_URL,
    }));
  firebaseFriendRequestsLoaded = true;
}

async function loadFirebaseFriends() {
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || isGuestUser) {
    firebaseFriends = [];
    firebaseFriendsLoaded = false;
    return;
  }

  const snapshot = await db.collection("users").doc(user.uid).collection("friends").get();
  const friends = snapshot.docs
    .map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        uid: data.uid || doc.id,
        name: data.name || data.username || "Friend",
        username: data.username || "",
        email: data.email || "",
        avatarUrl: data.avatarUrl || DEFAULT_AVATAR_URL,
      };
    })
    .sort((a, b) => (a.username || a.name).localeCompare(b.username || b.name));
  const hydratedFriends = await Promise.all(friends.map(async (friend) => {
    if ((friend.avatarUrl && friend.avatarUrl !== DEFAULT_AVATAR_URL) || !friend.uid) return friend;
    try {
      const friendDoc = await db.collection("users").doc(friend.uid).get();
      const profile = friendDoc.exists ? friendDoc.data() : null;
      return { ...friend, avatarUrl: profile?.avatarUrl || DEFAULT_AVATAR_URL };
    } catch {
      return friend;
    }
  }));
  firebaseFriends = hydratedFriends;
  firebaseFriendsLoaded = true;
}

async function openFriends() {
  friendsSearchInput.value = "";
  renderFriends();
  setScreen("friends");
  Promise.all([loadFirebaseFriends(), loadFirebaseFriendRequests(), loadFirebaseGroupInvites()])
    .then(renderFriends)
    .catch((error) => console.error(error));
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
      await db.collection("groups").doc(invite.groupId).set({
        memberUids: firebase.firestore.FieldValue.arrayUnion(user.uid),
        memberDetails: firebase.firestore.FieldValue.arrayUnion({
          uid: user.uid,
          username: getOwnUsername() || user.displayName || "User",
          name: currentProfile?.name || getOwnUsername() || user.displayName || "User",
          avatarUrl: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
          status: "joined",
        }),
      }, { merge: true });
      await db.collection("groups").doc(invite.groupId).collection("messages").add({
        type: "event",
        text: `${getOwnUsername() || user.displayName || "Someone"} joined the group`,
        senderUid: user.uid,
        senderUsername: getOwnUsername() || user.displayName || "User",
        senderAvatar: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
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
        senderAvatar: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        clientCreatedAt: Date.now(),
      });
    }
  }

  await loadFirebaseGroupInvites();
  if (activeIncomingGroupInvite?.id === inviteId) closeIncomingGroupInvite();
  showNextIncomingGroupInvite();
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
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });

  if (status === "accepted") {
    const myUsername = getOwnUsername() || user.displayName || "User";
    await Promise.all([
      db.collection("users").doc(user.uid).collection("friends").doc(request.fromUid).set({
        uid: request.fromUid,
        username: request.fromUsername || "",
        name: request.fromName || request.fromUsername || "Friend",
        email: request.fromEmail || "",
        avatarUrl: request.fromAvatar || DEFAULT_AVATAR_URL,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true }),
      db.collection("users").doc(request.fromUid).collection("friends").doc(user.uid).set({
        uid: user.uid,
        username: myUsername,
        name: currentProfile?.name || myUsername,
        email: user.email || "",
        avatarUrl: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true }),
    ]);
  }

  await Promise.all([loadFirebaseFriends(), loadFirebaseFriendRequests()]);
  renderFriends();
  await loadNotifications();
}

function getOwnUsername() {
  const user = auth?.currentUser || null;
  return currentProfile?.username || localStorage.getItem(`novaUsername:${user?.uid}`) || "";
}

function getOwnAvatarUrl() {
  const user = auth?.currentUser || null;
  return getProfileAvatarUrl(user);
}

function chatAvatarMarkup(username = "You", imageUrl = "") {
  return `<div class="chat-system-avatar"><img src="${imageUrl || DEFAULT_AVATAR_URL}" alt="" /></div>`;
}

function roundAvatarMarkup(className, username = "User", imageUrl = "") {
  return `<div class="${className}"><img src="${imageUrl || DEFAULT_AVATAR_URL}" alt="" /></div>`;
}

function chatSystemMarkup(text, small = "", username = "You", imageUrl = "") {
  return `${chatAvatarMarkup(username, imageUrl)}<span>${text}</span>${small ? `<small>${small}</small>` : ""}`;
}

function normalizeUsernameSearch(value) {
  return value.trim().replace(/^@+/, "").replace(/\s+/g, "").toLowerCase();
}

function addFriendRow(user, buttonText = "Add", disabled = false) {
  return `
    <article class="suggested-user-row">
      ${roundAvatarMarkup("suggested-avatar", user.name || user.username || "User", user.avatarUrl || DEFAULT_AVATAR_URL)}
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
  const incomingRequestId = `${user.uid}_${otherUid}`;
  const incomingRequestDoc = await db.collection("friendRequests").doc(incomingRequestId).get();

  if (requestDoc.exists) {
    const status = requestDoc.data()?.status;
    if (status === "pending") return { label: "Sent", disabled: true };
    if (status === "accepted") return { label: "Friends", disabled: true };
  }

  if (incomingRequestDoc.exists) {
    const status = incomingRequestDoc.data()?.status;
    if (status === "pending") return { label: "Respond in Requests", disabled: true };
    if (status === "accepted") return { label: "Friends", disabled: true };
  }

  return { label: "Add", disabled: false };
}

function renderSuggestedUsers() {
  addFriendsSectionTitle.textContent = "Search result";
  suggestedUsersList.innerHTML = "";
  suggestedEmpty.hidden = false;
  suggestedEmpty.textContent = "Search a username to add friends";
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
      avatarUrl: data.avatarUrl || DEFAULT_AVATAR_URL,
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
  if (isGuestUser || !auth?.currentUser) {
    addFriendSearchInput.value = "";
    shareUsernameText.textContent = "@guest";
    addFriendsSectionTitle.textContent = "Login required";
    renderAddFriendMessage("Please sign up or login to add friends");
    setScreen("add-friends");
    return;
  }
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

function updateChatDeliveryDetails() {
  if (chatDeliveryTo) chatDeliveryTo.textContent = currentGroupDeliveryTo || "Select location";
  if (chatDeliveryTime) chatDeliveryTime.textContent = currentGroupDeliveryTime || "Select time";
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
    avatarUrl: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
    status: "host",
  };
}

function groupMemberAvatar(member = {}) {
  const imageUrl = member.avatarUrl || member.avatar || "";
  return `<span><img src="${imageUrl || DEFAULT_AVATAR_URL}" alt="" /></span>`;
}

function groupListCard(group) {
  const members = (group.memberDetails || group.members || []).slice(0, 5);
  const fallbackMembers = members.length ? members : [{
    username: group.hostUsername || "Host",
    name: group.hostUsername || "Host",
    avatarUrl: group.hostAvatar || DEFAULT_AVATAR_URL,
  }];
  return `
    <button class="group-order-list-card" type="button" data-group-id="${group.groupId || group.id || ""}">
      <img src="${group.restaurantImage || "assets/mori.png"}" alt="" />
      <div>
        <h2>${group.groupName || "Group Order"}</h2>
        <div class="group-order-meta"><span>${group.restaurant || "Mori Cafe"}</span><i></i><span>${group.deliveryTime || "Select time"}</span></div>
        <div class="group-order-location">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.3 7-12A7 7 0 1 0 5 9c0 6.7 7 12 7 12Z" /><circle cx="12" cy="9" r="2.4" /></svg>
          <span>${group.deliveryTo || "Select location"}</span>
        </div>
        <div class="group-order-avatars">${fallbackMembers.map(groupMemberAvatar).join("")}</div>
      </div>
      <b>&rsaquo;</b>
    </button>
  `;
}

function uniqueGroups(groups) {
  const seen = new Set();
  return groups.filter((group) => {
    const key = group.groupId || group.id;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function groupCreatedTime(group = {}) {
  const firestoreCreated = group.createdAt?.toDate ? group.createdAt.toDate().getTime() : 0;
  const firestoreUpdated = group.updatedAt?.toDate ? group.updatedAt.toDate().getTime() : 0;
  const idTime = String(group.groupId || group.id || "").match(/group_(\d+)/)?.[1] || 0;
  return Number(group.createdAtMs || firestoreCreated || firestoreUpdated || idTime || 0);
}

function sortGroupsNewestFirst(groups = []) {
  return [...groups].sort((a, b) => groupCreatedTime(b) - groupCreatedTime(a));
}

function renderGroupOrders(groups = [], options = {}) {
  if (!groupOrdersList || !groupOrdersEmpty) return;
  const list = sortGroupsNewestFirst(uniqueGroups(groups));
  groupOrdersEmpty.hidden = options.hideEmpty || list.length > 0;
  groupOrdersList.innerHTML = list.map(groupListCard).join("");
}

async function loadGroupOrders() {
  initFirebase();
  const user = auth?.currentUser;
  if (!db || !user || isGuestUser) return [];
  const [hostSnap, memberSnap] = await Promise.all([
    db.collection("groups").where("hostUid", "==", user.uid).get(),
    db.collection("groups").where("memberUids", "array-contains", user.uid).get().catch(() => ({ docs: [] })),
  ]);
  const groups = uniqueGroups([...hostSnap.docs, ...memberSnap.docs].map((doc) => ({ id: doc.id, ...doc.data() })));
  return sortGroupsNewestFirst(await hydrateGroupOrderAvatars(groups));
}

async function hydrateGroupOrderAvatars(groups = []) {
  const ownUid = auth?.currentUser?.uid || "";
  const ownAvatar = getOwnAvatarUrl();
  const uids = new Set();
  groups.forEach((group) => {
    if (group.hostUid) uids.add(group.hostUid);
    [...(group.memberDetails || []), ...(group.members || [])].forEach((member) => {
      if (member.uid) uids.add(member.uid);
    });
  });

  const avatars = new Map();
  if (ownUid && ownAvatar) avatars.set(ownUid, ownAvatar);
  if (db) {
    await Promise.all([...uids].map(async (uid) => {
      if (!uid || avatars.has(uid)) return;
      try {
        const snapshot = await db.collection("users").doc(uid).get();
        const profile = snapshot.exists ? snapshot.data() : null;
        if (profile?.avatarUrl) avatars.set(uid, profile.avatarUrl);
      } catch {}
    }));
  }

  return groups.map((group) => ({
    ...group,
    hostAvatar: avatars.get(group.hostUid) || group.hostAvatar || DEFAULT_AVATAR_URL,
    memberDetails: (group.memberDetails || []).map((member) => ({
      ...member,
      avatarUrl: avatars.get(member.uid) || member.avatarUrl || DEFAULT_AVATAR_URL,
    })),
    members: (group.members || []).map((member) => ({
      ...member,
      avatarUrl: avatars.get(member.uid) || member.avatarUrl || DEFAULT_AVATAR_URL,
    })),
  }));
}

async function openGroupList() {
  const loadToken = ++groupListLoadToken;
  renderGroupOrders(cachedGroupOrders, { hideEmpty: true });
  setScreen("group-list");
  try {
    const groups = await loadGroupOrders();
    if (loadToken !== groupListLoadToken) return;
    cachedGroupOrders = groups;
    renderGroupOrders(groups);
  } catch (error) {
    console.error(error);
    if (loadToken !== groupListLoadToken) return;
    renderGroupOrders(cachedGroupOrders);
  }
}

function applyGroupLobby(group = {}) {
  currentGroupId = group.groupId || group.id || "";
  currentGroupName = group.groupName || "Group Order";
  currentGroupDeliveryTo = group.deliveryTo || "Select location";
  currentGroupDeliveryTime = group.deliveryTime || "Select time";
  currentGroupCloseTime = group.closeTime || groupCloseTime(currentGroupDeliveryTime);
  currentGroupRestaurant = group.restaurant || "Mori Cafe";
  currentGroupRestaurantImage = group.restaurantImage || "assets/mori.png";
  groupMembers = (group.memberDetails || group.members || []).map((member) => ({
    ...member,
    name: member.name || member.username || "Member",
  }));
  if (groupMembers.length === 0) groupMembers = [currentHostMember()];
  currentGroupMemberCount = groupMembers.length;
  groupInvites = [];
  if (createdGroupName) createdGroupName.textContent = currentGroupName;
  if (createdCloseTime) createdCloseTime.textContent = currentGroupCloseTime;
  if (createdHostAvatar) {
    const host = groupMembers.find((member) => member.status === "host") || groupMembers[0];
    createdHostAvatar.innerHTML = `<img src="${host?.avatarUrl || DEFAULT_AVATAR_URL}" alt="" />`;
  }
  if (createdHostName) {
    const host = groupMembers.find((member) => member.status === "host") || groupMembers[0];
    createdHostName.textContent = host?.name || host?.username || "Host";
  }
  renderGroupMembers();
  watchGroupInvites();
  watchGroupMessages();
  watchGroupCart();
  refreshGroupMemberAvatars();
}

function refreshGroupMemberAvatars() {
  if (!db || !groupMembers.length) return;
  const membersWithUid = groupMembers.filter((member) => member.uid);
  if (!membersWithUid.length) return;

  Promise.all(membersWithUid.map((member) => (
    db.collection("users").doc(member.uid).get()
      .then((snapshot) => ({ uid: member.uid, profile: snapshot.exists ? snapshot.data() : null }))
      .catch(() => ({ uid: member.uid, profile: null }))
  ))).then((profiles) => {
    let changed = false;
    profiles.forEach(({ uid, profile }) => {
      if (!profile?.avatarUrl) return;
      groupMembers = groupMembers.map((member) => {
        if (member.uid !== uid || member.avatarUrl === profile.avatarUrl) return member;
        changed = true;
        return { ...member, avatarUrl: profile.avatarUrl };
      });
    });
    if (!changed) return;
    renderGroupMembers();
    renderChatMembersPanel();
    renderGroupCart();
  });
}

function groupFromListCard(card, groupId) {
  const metaSpans = card.querySelectorAll(".group-order-meta span");
  return {
    id: groupId,
    groupId,
    groupName: card.querySelector("h2")?.textContent.trim() || "Group Order",
    restaurant: metaSpans[0]?.textContent.trim() || "Mori Cafe",
    restaurantImage: card.querySelector("img")?.getAttribute("src") || "assets/mori.png",
    deliveryTime: metaSpans[1]?.textContent.trim() || "Select time",
    deliveryTo: card.querySelector(".group-order-location span")?.textContent.trim() || "Select location",
  };
}

function openGroupFromList(groupId) {
  const card = document.querySelector(`[data-group-id="${groupId}"]`);
  const cachedGroup = cachedGroupOrders.find((item) => (item.groupId || item.id) === groupId);
  const group = cachedGroup || (card ? groupFromListCard(card, groupId) : null);
  if (!group) return;

  applyGroupLobby(group);
  setScreen("group-created");

  loadGroupOrders()
    .then((groups) => {
      cachedGroupOrders = groups;
      const freshGroup = groups.find((item) => (item.groupId || item.id) === groupId);
      if (freshGroup && currentGroupId === groupId) applyGroupLobby(freshGroup);
    })
    .catch((error) => console.error(error));
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
  createdMembersTitle.textContent = "Participants";
  const joinedCount = document.querySelector(".created-joined-count");
  if (joinedCount) joinedCount.textContent = `${currentGroupMemberCount} / 2 joined`;

  const joinedMarkup = groupMembers
    .map((member) => {
      const label = member.status === "host" ? "Host" : "Joined";
      return `
        <div class="created-member">
          ${roundAvatarMarkup("created-member-avatar", member.name || member.username || "user", member.avatarUrl || member.avatar || "")}
          <strong><b>@${member.username || member.name || "user"}</b> <span>${label}</span></strong>
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
          ${roundAvatarMarkup("created-member-avatar", invite.name || invite.username || "friend", invite.avatarUrl || invite.avatar || invite.toAvatar || "")}
          <strong><b>@${invite.username || invite.name || "friend"}</b> <span>${label}</span></strong>
        </div>
      `;
    })
    .join("");

  const filledSlots = groupMembers.length + groupInvites.filter((invite) => invite.status !== "accepted").length;
  const openSlots = Math.max(0, 2 - filledSlots);
  const inviteMarkup = Array.from({ length: openSlots }, () => (
    `<button class="created-invite-slot" type="button" aria-label="Invite friend"><i>+</i></button>`
  )).join("");

  createdMembersRow.innerHTML = joinedMarkup + waitingMarkup + inviteMarkup;
  const startHint = startGroupOrderButton?.querySelector("small");
  if (startHint) {
    startHint.textContent = "Tap to test the chat";
  }
  if (startGroupOrderButton) {
    const strong = startGroupOrderButton.querySelector("strong");
    const count = startGroupOrderButton.querySelector("span");
    const action = startGroupOrderButton.querySelector("em");
    startGroupOrderButton.classList.remove("is-locked");
    if (count) count.textContent = `${currentGroupMemberCount} / 2 joined`;
    if (strong) strong.textContent = "Enter Group Chat";
    if (action) action.textContent = "Enter Group Chat";
  }
}

function renderCreatedInviteFriends() {
  if (!createdInviteList || !createdInviteSearchInput) return;
  const query = createdInviteSearchInput.value.trim().toLowerCase();
  const friends = currentFriendsList().filter((friend) => {
    const username = (friend.username || "").toLowerCase();
    const name = (friend.name || "").toLowerCase();
    return !query || username.includes(query) || name.includes(query);
  });

  createdInviteList.innerHTML = friends.map((friend) => {
    const key = groupFriendKey(friend);
    const status = groupInviteStatus(friend);
    const labels = { invite: "Invite", pending: "Waiting", rejected: "Invite", joined: "Joined" };
    const disabled = status === "pending" || status === "joined" ? "disabled" : "";
    return `
      <article class="created-invite-row">
        ${roundAvatarMarkup("friend-avatar", friend.name || friend.username || "Friend", friend.avatarUrl || "")}
        <span><strong>${friend.name || friend.username}</strong><em>@${friend.username || ""}</em></span>
        <button type="button" data-invite-key="${key}" ${disabled}>${labels[status]}</button>
      </article>
    `;
  }).join("");
  if (createdInviteEmpty) createdInviteEmpty.hidden = friends.length > 0;
}

function openCreatedSheet(mode = "share") {
  if (!createdSheetOverlay) return;
  if (mode === "invite") {
    if (createdInviteSearchInput) createdInviteSearchInput.value = "";
    renderCreatedInviteFriends();
    refreshFriendsForInvites();
  }
  createdSharePanel.hidden = mode !== "share";
  createdInvitePanel.hidden = mode !== "invite";
  createdSheetOverlay.hidden = false;
}

function closeCreatedSheet() {
  if (createdSheetOverlay) createdSheetOverlay.hidden = true;
}

function groupInviteLink() {
  const url = new URL(window.location.href);
  url.searchParams.set("groupInvite", currentGroupId || "preview");
  url.hash = "group-invite";
  return url.toString();
}

function groupInviteMessage() {
  return `Join my Nova group order for Mori Cafe: ${groupInviteLink()}`;
}

function renderChatProgress() {
  const { subtotal, qty, total } = totals(groupCart, "group");
  const progress = Math.min((subtotal / 35) * 100, 100);
  const remaining = Math.max(35 - subtotal, 0);
  if (chatDiscountFill) chatDiscountFill.style.width = `${progress}%`;
  if (chatSpendAmount) chatSpendAmount.textContent = money(subtotal);
  if (chatSpendBubble) {
    chatSpendBubble.textContent = money(subtotal);
    chatSpendBubble.style.left = `${Math.min(95, Math.max(5, progress))}%`;
  }
  if (chatCurrentTotal) chatCurrentTotal.textContent = money(total);
  if (chatCartCount) chatCartCount.textContent = qty;
  if (chatOrderBadge) chatOrderBadge.textContent = qty;
  if (chatOrderRow) chatOrderRow.hidden = qty <= 0;
  if (chatMinimumText) {
    chatMinimumText.textContent = remaining > 0
      ? `You need ${money(remaining)} more to reach minimum spend`
      : "Minimum spend reached";
  }
  if (chatCheckoutHint) {
    chatCheckoutHint.textContent = remaining > 0 ? `Need ${money(remaining)} more` : "Ready";
  }

  let unlocked = "";
  const nextTarget = [35, 40, 45, 50].find((target) => subtotal < target) || 0;
  chatRewardCards.forEach((card) => {
    const target = Number(card.dataset.step);
    const active = subtotal >= target;
    const current = !active && target === nextTarget;
    card.classList.toggle("unlocked", active);
    card.classList.toggle("current-goal", current);
    const status = card.querySelector("em");
    if (status) status.textContent = active ? "Unlocked" : current ? "Current goal" : "Locked";
    if (active) {
      if (target === 35) unlocked = "You have unlocked 10% OFF delivery!";
      if (target === 40) unlocked = "You have unlocked 20% OFF delivery!";
      if (target === 45) unlocked = "You have unlocked 30% OFF delivery!";
      if (target === 50) unlocked = "You have unlocked free delivery!";
    }
  });
  if (chatUnlockMessage) chatUnlockMessage.hidden = !unlocked;
  if (chatUnlockText && unlocked) chatUnlockText.textContent = unlocked;
}

function renderChatMembersPanel() {
  if (!chatMembersPanel || !chatMembersList) return;
  const activeMembers = groupMembers.slice(0, 5);
  const pendingInvites = groupInvites.filter((invite) => invite.status !== "accepted").slice(0, Math.max(0, 5 - activeMembers.length));
  const openSlots = Math.max(0, 5 - activeMembers.length - pendingInvites.length);
  if (chatMembersCount) chatMembersCount.textContent = `${activeMembers.length}/5`;
  if (chatMemberCount) chatMemberCount.textContent = `${activeMembers.length} of 5 members`;
  if (chatTopMemberCount) chatTopMemberCount.textContent = activeMembers.length;
  if (groupInviteLinkInput) groupInviteLinkInput.value = groupInviteLink();

  const memberRows = activeMembers.map((member) => {
    const isHost = member.status === "host";
    return `
      <article class="chat-member-row">
        ${roundAvatarMarkup("chat-member-avatar", member.name || member.username || "Member", member.avatarUrl || member.avatar || "")}
        <span>
          <strong>${member.name || member.username || "Member"}${isHost ? " (You)" : ""}</strong>
          <small>${isHost ? "Created this group" : "Joined"}</small>
        </span>
        <em>${isHost ? "Host" : "Joined"}</em>
      </article>
    `;
  }).join("");

  const inviteRows = pendingInvites.map((invite) => `
    <article class="chat-member-row pending">
      ${roundAvatarMarkup("chat-member-avatar", invite.name || invite.username || "Friend", invite.avatarUrl || invite.avatar || invite.toAvatar || "")}
      <span>
        <strong>${invite.name || invite.username || "Friend"}</strong>
        <small>${invite.status === "rejected" ? "Rejected invite" : "Waiting for reply"}</small>
      </span>
      <em>${invite.status === "rejected" ? "Rejected" : "Waiting"}</em>
    </article>
  `).join("");

  const emptyRows = Array.from({ length: openSlots }, () => `
    <button class="chat-member-row empty" type="button">
      <div class="chat-member-avatar">+</div>
      <span>
        <strong>Invite member</strong>
        <small>Empty slot</small>
      </span>
    </button>
  `).join("");

  chatMembersList.innerHTML = memberRows + inviteRows + emptyRows;
}

function openChatMembersPanel() {
  renderChatMembersPanel();
  chatMembersPanel.hidden = false;
}

function closeChatMembersPanel() {
  if (chatMembersPanel) chatMembersPanel.hidden = true;
}

function appendLocalChatSystem(text, small = "") {
  if (!chatMessages) return;
  const message = document.createElement("div");
  message.className = "chat-system-message cart-chat-message";
  message.innerHTML = chatSystemMarkup(text, small, getOwnUsername() || "You", getOwnAvatarUrl() || DEFAULT_AVATAR_URL);
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
      senderAvatar: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
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
        ${roundAvatarMarkup("chat-bubble-avatar", data.senderUsername || "User", data.senderAvatar || "")}
        <div>
          <strong>${data.senderUsername || "User"}</strong>
          <p>${data.text || ""}</p>
          <small>${data.timeLabel || ""}</small>
        </div>
      `;
    } else {
      message.className = "chat-system-message cart-chat-message";
      message.innerHTML = chatSystemMarkup(data.text || "", data.small || "", data.senderUsername || "User", data.senderAvatar || "");
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
    existing.avatarUrl = existing.avatarUrl || data.toAvatar || data.avatarUrl || "";
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
  renderCreatedInviteFriends();
  renderChatMembersPanel();
  renderInviteFriends();
  refreshGroupMemberAvatars();
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

function groupCartOwner() {
  const uid = auth?.currentUser?.uid || "host";
  const username = getOwnUsername() || auth?.currentUser?.displayName || "You";
  return {
    uid,
    username,
    name: username,
    avatarUrl: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
  };
}

function groupCartKey(code, uid = groupCartOwner().uid) {
  return `${uid || "host"}_${code}`;
}

function groupCartItemImage(item = {}) {
  const name = (item.name || "").toLowerCase();
  if (name.includes("tea") || name.includes("milk") || name.includes("honey") || name.includes("oolong")) return "assets/mori.png";
  return "assets/morifood1.png";
}

function discountedGroupDeliveryFee(subtotal) {
  if (subtotal >= 50) return 0;
  if (subtotal >= 45) return GROUP_DELIVERY_FEE * 0.7;
  if (subtotal >= 40) return GROUP_DELIVERY_FEE * 0.8;
  if (subtotal >= 35) return GROUP_DELIVERY_FEE * 0.9;
  return GROUP_DELIVERY_FEE;
}

function groupCartDoc(item) {
  const owner = item.owner || groupCartOwner();
  return {
    code: item.code,
    name: item.name,
    chineseName: item.cn,
    price: item.price,
    qty: item.qty,
    image: item.image || groupCartItemImage(item),
    addedByUid: owner.uid || "",
    addedByUsername: owner.username || owner.name || "You",
    addedByName: owner.name || owner.username || "You",
    addedByAvatar: owner.avatarUrl || DEFAULT_AVATAR_URL,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
}

function applyGroupCartSnapshot(snapshot) {
  groupCart.clear();
  snapshot.forEach((doc) => {
    const data = doc.data();
    groupCart.set(doc.id, {
      id: doc.id,
      code: data.code || doc.id,
      name: data.name || "",
      cn: data.chineseName || "",
      price: Number(data.price) || 0,
      qty: Number(data.qty) || 0,
      image: data.image || "",
      owner: {
        uid: data.addedByUid || auth?.currentUser?.uid || "host",
        username: data.addedByUsername || getOwnUsername() || "You",
        name: data.addedByName || data.addedByUsername || getOwnUsername() || "You",
        avatarUrl: data.addedByAvatar || DEFAULT_AVATAR_URL,
      },
    });
  });
  renderChatProgress();
  renderGroupCart();
  if (cartMode === "group") updateAllCartViews();
}

function groupCartParticipantsData() {
  const own = currentHostMember();
  const byUid = new Map();
  const addMember = (member = {}) => {
    const uid = member.uid || (member.username ? `user_${member.username}` : "");
    if (!uid) return;
    byUid.set(uid, {
      uid,
      username: member.username || member.name || "user",
      name: member.name || member.username || "User",
      avatarUrl: member.avatarUrl || member.avatar || DEFAULT_AVATAR_URL,
      status: member.status || "joined",
      items: [],
    });
  };

  groupMembers.length ? groupMembers.forEach(addMember) : addMember(own);
  if (!byUid.has(own.uid)) addMember(own);

  groupCart.forEach((item, id) => {
    const owner = item.owner || {};
    const uid = owner.uid || own.uid;
    if (!byUid.has(uid)) {
      addMember({
        uid,
        username: owner.username || owner.name || "user",
        name: owner.name || owner.username || "User",
        avatarUrl: owner.avatarUrl || DEFAULT_AVATAR_URL,
      });
    }
    byUid.get(uid).items.push({ ...item, id });
  });

  return [...byUid.values()].map((participant) => ({
    ...participant,
    items: participant.items.sort((a, b) => (a.name || "").localeCompare(b.name || "")),
  }));
}

function participantAvatarMarkup(participant) {
  return `<div class="participant-avatar"><img src="${participant.avatarUrl || DEFAULT_AVATAR_URL}" alt="" /></div>`;
}

function renderGroupCart() {
  if (!groupCartParticipants) return;

  const participants = groupCartParticipantsData();
  const ownUid = groupCartOwner().uid;
  const itemTotal = [...groupCart.values()].reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = [...groupCart.values()].reduce((sum, item) => sum + item.qty, 0);
  const delivery = itemTotal > 0 ? discountedGroupDeliveryFee(itemTotal) : 0;
  const participantCount = Math.max(1, participants.length);
  const yourItems = [...groupCart.values()]
    .filter((item) => (item.owner?.uid || ownUid) === ownUid)
    .reduce((sum, item) => sum + item.price * item.qty, 0);
  const yourDelivery = delivery / participantCount;
  const yourTotal = yourItems + yourDelivery;
  const ownParticipant = participants.find((participant) => participant.uid === ownUid) || participants[0] || { name: "You" };

  if (groupCartRestaurantName) groupCartRestaurantName.textContent = currentGroupRestaurant || "Mori Cafe";
  if (groupCartRestaurantImage) groupCartRestaurantImage.src = currentGroupRestaurantImage || "assets/mori.png";
  if (groupCartItemCount) groupCartItemCount.textContent = `(${itemCount} ${itemCount === 1 ? "item" : "items"})`;
  if (groupCartItemTotal) groupCartItemTotal.textContent = money(itemTotal);
  if (groupCartDeliveryFee) groupCartDeliveryFee.textContent = delivery === 0 ? "Free" : money(delivery);
  if (groupCartGroupTotal) groupCartGroupTotal.textContent = money(itemTotal + delivery);
  if (groupCartYourName) groupCartYourName.textContent = ownParticipant.name || ownParticipant.username || "You";
  if (groupCartYourItems) groupCartYourItems.textContent = money(yourItems);
  if (groupCartYourDelivery) groupCartYourDelivery.textContent = money(yourDelivery);
  if (groupCartYouPay) groupCartYouPay.textContent = money(yourTotal);

  if (participants.length === 0 || itemCount === 0) {
    groupCartParticipants.innerHTML = `<p class="group-cart-empty">No group cart items yet</p>`;
    return;
  }

  groupCartParticipants.innerHTML = participants.map((participant) => {
    const items = participant.items;
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const canEdit = participant.uid === ownUid;
    const itemWord = items.length === 1 ? "item" : "items";
    const itemRows = items.length ? items.map((item) => `
      <article class="participant-item">
        <img src="${item.image || groupCartItemImage(item)}" alt="" />
        <div>
          <h4>${item.name || "Item"}</h4>
          <small>x${item.qty}</small>
        </div>
        <div class="participant-item-price">
          <strong>${money(item.price * item.qty)}</strong>
          <div class="participant-qty">
            <button type="button" data-group-cart-action="decrease" data-group-cart-id="${item.id}" ${canEdit ? "" : "disabled"} aria-label="Decrease ${item.name}">−</button>
            <span>${item.qty}</span>
            <button type="button" data-group-cart-action="increase" data-group-cart-id="${item.id}" ${canEdit ? "" : "disabled"} aria-label="Increase ${item.name}">+</button>
          </div>
        </div>
      </article>
    `).join("") : `<p class="group-cart-empty">No items yet</p>`;

    return `
      <article class="participant-order-card">
        <header class="participant-order-head">
          ${participantAvatarMarkup(participant)}
          <div>
            <h3>${participant.name || participant.username || "Member"}</h3>
            <p>${items.length} ${itemWord}</p>
          </div>
          <div class="participant-subtotal">
            <span>Subtotal</span>
            <strong>${money(subtotal)}</strong>
          </div>
          <b class="participant-chevron">›</b>
        </header>
        <div class="participant-items">${itemRows}</div>
      </article>
    `;
  }).join("");
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
  await db.collection("groups").doc(currentGroupId).collection("cartItems").doc(item.id || groupCartKey(item.code, item.owner?.uid)).set(groupCartDoc(item), { merge: true });
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
  currentGroupDeliveryTo = selectedGroupLocation || "Select location";
  currentGroupDeliveryTime = slot || "Select time";
  currentGroupCloseTime = groupCloseTime(slot);
  currentGroupRestaurant = "Mori Cafe";
  currentGroupRestaurantImage = "assets/mori.png";
  currentGroupId = `group_${Date.now()}_${auth?.currentUser?.uid || "guest"}`;
  groupMembers = [currentHostMember()];
  currentGroupMemberCount = groupMembers.length;
  groupInvites = [];
  groupCart.clear();
  if (createdGroupName) createdGroupName.textContent = name;
  if (createdCloseTime) createdCloseTime.textContent = currentGroupCloseTime;
  if (createdHostAvatar) {
    createdHostAvatar.innerHTML = `<img src="${groupMembers[0].avatarUrl || DEFAULT_AVATAR_URL}" alt="" />`;
  }
  if (createdHostName) createdHostName.textContent = groupMembers[0].name;
  renderGroupMembers();
  if (db) {
    try {
      await db.collection("groups").doc(currentGroupId).set({
        groupId: currentGroupId,
        groupName: currentGroupName,
        restaurant: "Mori Cafe",
        restaurantImage: "assets/mori.png",
        deliveryTo: currentGroupDeliveryTo,
        deliveryTime: currentGroupDeliveryTime,
        closeTime: currentGroupCloseTime,
        hostUid: auth?.currentUser?.uid || "",
        hostUsername: getOwnUsername() || auth?.currentUser?.displayName || "You",
        hostAvatar: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
        memberLimit: 5,
        memberUids: groupMembers.map((member) => member.uid || "").filter(Boolean),
        memberDetails: groupMembers.map((member) => ({
          uid: member.uid || "",
          username: member.username || member.name || "",
          name: member.name || member.username || "",
          avatarUrl: member.avatarUrl || DEFAULT_AVATAR_URL,
          status: member.status || "joined",
        })),
        members: groupMembers.map((member) => ({
          uid: member.uid || "",
          username: member.username || member.name || "",
          name: member.name || member.username || "",
          avatarUrl: member.avatarUrl || DEFAULT_AVATAR_URL,
          status: member.status || "joined",
        })),
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        createdAtMs: Date.now(),
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
  if (chatGroupName) chatGroupName.textContent = "Group Order Chat";
  if (chatMemberCount) chatMemberCount.textContent = `${currentGroupMemberCount} of 5 members`;
  if (chatCloseCountdown) chatCloseCountdown.textContent = closeCountdownText(currentGroupCloseTime);
  updateChatDeliveryDetails();
  renderChatProgress();
  renderChatMembersPanel();
  if (!db || !currentGroupId) {
    chatCreatedTime.textContent = currentClockTime();
    chatCreatedText.textContent = `You created the group "${currentGroupName}"`;
    chatCreatedClose.textContent = `Order closes at ${currentGroupCloseTime}`;
    const staticAvatar = document.querySelector(".chat-system-message .chat-system-avatar");
    if (staticAvatar) {
      const avatarUrl = getOwnAvatarUrl();
      staticAvatar.innerHTML = `<img src="${avatarUrl || DEFAULT_AVATAR_URL}" alt="" />`;
    }
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

function renderOrderProgress(status = "waiting-rider") {
  if (!orderProgressCard) return;
  const order = ["placed", "preparing", "waiting-rider", "on-way", "delivered"];
  const activeIndex = Math.max(0, order.indexOf(status));
  orderProgressCard.dataset.status = status;
  orderProgressCard.style.setProperty("--progress", `${(activeIndex / (order.length - 1)) * 100}%`);
  orderProgressCard.querySelectorAll(".progress-step").forEach((step, index) => {
    step.classList.toggle("done", index < activeIndex);
    step.classList.toggle("active", index === activeIndex);
  });
}

function renderOrderPlaced(orderData) {
  const items = orderData.items || [];
  if (orderPlacedId) orderPlacedId.textContent = orderData.orderId || `#NOVA${Date.now().toString().slice(-8)}`;
  if (orderPlacedTime) orderPlacedTime.textContent = currentClockTime();
  if (orderPlacedRestaurantTotal) orderPlacedRestaurantTotal.textContent = money(orderData.total || 0);
  if (orderPlacedSubtotal) orderPlacedSubtotal.textContent = money(orderData.subtotal || 0);
  if (orderPlacedDelivery) orderPlacedDelivery.textContent = money(orderData.delivery || 0);
  if (orderPlacedTotal) orderPlacedTotal.textContent = money(orderData.total || 0);
  if (orderPlacedItems) {
    orderPlacedItems.innerHTML = items.map((item) => `
      <article>
        <span>${item.name}<small>x ${item.qty}</small></span>
        <strong>${money(item.price * item.qty)}</strong>
      </article>
    `).join("");
  }
  renderOrderProgress(orderData.status || "waiting-rider");
}

window.renderOrderProgress = renderOrderProgress;
window.renderOrderPlaced = renderOrderPlaced;

function showPaymentSuccessThenOrderPlaced() {
  phone.classList.remove("payment-success-ready", "order-placed-entering");
  phone.classList.add("payment-success-overlay-active");
  if (paymentSuccessTitle) paymentSuccessTitle.hidden = false;
  window.scrollTo(0, 0);
  return new Promise((resolve) => {
    let finished = false;
    let titleShown = false;
    const showTitle = () => {
      if (titleShown) return;
      titleShown = true;
      phone.classList.add("payment-success-ready");
    };
    const finish = () => {
      if (finished) return;
      finished = true;
      showTitle();
      phone.classList.remove("payment-success-overlay-active", "payment-success-ready");
      setScreen("order-placed");
      phone.classList.add("order-placed-entering");
      setTimeout(() => phone.classList.remove("order-placed-entering"), 650);
      resolve();
    };

    if (paymentSuccessLottie) {
      paymentSuccessLottie.destroy();
      paymentSuccessLottie = null;
    }
    if (paymentSuccessAnimation) paymentSuccessAnimation.innerHTML = "";

    if (window.lottie && paymentSuccessAnimation) {
      paymentSuccessLottie = window.lottie.loadAnimation({
        container: paymentSuccessAnimation,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "assets/animations/success.json",
      });
      paymentSuccessLottie.addEventListener("enterFrame", (event) => {
        const total = paymentSuccessLottie.totalFrames || 0;
        if (total && event.currentTime >= total * 0.6) showTitle();
      });
      paymentSuccessLottie.addEventListener("complete", finish);
      paymentSuccessLottie.addEventListener("data_failed", () => setTimeout(finish, 1400));
      setTimeout(showTitle, 1600);
      setTimeout(finish, 3200);
      return;
    }

    setTimeout(showTitle, 900);
    setTimeout(finish, 1800);
  });
}

function openGroupCart() {
  cartMode = "group";
  cartReturnScreen = "group-chat";
  renderGroupCart();
  updateAllCartViews();
  window.scrollTo(0, 0);
  setScreen("group-cart");
  requestAnimationFrame(() => document.querySelector(".group-cart-scroll")?.scrollTo(0, 0));
}

function renderInviteFriends() {
  const query = inviteFriendSearchInput.value.trim().toLowerCase();
  const friends = currentFriendsList().filter((friend) => {
    const username = (friend.username || "").toLowerCase();
    const name = (friend.name || "").toLowerCase();
    return !query || username.includes(query) || name.includes(query);
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
          ${roundAvatarMarkup("friend-avatar", friend.name || friend.username || "Friend", friend.avatarUrl || "")}
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
  refreshFriendsForInvites();
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
        restaurant: "Mori Cafe",
        restaurantImage: "assets/mori.png",
        deliveryTime: groupTimeButton.textContent.trim(),
        deliveryTo: selectedGroupLocation,
        closeTime: currentGroupCloseTime,
        fromUid: auth?.currentUser?.uid || "",
        fromUsername: getOwnUsername() || "",
        fromName: currentProfile?.name || getOwnUsername() || "You",
        fromAvatar: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
        toUid: friend.uid,
        toUsername: friend.username || "",
        toAvatar: friend.avatarUrl || DEFAULT_AVATAR_URL,
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

  initFirebase();
  if (!db) {
    currentProfile = { username: cachedUsername || "", avatarUrl: DEFAULT_AVATAR_URL };
    return currentProfile;
  }

  try {
    const snapshot = await db.collection("users").doc(user.uid).get();
    const profile = snapshot.exists ? snapshot.data() : null;
    if (profile?.username) {
      localStorage.setItem(`novaUsername:${user.uid}`, profile.username);
    }
    const storedAvatar = PROFILE_AVATARS.includes(profile?.avatarUrl) ? profile.avatarUrl : "";
    const authAvatar = PROFILE_AVATARS.includes(user.photoURL) ? user.photoURL : "";
    const resolvedAvatar = storedAvatar || authAvatar || DEFAULT_AVATAR_URL;
    if (snapshot.exists && !storedAvatar) {
      db.collection("users").doc(user.uid).set({
        avatarUrl: resolvedAvatar,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true }).catch(() => {});
    }
    currentProfile = {
      ...(profile || {}),
      username: profile?.username || cachedUsername || "",
      avatarUrl: resolvedAvatar,
    };
    return currentProfile;
  } catch (error) {
    currentProfile = { username: cachedUsername || "", avatarUrl: DEFAULT_AVATAR_URL };
    return currentProfile;
  }
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
    openGroupList();
  });
});

document.querySelectorAll(".profile-card").forEach((card) => {
  const title = card.querySelector("h2")?.textContent.trim();
  if (title === "My Friends") {
    card.addEventListener("click", openFriends);
  }
});
document.querySelector(".create-group-profile")?.addEventListener("click", openGroupList);
homeStartGroupOrder?.addEventListener("click", openGroupList);
startNewGroupOrder?.addEventListener("click", openGroupOrder);
groupListBack?.addEventListener("click", () => setScreen("home"));
groupOrdersList?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-group-id]");
  if (!card || card.disabled) return;
  card.disabled = true;
  openGroupFromList(card.dataset.groupId);
  setTimeout(() => {
    card.disabled = false;
  }, 800);
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
        fromAvatar: getOwnAvatarUrl() || DEFAULT_AVATAR_URL,
        toUid,
        toUsername,
        status: "pending",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        createdAtMs: Date.now(),
        respondedAt: null,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    button.textContent = "Sent";
    await loadNotifications();
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
if (createdBack) createdBack.addEventListener("click", openGroupList);
if (startGroupOrderButton) {
  startGroupOrderButton.addEventListener("click", () => {
    openGroupChat();
  });
}
chatBack.addEventListener("click", () => setScreen("group-created"));
chatAddItemsButton?.addEventListener("click", openSelectedRestaurantMenu);
chatMenuButton?.addEventListener("click", openSelectedRestaurantMenu);
chatCartButtons.forEach((button) => button.addEventListener("click", openGroupCart));
chatMembersButtons.forEach((button) => button.addEventListener("click", openChatMembersPanel));
chatCheckoutButton?.addEventListener("click", () => {
  cartMode = "group";
  openGroupCart();
});
groupCartBack?.addEventListener("click", () => setScreen("group-chat"));
groupCartCheckout?.addEventListener("click", () => {
  alert("Group order checkout is coming soon.");
});
groupCartParticipants?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-group-cart-action]");
  if (!button || button.disabled) return;
  const id = button.dataset.groupCartId;
  const item = groupCart.get(id);
  if (!item) return;
  const ownUid = groupCartOwner().uid;
  if ((item.owner?.uid || ownUid) !== ownUid) return;

  if (button.dataset.groupCartAction === "increase") {
    item.qty += 1;
    groupCart.set(id, item);
    saveGroupCartItem(item).catch(() => {});
  } else {
    item.qty -= 1;
    if (item.qty <= 0) {
      groupCart.delete(id);
      removeGroupCartItem(id).catch(() => {});
    } else {
      groupCart.set(id, item);
      saveGroupCartItem(item).catch(() => {});
    }
  }
  renderChatProgress();
  renderGroupCart();
  updateAllCartViews();
});
chatMembersClose?.addEventListener("click", closeChatMembersPanel);
chatMembersPanel?.addEventListener("click", (event) => {
  if (event.target === chatMembersPanel) closeChatMembersPanel();
});
chatPanelInvite?.addEventListener("click", () => {
  closeChatMembersPanel();
  openInviteFriends("group-chat");
});
chatMembersList?.addEventListener("click", (event) => {
  if (!event.target.closest(".chat-member-row.empty")) return;
  closeChatMembersPanel();
  openInviteFriends("group-chat");
});
copyGroupLinkButton?.addEventListener("click", async () => {
  const link = groupInviteLinkInput?.value || groupInviteLink();
  await navigator.clipboard?.writeText(link);
  copyGroupLinkButton.textContent = "Copied";
  setTimeout(() => {
    copyGroupLinkButton.textContent = "Copy";
  }, 1100);
});
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
chatInviteButton?.addEventListener("click", () => openInviteFriends("group-chat"));
if (createdMembersRow) {
  createdMembersRow.addEventListener("click", (event) => {
    if (event.target.closest(".created-invite-slot")) openCreatedSheet("invite");
  });
}
createdInviteAction?.addEventListener("click", () => openCreatedSheet("invite"));
createdShareAction?.addEventListener("click", () => openCreatedSheet("share"));
createdSheetClose?.addEventListener("click", closeCreatedSheet);
createdSheetDone?.addEventListener("click", closeCreatedSheet);
createdSheetOverlay?.addEventListener("click", (event) => {
  if (event.target === createdSheetOverlay) closeCreatedSheet();
});
createdInviteSearchInput?.addEventListener("input", renderCreatedInviteFriends);
createdInviteList?.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-invite-key]");
  if (!button || button.disabled) return;
  const friend = currentFriendsList().find((item) => groupFriendKey(item) === button.dataset.inviteKey);
  if (friend) {
    await inviteGroupFriend(friend);
    renderCreatedInviteFriends();
  }
});
createdCopyLink?.addEventListener("click", async () => {
  await navigator.clipboard?.writeText(groupInviteLink());
  createdCopyLink.querySelector("em").textContent = "Copied";
  setTimeout(() => {
    createdCopyLink.querySelector("em").textContent = "Copy";
  }, 1100);
});
createdSocialRow?.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-share-channel]");
  if (!button) return;
  const channel = button.dataset.shareChannel;
  const message = groupInviteMessage();
  const encoded = encodeURIComponent(message);
  if (channel === "whatsapp") {
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
    return;
  }
  if (channel === "telegram") {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(groupInviteLink())}&text=${encodeURIComponent("Join my Nova group order on Nova")}`, "_blank");
    return;
  }
  if (channel === "messages" && navigator.share) {
    await navigator.share({ title: "Nova Group Order", text: message, url: groupInviteLink() });
    return;
  }
  await navigator.clipboard?.writeText(message);
  button.querySelector("b").textContent = "Copied";
  setTimeout(() => {
    const labels = { telegram: "Telegram", messages: "Messages" };
    button.querySelector("b").textContent = labels[channel] || "Share";
  }, 1100);
});
inviteFriendsBack.addEventListener("click", () => {
  openGroupChat();
});
inviteFriendSearchInput.addEventListener("input", renderInviteFriends);
inviteFriendsList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-invite-key]");
  if (!button || button.disabled) return;
  const friends = currentFriendsList();
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

avatarInput?.addEventListener("click", openAvatarSheet);

avatarSheetClose?.addEventListener("click", closeAvatarSheet);

avatarSheetOverlay?.addEventListener("click", (event) => {
  if (event.target === avatarSheetOverlay) closeAvatarSheet();
});

avatarOptions?.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-avatar-url]");
  if (!button) return;
  selectPendingAvatar(button.dataset.avatarUrl || "");
});

avatarConfirm?.addEventListener("click", async () => {
  if (!PROFILE_AVATARS.includes(pendingProfileAvatarUrl)) return;
  avatarConfirm.disabled = true;
  if (avatarSheetMessage) avatarSheetMessage.textContent = "Saving avatar to your account...";
  const saved = await saveProfileAvatar(pendingProfileAvatarUrl);
  avatarConfirm.disabled = false;
  if (saved) {
    closeAvatarSheet();
  } else if (avatarSheetMessage) {
    avatarSheetMessage.textContent = "Could not save avatar to your account. Please try again.";
  }
});

inviteModalDecline?.addEventListener("click", async () => {
  if (!activeIncomingGroupInvite?.id) return;
  await updateGroupInviteStatus(activeIncomingGroupInvite.id, "rejected");
});

inviteModalAccept?.addEventListener("click", async () => {
  if (!activeIncomingGroupInvite?.id) return;
  await updateGroupInviteStatus(activeIncomingGroupInvite.id, "accepted");
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
  stopFriendRequestWatchers();
  stopIncomingGroupInviteWatcher();
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
      await credential.user.updateProfile({ displayName: name, photoURL: DEFAULT_AVATAR_URL });
      if (db) {
        await db.collection("users").doc(credential.user.uid).set(
          {
            name,
            email,
            provider: "password",
            username: "",
            avatarUrl: DEFAULT_AVATAR_URL,
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
          avatarUrl: currentProfile?.avatarUrl || DEFAULT_AVATAR_URL,
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
      avatarUrl: currentProfile?.avatarUrl || DEFAULT_AVATAR_URL,
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
      const userDoc = db.collection("users").doc(credential.user.uid);
      const snapshot = await userDoc.get();
      const existingAvatar = snapshot.exists && PROFILE_AVATARS.includes(snapshot.data()?.avatarUrl)
        ? snapshot.data().avatarUrl
        : "";
      await db.collection("users").doc(credential.user.uid).set(
        {
          name: credential.user.displayName || "",
          email: credential.user.email || "",
          provider: "google",
          avatarUrl: existingAvatar || DEFAULT_AVATAR_URL,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      if (!PROFILE_AVATARS.includes(credential.user.photoURL)) {
        await credential.user.updateProfile({ photoURL: existingAvatar || DEFAULT_AVATAR_URL }).catch(() => {});
      }
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
        const userDoc = db.collection("users").doc(credential.user.uid);
        const snapshot = await userDoc.get();
        const existingAvatar = snapshot.exists && PROFILE_AVATARS.includes(snapshot.data()?.avatarUrl)
          ? snapshot.data().avatarUrl
          : "";
        await userDoc.set(
          {
            name: credential.user.displayName || "",
            email: credential.user.email || "",
            provider: "google",
            avatarUrl: existingAvatar || DEFAULT_AVATAR_URL,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
        if (!PROFILE_AVATARS.includes(credential.user.photoURL)) {
          await credential.user.updateProfile({ photoURL: existingAvatar || DEFAULT_AVATAR_URL }).catch(() => {});
        }
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
      stopFriendRequestWatchers();
      stopIncomingGroupInviteWatcher();
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
  summarySubtotal.textContent = money(current.subtotal);
  summaryDelivery.textContent = current.delivery === 0 ? "Free" : money(current.delivery);
  summaryTotal.textContent = money(current.total);
  cartPageQty.textContent = current.qty;
  cartPageSubtotal.textContent = money(current.total);
  cartPageDelivery.textContent = isGroupCart ? message : "";
  checkoutItemsTitle.textContent = `Order Items (${current.qty})`;
  checkoutSubtotal.textContent = money(current.subtotal);
  checkoutDelivery.textContent = current.delivery === 0 ? "Free" : money(current.delivery);
  checkoutTotal.textContent = money(current.total);
  placeOrderTotal.textContent = money(current.total);
  if (isGroupCart) renderChatProgress();

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
  const owner = groupCartOwner();
  const existingGroupItem = cartMode === "group"
    ? [...groupCart.entries()].find(([, value]) => value.code === code && value.owner?.uid === owner.uid)
    : null;
  const key = cartMode === "group" ? (existingGroupItem?.[0] || groupCartKey(code, owner.uid)) : code;
  const item = sourceCart.get(key) || {
    id: key,
    code,
    name: button.dataset.name,
    cn: button.dataset.cn,
    price: Number(button.dataset.price),
    qty: 0,
    image: groupCartItemImage({ name: button.dataset.name }),
    owner: cartMode === "group" ? owner : null,
  };
  item.qty += 1;
  sourceCart.set(key, item);
  updateAllCartViews();
  if (cartMode === "group") {
    renderGroupCart();
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
    openGroupCart();
    return;
  }
  if (activeCart().size === 0) return;
  window.scrollTo(0, 0);
  setScreen("checkout");
});

summaryCheckoutButton.addEventListener("click", () => {
  if (cartMode === "group") {
    openGroupCart();
    return;
  }
  if (activeCart().size === 0) return;
  window.scrollTo(0, 0);
  setScreen("checkout");
});

placeOrderButton.addEventListener("click", () => {
  const sourceCart = activeCart();
  if (cartMode === "group" || sourceCart.size === 0) return;
  paymentAmount.textContent = money(totals(sourceCart, cartMode).total);
  window.scrollTo(0, 0);
  setScreen("payment");
});

paymentBack.addEventListener("click", () => setScreen("checkout"));

paymentScreenshotInput.addEventListener("change", async () => {
  const file = paymentScreenshotInput.files?.[0];
  if (!file) return;
  compressedPaymentScreenshot = null;
  compressedPaymentScreenshotName = "";

  if (!["image/jpeg", "image/png"].includes(file.type)) {
    paymentScreenshotInput.value = "";
    paymentUploadTitle.textContent = "Tap to upload screenshot";
    paymentUploadHint.textContent = "Only JPG and PNG are supported";
    alert("Only JPG and PNG screenshots are supported.");
    return;
  }

  if (file.size > PAYMENT_SCREENSHOT_MAX_SIZE) {
    paymentScreenshotInput.value = "";
    paymentUploadTitle.textContent = "Tap to upload screenshot";
    paymentUploadHint.textContent = "File must be 2MB or smaller";
    alert("Screenshot must be 2MB or smaller.");
    return;
  }

  paymentUploadTitle.textContent = "Compressing screenshot...";
  paymentUploadHint.textContent = "Please wait";
  try {
    compressedPaymentScreenshot = await compressPaymentScreenshot(file);
    compressedPaymentScreenshotName = file.name.replace(/\.(png|jpe?g)$/i, compressedPaymentScreenshot.type === "image/png" ? ".png" : ".jpg");
    paymentUploadTitle.textContent = compressedPaymentScreenshotName;
    paymentUploadHint.textContent = `Compressed to ${(compressedPaymentScreenshot.size / (1024 * 1024)).toFixed(2)} MB`;
  } catch (error) {
    console.error(error);
    paymentScreenshotInput.value = "";
    paymentUploadTitle.textContent = "Tap to upload screenshot";
    paymentUploadHint.textContent = "Could not compress this screenshot";
    alert("Could not compress this screenshot. Please choose another JPG or PNG under 2MB.");
  }
});

submitPaymentButton.addEventListener("click", async () => {
  const sourceCart = activeCart();
  if (cartMode === "group" || sourceCart.size === 0 || submitPaymentButton.disabled) return;
  if (!db) {
    alert("Firebase is not ready. Please check your connection.");
    return;
  }
  if (!compressedPaymentScreenshot) {
    alert("Please upload a JPG or PNG payment screenshot under 2MB.");
    return;
  }

  const current = totals(sourceCart, cartMode);
  const orderedItems = [...sourceCart.values()].map((item) => ({ ...item }));
  const originalText = submitPaymentButton.textContent;
  submitPaymentButton.disabled = true;
  submitPaymentButton.textContent = "Submitting Payment...";

  try {
    let screenshotPath = "";
    let screenshotUrl = "";
    if (storage) {
      const extension = compressedPaymentScreenshot.type === "image/png" ? "png" : "jpg";
      const userId = auth?.currentUser?.uid || "guest";
      screenshotPath = `paymentScreenshots/${userId}/${Date.now()}.${extension}`;
      const snapshot = await storage.ref(screenshotPath).put(compressedPaymentScreenshot, {
        contentType: compressedPaymentScreenshot.type,
      });
      screenshotUrl = await snapshot.ref.getDownloadURL();
    }

    const orderRef = await db.collection("orders").add({
      restaurant: "Mori Cafe Bukit Beruang",
      address: activeChoice("addressChoices"),
      slot: activeChoice("slotChoices"),
      paymentMethod: "Touch 'n Go eWallet",
      items: orderedItems.map((item) => ({
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
      paymentStatus: "pending_verification",
      paymentScreenshotName: compressedPaymentScreenshotName,
      paymentScreenshotPath: screenshotPath,
      paymentScreenshotUrl: screenshotUrl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    renderOrderPlaced({
      orderId: `#NOVA${orderRef.id.slice(-8).toUpperCase()}`,
      items: orderedItems,
      subtotal: current.subtotal,
      delivery: current.delivery,
      total: current.total,
      status: "waiting-rider",
    });
    sourceCart.clear();
    paymentScreenshotInput.value = "";
    compressedPaymentScreenshot = null;
    compressedPaymentScreenshotName = "";
    paymentUploadTitle.textContent = "Tap to upload screenshot";
    paymentUploadHint.textContent = "Supports JPG, PNG (Max 2MB)";
    updateAllCartViews();
    await showPaymentSuccessThenOrderPlaced();
  } catch (error) {
    console.error(error);
    alert("Payment submission failed. Please try again.");
  } finally {
    submitPaymentButton.disabled = false;
    submitPaymentButton.textContent = originalText;
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
