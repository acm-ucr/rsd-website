interface HeaderProps {
  text: string;
}
const Header = ({ text }: HeaderProps) => {
  return (
    <div className="m-8 w-full text-center">
      <div className="font-rsd-main text-rsd-title-blue text-7xl">{text}</div>
    </div>
  );
};

export default Header;
