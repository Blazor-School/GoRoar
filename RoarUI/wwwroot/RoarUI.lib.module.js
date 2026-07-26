export function afterWebStarted(blazor) {
    roarGeneralFunction();
}

export function afterStarted(blazor) {
    roarGeneralFunction();
}

let componentControllers = new Map();

function getEventController(subscriptionId) {
    if (subscriptionId === null || subscriptionId === undefined || subscriptionId === "") {
        throw new Error("A subscription ID is required.");
    }

    let controller = componentControllers.get(subscriptionId);

    if (!controller) {
        controller = new AbortController();
        componentControllers.set(subscriptionId, controller);
    }

    return controller;
}

function roarGeneralFunction() {
    window.executeJsFunctionFromJsObject = function (element, functionName, ...params) {
        return element[functionName](...params);
    }

    window.subscribeEvent = function (element, eventName, instance, method, subscriptionId) {
        let controller = getEventController(subscriptionId);

        element.addEventListener(eventName, (e) => {
            instance.invokeMethodAsync(method);
        }, { signal: controller.signal });
    }

    window.subscribeEventWithArgs = function (element, eventName, eventArgsName, instance, method, subscriptionId) {
        let controller = getEventController(subscriptionId);

        element.addEventListener(eventName, (e) => {
            const normalizeEventArgsName = eventArgsName.toLowerCase();

            if (element.dataset[`${normalizeEventArgsName}preventdefault`] === "") {
                e.preventDefault();
            }

            if (element.dataset[`${normalizeEventArgsName}stoppropagation`] === "") {
                e.stopPropagation();
            }

            return instance.invokeMethodAsync(method, roarEventFromHtmlEvent[eventArgsName](e, element));
        }, { signal: controller.signal });
    }

    window.unsubscribeEvents = function (subscriptionId) {
        const controller = getEventController(subscriptionId);
        controller.abort();
        componentControllers.delete(subscriptionId);
    };

    window.setObjectProperty = function (element, propertyName, value) {
        element[propertyName] = value;
    }

    window.setObjectPropertyWithJson = function (element, propertyName, jsonValue) {
        element[propertyName] = JSON.parse(jsonValue);
    }

    window.getObjectProperty = function (element, propertyName) {
        return element[propertyName];
    }

    window.toggleBooleanProperty = function (element, propertyName) {
        element[propertyName] = !element[propertyName];
    }

    window.observeProperty = function (element, propertyName, instance, methodName) {
        let previousValue = element[propertyName];

        let propertyObserver = new MutationObserver(() => {
            let currentValue = element[propertyName];

            if (currentValue === previousValue) {
                return;
            }

            previousValue = currentValue;
            instance.invokeMethodAsync(methodName, currentValue);
        });

        propertyObserver.observe(element, {
            attributes: true,
            attributeFilter: [propertyName]
        });

        let cleanupObserver = new MutationObserver(() => {
            if (!document.body.contains(element)) {
                propertyObserver.disconnect();
                cleanupObserver.disconnect();
            }
        });

        cleanupObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

let roarEventFromHtmlEvent = {
    "DropdownSelectEventArgs": (e) => ({
        SelectedItem: e.detail.item.value,
        Checked: e.detail.item.type === 'checkbox' ? e.detail.item.checked : null
    }),
    "ComparisonChangeEventArgs": (e) => ({
        Position: e.target.position
    }),
    "DialogHideEventArgs": (e, element) => ({
        SelfClose: e.detail.source === element
    }),
    "DrawerHideEventArgs": (e, element) => ({
        SelfClose: e.detail.source === element
    }),
    "SplitPanelRepositionEventArgs": (e) => ({
        Position: e.target.position,
        PositionInPixels: e.target.positionInPixels
    }),
    "TabGroupShowEventArgs": (e) => ({
        TabName: e.detail.name
    }),
    "TabGroupHideEventArgs": (e) => ({
        TabName: e.detail.name,
        ActivatingTabName: e.target.active
    }),
    "TreeSelectionChangeEventArgs": (e) => ({
        SelectedValue: e.detail.selection[0].getAttribute("value")
    }),
    "TreeMultipleSelectionChangeEventArgs": (e) => ({
        SelectedValues: e.detail.selection.map(item => item.getAttribute("value"))
    }),
    "CheckboxChangeEventArgs": (e) => ({
        Checked: e.target.checked,
        Indeterminate: e.target.indeterminate
    }),
    "InputChangeEventArgs": (e) => ({
        Value: e.target.value,
    })
}