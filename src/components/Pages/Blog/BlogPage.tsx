function BlogPage() {
  return (
    <section className="w-screen h-screen">
      {/* header */}
      <div className="w-full h-3/4 bg-brand-blue relative flex justify-end items-center p-16">
        <div>
          <h1 className="font-Black text-brand-orange relative">Blog Page</h1>
        </div>
        <div></div>
      </div>
      {/* Square ontpoo of banner */}
      <div className=" w-1/3 h-1/2 bg-brand-blue-light absolute bottom-20 left-20 flex justify-center items-center   p-16">
        <h2 className="font-Black text-brand-orange">Test</h2>
      </div>
    </section>
  );
}

export default BlogPage;
