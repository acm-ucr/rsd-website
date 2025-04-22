interface HeaderProps {
  text: string;
}
const Header = ({ text }: HeaderProps) => {
  return (
    <div className="my-8 w-full px-7 text-center">
      <div className="font-rsd-main text-rsd-title-blue text-[70px]">
        {text}
      </div>
    </div>
  );
};

export default Header;
