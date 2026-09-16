export function afterWebStarted(blazor) {
    roarGeneralFunction();
    registerRoarEvents(blazor);
}

export function afterStarted(blazor) {
    roarGeneralFunction();
    registerRoarEvents(blazor);
}

function registerRoarEvents(blazor) {
    const events = {
        roarafterhide: {
            browserEventName: "wa-after-hide",
            createEventArgs: () => ({})
        },
        roaraftershow: {
            browserEventName: "wa-after-show",
            createEventArgs: () => ({})
        },
        roarhide: {
            browserEventName: "wa-hide",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-dialog":
                        return { dialog: { selfClose: event.detail?.source === event.target.dialog } };
                    case "wa-drawer":
                        return { drawer: { selfClose: event.detail?.source === event.target.drawer } };
                    default:
                        return {};
                }
            }
        },
        roarshow: {
            browserEventName: "wa-show",
            createEventArgs: () => ({})
        },
        roarselect: {
            browserEventName: "wa-select",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-dropdown":
                        return {
                            dropdown: {
                                selectedItem: event.detail?.item?.value ?? null,
                                checked: event.detail?.item?.type === "checkbox" ? event.detail.item.checked : null
                            }
                        };
                    default:
                        return {};
                }
            }
        },
        roarblur: {
            browserEventName: "blur",
            createEventArgs: event => ({ type: event.type })
        },
        roarfocus: {
            browserEventName: "focus",
            createEventArgs: event => ({ type: event.type })
        },
        roarchange: {
            browserEventName: "change",
            createEventArgs: createRoarValueEventArgs
        },
        roarinput: {
            browserEventName: "input",
            createEventArgs: createRoarValueEventArgs
        },
        roarreposition: {
            browserEventName: "wa-reposition",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-split-panel":
                        return { splitPanel: { position: event.target.position, positionInPixels: event.target.positionInPixels } };
                    default:
                        return {};
                }
            }
        },
        roartabshow: {
            browserEventName: "wa-tab-show",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-tab-group":
                        return { tabGroup: { tabName: event.detail.name } };
                    default:
                        return {};
                }
            }
        },
        roartabhide: {
            browserEventName: "wa-tab-hide",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-tab-group":
                        return { tabGroup: { tabName: event.detail.name, activatingTabName: event.target.active } };
                    default:
                        return {};
                }
            }
        },
        roarselectionchange: {
            browserEventName: "wa-selection-change",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-tree":
                        return { tree: { selectedValue: event.detail.selection[0]?.getAttribute("value") ?? null, selectedValues: event.detail.selection.map(item => item.getAttribute("value")) } };
                    default:
                        return {};
                }
            }
        },
        roarclear: {
            browserEventName: "wa-clear",
            createEventArgs: () => ({})
        },
        roarbeforeinput: {
            browserEventName: "beforeinput",
            createEventArgs: () => ({})
        },
        roaraftercollapse: {
            browserEventName: "wa-after-collapse",
            createEventArgs: () => ({})
        },
        roarafterexpand: {
            browserEventName: "wa-after-expand",
            createEventArgs: () => ({})
        },
        roarcollapse: {
            browserEventName: "wa-collapse",
            createEventArgs: () => ({})
        },
        roarexpand: {
            browserEventName: "wa-expand",
            createEventArgs: () => ({})
        },
        roarlazychange: {
            browserEventName: "wa-lazy-change",
            createEventArgs: () => ({})
        },
        roarlazyload: {
            browserEventName: "wa-lazy-load",
            createEventArgs: () => ({})
        },
        roarremove: {
            browserEventName: "wa-remove",
            createEventArgs: () => ({})
        }
    };

    for (const [eventName, options] of Object.entries(events)) {
        blazor.registerCustomEventType(eventName, options);
    }
}

function createRoarValueEventArgs(event) {
    switch (event.target?.localName) {
        case "wa-checkbox":
            return { checkbox: { checked: event.target.checked, indeterminate: event.target.indeterminate } };
        case "wa-comparison":
            return { comparison: { position: event.target.position } };
        case "wa-input":
            return { input: { value: event.target.value } };
        case "wa-known-date":
            return { knownDate: { value: event.target.value } };
        case "wa-number-input":
            return { numberInput: { value: event.target.value } };
        case "wa-radio-group":
            return { radioGroup: { value: event.target.value } };
        case "wa-color-picker":
            return { colorPicker: { value: event.target.value } };
        default:
            return {};
    }
}

const propertyObservers = new WeakMap();

function roarGeneralFunction() {
    window.executeJsFunctionFromJsObject = function (element, functionName, ...params) {
        return element[functionName](...params);
    }

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
        let observers = propertyObservers.get(element);

        if (!observers) {
            observers = [];
            propertyObservers.set(element, observers);
        }

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
                for (const observer of observers) {
                    observer.disconnect();
                }

                propertyObservers.delete(element);
            }
        });

        cleanupObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        observers.push(propertyObserver, cleanupObserver);
    }
}
