const { gql, default: request } = require("graphql-request");

const HygraphUrl = process.env.NEXT_PUBLIC_HYGRAPH;


export const courseList = async () => {
    const query = gql`
    query CoursesList {
        courseLists {
            id
            name
            description
            banner { url }
            author
            totalChapters
            cost
            }

    }`

    const result = await request(HygraphUrl, query);
    return result.courseLists;
}


export const getCoursesById = async (id) => {
    const query = gql`
    query Courses {
  courseList(where: {id: "${id}"}) {
    author
    banner {
      url
    }
    cost
    chapters {
      ... on Chapter {
        id
        name
        youtubeUrl
        videoUrl {
          url
        }
      }
    }
    name
    description
    totalChapters
  }

}`
    const result = await request(HygraphUrl, query);
    return result.courseList;
}