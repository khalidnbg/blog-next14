import { addPost, deletePost } from "@/lib/actions";

const ServerActionTest = () => {
  // const actionInComponent = async () => {
  //   "use server";
  //   console.log("it works");
  // };

  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="desc" placeholder="desc" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button>Click</button>
      </form>
      <br />
      <br />
      <br />
      <form action={deletePost}>
        <input type="text" placeholder="post id" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
