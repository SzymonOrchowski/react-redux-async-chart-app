export const dataSourceChart1 = {
    chart: {},
    caption: {
      text: "Stock history of IBM"
    },
    subcaption: {
      text: "Over one million data points"
    },
    yaxis: [
      {
        plot: {
          value: "Closing Price",
          connectnulldata: true
        },
        format: {
          prefix: "$"
        },
        title: "Closing Stock Price"
      }
    ]
  };