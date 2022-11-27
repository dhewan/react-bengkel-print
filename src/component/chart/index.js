import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
} from "chart.js"


function LineDemo() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend
  )




  const data = {
    labels: ["20/04/2022", "21/04/2022", "22/04/2022", "23/04/2022", "24/04/2022"],
    datasets: [
      {
        label: "Riwayat Pergantian",
        data: [8, 4, 7, 5, 3],
        borderColor: "black",
        backgroundColor: "white"
      }
    ]
  }
  return (
    <Line
      data={data}
      options={{
        responsive: true
      }}
    />
  )
}

export default LineDemo
