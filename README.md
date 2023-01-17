# ![RdPw Screen shot 2011 02 06 at 16 14 53](http://farm6.static.flickr.com/5136/5421259125_ea06d67675_o.png) Twitter

1. **Install the dependencies**: `npm install --legacy-peer-deps`
2. **Run the app**: `npm run dev`

## Misc

- **Visual interface for the GraphQL backend**: http://localhost:8080/graphql
- **Update the database** (after changing the migrations/seeders): `bash refresh-db.sh`

## SQLite Guide

## Entities

- User

- Tweet

- TweetMetadata

## Relationships

- Tweet : TweetMetadata (1:1)

- Parent (of Tweet Type) : Replies (/ Retweets of Tweet Type) (1:M)

- Following (of User Type) : Follower (of User Type) (M:M)

## GraphiQL Guide

<details>
  <summary> <h3> <strong>User</strong> </h3> </summary>

- Id

- Name

- Username

- Tweets

    - List of Tweets. For each we can access every field of Tweet.

- Following
    - List of Users. For each we can access every field of User.
- Followers
    - List of Users. For each we can access every field of User.

</details>

<details>
  <summary> <h3> <strong>Tweet</strong> </h3> </summary>

* Id

- Text

- Likes

- isRetweet

- Parent

    - Tweet. Represent the Tweet that the current twitted has replied to / retweeted. All fields of Tweet accessible.

- Author

    - User. Represent the User that posted / retweeted / replied the (/ to) current tweet. All fields of User
      accessible.

- Replies

    - List of Tweets. Represent all the tweets that are considered replied for the current tweet. For each we can access
      every field of Tweet.

- Retweets
    - List of Tweets. Represent all the tweets that are considered retweets of the current tweet. For each we can access
      every field of Tweet.
- Metadata

    - TwitterMetadata. All fields of TwitterMetadata accessible. Contains following fields :

        - tweet

            - Tweet. Represents the unique tweet that it is linked to. All fields of Tweet accessible.

        - tweetDate

            - Date : when the tweet has been sent.

        - location

            - Location : where the tweet has been sent from.

        - sentFrom

            - iOS / Android

</details>

## Queries

<details open>
  <summary> <strong>Get User</strong> </summary>

  ```
  query{
    user(id: 1){
      id
      username
      name
      tweets {
        id
        text
        likes
        # the rest of the fields of Tweet can be added
      }
      followers {
        id
        username
        # the rest of the fields of User can be added
      }
      following {
        id
        username
        # the rest of the fields of User can be added
      }
    }
  }
  ```

</details>

<details>
  <summary> <strong>Get All Users</strong> </summary>

```
 query{
   users{
     id
     username
     name
     tweets {
       id
       text
       likes
       isRetweet
       author {
         id
         name
         # the rest of the fields of User can be added
       }
       # the rest of the fields of Tweet can be added
     }
     following {
       id
       username
       name
       # the rest of the fields of User can be added
     }
     followers {
       id
       username
       name
       # the rest of the fields of User can be added
     }
   }
 }
```

</details>

<details>
  <summary> <strong>Get Tweet</strong> </summary>

```
  query{
    tweet(id: 1){
      id
      text
      likes
      author {
        name
        username
      }
      replies {
        id
        text
        author {
          username
          name
        }
      }
      retweets {
        id
        text
        author {
          username 
          name
        }
      }
    }
  }
```

</details>

<details open>
  <summary> <strong>Get All Tweets</strong> </summary>

```
  query{
    tweets{
      id
      text
      likes
      author {
        name
      }
      replies {
        id
        author {
          name
        }
      }
      retweets {
        id
        author {
          name
        }
      }
    }
  }
  
```

- TweetMetadata example

```
  query{
    tweets{
      id
      author {
        name
      }
      metadata {
        location
        tweetDate
        sentFrom
        tweet {
          id
          author {
            name
          }
        }
      }
    }
  }

```

</details>

<details open>
  <summary> <strong> Get the most liked [n] tweets that have been posted from a specific location [loc] </strong> </summary>

  ```
    query{
    popularTweets(n: 2, loc : "Romania"){
      id
      likes
      author {
        name
      }
      metadata {
        location
      }
    }
  }
  ```

  ```
    query{
    popularTweets(n: 1, loc : "Romania"){
      id
      likes
      author {
        name
      }
      metadata {
        location
      }
    }
  }
  ```

</details>

## Mutations

<details open>
  <summary> <strong>Create User</strong> </summary>

  ```
  mutation{
    createUser(username : "newUser", name : "newUserName"){
      id
      username
      name
    }
  }
  ```

Returns:

  ```
    {
    "data": {
      "createUser": {
        "id": 4,
        "username": "newUser",
        "name": "newUserName"
      }
    }
  }
  
  ```

Check changes.

   ```
    query {
      users {
        id
      }
    }

```

Returns:

```

     {
    "data": {
      "users": [
        {
          "id": 1
        },
        {
          "id": 2
        },
        {
          "id": 3
        },
        {
          "id": 4
        }
      ]
    }

}

```

</details>

<details open>
<summary> <strong>Delete User</strong> </summary>

```

mutation {
deleteUser(id : 4)
}

```

Returns:

```

     {
    "data": {
      "deleteUser": true
    }

}

```

Check changes.

```

    query {
      users {
        id
      }
    }

```

Returns:

```

     {
    "data": {
      "users": [
        {
          "id": 1
        },
        {
          "id": 2
        },
        {
          "id": 3
        }
      ]
    }

}

```

</details>

```
