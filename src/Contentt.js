import { useEffect, useState } from "react";
import React from "react";

const tabs = ['posts', 'comments', 'albums']

function Contentt() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [countDown, setCountDown] = useState(180)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //cooldown
    useEffect(()=>{
        setInterval(()=>{
            setCountDown(preState=>preState-1)
            console.log(setCountDown)
        },5000)
        return()=>{
            clearInterval(setCountDown)
        }
    })
    return (
        <div>
            {/* //coodown */}
        <h1>{countDown}</h1>
        
            {
                tabs.map(tab => (
                    <button key={tab} style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                        onClick={() => setType(tab)}> {tab}</button>
                ))
            }
            <input value={title}
                onChange={e => setTitle(e.target.value)}>

            </input>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
                {showGoToTop && (
                    <button style={{
                        position: "fixed",
                        right: 20,
                        bottom: 20
                    }} onClick={() => window.scrollTo(0, 0)}>
                        Go to Top
                    </button>
                )}
            </ul>
        </div>
    )


}
export default Contentt;