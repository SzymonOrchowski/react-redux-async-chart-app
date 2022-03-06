export const dataSourceChart2 = {
    chart: {},
    caption: {
      text: "Interest Rate Comparison"
    },
    subcaption: {
      text: "USA and Canada"
    },
    yaxis: [
      {
        plot: [
          {
            value: "Federal Reserve Bank",
            type: "line"
          },
          {
            value: "Bank of Canada",
            type: "line"
          }
        ],
        format: {
          suffix: "%"
        },
        title: "Interest Rate "
      }
    ],
    datamarker: [
      {
        value: "Bank of Canada",
        time: "Aug-1981",
        timeformat: "%b-%Y",
        tooltext:
          "To curb the high double digit inflation rate, Bank of Canada had to increase he interest rate to over 20%"
      },
      {
        value: "Bank of Canada",
        time: "Jun-2010",
        timeformat: "%b-%Y",
        tooltext:
          "Seeing the balance sheet expand to over $80 Billion after the financial crisis, Bank Of Canada started increasing the interest rates."
      },
      {
        value: "Bank of Canada",
        time: "Nov-1996",
        timeformat: "%b-%Y",
        tooltext:
          "The reduced interest rate propelled business investments in Canada."
      },
      {
        value: "Bank of Canada",
        time: "May-1990",
        timeformat: "%b-%Y",
        tooltext:
          "To fight inflationary pressure, interest rate reached around 15%"
      },
      {
        value: "Federal Reserve Bank",
        time: "Mar-1980",
        identifier: "H",
        timeformat: "%b-%Y",
        tooltext:
          "As a part of credit control program, under the leadership of Paul Volcker, the Fed tightened the money supply, allowing the federal fund rates to approach 20 percent."
      },
      {
        value: "Federal Reserve Bank",
        time: "Aug-1982",
        identifier: "L",
        timeformat: "%b-%Y",
        tooltext:
          "The FED eases off the monetary brakes, allowing interest rates to fall and the economy to begin a strong recovery."
      },
      {
        value: "Federal Reserve Bank",
        time: "Oct-1987",
        identifier: "L",
        timeformat: "%b-%Y",
        tooltext: "The FED is forced to ease rate after the stock market crash."
      },
      {
        value: "Federal Reserve Bank",
        time: "May-1989",
        identifier: "H",
        timeformat: "%b-%Y",
        tooltext:
          "Liquidity problem forced the Fed to increase rate to nearly 10%."
      },
      {
        value: "Federal Reserve Bank",
        time: "Sept-1992",
        identifier: "L",
        timeformat: "%b-%Y",
        tooltext:
          "To fight the jobless economy growth the Fed had to reduce the interest rate to 3%."
      },
      {
        value: "Federal Reserve Bank",
        time: "Jun-2003",
        identifier: "L",
        timeformat: "%b-%Y",
        tooltext:
          "Struggling to revive the economy, the FED cuts it’s benchmark rate to 1%."
      },
      {
        value: "Federal Reserve Bank",
        time: "Sep-2007",
        identifier: "L",
        timeformat: "%b-%Y",
        tooltext: "Fed started reducing the Federal Fund Rate."
      },
      {
        value: "Federal Reserve Bank",
        time: "Dec-2008",
        identifier: "L",
        timeformat: "%b-%Y",
        tooltext:
          "Fed reduced the interest rates to sub 0.25% to manage the menace of longest economic downturn since World War 2"
      }
    ]
  };