import Footer from "./components/Footer/Footer";
import HeroMain from "./components/Hero/HeroMain";
import Categories from "./components/MainPageComponents/categories";
import AboutMeMainPage from "./components/MainPageComponents/AboutMeMainPage";
import SzkoleniaItems from "./components/szkolenia/SzkoleniItems";
import BooksyLink from "./components/booksyLink";

export default function Home() {
  return (
    <>
      <HeroMain />
      <div className="py-20">
        <Categories />
        <BooksyLink />
        <AboutMeMainPage />
        <div className="max-w-[1100px] mx-auto">
          <SzkoleniaItems />
        </div>
      </div>
      <Footer />
    </>
  );
}
