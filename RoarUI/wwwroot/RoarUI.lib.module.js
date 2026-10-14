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
        roarhover: {
            browserEventName: "wa-hover",
            createEventArgs: event => ({ rating: { phase: event.detail.phase, value: event.detail.value } })
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
        roarresize: {
            browserEventName: "wa-resize",
            createEventArgs: event => ({
                entries: event.detail.entries.map(entry => ({
                    targetId: entry.target.id,
                    contentRect: {
                        x: entry.contentRect.x,
                        y: entry.contentRect.y,
                        width: entry.contentRect.width,
                        height: entry.contentRect.height,
                        top: entry.contentRect.top,
                        right: entry.contentRect.right,
                        bottom: entry.contentRect.bottom,
                        left: entry.contentRect.left
                    },
                    borderBoxSize: Array.from(entry.borderBoxSize ?? [], size => ({ inlineSize: size.inlineSize, blockSize: size.blockSize })),
                    contentBoxSize: Array.from(entry.contentBoxSize ?? [], size => ({ inlineSize: size.inlineSize, blockSize: size.blockSize })),
                    devicePixelContentBoxSize: Array.from(entry.devicePixelContentBoxSize ?? [], size => ({ inlineSize: size.inlineSize, blockSize: size.blockSize }))
                }))
            })
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
        roarbeforepagechange: {
            browserEventName: "wa-before-page-change",
            createEventArgs: event => ({ pagination: { page: event.detail.page, pageSize: event.detail.pageSize } })
        },
        roarpagechange: {
            browserEventName: "wa-page-change",
            createEventArgs: event => ({ pagination: { page: event.detail.page, pageSize: event.detail.pageSize } })
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
        case "wa-rating":
            return { rating: { value: event.target.value } };
        case "wa-slider":
            return event.target.range
                ? { rangeSlider: { minValue: event.target.minValue, maxValue: event.target.maxValue } }
                : { slider: { value: event.target.value } };
        case "wa-comparison":
            return { comparison: { position: event.target.position } };
        case "wa-input":
        case "wa-otp-input":
        case "wa-textarea":
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
const ratingDefaultSymbols = new WeakMap();

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

    window.ratingSetSymbols = async function (element, symbols) {
        await customElements.whenDefined(element.localName);
        await element.updateComplete;

        if (!ratingDefaultSymbols.has(element)) {
            ratingDefaultSymbols.set(element, element.getSymbol);
        }

        element.getSymbol = symbols == null
            ? ratingDefaultSymbols.get(element)
            : (value, isSelectedOrHovered) => symbols[value - 1]?.[isSelectedOrHovered ? 1 : 0] ?? ""; //Each symbols has 2 states, state 0 is for unselected, state 1 is for selected or hovered

        await element.updateComplete;
    };

    window.sliderSetValueFormatter = async function (element, template) {
        const formatter = template == null ? undefined : value => {
            const values = {
                value,
                min: element.min,
                max: element.max,
                minValue: element.minValue,
                maxValue: element.maxValue
            };

            return template.replace(/\{(value|min|max|minValue|maxValue)\}/g, (_, name) => String(values[name] ?? ""));
        };

        await window.setObjectProperty(element, "valueFormatter", formatter);
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
