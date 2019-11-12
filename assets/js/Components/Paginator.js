import React from 'react';
import { Card, Pagination } from 'react-bootstrap';

class Paginator extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPagination(numOfPages, currentPage, callback) {

        let paginationElts = [];

        for (let i = 1; i <= numOfPages; i++) {
            let isActive = i == currentPage ? true : false;

            paginationElts.push(
                <Pagination.Item button onClick={callback} key={i} value={i} active={isActive}>
                    {i}
                </Pagination.Item>
            );
        }

        return (
            <Pagination>
                <Pagination.Prev onClick={callback} value="prev" />
                    {paginationElts.map(elt =>
                        elt)}
                <Pagination.Next onClick={callback} value="next" />
            </Pagination>
        )
    }

    render() {
        return (
           this.renderPagination(this.props.numbOfPages, this.props.currentPage, this.props.callback)
        )
    }
}

export default Paginator;