import { getPost } from "@/lib/api";
import { Metadata } from "next";
import styles from "@/styles/post.module.scss";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 160),
      type: "article",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const id = (await params).id;
  const post = await getPost(id);
  if (!post) {
    return notFound();
  }
  const imageIndex = (post.id % 3) + 1; // Dynamically choose an image based on post ID
  const imagePath = `/image${imageIndex}.webp`;

  return (
    <article className={styles.article}>
      <Image
        src={imagePath}
        alt={`Post ${post.id}`}
        height={500}
        width={200}
        quality={100}
        className={styles.image}
      />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
