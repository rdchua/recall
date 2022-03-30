import { gql } from "graphql-request";
import { graphql } from "./graphql";

const search = gql`
  query SearchTasks($query: String!) {
    tasks(where: { title: $query }) {
      id
      title
      description {
        html
      }
      level
      dueDate
    }
  }
`

const fetch = gql`
  query FetchTasks {
    tasks {
      id
      title
      description {
        html
      }
      level
      dueDate
    }
  }
`

const upsert = gql`
  mutation ($id: ID, $title: String!) {
    upsertTask(
      where: { id: $id },
      upsert: {
        create: { title: $title}
        update: { title: $title}
      }
    ) {
      id
      title
      description {
        html
      }
      level
      dueDate
    }
  }
`

// const publish = gql`
//   mutation publishAstronaut($id: ID!) {
//     publishAstronaut( where: { id: $id } ) {
//       id
//       uid
//       displayName
//       email
//       photoURL
//       contactNumber
//     }
//   }
// `

interface IQuery {
  query: string | String
}

const tasksAPI = {
  fetch,
  createTask: (variables: any) => graphql.request(upsert, variables),
  searchTask: (variables: IQuery) => graphql.request(search, variables), 
}

export default tasksAPI;