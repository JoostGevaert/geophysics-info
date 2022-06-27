import Link from 'next/link'
import Image from 'next/image'

export default function JoopGevaar() {
  return (
    <>
      <h1>Author: Joop Gevaar ⚠</h1>
      <Image
        src="/images/Pasfoto_Lisboa.jpeg"
        width={144}
        height={144}
        alt="Joop Gevaar"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
