export function setObjectProperty(element, propertyName, value) {
    element[propertyName] = value;
}

export function getObjectProperty(element, propertyName) {
    return element[propertyName];
}

export function toggleBooleanProperty(element, propertyName) {
    element[propertyName] = !element[propertyName];
}