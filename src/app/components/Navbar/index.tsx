import Link from "next/link";
import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function MainNavBar() {
  return (
    <GridContainer className="bg-turquoise-dark">
      <div className="flex items-center justify-between py-16">
        <div className="flex items-center p-8 space-x-4 rounded">
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
      </div>
    </GridContainer>
  );
}
