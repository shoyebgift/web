import Food from "../assets/icons/Food.png";
import Fuel from "../assets/icons/Fuel.png";
import Gift from "../assets/icons/gift.png";
import books from "../assets/icons/bookStack.png";
import telecom from "../assets/icons/telecom.png";
import gadget from "../assets/icons/gadget.png";
import foods from "../assets/icons/foods.png";

export const dash = [
  {
    id: 1,
    wallet: "Food",
    walletAmount: "₹ 70,000",
    balanceRemaining: "₹ 20,000",
    status: "Approved",
    totalEmployees: 500,
    users: 5,
    icon: foods,
  },
  {
    id: 2,
    wallet: "Fuel",
    walletAmount: "₹ 50,000",
    balanceRemaining: "₹ 15,000",
    status: "Approved",
    totalEmployees: 200,
    users: 3,
    icon: Fuel,
  },
  {
    id: 3,
    wallet: "Books & Periodicals",
    walletAmount: "₹ 100,000",
    balanceRemaining: "₹ 80,000",
    status: "Pending",
    totalEmployees: 300,
    users: 4,
    icon: books,
  },
  {
    id: 4,
    wallet: "Telecom",
    walletAmount: "₹ 100,000",
    balanceRemaining: "₹ 80,000",
    status: "Pending",
    totalEmployees: 300,
    users: 4,
    icon: telecom,
  },
];

export const dashHeadRow = [
  "Wallet Name",
  "Total employees",
  "Amount in card",
  "Pending request",
  "Pending amount",
];

export const dashHeadSecRow = [
  "Wallet Name",
  "Total employees",
  "Benefit limit",
  "Remaining amount",
  "Status",
];
export const dashHeadThirdRow = [
  "Employee Name",
  "Email",
  "Wallet",
  "Amount",
  "Date & time",
];


export const dummyData = [
  {
    title: "Total Employees",
    value: "200",
    bottom: "Invite/Add Employees",
    bgcolor: "#6311CB",
    colors: "#3725EA",
  },
  {
    title: "Wallet Requests",
    value: "100",
    bottom: "View Requests",
    bgcolor: "#C33FAD",
    colors: "#C33FAD",
  },
];
export const gridItemsData = [
  {
    cardType: "Expense card",
    backgroundColor: "#218F001A",
    iconColor: "#00A438",
    title: "Active expense wallets",
    count: 50,
    buttonBg: "#FCA1001A",
    buttonBorder: "#FCA100",
    buttonText: "Pending requests",
    badgeText: "20 New",
    badgeColor: "#3725EA",
    viewTextColor: "#6311CB",
    manageWallet: "Manage expense wallets",
  },
  {
    cardType: "Benefit card",
    backgroundColor: "#218F001A",
    iconColor: "#00A438",
    title: "Active benefit wallets",
    count: 70,
    buttonBg: "#FCA1001A",
    buttonBorder: "#FCA100",
    buttonText: "Pending requests",
    badgeText: "20 New",
    badgeColor: "#3725EA",
    viewTextColor: "#6311CB",
    manageWallet: "Manage benefit wallets",
  },
];