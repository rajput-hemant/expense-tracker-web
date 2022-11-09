import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

function Expenses(props) {
	const [year, setfilteredYear] = useState("2022");

	function fiterChangeHandler(selectedYear) {
		setfilteredYear(selectedYear);
	}

	const filteredExpenses = props.items.filter(
		(expense) => expense.date.getFullYear().toString() === year
	);

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter selected={year} onChangeFilter={fiterChangeHandler} />
				<ExpenseList items={filteredExpenses} />
			</Card>
		</div>
	);
}

export default Expenses;
