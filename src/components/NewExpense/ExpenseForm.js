import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	// const [userInput, setUserInput] = useState({
	// 	title: "",
	// 	amount: "",
	// 	date: "",
	// });

	function titleChangeHandler(event) {
		setTitle(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	title: event.target.value,
		// }); /* might recieve outdated snapshots due to react scheduling state re-builds */

		// setUserInput((prevState) => {
		// 	return { ...prevState, title: event.target.value };
		// });
	}
	function amountChangeHandler(event) {
		setAmount(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	amount: event.target.value,
		// }); /* might recieve outdated snapshots due to react scheduling state re-builds */

		// setUserInput((prevState) => {
		// 	return { ...prevState, amount: event.target.value };
		// });
	}
	function dateChangeHandler(event) {
		setDate(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	date: event.target.value,
		// }); /* might recieve outdated snapshots due to react scheduling state re-builds */

		// setUserInput((prevState) => {
		// 	return { ...prevState, date: event.target.value };
		// });
	}

	function submitHandler(event) {
		event.preventDefault();

		const expenseData = { title: title, amount: amount, date: new Date(date) };

		props.onSaveExpenseData(expenseData);

		setTitle("");
		setAmount("");
		setDate("");
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={title} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={amount}
						onChange={amountChangeHandler}
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={date}
						onChange={dateChangeHandler}
						min="2019-01-01"
						max="2025-12-31"
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
