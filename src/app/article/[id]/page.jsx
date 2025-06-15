// app/articles/[id]/page.jsx
import Container from "@/components/common/Container";
import ArticleBody from "@/components/pages/article/ArticleBody";
import { fetchData } from "@/lib/fetchData";

// export async function generateStaticParams() {
//   const articles = await fetchData("articles"); // Fetch all articles
//   return articles.map((article) => ({
//     id: article.id.toString(), // Ensure it's a string
//   }));
// }

export default async function ArticlePage({ params }) {
  const { id } = params;

  const article = await fetchData(`articles/details/${id}`, {
    revalidate: 300, // Revalidate every 5 minutes (ISR)
  });

  return (
    <Container className="py-14">
      <ArticleBody article={article} />
    </Container>
  );
}
