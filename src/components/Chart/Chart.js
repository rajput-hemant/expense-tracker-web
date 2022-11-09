import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
	let totalMax = 0;
	props.dataPoints.map((dataPoint) => (totalMax += dataPoint.value));

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
