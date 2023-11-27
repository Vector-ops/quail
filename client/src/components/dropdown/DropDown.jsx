import { CaretDown } from "@phosphor-icons/react";
import React, { useState } from "react";
import "./DropDown.scss";

const DropDown = ({ variant, list }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const closeDropdown = (event) => {
		if (!event.target.closest("#dropdownButton")) {
			setIsOpen(false);
		}
	};

	React.useEffect(() => {
		document.addEventListener("click", closeDropdown);
		return () => {
			document.removeEventListener("click", closeDropdown);
		};
	}, []);

	let listItems = list
		? list.map((item, index) => <li key={index}>{item}</li>)
		: null;

	variant = variant ? variant : "category";

	let text = variant === "category" ? "Categories" : "Filter";

	return (
		<div className="app__dropdown">
			<div
				id="dropdownButton"
				className={`app__dropdown-button-${variant}`}
				onClick={toggleDropdown}
			>
				<p>{text}</p>
				<CaretDown size={24} />
			</div>
			{isOpen && (
				<ul className={`app__dropdown-list-${variant}`}>{listItems}</ul>
			)}
		</div>
	);
};

export default DropDown;
