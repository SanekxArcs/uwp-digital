import PropTypes from "prop-types";

import blog1 from "./../assets/img/blog1.webp";
import blog2 from "./../assets/img/blog1.webp";
import blog3 from "./../assets/img/blog1.webp";


const BlogPost = ({ imageSrc, category, date, title }) => (
  <a href="#" className="blog-post">
    <div className="flex flex-col">
      <img loading="lazy" src={imageSrc} alt={title} />
      <div className="flex items-center gap-4 mt-6 text-sm">
        <p className="px-3 py-2 rounded-full bg-gray">{category}</p>
        <p className="">{date}</p>
      </div>
      <h4 className="pt-4 body-p text-start">{title}</h4>
    </div>
  </a>
);

BlogPost.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


const Blog = () => {
  const blogPosts = [
    {
      imageSrc: blog1,
      category: "Business",
      date: "24.08.2022",
      title: "Advertising for business",
    },
    {
      imageSrc: blog2,
      category: "Business",
      date: "24.08.2022",
      title: "Social media advertising",
    },
    {
      imageSrc: blog3,
      category: "Business",
      date: "24.08.2022",
      title: "Internet promotion",
    },
    // Add more blog posts here
  ];

  return (
    <section
      id="BLOG"
      className="pb-20 mx-auto phone:w-[320px] tablet:w-[760px] laptop:w-[1650px] pt-36"
    >
      <div className="flex items-center justify-between w-full pb-10 text-white">
        <h2 className="h2">Read Blog</h2>
        <a href="#" className="flex items-center gap-2">
          <p className="font-bold body-p">Read all</p>
          <img
            loading="lazy"
            className="p-2 transition duration-300 border border-white rounded-full hover:bg-main hover:border-main"
            src="/img/link-arrow.svg"
            alt="Read All"
          />
        </a>
      </div>
      <div className="flex justify-between text-white">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            imageSrc={post.imageSrc}
            category={post.category}
            date={post.date}
            title={post.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
