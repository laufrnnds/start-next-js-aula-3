import DefaultLayout from "@/layout/default";
import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import { useEffect, useState } from "react";

// type FruitsType = {
//   fruits: string[];
// };
// -----------------> GETSTATICPROPS <-----------------
// export const getStaticProps: GetStaticProps<FruitsType> = async (context) => {
//   const res = await fetch("http://localhost:3333/frutas");
//   const repo = await res.json();
//   const fruits = repo.data;
//   return { props: { fruits }, revalidate: 10 };
// };

// export default function Fruits({
//   fruits,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <>
//       <h1>Frutas</h1>
//       {fruits.map((item: string) => (
//         <h2 key={item}>{item}</h2>
//       ))}
//     </>
//   );
// }

// -----------------> GETSERVERSIDEPROPS <-----------------
// export const getServerSideProps: GetServerSideProps<FruitsType> = async (
//   context
// ) => {
//   const res = await fetch("http://localhost:3333/frutas");
//   const repo = await res.json();
//   const fruits = repo.data;
//   return { props: { fruits } };
// };

// export default function Fruits({
//   fruits,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   console.log(fruits);
//   return (
//     <>
//       <h1>Frutas</h1>
//       {fruits.map((item: string) => (
//         <h2 key={item}>{item}</h2>
//       ))}
//     </>
//   );
// }

export default function Fruits() {
  const [fruits, setFruits] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3333/frutas");

      const dataRes = await res.json();
      console.log(dataRes.data);
      setFruits(dataRes.data);
    };
    getData();
  }, []);
  return (
    <>
      <h1>Frutas</h1>
      {fruits.map((item: string) => (
        <h2 key={item}>{item}</h2>
      ))}
    </>
  );
}

Fruits.getLayout = DefaultLayout;
