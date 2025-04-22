import ProductCard from "@/components/store/ProductCard";


const Store = () => {
 return (
   <div className="row flex h-screen w-screen items-center justify-center">
     <ProductCard productName="Shirt" productPrice="17.99$" />
     <ProductCard productName="Jacket" productPrice="29.99$" />
   </div>
 );
};


export default Store;
