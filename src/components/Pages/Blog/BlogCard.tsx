import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function BlogCard({ title, description, image, link }: BlogCardProps) {
  return (
    <div className="w-contain h-full p-4 m-4 flex flex-col justify-center items-center hover:cursor-pointer mb-16">
      <Link to={link}>
        <div className="w-full h-contain relative flex flex-col justify-center">
          <div className="w-full h-contain relative flex flex-col justify-center">
            <img
              src={image}
              alt=""
              className="w-[500px] h-[150px] md:h-[225px] object-cover shadow-lg "
            />
          </div>
          <div className="w-[90%] min-h-1/2  bg-white  flex flex-col justify-end items-center py-4 absolute top-[82.5%] left-[5%] shadow-md">
            <h3 className="text-brand-blue text-[16px]  text-center ">{title}</h3>
            <div className="w-full flex justify-center py-1">
              <div className="w-1/4 border-t-2 border-gray-300"></div>
            </div>
            <p className="text-brand-blue text-center text-[15px]">
              {description}
            </p>
           
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;