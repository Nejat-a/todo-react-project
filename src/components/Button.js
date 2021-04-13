import PropTypes from 'prop-types';
export const Button = ({ style, text, onClick }) => {
    return (
        <button className={style} onClick={onClick}>
            {text}
        </button>
    )
}


Button.propTypes = {
    style: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}