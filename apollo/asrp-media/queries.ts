import gql from 'graphql-tag'

const QUERY_ARTICLES = gql`
    query Articles($limit: Int, $filter: ArticlesFilterInput, $offset: Int) {
        articles(limit: $limit, filter: $filter, offset: $offset) {
            Articles {
                id
                title
                slug
                description
                imageMob
                imageWeb
                slug
                viewsCount
                createdAt
                Researches {
                    id
                    title
                    description
                    platformLogo
                }
                Authors {
                    description
                    fullName
                    id
                    index
                    avatar
                    landingUrl
                    regalia
                }
            }
            Pagination {
                currentPage
                nextPageExists
                previousPageExists
                total
                totalPages
            }
        }
    }
`
