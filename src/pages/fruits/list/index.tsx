import DefaultLayout from "@/layout/default";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type FruitsType = {
  fruits: string[];
};

export const getServerSideProps: GetServerSideProps<FruitsType> = async (
  context
) => {
  const res = await fetch("http://localhost:3333/frutas");
  const repo = await res.json();
  const fruits = repo.data;
  return { props: { fruits } };
};

export default function List({
  fruits,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(fruits);
  return (
    <>
      <h1>Frutas</h1>
      {fruits.map((item: string) => (
        <h2 key={item}>{item}</h2>
      ))}
    </>
  );
}

List.getLayout = DefaultLayout;
