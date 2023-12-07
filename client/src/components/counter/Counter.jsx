import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import "./Counter.scss";

const Counter = ({ data }) => {
	const [count, setCount] = useState(1);

	const increaseCount = () => {
		if (count < data) {
			setCount(count + 1);
		}
	};
	const decreaseCount = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	return (
		<div className="counter_count">
			<MinusCircle
				size={24}
				onClick={decreaseCount}
				className={count > 1 ? "hover-blue" : "disabled"}
				style={{ cursor: "pointer" }}
			/>
			<p>{count}</p>
			<PlusCircle
				size={24}
				onClick={increaseCount}
				className={count < data ? "hover-blue" : "disabled"}
				style={{ cursor: "pointer" }}
			/>
		</div>
	);
};

export default Counter;
