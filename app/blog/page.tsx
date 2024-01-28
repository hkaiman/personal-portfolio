
import Blogs from "@/components/sections/Blogs";
import { getPages } from "@/config/notion";

export default async function BlogPage() {
	const articles = await getPages();
	return (
		<div>
			<Blogs articles={articles} />
		</div>
	);
}
