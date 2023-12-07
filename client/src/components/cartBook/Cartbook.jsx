import { Trash } from "@phosphor-icons/react";
import axios from "axios";
import defaultBook from "../../assets/book-default.png";
import Counter from "../counter/Counter";
import "./CartBook.scss";

const Cartbook = ({ data, toggleCartItem }) => {
	const toggleAddToCart = async () => {
		try {
			const response = await axios.post(
				"${import.meta.env.VITE_APP_SERVER_URL}/api/books/cart",
				{
					bookId: data.id,
				},
				{
					withCredentials: true,
				}
			);
			if (!response.data) {
				throw new Error("Error adding to cart");
			}
			toggleCartItem(data.id);
		} catch (error) {
			console.error("Error adding to cart:", error);
		}
	};

	return (
		<div className="app__cart_book">
			<img
				src={data.image ? data.image : defaultBook}
				alt="book cover"
				className="app__cart_book-cover"
			/>

			<div className="app__cart_book-options">
				<div className="app__cart_book-info">
					<div className="app__cart_book-info-detail">
						<h3>{data.title}</h3>
						<h4>{data.author}</h4>
					</div>
					<h2 className="cart_book-price">
						&#8377;{data.BookPrice.sellingPrice.toFixed(2)}
					</h2>
				</div>

				<div className="app__cart_book-buttons">
					<Counter data={data.count} />
					<Trash
						size={32}
						onClick={() => toggleAddToCart()}
						className="hover-blue"
					/>
				</div>
			</div>
		</div>
	);
};

export default Cartbook;
