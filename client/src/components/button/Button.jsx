import {
	Binoculars,
	BookmarkSimple,
	ShoppingCartSimple,
} from "@phosphor-icons/react";
import React from "react";
import "./Button.scss";

const Button = ({ variant, text }) => {
	let buttonClass = "button ";

	switch (variant) {
		case "inverse":
			buttonClass += "inverse";
			break;
		case "bookmark":
			buttonClass += "bookmark";
			break;
		case "explore":
			buttonClass += "explore";
			text = "Explore";
			break;
		case "category":
			buttonClass += "category";
			break;
		case "circle":
			buttonClass += "circle";
			break;
		case "cart":
			buttonClass += "cart";
			break;
		default:
			buttonClass += "default";
	}

	const getIcon = (variant) => {
		switch (variant) {
			case "bookmark":
				return <BookmarkSimple size={32} />;
			case "explore":
				return <Binoculars size={32} />;
			case "cart":
				return <ShoppingCartSimple size={32} />;
			default:
				return null;
		}
	};

	const iconCompinent = getIcon(variant);

	return (
		<button type="button" className={buttonClass}>
			{text ? text : ""}
			{iconCompinent}
		</button>
	);
};

export default Button;
