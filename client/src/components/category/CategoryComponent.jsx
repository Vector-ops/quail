import { Path } from "@phosphor-icons/react";
import defaultBook from "../../assets/book-default.png";
import BookComponent from "../book/BookComponent";
import "./CategoryComponent.scss";

const CategoryComponent = ({ data }) => {
	return (
		<div className="app__category" id={data.type.toLowerCase()}>
			<div className="app__category-title">
				<Path size={32} />
				<h3 className="title">{data.type}</h3>
			</div>
			<div className="app__category-books">
				{data.books.map((book, index) => (
					<BookComponent key={index} data={book} />
				))}
			</div>
		</div>
	);
};

export default CategoryComponent;
