import { Logo } from './Logo';

export function Header() {
  return (
    // w = full
    // p = padding, y = eixo, 5 = 20px = 20 / 4px
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}
