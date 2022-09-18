import { PropTypes } from 'prop-types';

function Display({ info, input, result }) {

    return (
        <div className="output">
            <div className="info">{info}</div>
            <div className="control">{input}</div>
            <div className="result">{result}</div>
        </div>
    )
}

Display.propTypes = {
    info: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
  };

export default Display;