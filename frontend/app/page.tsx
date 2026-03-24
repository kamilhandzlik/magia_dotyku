import Footer from "./components/Footer/Footer";
import HeroMain from "./components/Hero/HeroMain";
import Categories from "./components/Footer/MainPageComponents/categories";
import AboutMeMainPage from "./components/Footer/MainPageComponents/AboutMeMainPage";

export default function Home() {
  return (
    <>
      <HeroMain />
      <div className="py-20">
        <Categories />
        <AboutMeMainPage />
      </div>
      <Footer />
    </>
  );
}
