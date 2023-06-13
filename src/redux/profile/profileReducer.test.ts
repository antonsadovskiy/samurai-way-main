import {addPostActionCreator, ProfilePageType, profileReducer, setUserProfile, UserProfileType} from "./profileReducer";

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
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissim."
      },
      {id: 2, date: "21:08 28 Mar", likes: 13, comments: 5, message: "How are you doing today?"},
      {id: 3, date: "14:08 4 Apr", likes: 90, comments: 0, message: "I'm busy"},
    ],
    status: ''
  }
})

test('should set correct user profile', () => {
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

test('should add new post to start of the array of posts', () => {

  const newPostText = 'Hello, my name is Anton'
  startState = {...startState}

  const action = addPostActionCreator(newPostText)
  const endState = profileReducer(startState, action)

  expect(endState.posts[0].message).toBe(newPostText)
})