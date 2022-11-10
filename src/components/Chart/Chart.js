import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
	let total = props.dataPoints.reduce((a, b) => a + +b.value, 0);
	// props.dataPoints.map((dataPoint) => (total += +dataPoint.value));

	return (
		<div className="chart">
			{props.dataPoints.map((data) => (
				<ChartBar
					key={data.label}
					value={data.value}
					maxValue={total}
					label={data.label}
				></ChartBar>
			))}
		</div>
	);
}

export default Chart;
