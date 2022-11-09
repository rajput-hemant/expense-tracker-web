import "./ExpenseFilter.css";

function ExpenseFilter(props) {
	function dropdownHandler(event) {
		props.onChangeFilter(event.target.value);
	}

	return (
		<div className="expense-filter">
			<div className="expense-filter__control">
				<label>Filter by Year</label>
				<select value={props.selected} onChange={dropdownHandler}>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
				</select>
			</div>
		</div>
	);
}

export default ExpenseFilter;
