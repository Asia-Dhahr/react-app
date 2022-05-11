import { useReducer } from "react";
import DigitButton from "./digitButton";
import OperationButton from "./operationButton";

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'chose-operation',
    CLEAR: 'clear',
    DELET_DIGIT: 'delet',
    EVALUATION: 'evaluation'
}
function reducer(state, { type, payload }) {

    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (state.override) {
                return {
                    state,
                    currentOperand: payload.digit,
                    override: false,
                }
            }
            if (payload.digit === '0' && state.currentOperator === '0') { return state }
            if (payload.digit === '.' && state.currentOperator.include('.')) { return state }
            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${payload.digit}`,
            }


        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state
            }
            if (state.currentOperand === null) {
                return {
                    ...state,
                    operation: payload.operation,

                }

            }

            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null,
            }


        case ACTIONS.CLEAR:
            return {}

        case ACTIONS.DELET_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null,
                }
            }

        case ACTIONS.EVALUATION:
            if (state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null) {
                return state
            }
            return {
                ...state,
                override: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state),

            }


        default:

    }

}
function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return ""
    let computation = ""
    switch (operation) {
        case '+':
            computation = prev + current
            break;
        case "-":
            computation = prev - current
            break;
        case "*":
            computation = prev * current
            break;
        case "/":
            computation = prev / current
            break;
        default:
    }
    return computation.toString()
}


const Calculator = () => {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})
    // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } })

    return (

        <div className="back">
            <div className="calculator-grid">
                <div className="output">
                    <div className="pr-operand">{previousOperand} {operation}</div>
                    <div className="cu-operand">{currentOperand}</div>
                </div>
                <button className="span" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
                <button>DEL</button>
                <OperationButton operation='/' dispatch={dispatch} />
                <DigitButton digit='1' dispatch={dispatch} />
                <DigitButton digit='2' dispatch={dispatch} />
                <DigitButton digit='3' dispatch={dispatch} />
                <OperationButton operation='*' dispatch={dispatch} />
                <DigitButton digit='4' dispatch={dispatch} />
                <DigitButton digit='5' dispatch={dispatch} />
                <DigitButton digit='6' dispatch={dispatch} />
                <OperationButton operation='+' dispatch={dispatch} />
                <DigitButton digit='7' dispatch={dispatch} />
                <DigitButton digit='8' dispatch={dispatch} />
                <DigitButton digit='9' dispatch={dispatch} />
                <OperationButton operation='-' dispatch={dispatch} />
                <DigitButton digit='.' dispatch={dispatch} />
                <DigitButton digit='0' dispatch={dispatch} />

                <button className="span" onClick={() => dispatch({ type: ACTIONS.EVALUATION })}>=</button>

            </div>
        </div>

    )
}

export default Calculator;