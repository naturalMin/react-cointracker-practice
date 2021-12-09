import { fetchCoinHistory } from "../api";
import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";


//type
interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId],   
  () => fetchCoinHistory(coinId),{
    refetchInterval: 10000,
  });
  return (
  <div>    
    { isLoading ? "Loading chart..." : (
      < ApexChart 
      type = "candlestick"
      series = {[
        {          
          data: data?.map(price => ({
            x: price.time_close,
            y: [price.open, price.high, price.low, price.close],
          })),
        },          
      ]}
      options = {{
        theme: {
          mode: "dark" ,
        },         
        chart: {
          height: 300,
          width: 500,
          toolbar: {
            show: false,
          },
          background: "transparant"
        },              
        grid: {
          show: true,
        },      
        xaxis: {
          axisBorder: {show: true},
          axisTicks: {show: true},
          labels: {            
            style: { colors: "#2d3436",}
          },
          type: "datetime",
          categories: data?.map(price => price.time_close)
        },
        yaxis: {
          show: true,          
          labels: {
            style: { colors: "#2d3436",},            
            formatter: (val) => {
              return val.toFixed(0);
            }
          }
        },    
      }}
      />
      )}
  </div>
  );
}

export default Chart;