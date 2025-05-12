import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

export default function AddPost() {

    const [isPosts, setPosts] = useState([]);
    const titleRef = useRef();
    const descRef = useRef();

    const addPosts = async (e) => {
        e.preventDefault();
        try {
            if (!titleRef.current?.value || !descRef.current?.value) {
                alert('Please fill in all fields');
                return;
            }
            const postData = {
                postTitle: titleRef.current.value,
                postDescription: descRef.current.value
            };
            console.log('Sending data:', postData); // Debug log

            const { data } = await axios.post('http://localhost:3000/api/v1/posts', 
                postData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            alert(data.message);
            getPosts();
            console.log(titleRef.current.value);

        } catch (error) {
            console.log(error)
        }
    }


    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/posts');
            const { data } = response;
            setPosts(data);


            console.log(data)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])




    return (
        <>
            <h1 className='text-center'>Add Post</h1>
            <div className="container">
                <form className="row g-3" onSubmit={addPosts}>
                <div className="col-md-12">
                    <label className="form-label">Post Title</label>
                    <input type="text" ref={titleRef} className="form-control"  />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Post Description</label>
                    <input type="text" ref={descRef} className="form-control"  />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add Post</button>
                </div>
                </form>
            </div>

            <h1 className='text-center'>All Posts</h1>
            <div className="container">
                {isPosts.map((singleItem) => (
                    <div className="card" key={singleItem._id}>
                        <h5 className="card-header">
                            {singleItem.title}
                        </h5>
                        <div className="card-body">
                            {/* <h5 class="card-title">Special title treatment</h5> */}
                            <p className="card-text">{singleItem.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
