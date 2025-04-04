import Link from "next/link";
import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function MainNavBar() {
  return (
    <GridContainer className="bg-turquoise-dark">
      <div className="flex items-center justify-between py-4">
        {/* Left Section: Home Button */}
        <div className="flex items-center space-x-4">
          <Image
            src="/space_image.png"
            width={30}
            height={40}
            alt="Logo Web Site Leiria"
          />
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </div>

        {/* Left-Aligned Section: Other Links and Dropdowns */}
        <nav className="flex items-center space-x-6">
          <Link href="/area-pessoal" className="text-white hover:underline">
            Área Pessoal
          </Link>
          <Image
            src="/space_image.png"
            width={15}
            height={40}
            alt="Logo Web Site Leiria"
          />
          <Link href="/agenda" className="text-white hover:underline">
            Agenda
          </Link>
          <Image
            src="/space_image.png"
            width={15}
            height={40}
            alt="Logo Web Site Leiria"
          />
          <div className="relative group">
            <button className="text-white hover:underline">
              Balcão de Serviços
            </button>
            <div className="absolute hidden mt-2 text-black bg-white rounded shadow-lg group-hover:block">
              <Link
                href="/servico-1"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Serviço 1
              </Link>
              <Link
                href="/servico-2"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Serviço 2
              </Link>
            </div>
          </div>
          <Image
            src="/space_image.png"
            width={15}
            height={40}
            alt="Logo Web Site Leiria"
          />
          <Link href="/contactos" className="text-white hover:underline">
            Contactos
          </Link>
          <Image
            src="/space_image.png"
            width={15}
            height={40}
            alt="Logo Web Site Leiria"
          />
          <div className="relative group">
            <button className="text-white hover:underline">
              Portal de Acesso de Dados
            </button>
            <div className="absolute hidden mt-2 text-black bg-white rounded shadow-lg group-hover:block">
              <Link
                href="/dados-1"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Dados 1
              </Link>
              <Link
                href="/dados-2"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Dados 2
              </Link>
            </div>
          </div>
          <Image
            src="/space_image.png"
            width={15}
            height={40}
            alt="Logo Web Site Leiria"
          />
          <div className="relative group">
            <button className="text-white hover:underline">DSA</button>
            <div className="absolute hidden mt-2 text-black bg-white rounded shadow-lg group-hover:block">
              <Link href="/dsa-1" className="block px-4 py-2 hover:bg-gray-200">
                DSA 1
              </Link>
              <Link href="/dsa-2" className="block px-4 py-2 hover:bg-gray-200">
                DSA 2
              </Link>
            </div>
          </div>
          <Image
            src="/space_image.png"
            width={15}
            height={40}
            alt="Logo Web Site Leiria"
          />
          <div className="relative group">
            <button className="text-white hover:underline">
              Administração
            </button>
            <div className="absolute hidden mt-2 text-black bg-white rounded shadow-lg group-hover:block">
              <Link
                href="/admin-1"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Administração 1
              </Link>
              <Link
                href="/admin-2"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Administração 2
              </Link>
            </div>
          </div>
          <Image
            src="/space_image.png"
            width={15}
            height={40}
            alt="Logo Web Site Leiria"
          />
        </nav>
      </div>
    </GridContainer>
  );
}
