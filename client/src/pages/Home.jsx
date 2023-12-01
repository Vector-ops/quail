import { useLoaderData } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import Categories from "../components/categories/Categories";
import Hero from "../components/hero/Hero";

const Home = () => {
	const books = useLoaderData();

	return (
		<div>
			<Hero />
			<Carousel />
			<Categories data={books} />
		</div>
	);
};

export default Home;
