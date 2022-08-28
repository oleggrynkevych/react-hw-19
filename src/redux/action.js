import { ADD_POST } from "./types";

export const addPost = (avatar, name, nickname, newContent, newImage) => {
    return {
        type: ADD_POST, 
        payload: {
            avatar: avatar,
            name: name,
            nickname: nickname,
            date: "now",
            content: newContent,
            image: newImage,
            comments: 100,
            reposts: 200,
            likes: 300
        }
    }
}