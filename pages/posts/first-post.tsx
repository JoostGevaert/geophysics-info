import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Image
        src="/images/post1.jpg"
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
