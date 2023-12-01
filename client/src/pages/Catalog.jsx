import { useParams } from "react-router-dom";
import SearchComponent from "../components/search/SearchComponent";

const Catalog = () => {
	const { search } = useParams();

	return (
		<div>
			<SearchComponent data={search} />
		</div>
	);
};

export default Catalog;
