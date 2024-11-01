import Link from "next/link";
import Image from "next/image";

// Stylized social logo link component
const SocialLink = ({ href, src, alt }) => {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} className="w-12 h-12" />
    </Link>
  );
};

export default SocialLink;
