export const REVENUE = "revenue"
export const SPENDING = "spending" 
export const REVENUE_BUTTON = "revenue-button"
export const SPENDING_BUTTON = "spending-button"
export const KEY_1 = "key1"
export const KEY_2 = "key2"
export const KEY_3 = "key3"
export const KEY_4 = "key4"
export const KEY_5 = "key5"
export const KEY_6 = "key6"
export const KEY_7 = "key7"
export const KEY_8 = "key8"
export const KEY_9 = "key9"
export const KEY_0 = "key0"
export const KEY_DOT = "keydot"
export const KEY_DELETE = "keyDelete"
export const KEY_ADD_TRANSACTION = "keyAddTransaction"
export const DAILY = "daily"
export const WEEKLY = "weekly"
export const BI_WEEKLY = "bi-weekly"
export const BI_MONTHLY = "bi-monthly"
export const MONTHLY = "monthly"
export const YEARLY = "yearly" 
export const ONE_TIME = "one-time"
export const INCOME = "💵income"
export const OTHER = "create your own"
export const STUDENT_LOANS = "🎓student loans"
export const CAR_INSURANCE = "🚗car insurance"
export const GROCERIES = "🥑groceries"
export const CREDIT_CARD = "💳credit card"
export const RENT = "🏠rent"
export const UTILITIES = "💡utilities"
export const ACTIVITIES = "🏕️activities"

export const TRANSACTION_TYPES = { 
    [REVENUE]: REVENUE, 
    [SPENDING]: SPENDING
}

// these are frequencies by days
export const FREQUENCY = {
    [DAILY]: 1,
    [WEEKLY]: 7,
    [BI_WEEKLY]: 14,
    [BI_MONTHLY]: 16, //this is harder to calculate because it changes based on month
    [MONTHLY]: 30, //this is harder to calculate because it changes based on the current month
    [YEARLY]: 365,
    [ONE_TIME]: 0
}

export const REVENUE_CATEGORIES = {
    [INCOME]: INCOME,
    [OTHER]: OTHER
}

export const SPENDING_CATEGORIES = {
    [STUDENT_LOANS]: STUDENT_LOANS,
    [CAR_INSURANCE]: CAR_INSURANCE,
    [GROCERIES]: GROCERIES,
    [CREDIT_CARD]: CREDIT_CARD,
    [RENT]: RENT,
    [UTILITIES]: UTILITIES,
    [ACTIVITIES]: ACTIVITIES,
    [OTHER]: OTHER
}

export const INCOME_CATEGORIES_HTML = {
    [INCOME]: {
        id: "income",
        emoji: "💵",
        categoryText: "income"
    },
    [OTHER]: {
        id: "other",
        emoji: "",
        categoryText: "create your own"
    }
}

export const SPENDING_CATEGORIES_HTML = {
    [STUDENT_LOANS]: {
        id: "student-loans",
        emoji: "🎓",
        categoryText: "student loans"
    },
    [CAR_INSURANCE]: {
        id: "car-insurance",
        emoji: "🚗",
        categoryText: "car insurance"
    },
    [GROCERIES]: {
        id: "groceries",
        emoji: "🥑",
        categoryText: "groceries"
    },
    [CREDIT_CARD]: {
        id: "credit-card",
        emoji: "💳",
        categoryText: "credit card"
    },
    [RENT]: {
        id: "rent",
        emoji: "🏠",
        categoryText: "rent"
    },
    [UTILITIES]: {
        id: "utilities",
        emoji: "💡",
        categoryText: "utilities"
    },
    [ACTIVITIES]: {
        id: "activities",
        emoji: "🏕️",
        categoryText: "activities"
    },
    [OTHER]: {
        id: "other",
        emoji: "",
        categoryText: "create your own"
    }
}

export const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
