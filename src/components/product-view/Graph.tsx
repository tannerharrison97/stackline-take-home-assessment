import React from "react";
import Chart from "chart.js/auto";
import { Product } from "../../types/ProductTypes";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);


export interface GraphProps {
    product: Product
}

const Graph = ({ product }: GraphProps) => {

    const chartData = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'retail sales',
                data: product.sales.map(sale => sale.retailSales),
                borderColor: "rgb(68, 168, 246)",
                borderWidth: 2,
                tension: 0.3
            },
            {
                label: 'wholesale sales',
                data: product.sales.map(sale => sale.wholesaleSales),
                borderColor: "black",
                borderWidth: 2,
                tension: 0.3
            }
        ]
    }

    return (<div className="chart-container">
        <h2 style={{ textAlign: "left" }}><p style={{ fontSize: '16px', fontWeight: 'normal' }}>Retail Sales</p></h2>
        <Line
            data={chartData}
            options={{
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: true,
                        },

                    },
                    y: {
                        display: false,
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }}
        />
    </div>)
}

export default Graph