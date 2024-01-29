interface BlogCardProps {
  title: string;
  date: string;
  description: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  description,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="text-small text-default-500 text-left font-bold text-lg">
        {date}
      </p>
      <p className="text-xl lg:text-2xl md:text-lg text-left font-bold">
        {title}
      </p>
      <p className="text-md lg:text-xl md:text-lg text-left">{description}</p>
    </div>
  );
};

export default BlogCard;
