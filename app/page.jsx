import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Prompts
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI powered promts </span>
      </h1>
      <p className="desc text-center">Exploria Domain is an open source AI tool to discover modern tools via creative prompts</p>
      <Feed/>
    </section>
  )
}

export default Home