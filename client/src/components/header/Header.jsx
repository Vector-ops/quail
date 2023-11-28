import {
	BookOpen,
	BookmarkSimple,
	ShoppingCartSimple,
} from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	return (
		<nav className="app__header ">
			<Link className="app__header-logo" to="/">
				<BookOpen size={32} />
				<h1>Quail</h1>
			</Link>
			<div className="app__header-link ">
				<Link to="/favourites">
					<BookmarkSimple size={32} />
				</Link>
				<Link to="/cart">
					<ShoppingCartSimple size={32} />
				</Link>
			</div>
		</nav>
	);
};

export default Header;
