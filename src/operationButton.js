import { ACTIONS } from './calculator'


export default function OperationButton({ dispatch, operation }) {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_DIGIT, payload: { operation } })}>{operation}</button>
    )
}