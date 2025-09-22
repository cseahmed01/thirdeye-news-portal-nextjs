import Container from "@/components/common/Container";
import ArticleBody from "@/components/pages/article/ArticleBody";
import { fetchData } from "@/lib/fetchData";
import { cookies } from "next/headers";

export default async function page({ params }) {
  const { id } = await params;
  const cookieStore = cookies();
  const userid = cookieStore.get("userid")?.value;

  const article = await fetchData(
    `articles/details/${id}${userid ? `/${userid}` : ""}`,
    {
      cache: "no-store", // Ensure fresh data on each request
      
    }
  );

  console.log("Article Data:", article);

  return (
    <Container className="py-14">
      <ArticleBody article={article} />
    </Container>
  );
}
