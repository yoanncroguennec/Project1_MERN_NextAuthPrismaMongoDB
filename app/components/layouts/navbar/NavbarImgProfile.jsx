// NEXT
import Image from "next/image";

export default function NavbarImgProfile({session, stylesImg}) {
  return (
    <div>
      {session?.user?.image !== null && (
        <Image
          alt=''
          height={200}
          src={session?.user?.image}
          style={stylesImg}
          width={200}
        />
      )}
      {session?.user?.image === null && <div>Pas de photo</div>}
    </div>
  );
}
