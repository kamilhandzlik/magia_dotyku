import Footer from "./components/Footer/Footer";
import HeroMain from "./components/Hero/HeroMain";
import Categories from "./components/Footer/MainPageComponents/categories";

export default function Home() {
  return (
    <>
      <HeroMain />
      <div className="py-20">
        <Categories />
      </div>
      <Footer />
    </>
  );
}
