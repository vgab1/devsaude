import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm md:text-base">
      <p>
        Todos os direitos reservados &copy; {new Date().getFullYear()} -{" "}
        <Link
          href="https://www.instagram.com/devgabriel1/"
          target="_blank"
          className="text-gray-900 hover:text-emerald-700 font-semibold"
        >
          @devgabriel1
        </Link>
      </p>
    </footer>
  );
}
