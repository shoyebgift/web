export const unprotectedNavlinks = {
  company: [
    {
      name: "About OptiFii",
      path: "/",
    },
    {
      name: "Solutions",
      path: "/solutions",
    },
    {
      name: "Products",
      child: [
        {
          name: "Expense",
          path: "/products/expense",
        },
        {
          name: "Benefits",
          path: "/products/benefits",
        },
        {
          name: "Rewards",
          path: "/products/rewards",
        },
      ],
    },
  ],
  help: [
    {
      name: "Reach us",
      path: "/contact-us",
    },
    {
      name: "Terms & Conditions",
      path: "#",
    },

    {
      name: "Privacy Policy",
      path: "#",
    },
  ],
};

export const unprotectedHeaderLinks = [
  {
    name: "About OptiFii",
    path: "/",
  },
  {
    name: "Solutions",
    path: "/solutions",
  },
  {
    name: "Products",
    child: [
      {
        name: "Expense",
        path: "/products/expense",
      },
      {
        name: "Benefits",
        path: "/products/benefits",
      },
      {
        name: "Rewards",
        path: "/products/rewards",
      },
    ],
  },
  {
    name: "Reach us",
    path: "/contact-us",
  },
];

export const homePage = {
  header: "Cutting-edge features for advanced analytics",
  description:
    " Powerful, self-serve product and growth analytics to help you manage your company expenses, give the maximum employee benefits and reward solution from a single dashboard.",
  features: [
    {
      title: "Expense",
      description:
        "Whether you have a team of 2 or 200, all the employee and company expense are recorded in seamless manner",
      icon: "MailOutlineIcon",
      link: "/products/expense",
    },
    {
      title: "Employee Tax Benefits",
      description:
        "An all-in-one Saas platform that helps you balance everything your employees need to be happy.",
      icon: "boltOutlined",
      link: "/products/benefits",
    },
    {
      title: "Rewards & Recognition",
      description:
        "Curated brand vouchers of more than 100+ brands and the PPI gift cards are a preferred choice for gifting",
      icon: "barChart",
      link: "/products/rewards",
    },
  ],
};

export const solutions = {
  header: "Analytics that feels like it's your own",
  description: `Powerful, self-serve product and growth analytics to help you manage both employee and company expenses in a single go.\n\nNow give employee tax benefits and manage policy from a dashboard`,

  features: [
    {
      title: "Deliver instant benefits and rewards to your employees and channel partners",
      subTitle:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
      icon: "boltOutlined",
      descriptionPoint: [
        "Companies can empower their workforce with valuable tax-saving opportunities",
        "Enable employees to maximize their tax savings through various pre-tax benefits",
        "Provides seamless solutions to reward and motivate individuals",
      ],
    },
    {
      title: "Manage your Expenses with reports",
      subTitle:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
      icon: "barChart",
      descriptionPoint: [
        "Filter, export, and drilldown on the data quickly",
        "Save, schedule, and automate reports to your inbox",
        "Connect the tools you already use with 100+ integrations",
      ],
    },
  ],
};

export const expenses = {
  header: "Save better and smarter with OptiFii Expense",
  description: "Track, manage, and control your expenses with effortless ease.",
  features: [
    {
      title: "Create Multi Wallet for different expense categories",
      subTitle:
        "An all-in-one employee service platform that helps you balance everything your employees need to be happy.",
      icon: "boltOutlined",
      descriptionPoint: [
        "Employees can submit and track expense claims instantly, reducing delays and errors",
        "Gain detailed analytics to optimize spending and make informed financial decisions",
        "Easy for both employees and approvers, ensuring higher adoption rates and smoother processes",
      ],
    },

    {
      title: "Define Wallet Policy, set rules",
      subTitle:
        "Define organisation policy and rules for multi wallets, and allocate budgets",
      icon: "barChart",
      descriptionPoint: [
        "Define organisation policy and rules for multi wallets, and allocate budgets",
        "End-to-end automation for submission, approval, and reimbursement processes",
        "Enhanced user experiences with intuitive interfaces",
      ],
    },
  ],
};

export const benefits = {
  header: "World of Benefits and Rewards for everyone",
  description:
    "Selects employee tax benefits program from the defined rule engine set by OptiFii Benefit platform",
  features: [
    {
      title:
        "Now create and issue multiple tax benefits wallet for your employees",
      subTitle:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
      icon: "boltOutlined",
      descriptionPoint: [
        "Keep your customers in the loop with live chat",
        "Embed help articles right on your website",
        "Customers never have to leave the page to find an answer",
      ],
    },
  ],
};

export const rewards = {
  title: "Give the choice of rewards to your employees and channel partners",

  description:
    "From Digital to Physical card, and from the catalog  of 100+ brand vouchers, now you can choose the freedom of rewards",
  features: [
    {
      title: "Choose from the catalog of 100+ Brand Vouchers",
      subTitle:
        "Access a wide range of brand vouchers and enjoy exclusive discounts with easy tracking and delivery",
      icon: "boltOutlined",
      descriptionPoint: [
        "Issue Gift Vouchers to users from 100+ brands",
        "Track the delivery of your vouchers",
        "Best for companies to enjoy great discounts",
      ],
    },
    {
      title: "Instant Digital Gift Cards",
      subTitle: "Now issue virtual bank gift cards ",
      // "Convenient, secure, and instantly available virtual gift cards for seamless online shopping experiences",
      icon: "barChart",
      descriptionPoint: [
        "Redeemable on all online platforms and ecommerce websites",
        "No worry of carrying the physical cards",
        "Activate your Digital Gift cards in less than a minute",
      ],
    },
    {
      title: "Personalised Physical Gift Cards",
      subTitle:
        "Now Give your employees and channel partners the freedom of Gifting with OptiFii Physical Gift Card and Smart Card",
      icon: "boltOutlined",
      descriptionPoint: [
        "Works both for online and offline transactions",
        "Issue personalised Gift cards to your employees",
        "Any amount upto 10K can be loaded instantly",
      ],
    },
  ],
};
