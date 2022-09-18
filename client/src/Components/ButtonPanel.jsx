
function ButtonPanel({ handleClick }) {

    return (
        <>
            <button name="M" onClick={e => handleClick(e.target.name)}>M</button>
            <button name="MR" onClick={e => handleClick(e.target.name)}>MR</button>
            <button name="DEL" onClick={e => handleClick(e.target.name)}>DEL</button>
            <button name="/" onClick={e => handleClick(e.target.name)}>÷</button>
            <button name="1" onClick={e => handleClick(e.target.name)}>1</button>
            <button name="2" onClick={e => handleClick(e.target.name)}>2</button>
            <button name="3" onClick={e => handleClick(e.target.name)}>3</button>
            <button name="*" onClick={e => handleClick(e.target.name)}>*</button>
            <button name="4" onClick={e => handleClick(e.target.name)}>4</button>
            <button name="5" onClick={e => handleClick(e.target.name)}>5</button>
            <button name="6" onClick={e => handleClick(e.target.name)}>6</button>
            <button name="+" onClick={e => handleClick(e.target.name)}>+</button>
            <button name="7" onClick={e => handleClick(e.target.name)}>7</button>
            <button name="8" onClick={e => handleClick(e.target.name)}>8</button>
            <button name="9" onClick={e => handleClick(e.target.name)}>9</button>
            <button name="-" onClick={e => handleClick(e.target.name)}>-</button>
            <button name="." onClick={e => handleClick(e.target.name)}>.</button>
            <button name="0" onClick={e => handleClick(e.target.name)}>0</button>
            <button name="=" className="double" onClick={e => handleClick(e.target.name)}>=</button>
        </>
    );
}

export default ButtonPanel;