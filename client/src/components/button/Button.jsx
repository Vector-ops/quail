import {
	Binoculars,
	BookmarkSimple,
	ShoppingCartSimple,
} from "@phosphor-icons/react";
import React from "react";
import "./Button.scss";

const Button = ({ variant, text }) => {
	let buttonClass = "button ";

	const getIcon = (variant) => {
		switch (variant) {
			case "inverse":
				buttonClass += "inverse";
				return null;
			case "bookmark":
				buttonClass += "bookmark";
				return <BookmarkSimple size={32} />;
			case "explore":
				buttonClass += "explore";
				text = "Explore";
				return <Binoculars size={32} />;
			case "category":
				buttonClass += "category";
				return null;
			case "circle":
				buttonClass += "circle";
				return null;
			case "cart":
				buttonClass += "cart";
				return <ShoppingCartSimple size={32} />;
			// case "default":
			// 	buttonClass += "default";
			// 	return text === "Google" ? <GoogleLogo size={32} /> : null;
			default:
				buttonClass += "default";
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
