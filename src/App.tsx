import Header from "./components/layout/Header";
import ProductGrid from "./components/product/ProductGrid";
import CategoryFilter from "./components/sections/CategoryFilter";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CategoryFilter />
      <ProductGrid/>
    </>
  );
}

export default App;
