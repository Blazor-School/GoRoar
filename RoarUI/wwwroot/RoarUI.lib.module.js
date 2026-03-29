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
            instance.invokeMethodAsync(method, roarMapperByWebAwesomeEventName[eventArgsName](e));
        });
    }
}

let roarMapperByWebAwesomeEventName = {
    "WaSelectEventArgs": (e) => ({
        SelectedItem: e.detail.item.value,
        Checked: event.detail.item.type === 'checkbox' ? e.detail.item.checked : null
    })
}