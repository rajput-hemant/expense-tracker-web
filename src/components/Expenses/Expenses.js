import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
	const [year, setfilteredYear] = useState("2022");

	function fiterChangeHandler(selectedYear) {
		setfilteredYear(selectedYear);
	}

	return (
		<Card className="expenses">
			<ExpenseFilter selected={year} onChangeFilter={fiterChangeHandler} />

			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
}

export default Expenses;
