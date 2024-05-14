import {
	Binoculars,
	BookmarkSimple,
	GithubLogo,
	LinkedinLogo,
	ShoppingCartSimple,
} from "@phosphor-icons/react";
import React from "react";
import "./Button.scss";

const Button = ({ variant, text, handleClick, type, icon, width, height }) => {
	let buttonClass = "button ";

	width = width ? width : null;
	height = height ? height : null;

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
					case "linkedin":
						return <LinkedinLogo size={32} />;
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
			style={width && { width: width, height: height }}
		>
			{text ? text : ""}
			{iconCompinent}
		</button>
	);
};

export default Button;
