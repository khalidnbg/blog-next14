import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post} key={""}>
        <PostCard />
      </div>
      <div className={styles.post} key={""}>
        <PostCard />
      </div>
      <div className={styles.post} key={""}>
        <PostCard />
      </div>
      <div className={styles.post} key={""}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
