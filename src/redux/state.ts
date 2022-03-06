export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, like: 1, message: 'text 1'},
                {id: 2, like: 3, message: 'text 2'},
                {id: 3, like: 1, message: 'text 3'},
                {id: 4, like: 5, message: 'text 4'},
            ],
            newPostText: 'IT',
        },
        messagePage: {
            newMessageText: '',
            messages: [
                {id: 1, message: 'h1'},
                {id: 2, message: 'hello'},
                {id: 3, message: 'bye'},
                {id: 4, message: 'yo'},
            ],
            dialogs: [
                {id: 1, name: 'Name 1'},
                {id: 2, name: 'Name 2'},
                {id: 3, name: 'Name 3'},
                {id: 4, name: 'Name 4'},
            ],
        },
        sidebar: {}
    },
    _callSubscriber(state?: StateType) {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id: 5, message: this._state.profilePage.newPostText, like: 0
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    addDialogMessage() {
        let newMessage = {
            id: 0, message: this._state.messagePage.newMessageText
        }

        this._state.messagePage.messages.push(newMessage);
        this._state.messagePage.newMessageText = '';
        this._callSubscriber(this._state)
    },
    updateMessageText(newText: string) {
        this._state.messagePage.newMessageText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    }
}

// let rerenderEntireTree = (state?: StateType) => {
//     console.log('state changed')
// }

export type PostType = {
    id: number
    like: number
    message: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type TypeDataDialogsPage = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    addDialogMessage?: (messageText: string) => void
}

export type ProfileDataType = {
    posts: Array<PostType>
    newPostText: string
}

export type MessageDataType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}

export type StateType = {
    addDialogMessage?: (messageText: string) => void
    profilePage: ProfileDataType
    messagePage: MessageDataType
    sidebar?: object
    addPost?: () => void
    updateNewPostText?: (newText: string) => void
}

// export const state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, like: 1, message: 'text 1'},
//             {id: 2, like: 3, message: 'text 2'},
//             {id: 3, like: 1, message: 'text 3'},
//             {id: 4, like: 5, message: 'text 4'},
//         ],
//         newPostText: 'IT',
//     },
//     messagePage: {
//         newMessageText: '',
//         messages: [
//             {id: 1, message: 'h1'},
//             {id: 2, message: 'hello'},
//             {id: 3, message: 'bye'},
//             {id: 4, message: 'yo'},
//         ],
//         dialogs: [
//             {id: 1, name: 'Name 1'},
//             {id: 2, name: 'Name 2'},
//             {id: 3, name: 'Name 3'},
//             {id: 4, name: 'Name 4'},
//         ],
//     },
//     sidebar: {}
// }

// export const addPost = () => {
//     let newPost = {
//         id: 5, message: state.profilePage.newPostText, like: 0
//     }
//
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state)
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state)
// }

// export const addDialogMessage = () => {
//     let newMessage = {
//         id: 0, message: state.messagePage.newMessageText
//     }
//
//     state.messagePage.messages.push(newMessage);
//     state.messagePage.newMessageText = '';
//     rerenderEntireTree(state)
// }

// export const updateMessageText = (newText: string) => {
//     state.messagePage.newMessageText = newText;
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer
// }