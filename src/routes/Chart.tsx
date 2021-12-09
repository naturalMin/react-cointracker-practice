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
      type = "line"
      series = {[
        {
          name: "Price",
          data: data?.map(price => price.close),
        },          
      ]}
      options = {{
        theme: {
          mode: "dark",
        },         
        chart: {
          height: 300,
          width: 500,
          toolbar: {
            show: false,
          },
          background: "transparant"
        },
        stroke: {
          curve: "smooth",
          width: 5,
        },
        grid: {
          show: false,
        },
        xaxis: {
          axisBorder: {show: false},
          axisTicks: {show: false},
          labels: {show: false},
          type: "datetime",
          categories: data?.map(price => price.time_close)
        },
        yaxis: {
          show: false,
        },
        fill: { 
          type: "gradient", 
          gradient: {
            type: "horizontal",
            gradientToColors: ["#0be881"],
            stops: [0, 100],              
          },
        },
        colors: ["#0fbcf9"],
        tooltip: {
          y: {
            formatter: (value) => `$ ${value.toFixed(2)}`,//처음 $ -> 통화 기호
          },
        }
      }}
      />
      )}
  </div>
  );
}

export default Chart;