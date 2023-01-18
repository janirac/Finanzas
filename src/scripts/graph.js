import * as d3 from "d3"
import transactionData from '../../exampleTransactions.json';
import { FREQUENCY, DAILY, WEEKLY, YEARLY, ONE_TIME, MONTH_NAMES, MONTHLY, BI_WEEKLY, BI_MONTHLY } from "./utils/constants";

DAILY
class Graph{
    constructor(app, calc){
        // this.app = app
        // this.calc = calc
        // Commenting out the above while testing
        this.transactions = transactionData
        // debugger
        this.datasetBuilder()
        // this.setupSVG()
    }

    // Take the exampleTransactions object and turn in into multiple pieces of data
    // that can then be added to a graph
    // A totals object -> Will have only one graph of a yearly up and down based 
    // on the given transactions and frequencies
    // A revenue & expenses line graphs -> two lines over the period of a year
    datasetBuilder() {
        // Totals data revenue will be on the back and expenses on the front.
        let totals = {
            revenue: {},
            spending: {}
        };

        // revenue: {
        // january: 1000,
        //
        //}
        // We will be doing everything on a year for now to make this calculation easier
        // We will also do this by the month

        // 12 month yearly view below
        Object.values(this.transactions.revenue).forEach(transaction => {
            // here is where we would also ensure we apply the inflation rate when doing the for loop to add each subsequent months transactions amounts
            if (!totals.revenue[transaction.category]) {
                totals.revenue[transaction.category] = {}
                totals.revenue[transaction.category].monthly = {}
            }

            //get current date and add this to the
            const date = new Date(transaction.date)
            const monthNumber = date.getMonth()
            const monthName = date.toLocaleString('default', { month: 'long' });
            const transactionFrequency = transaction.frequency

            // One Time Transactions && Yearly are almost the same right now since we only doing things upto one year
            // Will definetly need to pass a param for the year from the current date
            if (transactionFrequency == ONE_TIME) {
                debugger
                if (totals.revenue[transaction.category].monthly[monthName]) {     
                    totals.revenue[transaction.category]
                        .monthly[monthName].total += transaction.amount
                } else {
                    totals.revenue[transaction.category].monthly[monthName] = {}
                    totals.revenue[transaction.category].monthly[monthName].total = transaction.amount
                }
            } else if (transactionFrequency == DAILY) {
                // Daily Transactions
                for (let month = monthNumber; month < (monthNumber + 12); month++) {
                    const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
                    const totalBasedOnFrequency = transaction.amount * FREQUENCY[MONTHLY]
                    
                    if (totals.revenue[transaction.category].monthly[currentMonthName]) {
                        totals.revenue[transaction.category]
                            .monthly[currentMonthName]
                            .total += totalBasedOnFrequency
                    } else {
                        totals.revenue[transaction.category].monthly[currentMonthName] = {}
                        totals.revenue[transaction.category]
                            .monthly[currentMonthName].total = totalBasedOnFrequency
                    }
                }
            } else if (transactionFrequency == WEEKLY) {
                // Weekly
                for (let month = monthNumber; month < (monthNumber + 12); month++) {
                    const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
                    const totalBasedOnFrequency = transaction.amount * (FREQUENCY[MONTHLY] / FREQUENCY[WEEKLY])
        
                    if (totals.revenue[transaction.category].monthly[currentMonthName]) {
                        totals.revenue[transaction.category]
                            .monthly[currentMonthName]
                            .total += totalBasedOnFrequency
                            // Assuming their are 4 weeks in a month
                            // FREQUENCY[MONTHLY] would have to be replace with the current months number of days to be more accurate
                    } else {
                        totals.revenue[transaction.category].monthly[currentMonthName] = {}
                        totals.revenue[transaction.category]
                            .monthly[currentMonthName].total = totalBasedOnFrequency 
                    }
                }
            } else if (transactionFrequency == BI_WEEKLY || transactionFrequency == BI_MONTHLY) {
                // Bi-Weekly & Bi-Monthly -> Simplifying this
                for (let month = monthNumber; month < (monthNumber + 12); month++) {
                    const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
                    const totalBasedOnFrequency = transaction.amount * 2
        
                    if (totals.revenue[transaction.category].monthly[currentMonthName]) {
                        totals.revenue[transaction.category]
                            .monthly[currentMonthName]
                            .total += totalBasedOnFrequency
                    } else {
                        totals.revenue[transaction.category].monthly[currentMonthName] = {}
                        totals.revenue[transaction.category]
                            .monthly[currentMonthName].total = totalBasedOnFrequency 
                    }
                }
            } else if (transactionFrequency == MONTHLY) {
                // Monthly
                for (let month = monthNumber; month < (monthNumber + 12); month++) {
                    const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
                    const totalBasedOnFrequency = transaction.amount // no need to modify since this is already a monthly transaction
        
                    if (totals.revenue[transaction.category].monthly[currentMonthName]) {
                        totals.revenue[transaction.category]
                            .monthly[currentMonthName]
                            .total += totalBasedOnFrequency
                    } else {
                        totals.revenue[transaction.category].monthly[currentMonthName] = {}
                        totals.revenue[transaction.category]
                            .monthly[currentMonthName].total = totalBasedOnFrequency 
                    }
                }
            } else {
                // Yearly Will not implement this for now
                if (totals.revenue[transaction.category].monthly[monthName]) {     
                    totals.revenue[transaction.category]
                        .monthly[monthName].total += transaction.amount
                } else {
                    totals.revenue[transaction.category].monthly[monthName] = {}
                    totals.revenue[transaction.category].monthly[monthName].total = transaction.amount
                }
            }
        });

        //NOTES: Make the if elses into a switch statement
        // make the code DRY too much repetition on the for loop
        

        Object.values(this.transactions.spending).forEach(transaction => {
            // here is where we would also ensure we apply the inflation rate when doing the for loop to add each subsequent months transactions amounts
            if (!totals.spending[transaction.category]) {
                totals.spending[transaction.category] = {}
                totals.spending[transaction.category].monthly = {}
            }

            //get current date and add this to the
            const date = new Date(transaction.date)
            const monthNumber = date.getMonth()
            const monthName = date.toLocaleString('default', { month: 'long' });
            const transactionFrequency = transaction.frequency

            // One Time Transactions && Yearly are almost the same right now since we only doing things upto one year
            // Will definetly need to pass a param for the year from the current date
            if (transactionFrequency == ONE_TIME) {
                debugger
                if (totals.spending[transaction.category].monthly[monthName]) {     
                    totals.spending[transaction.category]
                        .monthly[monthName].total += transaction.amount
                } else {
                    totals.spending[transaction.category].monthly[monthName] = {}
                    totals.spending[transaction.category].monthly[monthName].total = transaction.amount
                }
            } else if (transactionFrequency == DAILY) {
                // Daily Transactions
                for (let month = monthNumber; month < (monthNumber + 12); month++) {
                    const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
                    const totalBasedOnFrequency = transaction.amount * FREQUENCY[MONTHLY]
                    
                    if (totals.spending[transaction.category].monthly[currentMonthName]) {
                        totals.spending[transaction.category]
                            .monthly[currentMonthName]
                            .total += totalBasedOnFrequency
                    } else {
                        totals.spending[transaction.category].monthly[currentMonthName] = {}
                        totals.spending[transaction.category]
                            .monthly[currentMonthName].total = totalBasedOnFrequency
                    }
                }
            } else if (transactionFrequency == WEEKLY) {
                // Weekly
                for (let month = monthNumber; month < (monthNumber + 12); month++) {
                    const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
                    const totalBasedOnFrequency = transaction.amount * (FREQUENCY[MONTHLY] / FREQUENCY[WEEKLY])
        
                    if (totals.spending[transaction.category].monthly[currentMonthName]) {
                        totals.spending[transaction.category]
                            .monthly[currentMonthName]
                            .total += totalBasedOnFrequency
                            // Assuming their are 4 weeks in a month
                            // FREQUENCY[MONTHLY] would have to be replace with the current months number of days to be more accurate
                    } else {
                        totals.spending[transaction.category].monthly[currentMonthName] = {}
                        totals.spending[transaction.category]
                            .monthly[currentMonthName].total = totalBasedOnFrequency 
                    }
                }
            } else if (transactionFrequency == BI_WEEKLY || transactionFrequency == BI_MONTHLY) {
                // Bi-Weekly & Bi-Monthly -> Simplifying this
                for (let month = monthNumber; month < (monthNumber + 12); month++) {
                    const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
                    const totalBasedOnFrequency = transaction.amount * 2
        
                    if (totals.spending[transaction.category].monthly[currentMonthName]) {
                        totals.spending[transaction.category]
                            .monthly[currentMonthName]
                            .total += totalBasedOnFrequency
                    } else {
                        totals.spending[transaction.category].monthly[currentMonthName] = {}
                        totals.spending[transaction.category]
                            .monthly[currentMonthName].total = totalBasedOnFrequency 
                    }
                }
            } else if (transactionFrequency == MONTHLY) {
                // Monthly
                for (let month = monthNumber; month < (monthNumber + 12); month++) {
                    const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
                    const totalBasedOnFrequency = transaction.amount // no need to modify since this is already a monthly transaction
        
                    if (totals.spending[transaction.category].monthly[currentMonthName]) {
                        totals.spending[transaction.category]
                            .monthly[currentMonthName]
                            .total += totalBasedOnFrequency
                    } else {
                        totals.spending[transaction.category].monthly[currentMonthName] = {}
                        totals.spending[transaction.category]
                            .monthly[currentMonthName].total = totalBasedOnFrequency 
                    }
                }
            } else {
                // Yearly Will not implement this for now
                if (totals.spending[transaction.category].monthly[monthName]) {     
                    totals.spending[transaction.category]
                        .monthly[monthName].total += transaction.amount
                } else {
                    totals.spending[transaction.category].monthly[monthName] = {}
                    totals.spending[transaction.category].monthly[monthName].total = transaction.amount
                }
            }
        });

        console.log(totals)
    }

    // create12MonthsMonthlyDatasetForTransactions(transaction) {
    //     // Convert this to it's own functions
    //     // here is where we would also ensure we apply the inflation rate when doing the for loop to add each subsequent months transactions amounts
    //     if (!totals.revenue[transaction.category]) {
    //         totals.revenue[transaction.category] = {}
    //         totals.revenue[transaction.category].monthly = {}
    //     }

    //     //get current date and add this to the
    //     const date = new Date(transaction.date)
    //     const monthNumber = date.getMonth()
    //     const monthName = date.toLocaleString('default', { month: 'long' });
    //     const transactionFrequency = transaction.frequency

    //     // One Time Transactions && Yearly are almost the same right now since we only doing things upto one year
    //     // Will definetly need to pass a param for the year from the current date
    //     if (transactionFrequency == ONE_TIME) {
    //         debugger
    //         if (totals.revenue[transaction.category].monthly[monthName]) {     
    //             totals.revenue[transaction.category]
    //                 .monthly[monthName].total += transaction.amount
    //         } else {
    //             totals.revenue[transaction.category].monthly[monthName] = {}
    //             totals.revenue[transaction.category].monthly[monthName].total = transaction.amount
    //         }
    //     } else if (transactionFrequency == DAILY) {
    //         // Daily Transactions
    //         for (let month = monthNumber; month < (monthNumber + 12); month++) {
    //             const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
    //             const totalBasedOnFrequency = transaction.amount * FREQUENCY[MONTHLY]
                
    //             if (totals.revenue[transaction.category].monthly[currentMonthName]) {
    //                 totals.revenue[transaction.category]
    //                     .monthly[currentMonthName]
    //                     .total += totalBasedOnFrequency
    //             } else {
    //                 totals.revenue[transaction.category].monthly[currentMonthName] = {}
    //                 totals.revenue[transaction.category]
    //                     .monthly[currentMonthName].total = totalBasedOnFrequency
    //             }
    //         }
    //     } else if (transactionFrequency == WEEKLY) {
    //         // Weekly
    //         for (let month = monthNumber; month < (monthNumber + 12); month++) {
    //             const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
    //             const totalBasedOnFrequency = transaction.amount * (FREQUENCY[MONTHLY] / FREQUENCY[WEEKLY])
    
    //             if (totals.revenue[transaction.category].monthly[currentMonthName]) {
    //                 totals.revenue[transaction.category]
    //                     .monthly[currentMonthName]
    //                     .total += totalBasedOnFrequency
    //                     // Assuming their are 4 weeks in a month
    //                     // FREQUENCY[MONTHLY] would have to be replace with the current months number of days to be more accurate
    //             } else {
    //                 totals.revenue[transaction.category].monthly[currentMonthName] = {}
    //                 totals.revenue[transaction.category]
    //                     .monthly[currentMonthName].total = totalBasedOnFrequency 
    //             }
    //         }
    //     } else if (transactionFrequency == BI_WEEKLY || transactionFrequency == BI_MONTHLY) {
    //         // Bi-Weekly & Bi-Monthly -> Simplifying this
    //         for (let month = monthNumber; month < (monthNumber + 12); month++) {
    //             const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
    //             const totalBasedOnFrequency = transaction.amount * 2
    
    //             if (totals.revenue[transaction.category].monthly[currentMonthName]) {
    //                 totals.revenue[transaction.category]
    //                     .monthly[currentMonthName]
    //                     .total += totalBasedOnFrequency
    //             } else {
    //                 totals.revenue[transaction.category].monthly[currentMonthName] = {}
    //                 totals.revenue[transaction.category]
    //                     .monthly[currentMonthName].total = totalBasedOnFrequency 
    //             }
    //         }
    //     } else if (transactionFrequency == MONTHLY) {
    //         // Monthly
    //         for (let month = monthNumber; month < (monthNumber + 12); month++) {
    //             const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
    //             const totalBasedOnFrequency = transaction.amount // no need to modify since this is already a monthly transaction
    
    //             if (totals.revenue[transaction.category].monthly[currentMonthName]) {
    //                 totals.revenue[transaction.category]
    //                     .monthly[currentMonthName]
    //                     .total += totalBasedOnFrequency
    //             } else {
    //                 totals.revenue[transaction.category].monthly[currentMonthName] = {}
    //                 totals.revenue[transaction.category]
    //                     .monthly[currentMonthName].total = totalBasedOnFrequency 
    //             }
    //         }
    //     } else {
    //         // Yearly Will not implement this for now
    //         if (totals.revenue[transaction.category].monthly[monthName]) {     
    //             totals.revenue[transaction.category]
    //                 .monthly[monthName].total += transaction.amount
    //         } else {
    //             totals.revenue[transaction.category].monthly[monthName] = {}
    //             totals.revenue[transaction.category].monthly[monthName].total = transaction.amount
    //         }
    //     }
    // }

    setupSVG() {
        this.svg = d3.select('div#graph').append('svg');
        
        this.margin = {
            left: 30,
            top: 30,
            right: 0,
            bottom: 0
          };
        
        this.svg.attr('width', "100%");

        this.svg.attr('height', 400);

        this.width = 400 - this.margin.left - 
        this.margin.right;

        this.height = 400 - this.margin.top - 
        this.margin.bottom;

        this.chart = this.svg.append('g')

        .attr('width', this.width)

        .attr('height', this.height)

        .attr('transform', `translate(${this.margin.left}, 
        ${this.margin.top})`);

        let x = d3.scale.ordinal()
            .rangeRoundBands([this.margin.left, this.width - this.margin.right], 0.1);

        let y = d3.scale.linear()
            .range([this.height, this.margin.bottom]);

        let xAxis = d3.svg.axis().scale(x).orient('bottom');

        let yAxis = d3.svg.axis().scale(y).orient('left');
    }
}

export default Graph;
