import PropTypes from 'prop-types';

export const Header = ({ content }) => {
    return (
        <header>
            <h1>{content}</h1>
        </header>
    )
}

Header.defaultProps = {
    content: "Title"
}

Header.propTypes = {
    content: PropTypes.string,
}
