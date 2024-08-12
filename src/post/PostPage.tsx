import { BlogPage, Post } from "studio/lib/payloads/pages";
import PostHero from "./hero/PostHero";
import Lead from "./lead/Lead";
import styles from "./post.module.css";
import { RichText } from "src/components/richText/RichText";
import MorePostsGrid from "./morePostsGrid/MorePostsGrid";

const PostPage = ({
  post,
  slug,
  posts,
  blog,
}: {
  post: Post;
  slug: string;
  posts: Post[];
  blog: BlogPage;
}) => {
  return (
    <>
      <PostHero title={post.basicTitle} date={post._createdAt} />
      <div className={styles.post}>
        <div className={styles.body}>
          <Lead richText={post.lead.richText} image={post.lead.image} />
          <RichText value={post.richText} />
        </div>
      </div>
      <MorePostsGrid
        title={`More ${blog?.allPostsLabel}`}
        posts={posts}
        slug={slug}
      />
    </>
  );
};

export default PostPage;
