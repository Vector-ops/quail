import {
	BookOpen,
	BookmarkSimple,
	ShoppingCartSimple,
} from "@phosphor-icons/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	return (
		<nav className="app__header ">
			<NavLink className="app__header-logo" to="/">
				<BookOpen size={32} />
				<h1>Quail</h1>
			</NavLink>
			<div className="app__header-link ">
				<NavLink to="/favourites">
					<BookmarkSimple size={32} className="hover-blue" />
				</NavLink>
				<NavLink to="/cart">
					<ShoppingCartSimple size={32} className="hover-blue" />
				</NavLink>
			</div>
		</nav>
	);
};

export default Header;
