import { gql } from '@apollo/client';

export const GET_CATEGORY_LIST = gql`
    query categoryList($id: Int!) {
        category(id: $id) {
            id
            children {
                id
                name
                url_key
                url_path
                children_count
                path
                image
                productImagePreview: products(pageSize: 1) {
                    items {
                        id
                        small_image {
                            url
                        }
                    }
                }
            }
        }
    }
`;
