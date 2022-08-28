import { ADD_POST } from "./types"; 

const initialState = {
    postsInfo: [
        {
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjzWi9QSF0inZ8G2UVH8IQdJ7ROsyOT8k9aB8SllTYsaLKdnurR7RnY3D6bZWI26K_gI&usqp=CAU",
            name: "ARAGORN",
            nickname: "@wanderer",
            date: "today",
            content: "Gondor is free!!!",
            image: "http://images2.fanpop.com/images/photos/8500000/gondor-gondor-8538812-720-411.jpg",
            comments: 100,
            reposts: 200,
            likes: 300
        },

        {
            avatar: "https://qph.cf2.quoracdn.net/main-qimg-cafd7bbb2892497d2fd7cff4bcc1b3ec-lq",
            name: "SAURON",
            nickname: "@dark_lord",
            date: "yesterday",
            content: "I`ll be back. Maybe...",
            image: "https://cdnb.artstation.com/p/assets/images/images/032/872/137/large/michal-kvac-mordor-small.jpg?1607710733",
            comments: 100,
            reposts: 200,
            likes: 300
        }

    ]
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, postsInfo: [action.payload, ...state.postsInfo]}
        }
        default: {
            return state;
        }
    }
};

export const postSelector = (state) => state.postReducer.postsInfo;

export default postReducer;