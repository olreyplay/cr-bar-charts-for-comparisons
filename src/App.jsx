import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

function App() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Apples", "Bananas", "Cherries"],
        datasets: [
          {
            label: "2024",
            data: [120, 90, 150],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
          {
            label: "2025",
            data: [140, 110, 170],
            backgroundColor: "rgba(255, 99, 132, 0.6)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    chartRef.current = chart;
    return () => chart.destroy();
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto" }}>
      <div style={{ height: 400 }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

export default App;
