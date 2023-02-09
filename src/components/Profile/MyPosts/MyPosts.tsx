import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    const posts = [
        {id: 1, date: "19:08 27 Jan", likes: 53, comments: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos eaqueeveniet. At distinctio dolor dolorem doloremque dolores eius est incidunt itaque laborum nam officiaquod reiciendis, reprehenderit temporevoluptas?Commodi delectus deleniti, error iste minima modi quae repudiandae vero! Et excepturi harum molestias nemo nobis non nulla praesentium provident velit, vitae? Aspernatur atque beatae cumque explicabo nisi optio saepe!Aliquam dignissimos, laudantium quisquam reprehenderit saepe voluptatibus voluptatum. Accusamus dolor doloribus incidunt repellat! Debitis est excepturi harum illo, magnam nesciunt nihil perspiciatis placeat quibusdam quis ratione reiciendis repellat repudiandae totam."},
        {id: 2, date: "21:08 28 Mar", likes: 13, comments: 5, message: "How are you doing today?"},
        {id: 3, date: "14:08 4 Apr", likes: 90, comments: 0, message: "I'm busy"},
    ]

    const postsItems = posts.map( post => <Post id={post.id} date={post.date} message={post.message} likes={post.likes} comments={post.comments} />)

    return (
        <div className={s.postsContainer}>
            <div className={s.newPost}>
                <textarea />
                <div>
                    <button className={s.button}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

export default MyPosts;