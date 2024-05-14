import { CaretLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axiosConfig";
import Button from "../button/Button";
import Cartbook from "../cartBook/Cartbook";
import "./Cart.scss";

const Cart = ({ setCartOpen, toggleCart }) => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// load books from cart
	useEffect(() => {
		setLoading(true);
		const getBooks = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_APP_SERVER_URL}/api/books/cart`,
					{
						withCredentials: true,
					}
				);
				if (!response.data) return console.log("No books found");
				setBooks(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getBooks();
	}, []);

	// remove book from cart
	const toggleCartItem = (bookId) => {
		setBooks((prev) => prev.filter((book) => book.id !== bookId));
	};

	// buy books in cart
	const buyBooks = async () => {
		try {
			if (books.length === 0) return;
			const response = await axios.post(
				`${import.meta.env.VITE_APP_SERVER_URL}/api/books/buy`
			);
			if (response.status === 200) {
				setBooks([]); // empty cart
				toggleCart(); // close cart
				navigate("/success");
			} else {
				throw new Error("Something went wrong");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="app__cart">
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<div className="app__cart-header">
						<CaretLeft
							size={32}
							onClick={() => toggleCart()}
							className="cart-back-button hover-blue"
						/>
						<p>
							Your Cart{" "}
							{books.length === 0 ? (
								""
							) : (
								<span className="app__cart-header-item-count">
									( {books.length} items )
								</span>
							)}
						</p>
					</div>
					<div className="app__cart-items">
						{books.map((book) => (
							<Cartbook
								key={book.id}
								data={book}
								toggleCartItem={toggleCartItem}
							/>
						))}
					</div>
					<div className="app__cart-footer">
						<div className="app__cart-footer-total">
							<p>Subtotal:</p>
							<div className="app__cart-footer-total-price">
								{books.length === 0
									? "\u20B90.00"
									: "\u20B9" +
									  books
											.reduce(
												(acc, book) =>
													acc +
													book.BookPrice.sellingPrice,
												0
											)
											.toFixed(2)}
							</div>
						</div>
						<div className="app__cart-footer-order">
							<Button
								text="Pay with stripe"
								variant="inverse"
								handleClick={buyBooks}
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
