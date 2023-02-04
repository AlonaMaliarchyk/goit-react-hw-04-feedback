
import css from "./FeedbackBtns.module.css";
import PropTypes from 'prop-types';


const FeedbackOptions = ({ handlBtn, options }) => {
    const element = options.map((name, idx) => {
            return (
                <li key={idx}>
                    <button type="button" onClick={() => handlBtn( name )} className={css.btn}> {name} </button>
                </li>
            );
        })
    return (
    <ul className={css.wrap}>
        {element}
    </ul>  
);
    };

FeedbackOptions.defaultProps = {
    options: []
    }

FeedbackOptions.propTypes = {
    handlBtn: PropTypes.func.isRequired
};
export default FeedbackOptions;