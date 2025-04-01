import Image from "next/image";
import { GridContainer } from "../GridContainer";
import Link from "next/link";

export function HeaderCuston() {
  return (
    <header>
      <GridContainer className="bg-turquoise-dark">
        <div className="flex items-center py-6">
          <div className="flex items-center p-8 space-x-4 rounded">
            {/* Images */}
            <Image
              src="/space_image.png"
              width={30}
              height={40}
              alt="Logo Web Site Leiria"
            />
            <Image
              src="/logo_leiria_web.png"
              width={142}
              height={40}
              alt="Logo Web Site Leiria"
            />

            {/* Navigation Links */}
            <nav className="flex ml-4 space-x-4">
              <Link href="/" className="text-white hover:underline">
                Home 1
              </Link>
              <Link href="/" className="text-white hover:underline">
                Home 2
              </Link>
            </nav>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
