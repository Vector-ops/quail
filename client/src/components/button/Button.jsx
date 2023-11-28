import {
	Binoculars,
	BookmarkSimple,
	GithubLogo,
	ShoppingCartSimple,
} from "@phosphor-icons/react";
import React from "react";
import "./Button.scss";

const Button = ({ variant, text, handleClick, type, icon }) => {
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
				switch (icon) {
					case "github":
						return <GithubLogo size={32} />;
					case "google":
						return <GoogleLogo size={32} />;
					default:
						return null;
				}
			case "cart":
				buttonClass += "cart";
				return <ShoppingCartSimple size={32} />;
			default:
				buttonClass += "default";
				return null;
		}
	};

	const iconCompinent = getIcon(variant);

	return (
		<button
			type={type ? type : "button"}
			className={buttonClass}
			onClick={handleClick ? handleClick : null}
		>
			{text ? text : ""}
			{iconCompinent}
		</button>
	);
};

export default Button;
