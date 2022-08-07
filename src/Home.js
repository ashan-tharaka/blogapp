
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home=()=>{
   // let name='mario';



    /*const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);

    }*/


    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');




return(

    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>...Loading</div>}
        {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}

        {/*<BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title={"Mario's Blogs"}/>*/}
     {/* <button onClick={()=>setName('luigi')} >Change Name</button>*/}
     {/*<p>{name}</p>*/}



    </div>
)
}
export default Home;
