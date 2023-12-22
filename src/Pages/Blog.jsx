import { BlogCard } from "../Components/BlogCard"
import "./Blog.css"

const BlogInfo=[
    {
      key:1,
      image:"https://dentalist.netlify.app/static/media/1.44d8a4e5fdcd052924a7.png",
      name:"Technology",
      heading:"New Technology for dental Operations",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit"
    },
    {
      key:2,
      image:"https://dentalist.netlify.app/static/media/2.1d12a14f55d475104d4c.png",
      name:"Dental",
      heading:"Regular Dental Care makes you teeth Smile",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit"
    },
    {
      key:3,
      image:"https://dentalist.netlify.app/static/media/3.fc6715baa4bfbbf56dbb.png",
      name:"Hygiene",
      heading:"Dental Hygiene for all age to Make Smile",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit"
    },
  ]
const Blog = () => {
  return (
    <div className="Blog-Hero">
        <div className="Blog-News">
            <h1>News and Articles</h1>
            <p className="Blog-News-p">Stays updated with our latest blog and news and get healthy tips & trick for oral health</p>
        </div>

        <div className="Blog-Card">
            {BlogInfo.map(blog=>{
                return(
                    <BlogCard name={blog.name} description={blog.description} heading={blog.heading} image={blog.image}  key={blog.key}/>
                )
            })}
        </div>
    </div>
  )
}

export default Blog