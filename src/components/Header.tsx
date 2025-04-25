<<<<<<< HEAD
const Header = () => {
  return <div>Header</div>;
=======
interface HeaderProps {
  text: string;
}
const Header = ({ text }: HeaderProps) => {
  return (
    <div className="m-8 w-full text-center">
      <div className="font-rsd-main text-rsd-title-blue text-7xl">{text}</div>
    </div>
  );
>>>>>>> cdd9360d4c6b9edf36b0f1466862060ef4cdc7e2
};

export default Header;
