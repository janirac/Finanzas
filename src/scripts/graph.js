import * as d3 from "d3"
import transactionData from '../../exampleTransactions.json';
import { FREQUENCY, DAILY, WEEKLY, YEARLY, ONE_TIME, MONTH_NAMES, MONTHLY, BI_WEEKLY, BI_MONTHLY } from "./utils/constants";

class Graph{
    constructor(app, calc){
        this.app = app
        this.calc = calc
        // this.transactions = transactionData //file created for hard coded data
        // this.datasetBuilder()
    }

    setupSVG(){
        // const data = this.app.getRevenueData()
        // const data2 = this.app.getSpendingData()
        const data = this.app.data
        console.log(data)

        const margin = {top: 10, right: 30, bottom: 20, left: 50},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
        
        const svg = d3.select('#graph')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`)
            // .attr("viewBox", [0, 0, width, height]);

        const subgroups = data.columns.slice(1)
        const groups =  data.map(d => (d.month))

        console.log(subgroups)
        console.log("after subgroups")
        console.log(groups)
        console.log("before subs after groups")
        
        const x = d3.scaleBand()
            .domain(groups)
            .range([0, width])
            .padding([0.2]) 
            // svg.append("g")
            // .attr("transform",
            // "translate(" + margin.left + "," + margin.top + ")")
            // .call(d3.axisBottom(x).tickSizeOuter(0));
            svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));
        
            const test = this.app.getLargestNumber()

        const y = d3.scaleLinear()
            .domain([0,  test + 100])
            .range([height,0])
            svg.append("g")
            .call(d3.axisLeft(y));


        const color = d3.scaleOrdinal()
            .domain(subgroups)
            .range(['#A020F0','#301934','#CBC3E3'])

        const stackedData = d3.stack()
            .keys(subgroups)
            (data)

            console.log(stackedData)

        const barchart = svg
            .append("g")
            .selectAll("g")
            .data(stackedData)
            .enter().append('g')
            .attr("fill", function(d) {return color(d.key)})
            .selectAll("rect")
            .data(d => d)
            .enter().append('rect')
            .attr("x", d => x(d.data.month))
            .attr("y", d => y(d[1]))
            .attr("height", d => y(d[0]) - y(d[1]))
            .attr("width",x.bandwidth())


            // .selectAll("rect")
            // .data(data2.sort((a, b) => d3.descending(a.amount, b.amount)))
            // .enter().append('rect')
            // .attr("x", (d, i) => x(i))
            // .attr("y", d => y(d.amount))
            // .attr("height", d => y(0) - y(d.amount))
            // .attr("width", x.bandwidth() + 5);


        // function yAxis(g) {
        //     g.attr("transform", `translate(${margin.left}, 0)`)
        //     .call(d3.axisLeft(y).ticks(null, data.format))
        //     .attr("font-size", '14px')
        //     .attr("color", "purple")
        // }
        
        // function xAxis(g) {
        //     g.attr("transform", `translate(0,${height - margin.bottom})`)
        //     .call(d3.axisBottom(x).tickFormat(i => data[i].month))
        //     .attr("font-size", '10px')
        //     .attr("color", "purple")
        // }
        
        // svg.append("g").call(xAxis);
        // svg.append("g").call(yAxis);
        svg.node();

    }

    upDateGraph() {
        d3.select('svg').remove()
    }
    // setupSVG() {
    //     const data = this.app.getRevenueData()
        
    //     const width = 600;
    //     const height = 350;
    //     const margin = { top: 50, bottom: 50, left: 50, right: 20 }
        
    //     const svg = d3.select('#graph')
    //     .append('svg')
    //     .attr('width', width)
    //     .attr('height', height)

    //     const xScale = d3.scaleBand()
    //         .domain(d3.range(12))
    //         .range([margin.left, width - margin.right])

    //     const yScale = d3.scaleLinear()
    //         .domain([0, this.app.largestRevenueAmount])
    //         .range([height - margin.bottom, margin.top])

    //     // const x_axis = d3.axisBottom().scale(xScale)
    //     // const y_axis = d3.axisLeft().scale(yScale)

    //     svg
    //         .selectAll("rect")
    //         .data(data)
    //         .enter()
    //         .append("rect")
    //         .attr("y", function(d) {
    //             // debugger
    //             return yScale(d.amount)
    //         })
    //         .attr("x", function (d, i) {
    //             return xScale(i)
    //         })
    //         .attr("height", function(d){
    //             return yScale(d.amount)
    //         })
    //         .attr("width", xScale.bandwidth())
    //         console.log(yScale(0))

    //     // svg.append("g")
    //     //     .attr("transform", "translate(50, 10)")
    //     //     .call(y_axis)

    //     // const xAxisTranslate = height - 20

    //     // svg.append("g")
    //     //     .attr("transform", "translate(50, " + xAxisTranslate +")")
    //     //     .call(x_axis)

    //     function yAxis(g) {
    //         g.attr("transform", `translate(${margin.left}, 0)`)
    //             .call(d3.axisLeft(yScale).ticks(null, data.format))
    //             .attr("font-size", '20px')
    //     }
            
    //     function xAxis(g) {
    //         g.attr("transform", `translate(0,${height - margin.bottom})`)
    //             .call(d3.axisBottom(xScale).tickFormat(i => data[i].name))
    //             .attr("font-size", '20px')
    //     }
          
    //     svg.append("g").call(xAxis);
    //     svg.append("g").call(yAxis);
    //     svg.node();
        
    // }
}

    // Take the exampleTransactions object and turn in into multiple pieces of data
    // that can then be added to a graph
    // A totals object -> Will have only one graph of a yearly up and down based 
    // on the given transactions and frequencies
    // A revenue & expenses line graphs -> two lines over the period of a year
    // datasetBuilder() {
    //     // Totals data revenue will be on the back and expenses on the front.
    //     let totals = {
    //         revenue: {},
    //         spending: {}
    //     };

//         // revenue: {
//         // january: 1000,
//         //
//         //}
//         // We will be doing everything on a year for now to make this calculation easier
//         // We will also do this by the month

//         // 12 month yearly view below
//         Object.values(this.transactions.revenue).forEach(transaction => {
//             // here is where we would also ensure we apply the inflation rate when doing the for loop to add each subsequent months transactions amounts
//             if (!totals.revenue[transaction.category]) {
//                 totals.revenue[transaction.category] = {}
//                 totals.revenue[transaction.category].monthly = {}
//             }

//             //get current date and add this to the
//             const date = new Date(transaction.date)
//             const monthNumber = date.getMonth()
//             const monthName = date.toLocaleString('default', { month: 'long' });
//             const transactionFrequency = transaction.frequency

//             // One Time Transactions && Yearly are almost the same right now since we only doing things upto one year
//             // Will definetly need to pass a param for the year from the current date
//             if (transactionFrequency == ONE_TIME) {
//                 // debugger
//                 if (totals.revenue[transaction.category].monthly[monthName]) {     
//                     totals.revenue[transaction.category]
//                         .monthly[monthName].total += transaction.amount
//                 } else {
//                     totals.revenue[transaction.category].monthly[monthName] = {}
//                     totals.revenue[transaction.category].monthly[monthName].total = transaction.amount
//                 }
//             } else if (transactionFrequency == DAILY) {
//                 // Daily Transactions
//                 for (let month = monthNumber; month < (monthNumber + 12); month++) {
//                     const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
//                     const totalBasedOnFrequency = transaction.amount * FREQUENCY[MONTHLY]
                    
//                     if (totals.revenue[transaction.category].monthly[currentMonthName]) {
//                         totals.revenue[transaction.category]
//                             .monthly[currentMonthName]
//                             .total += totalBasedOnFrequency
//                     } else {
//                         totals.revenue[transaction.category].monthly[currentMonthName] = {}
//                         totals.revenue[transaction.category]
//                             .monthly[currentMonthName].total = totalBasedOnFrequency
//                     }
//                 }
//             } else if (transactionFrequency == WEEKLY) {
//                 // Weekly
//                 for (let month = monthNumber; month < (monthNumber + 12); month++) {
//                     const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
//                     const totalBasedOnFrequency = transaction.amount * (FREQUENCY[MONTHLY] / FREQUENCY[WEEKLY])
        
//                     if (totals.revenue[transaction.category].monthly[currentMonthName]) {
//                         totals.revenue[transaction.category]
//                             .monthly[currentMonthName]
//                             .total += totalBasedOnFrequency
//                             // Assuming their are 4 weeks in a month
//                             // FREQUENCY[MONTHLY] would have to be replace with the current months number of days to be more accurate
//                     } else {
//                         totals.revenue[transaction.category].monthly[currentMonthName] = {}
//                         totals.revenue[transaction.category]
//                             .monthly[currentMonthName].total = totalBasedOnFrequency 
//                     }
//                 }
//             } else if (transactionFrequency == BI_WEEKLY || transactionFrequency == BI_MONTHLY) {
//                 // Bi-Weekly & Bi-Monthly -> Simplifying this
//                 for (let month = monthNumber; month < (monthNumber + 12); month++) {
//                     const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
//                     const totalBasedOnFrequency = transaction.amount * 2
        
//                     if (totals.revenue[transaction.category].monthly[currentMonthName]) {
//                         totals.revenue[transaction.category]
//                             .monthly[currentMonthName]
//                             .total += totalBasedOnFrequency
//                     } else {
//                         totals.revenue[transaction.category].monthly[currentMonthName] = {}
//                         totals.revenue[transaction.category]
//                             .monthly[currentMonthName].total = totalBasedOnFrequency 
//                     }
//                 }
//             } else if (transactionFrequency == MONTHLY) {
//                 // Monthly
//                 for (let month = monthNumber; month < (monthNumber + 12); month++) {
//                     const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
//                     const totalBasedOnFrequency = transaction.amount // no need to modify since this is already a monthly transaction
        
//                     if (totals.revenue[transaction.category].monthly[currentMonthName]) {
//                         totals.revenue[transaction.category]
//                             .monthly[currentMonthName]
//                             .total += totalBasedOnFrequency
//                     } else {
//                         totals.revenue[transaction.category].monthly[currentMonthName] = {}
//                         totals.revenue[transaction.category]
//                             .monthly[currentMonthName].total = totalBasedOnFrequency 
//                     }
//                 }
//             } else {
//                 // Yearly Will not implement this for now
//                 if (totals.revenue[transaction.category].monthly[monthName]) {     
//                     totals.revenue[transaction.category]
//                         .monthly[monthName].total += transaction.amount
//                 } else {
//                     totals.revenue[transaction.category].monthly[monthName] = {}
//                     totals.revenue[transaction.category].monthly[monthName].total = transaction.amount
//                 }
//             }
//         });

//         //NOTES: Make the if elses into a switch statement
//         // make the code DRY too much repetition on the for loop
        

//         Object.values(this.transactions.spending).forEach(transaction => {
//             // here is where we would also ensure we apply the inflation rate when doing the for loop to add each subsequent months transactions amounts
//             if (!totals.spending[transaction.category]) {
//                 totals.spending[transaction.category] = {}
//                 totals.spending[transaction.category].monthly = {}
//             }

//             //get current date and add this to the
//             const date = new Date(transaction.date)
//             const monthNumber = date.getMonth()
//             const monthName = date.toLocaleString('default', { month: 'long' });
//             const transactionFrequency = transaction.frequency

//             // One Time Transactions && Yearly are almost the same right now since we only doing things upto one year
//             // Will definetly need to pass a param for the year from the current date
//             if (transactionFrequency == ONE_TIME) {
//                 // debugger
//                 if (totals.spending[transaction.category].monthly[monthName]) {     
//                     totals.spending[transaction.category]
//                         .monthly[monthName].total += transaction.amount
//                 } else {
//                     totals.spending[transaction.category].monthly[monthName] = {}
//                     totals.spending[transaction.category].monthly[monthName].total = transaction.amount
//                 }
//             } else if (transactionFrequency == DAILY) {
//                 // Daily Transactions
//                 for (let month = monthNumber; month < (monthNumber + 12); month++) {
//                     const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
//                     const totalBasedOnFrequency = transaction.amount * FREQUENCY[MONTHLY]
                    
//                     if (totals.spending[transaction.category].monthly[currentMonthName]) {
//                         totals.spending[transaction.category]
//                             .monthly[currentMonthName]
//                             .total += totalBasedOnFrequency
//                     } else {
//                         totals.spending[transaction.category].monthly[currentMonthName] = {}
//                         totals.spending[transaction.category]
//                             .monthly[currentMonthName].total = totalBasedOnFrequency
//                     }
//                 }
//             } else if (transactionFrequency == WEEKLY) {
//                 // Weekly
//                 for (let month = monthNumber; month < (monthNumber + 12); month++) {
//                     const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
//                     const totalBasedOnFrequency = transaction.amount * (FREQUENCY[MONTHLY] / FREQUENCY[WEEKLY])
        
//                     if (totals.spending[transaction.category].monthly[currentMonthName]) {
//                         totals.spending[transaction.category]
//                             .monthly[currentMonthName]
//                             .total += totalBasedOnFrequency
//                             // Assuming their are 4 weeks in a month
//                             // FREQUENCY[MONTHLY] would have to be replace with the current months number of days to be more accurate
//                     } else {
//                         totals.spending[transaction.category].monthly[currentMonthName] = {}
//                         totals.spending[transaction.category]
//                             .monthly[currentMonthName].total = totalBasedOnFrequency 
//                     }
//                 }
//             } else if (transactionFrequency == BI_WEEKLY || transactionFrequency == BI_MONTHLY) {
//                 // Bi-Weekly & Bi-Monthly -> Simplifying this
//                 for (let month = monthNumber; month < (monthNumber + 12); month++) {
//                     const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
//                     const totalBasedOnFrequency = transaction.amount * 2
        
//                     if (totals.spending[transaction.category].monthly[currentMonthName]) {
//                         totals.spending[transaction.category]
//                             .monthly[currentMonthName]
//                             .total += totalBasedOnFrequency
//                     } else {
//                         totals.spending[transaction.category].monthly[currentMonthName] = {}
//                         totals.spending[transaction.category]
//                             .monthly[currentMonthName].total = totalBasedOnFrequency 
//                     }
//                 }
//             } else if (transactionFrequency == MONTHLY) {
//                 // Monthly
//                 for (let month = monthNumber; month < (monthNumber + 12); month++) {
//                     const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
//                     const totalBasedOnFrequency = transaction.amount // no need to modify since this is already a monthly transaction
        
//                     if (totals.spending[transaction.category].monthly[currentMonthName]) {
//                         totals.spending[transaction.category]
//                             .monthly[currentMonthName]
//                             .total += totalBasedOnFrequency
//                     } else {
//                         totals.spending[transaction.category].monthly[currentMonthName] = {}
//                         totals.spending[transaction.category]
//                             .monthly[currentMonthName].total = totalBasedOnFrequency 
//                     }
//                 }
//             } else {
//                 // Yearly Will not implement this for now
//                 if (totals.spending[transaction.category].monthly[monthName]) {     
//                     totals.spending[transaction.category]
//                         .monthly[monthName].total += transaction.amount
//                 } else {
//                     totals.spending[transaction.category].monthly[monthName] = {}
//                     totals.spending[transaction.category].monthly[monthName].total = transaction.amount
//                 }
//             }
//         });

//         console.log(totals)
//     }

// //     // create12MonthsMonthlyDatasetForTransactions(transaction) {
// //     //     // Convert this to it's own functions
// //     //     // here is where we would also ensure we apply the inflation rate when doing the for loop to add each subsequent months transactions amounts
// //     //     if (!totals.revenue[transaction.category]) {
// //     //         totals.revenue[transaction.category] = {}
// //     //         totals.revenue[transaction.category].monthly = {}
// //     //     }

// //     //     //get current date and add this to the
// //     //     const date = new Date(transaction.date)
// //     //     const monthNumber = date.getMonth()
// //     //     const monthName = date.toLocaleString('default', { month: 'long' });
// //     //     const transactionFrequency = transaction.frequency

// //     //     // One Time Transactions && Yearly are almost the same right now since we only doing things upto one year
// //     //     // Will definetly need to pass a param for the year from the current date
// //     //     if (transactionFrequency == ONE_TIME) {
// //     //         debugger
// //     //         if (totals.revenue[transaction.category].monthly[monthName]) {     
// //     //             totals.revenue[transaction.category]
// //     //                 .monthly[monthName].total += transaction.amount
// //     //         } else {
// //     //             totals.revenue[transaction.category].monthly[monthName] = {}
// //     //             totals.revenue[transaction.category].monthly[monthName].total = transaction.amount
// //     //         }
// //     //     } else if (transactionFrequency == DAILY) {
// //     //         // Daily Transactions
// //     //         for (let month = monthNumber; month < (monthNumber + 12); month++) {
// //     //             const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
// //     //             const totalBasedOnFrequency = transaction.amount * FREQUENCY[MONTHLY]
                
// //     //             if (totals.revenue[transaction.category].monthly[currentMonthName]) {
// //     //                 totals.revenue[transaction.category]
// //     //                     .monthly[currentMonthName]
// //     //                     .total += totalBasedOnFrequency
// //     //             } else {
// //     //                 totals.revenue[transaction.category].monthly[currentMonthName] = {}
// //     //                 totals.revenue[transaction.category]
// //     //                     .monthly[currentMonthName].total = totalBasedOnFrequency
// //     //             }
// //     //         }
// //     //     } else if (transactionFrequency == WEEKLY) {
// //     //         // Weekly
// //     //         for (let month = monthNumber; month < (monthNumber + 12); month++) {
// //     //             const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
// //     //             const totalBasedOnFrequency = transaction.amount * (FREQUENCY[MONTHLY] / FREQUENCY[WEEKLY])
    
// //     //             if (totals.revenue[transaction.category].monthly[currentMonthName]) {
// //     //                 totals.revenue[transaction.category]
// //     //                     .monthly[currentMonthName]
// //     //                     .total += totalBasedOnFrequency
// //     //                     // Assuming their are 4 weeks in a month
// //     //                     // FREQUENCY[MONTHLY] would have to be replace with the current months number of days to be more accurate
// //     //             } else {
// //     //                 totals.revenue[transaction.category].monthly[currentMonthName] = {}
// //     //                 totals.revenue[transaction.category]
// //     //                     .monthly[currentMonthName].total = totalBasedOnFrequency 
// //     //             }
// //     //         }
// //     //     } else if (transactionFrequency == BI_WEEKLY || transactionFrequency == BI_MONTHLY) {
// //     //         // Bi-Weekly & Bi-Monthly -> Simplifying this
// //     //         for (let month = monthNumber; month < (monthNumber + 12); month++) {
// //     //             const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
// //     //             const totalBasedOnFrequency = transaction.amount * 2
    
// //     //             if (totals.revenue[transaction.category].monthly[currentMonthName]) {
// //     //                 totals.revenue[transaction.category]
// //     //                     .monthly[currentMonthName]
// //     //                     .total += totalBasedOnFrequency
// //     //             } else {
// //     //                 totals.revenue[transaction.category].monthly[currentMonthName] = {}
// //     //                 totals.revenue[transaction.category]
// //     //                     .monthly[currentMonthName].total = totalBasedOnFrequency 
// //     //             }
// //     //         }
// //     //     } else if (transactionFrequency == MONTHLY) {
// //     //         // Monthly
// //     //         for (let month = monthNumber; month < (monthNumber + 12); month++) {
// //     //             const currentMonthName = MONTH_NAMES[month % 12]; // 0 = January
// //     //             const totalBasedOnFrequency = transaction.amount // no need to modify since this is already a monthly transaction
    
// //     //             if (totals.revenue[transaction.category].monthly[currentMonthName]) {
// //     //                 totals.revenue[transaction.category]
// //     //                     .monthly[currentMonthName]
// //     //                     .total += totalBasedOnFrequency
// //     //             } else {
// //     //                 totals.revenue[transaction.category].monthly[currentMonthName] = {}
// //     //                 totals.revenue[transaction.category]
// //     //                     .monthly[currentMonthName].total = totalBasedOnFrequency 
// //     //             }
// //     //         }
// //     //     } else {
// //     //         // Yearly Will not implement this for now
// //     //         if (totals.revenue[transaction.category].monthly[monthName]) {     
// //     //             totals.revenue[transaction.category]
// //     //                 .monthly[monthName].total += transaction.amount
// //     //         } else {
// //     //             totals.revenue[transaction.category].monthly[monthName] = {}
// //     //             totals.revenue[transaction.category].monthly[monthName].total = transaction.amount
// //     //         }
// //     //     }
// //     // }

    
// //     // }

export default Graph;
