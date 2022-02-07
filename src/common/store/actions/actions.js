export const ACTION_ADD = "ACTION_ADD";
export const ACTION_DELETE = "ACTION_DELETE";
export const ACTION_SUBMIT = "ACTION_SUBMIT";

export function deleteItem(id) {
    return { type: ACTION_DELETE, payload: id }
}
export function createItem(title) {
    return { type: ACTION_ADD, payload: title }
}
export function submitItem(item) {
    return { type: ACTION_SUBMIT, payload: { ...item, isDone: !item.isDone } }
}