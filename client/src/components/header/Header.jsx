import {
	BookOpen,
	BookmarkSimple,
	ShoppingCartSimple,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import "./Header.scss";

const Header = () => {
	const [cartOpen, setCartOpen] = useState(false);

	const toggleCart = () => {
		setCartOpen(!cartOpen);
	};
	return (
		<nav className="app__header">
			<NavLink className="app__header-logo" to="/">
				<BookOpen size={32} />
				<h1>Quail</h1>
			</NavLink>
			<div className="app__header-link ">
				<NavLink to="/favourites" className="center">
					<BookmarkSimple size={32} className="hover-blue" />
				</NavLink>

				<ShoppingCartSimple
					size={32}
					className="hover-blue"
					onClick={() => toggleCart()}
				/>
			</div>

			{cartOpen && <Cart toggleCart={toggleCart} cartOpen={cartOpen} />}
		</nav>
	);
};

export default Header;
