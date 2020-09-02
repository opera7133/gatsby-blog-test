import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    return (
        <nav className="pagination" role="navigation">
            <div>
                {previousPagePath && (

                    <Link to={previousPagePath} rel="prev">
                            前へ
                    </Link>

                )}
            </div>
            {numberOfPages > 1 && <div className="pagination-location">{humanPageNumber}ページ目</div>}
            <div>
                {nextPagePath && (

                    <Link to={nextPagePath} rel="next">
                            次へ
                    </Link>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
