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
        roarslidechange: {
            browserEventName: "wa-slide-change",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-carousel":
                        return { carousel: { index: event.detail.index, slide: event.detail.slide ? { id: event.detail.slide.id } : null } };
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
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-accordion":
                        return { accordion: { item: { id: item.id, label: item.label, expanded: item.expanded, disabled: item.disabled } } };
                    default:
                        return {};
                }
            }
        },
        roarafterexpand: {
            browserEventName: "wa-after-expand",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-accordion":
                        return { accordion: { item: { id: item.id, label: item.label, expanded: item.expanded, disabled: item.disabled } } };
                    default:
                        return {};
                }
            }
        },
        roarcollapse: {
            browserEventName: "wa-collapse",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-accordion":
                        return { accordion: { item: { id: item.id, label: item.label, expanded: item.expanded, disabled: item.disabled } } };
                    default:
                        return {};
                }
            }
        },
        roarexpand: {
            browserEventName: "wa-expand",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-accordion":
                        return { accordion: { item: { id: item.id, label: item.label, expanded: item.expanded, disabled: item.disabled } } };
                    default:
                        return {};
                }
            }
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
        },
        roarcomplete: {
            browserEventName: "wa-complete",
            createEventArgs: () => ({})
        },
        roarcopy: {
            browserEventName: "wa-copy",
            createEventArgs: event => {
                switch (event.target?.localName) {
                    case "wa-copy-button":
                        return { copyButton: { value: event.detail.value } };
                    default:
                        return {};
                }
            }
        },
        roarerror: {
            browserEventName: "wa-error",
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
        case "wa-switch":
            return { switch: { checked: event.target.checked } };
        case "wa-comparison":
            return { comparison: { position: event.target.position } };
        case "wa-input":
        case "wa-otp-input":
            return { input: { value: event.target.value } };
        case "wa-known-date":
            return { knownDate: { value: event.target.value } };
        case "wa-number-input":
            return { numberInput: { value: event.target.value } };
        case "wa-radio-group":
            return { radioGroup: { value: event.target.value } };
        case "wa-color-picker":
            return { colorPicker: { value: event.target.value } };
        case "wa-select": {
            const value = event.target.value;
            event.target.value = value ?? [];

            if (event.target.multiple) {
                return { select: { values: value ?? [] } };
            }
            else {
                return { select: { value } };
            }
        }
        default:
            return {};
    }
}

const propertyObservers = new WeakMap();

function roarGeneralFunction() {
    window.executeJsFunctionFromJsObject = function (element, functionName, ...params) {
        return element[functionName](...params);
    }

    window.setObjectProperty = async function (element, propertyName, value) {
        if (element.localName.includes("-")) {
            await customElements.whenDefined(element.localName);
        }

        await element.updateComplete;
        element[propertyName] = value;
    }

    window.selectSetGetTag = async function (element, htmlByValue) {
        await window.setObjectProperty(element, "getTag", item => Object.hasOwn(htmlByValue, item.value) ? htmlByValue[item.value] : "");
        await element.updateComplete;
    };

    window.setObjectPropertyWithJson = function (element, propertyName, jsonValue) {
        element[propertyName] = JSON.parse(jsonValue);
    }

    window.getObjectProperty = async function (element, propertyName) {
        await element.updateComplete;
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
