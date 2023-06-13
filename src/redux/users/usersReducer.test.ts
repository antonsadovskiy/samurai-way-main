import {
  changeFollow,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  UsersPageType,
  usersReducer,
  UserType
} from "./usersReducer";

let startState: UsersPageType

beforeEach(() => {
  startState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isButtonDisabled: []
  }
})

test('should set loading', () => {

  const action = setIsFetching(true)
  const endState = usersReducer(startState, action)

  expect(endState.isFetching).toBeTruthy()
})

test('should set the users', () => {
  const users: Array<UserType> = [
    {
      name: 'Anton',
      id: 1,
      uniqueUrlName: '',
      photos: {
        small: '',
        large: '',
      },
      status: 'hello, i am anton',
      followed: true,
    },
    {
      name: 'Vika',
      id: 2,
      uniqueUrlName: '',
      photos: {
        small: '',
        large: '',
      },
      status: 'hello, i am vika',
      followed: false,
    }
  ]

  const action = setUsers(users)
  const endState = usersReducer(startState, action)

  expect(endState.users[0].id).toBe(1)
  expect(endState.users[0].name).toBe('Anton')
  expect(endState.users[0].status).toBe('hello, i am anton')
  expect(endState.users[0].followed).toBeTruthy()

  expect(endState.users[1].id).toBe(2)
  expect(endState.users[1].name).toBe('Vika')
  expect(endState.users[1].status).toBe('hello, i am vika')
  expect(endState.users[1].followed).toBeFalsy()
})

test('should set the current page', () => {

  const currentPage = 4

  const action = setCurrentPage(currentPage)
  const endState = usersReducer(startState, action)

  expect(endState.currentPage).toBe(currentPage)
})

test('should set the total users count', () => {

  const totalUsersCount = 10

  const action = setTotalUsersCount(totalUsersCount)
  const endState = usersReducer(startState, action)

  expect(endState.totalUsersCount).toBe(totalUsersCount)
})

test('should follow correct user', () => {
  startState = {
    users: [
      {
        name: 'Anton',
        id: 1,
        uniqueUrlName: '',
        photos: {
          small: '',
          large: '',
        },
        status: 'hello, i am anton',
        followed: false,
      },
      {
        name: 'Vika',
        id: 2,
        uniqueUrlName: '',
        photos: {
          small: '',
          large: '',
        },
        status: 'hello, i am vika',
        followed: false,
      }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isButtonDisabled: []
  }
  const userId = startState.users[0].id

  const action = changeFollow(userId, true)
  const endState = usersReducer(startState, action)

  expect(endState.users[0].followed).toBeTruthy()
  expect(endState.users[1].followed).toBeFalsy()
})

test('should unfollow correct user', () => {
  startState = {
    users: [
      {
        name: 'Anton',
        id: 1,
        uniqueUrlName: '',
        photos: {
          small: '',
          large: '',
        },
        status: 'hello, i am anton',
        followed: true,
      },
      {
        name: 'Vika',
        id: 2,
        uniqueUrlName: '',
        photos: {
          small: '',
          large: '',
        },
        status: 'hello, i am vika',
        followed: true,
      }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isButtonDisabled: []
  }
  const userId = startState.users[1].id

  const action = changeFollow(userId, false)
  const endState = usersReducer(startState, action)

  expect(endState.users[0].followed).toBeTruthy()
  expect(endState.users[1].followed).toBeFalsy()
})