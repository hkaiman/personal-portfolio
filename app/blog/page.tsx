import BlogCard from "@/components/cards/BlogCard";
import { title } from "@/components/primitives";
import Blogs from "@/components/sections/Blogs";
import Projects from "@/components/sections/Projects";
// import Blogs from "@/components/sections/Blogs";
import { getPages } from "@/config/notion";
import Col from "react-bootstrap/esm/Col";

export default async function BlogPage() {
	return (
		<div>
			<Blogs />
		</div>
	);
}
