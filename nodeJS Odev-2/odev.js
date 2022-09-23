const postsList = [
    { postId: 1, postName: "Post A", postDetail: "Post A Detail" },
    { postId: 2, postName: "Post B", postDetail: "Post B Detail" },
    { postId: 3, postName: "Post C", postDetail: "Post C Detail" },
    { postId: 4, postName: "Post D", postDetail: "Post D Detail" },

]

const addPost = (value) => {
    return new Promise((res, rej) => {
        if (value) {
            postsList.push(value)
            res(`Yeni Post Eklendi : ${value.postName} => ${value.postDetail}`)
        } else {
            rej("Yeni Post Eklenemedi")
        }
    })
}

const listPost = () => {
    console.log("listPost:", "postId", "|", "postName", "|", "postDetail");
    console.log("");
    postsList.map(post => {

        console.log("listPost:", post.postId, "|", post.postName, "|", post.postDetail);
    })
}
const fetchPosts = async (newPost) => {
    try {
        const fetchPost = await addPost(newPost);
        console.log("############################################");

        console.log(fetchPost);

        console.log("############################################");

        listPost();

    } catch (error) {
        console.log(error);
    }
}



listPost();

fetchPosts(
    { postId: 5, postName: "Post E", postDetail: "Post E Detail" },

)
















