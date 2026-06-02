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

            instance.invokeMethodAsync(method, roarEventFromHtmlEvent[eventArgsName](e, element));
        });
    }

    window.setObjectProperty = function (element, propertyName, value) {
        element[propertyName] = value;
    }

    window.getObjectProperty = function (element, propertyName) {
        return element[propertyName];
    }

    window.toggleBooleanProperty = function (element, propertyName) {
        element[propertyName] = !element[propertyName];
    }
}

let roarEventFromHtmlEvent = {
    "DropdownSelectEventArgs": (e) => ({
        SelectedItem: e.detail.item.value,
        Checked: event.detail.item.type === 'checkbox' ? e.detail.item.checked : null
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
    })
}