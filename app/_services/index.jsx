const { gql, default: request } = require("graphql-request");

const HygraphUrl = process.env.NEXT_PUBLIC_HYGRAPH;


export const courseList = async () => {
  const query = gql`
    query Courses {
  courseLists {
    authorAvatar {
      url
    }
    id
    authorName
    banner {
      url
    }
    cost
    courseName
  }
}`

  const result = await request(HygraphUrl, query);
  return result.courseLists;
}


export const getCourseById = async (id) => {
  // Hygraph generates `course` (singular) and `courses` (plural) by default
  const query = gql`
   query Courses {
  courseList(where: {id: "${id}"}) {
    authorName
    cost
    courseDescription
    courseName
    banner {
      url
    }
    id
    link {
      resourceLink
      id
      resourceName
    }
    authorAvatar {
      url
    }
    video {
      url
    }
  }
}
  `;

  try {
    const result = await request(HygraphUrl, query);
    console.log(result); // see what comes back
    return result.courseList
  } catch (err) {
    console.error("Hygraph query error:", err);
    return null;
  }
};


export const filterCourse = async (term) => {
  const query = gql`
    query FilteredCourses($term: String!) {
      courseLists(where: {
          OR: [
            { courseName_contains: $term }
            { authorName_contains: $term }
          ]
        }) {
        id
        courseName
        authorName
        cost
        banner {
          url
        }
        authorAvatar {
          url
        }
      }
    }
  `;


  const result = await request(HygraphUrl, query, {term});
  return result.courseLists;
};