import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

export default function Header() {
  return (
    <header className="block w-full bg-white">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}
