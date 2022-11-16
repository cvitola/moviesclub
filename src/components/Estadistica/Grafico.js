import { useMemo, useContext } from "react";
import { DataContext } from '../../DataContextProvider';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  responsive: true,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Peliculas'
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Puntaje'
      }
    }
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function LineChart() {
  const { misPuntajes } = useContext(DataContext);
  let labels = [];
  let scores = [];
  let promedio = [];

  const obtenerLabels = () =>{
    misPuntajes.forEach(element => {
        labels.push(element.Title)
    });
    console.log(labels)
    return(labels);
  }

  const obtenerScores = () => {
    misPuntajes.forEach(element => {
      scores.push(element.MyScore);
    })
    return scores;
  }

  const obtenerPromedio = () => {
    let sum=0;
    misPuntajes.forEach(element => {
      sum += element.MyScore;
    })
    let prom = sum/misPuntajes.length;
    misPuntajes.forEach( element => {
      promedio.push(prom);
    })
    return promedio;
  }

  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: 'Mi puntaje',
          data: obtenerScores(),
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },{
          label: 'Promedio',
          fill: false,
          borderDash: [5, 5],
          data: obtenerPromedio(),
          tension: 0.3,
          borderColor: "rgb(200, 71, 103)",
          pointRadius: 6,
          
        }
        
      ],
      labels: obtenerLabels(),
    };
  }, []);

  return <Line data={data} options={options} />;
}