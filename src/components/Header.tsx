interface HeaderProps {
  text: string;
}
const Header = ({ text }: HeaderProps) => {
  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <div className="font-rsd-main text-rsd-title-blue text-center text-5xl sm:text-6xl xl:text-7xl">
        {text}
      </div>
    </div>
  );
};

export default Header;
