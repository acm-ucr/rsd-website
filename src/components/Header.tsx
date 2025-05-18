interface HeaderProps {
  text: string;
}
const Header = ({ text }: HeaderProps) => {
  return (
    <div className="flex mt-10 w-full items-center justify-center">
      <div className="font-rsd-main text-rsd-title-blue text-center text-6xl sm:text-7xl">{text}</div>
    </div>
  );
};

export default Header;
