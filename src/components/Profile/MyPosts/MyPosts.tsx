import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsContainer}>
            <div className={s.newPost}>
                <textarea />
                <div>
                    <button className={s.button}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos eaqueeveniet. At distinctio dolor dolorem doloremque dolores eius est incidunt itaque laborum nam officiaquod reiciendis, reprehenderit temporevoluptas?Commodi delectus deleniti, error iste minima modi quae repudiandae vero! Et excepturi harum molestias nemo nobis non nulla praesentium provident velit, vitae? Aspernatur atque beatae cumque explicabo nisi optio saepe!Aliquam dignissimos, laudantium quisquam reprehenderit saepe voluptatibus voluptatum. Accusamus dolor doloribus incidunt repellat! Debitis est excepturi harum illo, magnam nesciunt nihil perspiciatis placeat quibusdam quis ratione reiciendis repellat repudiandae totam."} likes={30} comments={3}/>
                <Post message={"How are you doing today?"} likes={53} comments={3}/>
                <Post message={"I'm busy"} likes={21} comments={3}/>
            </div>
        </div>
    );
};

export default MyPosts;