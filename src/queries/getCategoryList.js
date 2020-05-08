/** @noflow */
import { gql } from '@apollo/client';

export const GET_CATEGORY_LIST = gql`
    query categoryList($id: String) {
        categoryList(filters: { ids: { eq: $id } }) {
            id
            children {
                id
                name
                children_count
                product_count
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
