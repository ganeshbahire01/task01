import Link from "next/link";
import styles from "./postcard.module.scss";
import { Post } from "@/types";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const imageIndex = (post.id % 3) + 1; // Dynamically choose an image based on post ID
  const imagePath = `/image${imageIndex}.webp`;

  return (
    <Link href={`/posts/${post.id}`} className={styles.card}>
      <Image
        src={imagePath}
        alt={`Post ${post.id}`}
        height={200}
        width={200}
        className={styles.image}
      />
      <h2>{post.title.slice(0, 20)}...</h2>
      <p>{post.body.slice(0, 100)}...</p>
    </Link>
  );
}
