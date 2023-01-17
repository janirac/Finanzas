import * as d3 from "d3"

class Graph{
    constructor(app, calc){
        this.app = app
        this.calc = calc
        this.svg = d3.select('div#graph').append('svg');
        this.margin = {

            left: 30,
      
            top: 30,
      
            right: 0,
      
            bottom: 0
      
          };
        this.svg.attr('width', 400);

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
    }

}

export default Graph;
