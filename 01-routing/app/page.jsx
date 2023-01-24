import Link from "next/link";



export default function Home() {
  return (
    <div>
      <Link href="/hakkimizda"> Hakkimizda</Link>
      <br />
      <Link
      href={{
      pathname:"/hakkimizda",
      query: {
        name: "Next.js",
        surname: "ffff"},
        }}
      
      >
        hakkımızda obje
      </Link>
    </div>
  )
}
