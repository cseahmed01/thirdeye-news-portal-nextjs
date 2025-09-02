import Container from "@/components/common/Container";
import ArticleBody from "@/components/pages/article/ArticleBody";
import { fetchData } from "@/lib/fetchData";

export default async function page({ params }) {
  const { id } = await params;

  const article = await fetchData(`articles/details/${id}`, {
    revalidate: 10, // Revalidate every 5 minutes (ISR)
  });

  return (
    <Container className="py-14">
      <ArticleBody article={article} />
    </Container>
  );
}
