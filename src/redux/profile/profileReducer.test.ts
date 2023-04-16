import profileReducer, {
    addPostActionCreator,
    ProfilePageType, setUserProfile,
    updateNewPostTextActionCreator,
    UserProfileType
} from "./profileReducer";

let startState: ProfilePageType
let userProfile: UserProfileType

beforeEach(() => {
    startState = {
        profile: null,
        posts: [
            {
                id: 1,
                date: "19:08 27 Jan",
                likes: 53,
                comments: 2,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos eaqueeveniet. At distinctio dolor dolorem doloremque dolores eius est incidunt itaque laborum nam officiaquod reiciendis, reprehenderit temporevoluptas?Commodi delectus deleniti, error iste minima modi quae repudiandae vero! Et excepturi harum molestias nemo nobis non nulla praesentium provident velit, vitae? Aspernatur atque beatae cumque explicabo nisi optio saepe!Aliquam dignissimos, laudantium quisquam reprehenderit saepe voluptatibus voluptatum. Accusamus dolor doloribus incidunt repellat! Debitis est excepturi harum illo, magnam nesciunt nihil perspiciatis placeat quibusdam quis ratione reiciendis repellat repudiandae totam."
            },
            {id: 2, date: "21:08 28 Mar", likes: 13, comments: 5, message: "How are you doing today?"},
            {id: 3, date: "14:08 4 Apr", likes: 90, comments: 0, message: "I'm busy"},
        ],
        newPostText: ''
    }
})

test('should set correct user profile',() => {
    const newUserProfile: UserProfileType = {
        aboutMe: 'looking for a job',
        contacts: {
            facebook: '',
            github: '',
            instagram: '',
            vk: '',
            mainLink: '',
            twitter: '',
            website: '',
            youtube: ''
        },
        fullName: 'Anton Sadovskiy',
        photos: {
            small: '',
            large: ''
        },
        userId: 4,
        lookingForAJob: true,
        lookingForAJobDescription: 'I"am joking'
    }

    const action = setUserProfile(newUserProfile)
    const endState = profileReducer(startState, action)

    expect(endState.profile?.userId).toBe(newUserProfile.userId)
    expect(endState.profile?.fullName).toBe(newUserProfile.fullName)
    expect(endState.profile?.lookingForAJob).toBeTruthy()
})

test('should add new post to start of the array of posts',() => {

    const newPostText = 'Hello, my name is Anton'
    startState = {...startState, newPostText: newPostText}

    const action = addPostActionCreator()
    const endState = profileReducer(startState, action)

    expect(endState.newPostText).toBe('')
    expect(endState.posts[0].message).toBe(newPostText)
})

test('should update new post text',() => {
    const text = 'how are you'

    const action = updateNewPostTextActionCreator(text)
    const endState = profileReducer(startState, action)

    expect(endState.newPostText).toBe(text)
})