function HomeAbout() {
  return (
    <main className="px-4 py-8">
      <section aria-labelledby="about-heading">
        <h1
          id="about-heading"
          className="text-slate-100 text-2xl md:text-3xl mb-8 text-center"
        >
          About Me
        </h1>

        <div className="flex justify-center">
          <div className="max-w-xl lg:max-w-2xl px-2">
            <p className="text-slate-400 text-center md:text-left leading-relaxed">
              I’m a frontend developer with a strong focus on clean design,
              efficient code, and user-centered web experiences. I specialize in
              building responsive, modern interfaces using React and related
              technologies. With hands-on experience designing and developing
              e-commerce platforms — including admin dashboards, product
              listings, and secure authentication flows — I bring both technical
              precision and design intuition to every project. I value clarity,
              functionality, and performance. My approach combines thoughtful
              UI/UX decisions with scalable, maintainable code — ensuring that
              every feature not only looks good but works flawlessly across
              devices.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeAbout;
