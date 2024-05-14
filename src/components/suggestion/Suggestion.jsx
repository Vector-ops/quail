import BookComponent from "../book/BookComponent";
import "./Suggestion.scss";

const Suggestion = ({ data }) => {
	return (
		<div className="app__suggestions">
			{data.map((book, index) => {
				return <BookComponent key={index} data={book} />;
			})}
		</div>
	);
};

export default Suggestion;
