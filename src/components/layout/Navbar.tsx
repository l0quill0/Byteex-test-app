import { Wrapper } from '../base';

export const Navbar = () => {
  return (
    <nav className="w-full bg-transparent h-[70px] flex items-center">
      <Wrapper className="max-w-[1464px] flex items-center justify-center md:justify-start h-full w-full px-4 md:px-0 md:pl-24 lg:pl-[102px]">
        <img src="/logo-main.svg" alt="Byteex Logo" className="w-[160px] sm:w-[200px] object-contain" />
      </Wrapper>
    </nav>
  );
};
