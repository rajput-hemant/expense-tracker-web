import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMax = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((data) => (
				<ChartBar
					key={data.label}
					value={data.value}
					maxValue={totalMax}
					label={data.label}
				></ChartBar>
			))}
		</div>
	);
}

export default Chart;
