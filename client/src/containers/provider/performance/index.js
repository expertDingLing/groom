import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import PerformanceCard from '../../../components/provider/performanceCard';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { Line } from 'react-chartjs-2'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import {  GrayP } from '../../../components/styled-components'

const overviewItems = [
    {
        title: "Total Bookings",
        amount: "246k",
        percent: "13.8",
    },
    {
        title: "Product Sold",
        amount: "246k",
        percent: "13.8",
    },
    {
        title: "Total Earnings",
        amount: "246k",
        percent: "13.8",
    },
    {
        title: "Total Customers",
        amount: "246k",
        percent: "13.8",
    },
    {
        title: "Cancellation Rate",
        amount: "10%",
        percent: "13.8",
    }

];

const data1 = 
   {
       title: "Top Products",
       field1: "PRODUCT",
       field2: "AVAILABILITY",
       field3: "TOTAL",
       rows: [
           {
               url: "/assets/images/top-product-1.png",
               row1: "Women’s Vintage Peacoat",
               row2: "320 In Stock",
               row3: 29192
           },
           {
            url: "/assets/images/top-product-2.png",
            row1: "Women’s Vintage Peacoat",
            row2: "Out of Stock",
            row3: 29192
            },
            {
                url: "/assets/images/top-product-3.png",
                row1: "Women’s Vintage Peacoat",
                row2: "320 In Stock",
                row3: 29192
            },
            {
                url: "/assets/images/top-product-4.png",
                row1: "Women’s Vintage Peacoat",
                row2: "320 In Stock",
                row3: 29192
            },

       ]
    }
    const data2 = 
    {
        title: "Top Services",
        field1: "PRODUCT",
        field2: "SERVICE PROVIDED",
        field3: "TOTAL EARNINGS",
        rows: [
            {
                url: "/assets/images/top-product-1.png",
                row1: "Women’s Vintage Peacoat",
                row2: "320 times",
                row3: 29192
            },
            {
             url: "/assets/images/top-product-2.png",
             row1: "Women’s Vintage Peacoat",
             row2: "320 times",
             row3: 29192
             },
             {
                 url: "/assets/images/top-product-3.png",
                 row1: "Women’s Vintage Peacoat",
                 row2:"320 times",
                 row3: 29192
             },
             {
                 url: "/assets/images/top-product-4.png",
                 row1: "Women’s Vintage Peacoat",
                 row2: "320 times",
                 row3: 29192
             },
 
        ]
     }
     const data3 = 
     {
         title: "Top Customers",
         field1: "CUSTOMERS",
         field2: "TOTAL SERVICE AVAILED",
         field3: "TOTAL SPEND",
         rows: [
             {
                 url: "/assets/images/customer-1.png",
                 row1: "Women’s Vintage Peacoat",
                 row2: 320,
                 row3: 29192
             },
             {
              url: "/assets/images/customer-1.png",
              row1: "Women’s Vintage Peacoat",
              row2: 320,
              row3: 29192
              },
              {
                  url: "/assets/images/customer-1.png",
                  row1: "Women’s Vintage Peacoat",
                  row2: 320,
                  row3: 29192
              },
              {
                  url: "/assets/images/customer-1.png",
                  row1: "Women’s Vintage Peacoat",
                  row2: 320,
                  row3: 29192
              },
  
         ]
      }


//   chart data and setting //



export class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            mainChartOpts: {},
            mainChart: {},
        }
    }
    componentDidMount(){
        var chartData1 = [19, 7, 17, 12, 9];
        var chartData2 = [15, 10, 15, 17, 10];

        var ctx = document.getElementById('canvas').getContext("2d")
        var gradient1 = ctx.createLinearGradient(0, 0, 0, 250);
        gradient1.addColorStop(0, 'rgba(41, 148, 148, 0.3)');
        gradient1.addColorStop(1, '#fff');

        var gradient2 = ctx.createLinearGradient(0, 0, 0, 250);
        gradient2.addColorStop(0, 'rgba(41, 148, 148, 0.3)');
        gradient2.addColorStop(1, '#fff');

        const mainChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],

        datasets: [
            {
            label: 'Service provided',
            backgroundColor: gradient1,
            borderColor: '#299494',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: chartData1,
            },
            {
            label: 'Products sold',
            backgroundColor: gradient2,
            borderColor: '#A3A0FB',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: chartData2,
            },
        ],
        };

        const mainChartOpts = {
        responsive: true,
        tooltips: {
            enabled: true,
            custom: CustomTooltips,
            intersect: true,
            mode: 'index',
            position: 'nearest',
            callbacks: {
            labelColor: function(tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
            }
            }
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
            {
                gridLines: {
                    color: '#EAF0F4',
                    lineWidth: 2
                }
            }],
            yAxes: [
            {
                gridLines: {
                    color: '#EAF0F4',
                    lineWidth: 2
                },
                ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: Math.ceil(5),
                min: 5,
                max: 25,
                callback: function(value, index, values) {
                                return '$' + value + 'k';
                    }
                },
            }],
        },
        elements: {
            point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
            },
        },
        };

        this.setState({mainChart: mainChart});
        this.setState({mainChartOpts: mainChartOpts});
    }
    render() {
        return (
            <div className="preformance-container">
                <Typography variant="h5" component="h2">Overview</Typography>
                <Grid container className="overview-items">
                    {overviewItems.map((item, i) => {
                        return (
                            <Grid item key={i} >
                                <Paper elevation={0}className="overview-item-one">
                                    <Typography color="textSecondary" component="p" className="title">{item.title}</Typography>
                                    <Typography color="textSecondary" component="p" className="amount">{item.amount}</Typography>
                                    <Typography color="textSecondary" component="p" className="percent" >
                                        <TrendingFlatIcon style={{color: "#FF4141", fontSize: "10px",fontWeight: "bold", transform: "rotate(90deg)"}}/>
                                        {item.percent}%
                                    </Typography>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>

                <div className="chart-wrapper">
                    <GrayP fontSize="24px">Statistics of Sales and Booking</GrayP>
                    <Line id='canvas' data={this.state.mainChart} options={this.state.mainChartOpts} className="line-chart-body"/>
                    <div style={{display: "flex"}}>
                        <div className="product-tip">
                            <div></div>
                            <GrayP fontSize="16px">Products sold</GrayP>
                        </div>
                        <div className="service-tip">
                            <div></div>
                            <GrayP fontSize="16px">Service provided</GrayP>
                        </div>
                    </div>
                </div>

                <Grid container spacing={4}>
                    <Grid item lg={6}>
                        <PerformanceCard data={data1} />
                    </Grid>
                    <Grid item lg={6}>
                        <PerformanceCard data={data2} />
                    </Grid>
                    <Grid item lg={6}>
                        <PerformanceCard data={data3} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default index
