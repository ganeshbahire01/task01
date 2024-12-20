import { getPosts } from "@/lib/api";
import PostCard from "@/components/postcard";
import styles from "@/styles/page.module.scss";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={styles.main}>
      <h1>Blog Posts</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
