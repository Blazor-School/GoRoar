export function afterWebStarted(blazor) {
    roarGeneralFunction();
}

export function afterStarted(blazor) {
    roarGeneralFunction();
}

function roarGeneralFunction() {
    window.executeMethodFromInstance = function (element, methodName, ...params) {
        element[methodName](...params);
    }

    window.subscribeEvent = function (element, eventName, instance, method) {
        element.addEventListener(eventName, (e) => {
            instance.invokeMethodAsync(method);
        });
    }

    window.subscribeEventWithArgs = function (element, eventName, eventArgsName, instance, method) {
        element.addEventListener(eventName, (e) => {
            let preventDefault = element.dataset[`${eventArgsName.toLowerCase()}preventdefault`];

            if (preventDefault === "") {
                e.preventDefault();
            }

            let stopPropagation = element.dataset[`${eventArgsName.toLowerCase()}stoppropagation`];

            if (stopPropagation === "") {
                e.stopPropagation();
            }

            instance.invokeMethodAsync(method, roarEventFromHtmlEvent[eventArgsName](e));
        });
    }
}

let roarEventFromHtmlEvent = {
    "WaSelectEventArgs": (e) => ({
        SelectedItem: e.detail.item.value,
        Checked: event.detail.item.type === 'checkbox' ? e.detail.item.checked : null
    })
}