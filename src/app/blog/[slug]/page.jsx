import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = async ({ params }) => {
  console.log(params);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/noavatar.png"} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{"post title"}</h1>
        <div className={styles.detail}>
          <Image
            src={"/noavatar.png"}
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>{"NBG"}</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{"01/01/2015"}</span>
          </div>
        </div>
        <div className={styles.content}>{"post desc"}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
