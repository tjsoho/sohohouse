import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

function BlogCard({ title, description, image, date, link }: BlogCardProps) {
  return (
    <div className="w-full h-full p-4 m-4 flex flex-col justify-center items-center hover:cursor-pointer">
      <Link to={link}>
        <div className="w-full h-contain relative flex flex-col justify-center">
          <div className="w-full h-contain relative flex flex-col justify-center">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="w-[90%] min-h-1/2  bg-brand-orange-light  flex flex-col justify-end items-center py-4 absolute top-[82.5%] left-[5%] shadow-md">
            <h3 className="text-brand-blue text-xl  text-center ">{title}</h3>
            <p className="text-brand-blue text-center text-[16px]">
              {description}
            </p>
            <p className="text-brand-blue text-center text-[12px]">{date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
