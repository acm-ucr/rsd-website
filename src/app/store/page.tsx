import StickersBox from "@/components/store/StickersBox";
import Header from "@/components/Header";
import ProductCard from "@/components/store/ProductCard";

const Store = () => {
  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <Header text="Featured Products" />
        <div className="flex h-screen w-screen items-center justify-center">
          <ProductCard productName="Shirt" productPrice="17.99$" />
          <ProductCard productName="Jacket" productPrice="29.99$" />
        </div>
      </div>
      <Header text="Stickers?" />
      <StickersBox />
    </div>
  );
};

export default Store;
