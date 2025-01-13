import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type Blog from "../../../types/Blog";

function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    // TODO: Fetch blog by slug
  }, [slug]);

  if (!blog) return null;

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{`${blog.title} | Your Site Name`}</title>
        <meta name="description" content={blog.subtitle} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.subtitle} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema.org markup for blog post */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            image: blog.image,
            datePublished: blog.date,
            dateModified: blog.date,
            author: {
              "@type": "Person",
              name: "Your Name",
            },
          })}
        </script>
      </Helmet>

      <article className="max-w-[1440px] mx-auto px-4 py-16">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl text-brand-blue font-bold mb-4">
            {blog.title}
          </h1>
          <p className="text-xl text-brand-blue-light mb-4">{blog.subtitle}</p>
          <time dateTime={blog.date} className="text-gray-500">
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </header>

        <img
          src={blog.image}
          alt={`Cover image for ${blog.title}`}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </>
  );
}

export default BlogPost;
