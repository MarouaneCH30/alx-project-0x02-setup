import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const posts = [
  {
    title: "Post 1",
    content: "This is the content of post 1",
    userId: "1",
  },
  {
    title: "Post 2",
    content: "This is the content of post 2",
    userId: "2",
  },
];

const Posts = () => {
  return (
    <>
        <Header />

      <section>
        <h3>Welcome to Posts</h3>
        {posts.map((item) => { 
          return <PostCard title={item.title} content={item.content} key={item.userId} />
        })}
      </section>
    
    </>
  );
}

export default Posts;