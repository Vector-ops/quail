import { FolderOpen } from "@phosphor-icons/react";
import Button from "../button/Button";
import CategoryComponent from "../category/CategoryComponent";
import "./Categories.scss";

const Categories = ({ data }) => {
	const handleClick = (e) => {
		window.location.href = `#${e.target.innerText.toLowerCase()}`;
		console.log(e.target.innerText);
	};

	return (
		<>
			<div className="app__categories">
				<div className="app__categories-title">
					<FolderOpen className="app__categories-icon" size={36} />
					<h2>Categories</h2>
				</div>
				<div className="app__categories-buttons">
					{data.map((category, index) => {
						return (
							<Button
								variant="category"
								key={index}
								text={category.type}
								type="submit"
								handleClick={handleClick}
							/>
						);
					})}
				</div>
			</div>

			<div className="app__categories-component">
				{data.map((category, index) => {
					return <CategoryComponent key={index} data={category} />;
				})}
			</div>
		</>
	);
};

export default Categories;
