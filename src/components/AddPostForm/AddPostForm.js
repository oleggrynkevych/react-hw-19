import { AddPostFormBox, Button, Input, SelectAuthor } from "./styles";
import { useState , useRef } from 'react';
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/action";


function AddPostForm () {
    const [newContent, setNewContent] = useState("");
    const [newImage, setNewImage] = useState("");
    const [character, setCharacter] = useState("");

    const dispatch = useDispatch();
    const addPostForm = useRef();
    const form = addPostForm.current;

    const characterAragorn = {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjzWi9QSF0inZ8G2UVH8IQdJ7ROsyOT8k9aB8SllTYsaLKdnurR7RnY3D6bZWI26K_gI&usqp=CAU",
        name: "ARAGORN",
        nickname: "@wanderer",
    }

    const characterSauron = {
        avatar: "https://qph.cf2.quoracdn.net/main-qimg-cafd7bbb2892497d2fd7cff4bcc1b3ec-lq",
        name: "SAURON",
        nickname: "@dark_lord",
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (character === "Aragorn") {
            dispatch(addPost(characterAragorn.avatar, characterAragorn.name, characterAragorn.nickname, newContent, newImage))
        } else if (character === "Sauron") {
            dispatch(addPost(characterSauron.avatar, characterSauron.name, characterSauron.nickname, newContent, newImage))
        }

        form.reset();
    }

    return (
        <AddPostFormBox ref={addPostForm}>
            <Input placeholder="Content" onChange={(e) => setNewContent(e.target.value)}></Input>
            <Input placeholder="URL-image" onChange={(e) => setNewImage(e.target.value)}></Input>
            <SelectAuthor defaultValue={"Select one"} onChange={(e) => setCharacter(e.target.value)}>
                <option>Select one</option>
                <option>Aragorn</option>
                <option>Sauron</option>
            </SelectAuthor>
            <Button onClick={handleSubmit} disabled={ !newContent.length || !newImage.length ? "disabled" : null }>POST</Button>
        </AddPostFormBox>
    )
}

export default AddPostForm;