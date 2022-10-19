import { useEffect, useState } from "react"


const ApiFetch = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [])

    console.log(posts)

    return (
        <div>
            <ul>
                {posts.map(post => <li>{post.id} : {post.title}</li>)}
            </ul>
        </div>
    )
}

export default ApiFetch