import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import fetchData from "../utils/fetchData";
import { protocol } from "../utils/config";

export async function getStaticProps(context) {
  // const nft = await fetchData(
  //   `http://${process.env.VERCEL_URL}/api/content/nft`
  // );
  const URI = `${protocol()}${process.env.VERCEL_URL}/api/content/nft`;
  console.log("URI", URI);
  const response = await fetch(URI);
  const nft = await response.json();
  console.log("nft");

  return {
    props: {
      nft,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const { nft } = props;
  const { players } = nft;
  return (
    <div className={styles.container}>
      <Head>
        <title>Sports NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NFTs</h1>
        <p>Here are the list of NFTs</p>
        {players &&
          players.map((player, idx) => {
            return <div key={`${player}-${idx}`}>{player.athlete}</div>;
          })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
