import Image from "next/image";
import { GridContainer } from "../GridContainer";
import Link from "next/link";

export function HeaderCuston() {
  return (
    <header>
      <GridContainer className="bg-turquoise-base">
        <div className="flex items-center justify-between py-6">
          {/* Left Section: Images */}
          <div className="flex items-center p-8 space-x-4 rounded">
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
          </div>

          {/* Right Section: Links */}
          <nav className="flex space-x-4">
            <Link href="/" className="text-white hover:underline">
              Home 1
            </Link>
            <Image
              src="/space_image.png"
              width={30}
              height={40}
              alt="Logo Web Site Leiria"
            />
            <Link href="/" className="text-white hover:underline">
              Home 2
            </Link>
            <Image
              src="/space_image.png"
              width={30}
              height={40}
              alt="Logo Web Site Leiria"
            />
          </nav>
        </div>
      </GridContainer>
    </header>
  );
}
