/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FwButton {
        /**
          * Identifier of  the theme based on which the button is styled.
         */
        "color": "primary" | "secondary" | "danger" | "link" | "text";
        /**
          * Disables the button on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled": boolean;
        /**
          * Sets the button to a full-width block. If the attribute’s value is undefined, the value is set to true.
         */
        "expand": boolean;
        /**
          * Size of the button.
         */
        "size": "normal" | "mini" | "small";
        /**
          * Button type based on which actions are performed when the button is clicked.
         */
        "type": "button" | "reset" | "submit";
    }
    interface FwCheckbox {
        /**
          * Sets the state of the checkbox to selected. If the attribute’s value is undefined, the value is set to true.
         */
        "checked": boolean;
        /**
          * Disables the check box on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled": boolean;
        /**
          * Label displayed on the interface, for the check box.
         */
        "label": string;
        /**
          * Identifier corresponding to the component, that is saved when the form data is saved.
         */
        "value": string;
    }
    interface FwIcon {
        /**
          * Color in which the icon is displayed, specified as a standard CSS color or as a HEX code.
         */
        "color": string;
        /**
          * Identifier of the icon. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
         */
        "name": string;
        /**
          * Size of the icon, specified in number of  pixels.
         */
        "size": number;
    }
    interface FwInput {
        /**
          * Specifies whether the browser can display suggestions to autocomplete the text value.
         */
        "autocomplete": "on" | "off";
        /**
          * Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. If the attribute’s value is undefined, the value is set to true. For a read-only input box, the clear icon is not displayed unless a default value is specified for the input box.
         */
        "clearInput": boolean;
        /**
          * Disables the component on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled": boolean;
        /**
          * Identifier of the icon that is displayed in the left side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
         */
        "iconLeft": string;
        /**
          * Identifier of the icon that is displayed in the right side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
         */
        "iconRight": string;
        /**
          * Label displayed on the interface, for the component.
         */
        "label": string;
        /**
          * Maximum number of characters a user can enter in the text box.
         */
        "maxlength"?: number;
        /**
          * Minimum number of characters a user must enter in the text box for the value to be valid.
         */
        "minlength"?: number;
        /**
          * Name of the component, saved as part of form data.
         */
        "name": string;
        /**
          * Text displayed in the text box before a user enters a value.
         */
        "placeholder"?: string | null;
        /**
          * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to true.
         */
        "readonly": boolean;
        /**
          * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to true.
         */
        "required": boolean;
        /**
          * Sets focus on a specific `fw-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * Theme based on which the text box is styled.
         */
        "state": "normal" | "warning" | "error";
        /**
          * Descriptive or instructional text displayed below the text box.
         */
        "stateText": string;
        /**
          * Type of value accepted as the input value. If a user enters a value other than the specified type, the input box is not populated.
         */
        "type": "text" | "number";
        /**
          * Default value displayed in the input box.
         */
        "value"?: string | null;
    }
    interface FwLabel {
        /**
          * Theme based on which the label is styled.
         */
        "color": "blue" | "red" | "green" | "yellow" | "grey" | "normal";
        /**
          * Display text in the label.
         */
        "value": string;
    }
    interface FwRadio {
        /**
          * Sets the state to selected. If the attribute’s value is undefined, the value is set to true.
         */
        "checked": boolean;
        /**
          * Disables the component on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled": boolean;
        /**
          * Label displayed on the interface, for the component.
         */
        "label": string;
        /**
          * Name of the component, saved as part of form data.
         */
        "name": string;
        /**
          * Identifier corresponding to the component, that is saved when the form data is saved.
         */
        "value": string;
    }
    interface FwRadioGroup {
        /**
          * If true, a radio group can be saved without selecting any option. If an option is selected, the selection can be cleared. If the attribute’s value is undefined, the value is set to true.
         */
        "allowEmpty": boolean;
        /**
          * Name of the component, saved as part of form data.
         */
        "name": string;
        /**
          * Default option that is selected when the radio group is displayed on the interface. Must be a valid value corresponding to the fw-radio components used in the Radio Group.
         */
        "value"?: any | null;
    }
    interface FwSelect {
        /**
          * Disables the component on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled": boolean;
        /**
          * If true, the user must select a value. The default value is not displayed.
         */
        "forceSelect": boolean;
        "getSelectedItem": () => Promise<any>;
        /**
          * Label displayed on the interface, for the component.
         */
        "label": string;
        /**
          * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to true.
         */
        "multiple": boolean;
        /**
          * Name of the component, saved as part of form data.
         */
        "name": string;
        /**
          * Text displayed in the list box before an option is selected.
         */
        "placeholder"?: string | null;
        /**
          * If true, the user cannot modify the default value selected. If the attribute's value is undefined, the value is set to true.
         */
        "readonly": boolean;
        /**
          * Specifies the select field as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to true.
         */
        "required": boolean;
        /**
          * Theme based on which the list box is styled.
         */
        "state": "normal" | "warning" | "error";
        /**
          * Descriptive or instructional text displayed below the list box.
         */
        "stateText": string;
        /**
          * Type of option accepted as the input value. If a user tries to enter an option other than the specified type, the list is not populated.
         */
        "type": "text" | "number";
        /**
          * Value of the option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select.
         */
        "value": any;
    }
    interface FwSelectOption {
        /**
          * States that the option is an HTML value. If the attribute's value is undefined, the value is set to true.
         */
        "html": boolean;
        /**
          * HTML content that is displayed as the option.
         */
        "htmlContent"?: string;
        /**
          * Alternate text displayed on the interface, in place of the actual HTML content.
         */
        "optionText": string;
        /**
          * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to true.
         */
        "selected": boolean;
        /**
          * Value corresponding to the option, that is saved  when the form data is saved.
         */
        "value": string;
    }
    interface FwSpinner {
        /**
          * Color in which the loader is displayed, specified as a standard CSS color.
         */
        "color": string;
        /**
          * Size of the loader.
         */
        "size": "small" | "medium" | "large" | "default";
    }
    interface FwTab {
        /**
          * Message that is displayed when a user navigates away from a tab.
         */
        "message": string;
        /**
          * Name of the tab displayed on the UI.
         */
        "tabHeader": string;
    }
    interface FwTabs {
    }
    interface FwTag {
        /**
          * Display text in the tag component.
         */
        "text": string;
        /**
          * Value associated with the tag component, that is saved when the form data is saved.
         */
        "value": string;
    }
    interface FwTextarea {
        /**
          * Width of the input box, specified as number of columns.
         */
        "cols"?: number;
        /**
          * Disables the text area on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled": boolean;
        /**
          * Label displayed on the interface, for the component.
         */
        "label": string;
        /**
          * Maximum number of characters a user can enter in the input box.
         */
        "maxlength"?: number;
        /**
          * Minimum number of characters a user must enter in the input box for the value to be valid.
         */
        "minlength"?: number;
        /**
          * Name of the component, saved as part of form data.
         */
        "name": string;
        /**
          * Text displayed in the input box before a user enters a value.
         */
        "placeholder"?: string | null;
        /**
          * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to true.
         */
        "readonly": boolean;
        /**
          * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to true.
         */
        "required": boolean;
        /**
          * Height of the input box, specified as number of rows.
         */
        "rows"?: number;
        /**
          * Sets focus on a specific `fw-textarea`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * Theme based on which the input box is styled.
         */
        "state": "normal" | "warning" | "error";
        /**
          * Descriptive or instructional text displayed below the input box.
         */
        "stateText": string;
        /**
          * Default value displayed in the input box.
         */
        "value"?: string | null;
        /**
          * Type of text wrapping used by the input box. If the value is hard, the text in the textarea is wrapped (contains line breaks) when the form data is saved. If the value is soft, the text in the textarea is saved as a single line, when the form data is saved.
         */
        "wrap": "soft" | "hard";
    }
    interface FwTimepicker {
        /**
          * Format in which time values are populated in the list box. If the value is hh:mm p, the time values are in the 12-hour format. If the value is hh:mm, the time values are in the 24-hr format.
         */
        "format": "hh:mm A" | "HH:mm";
        /**
          * Time interval between the values displayed in the list, specified in minutes.
         */
        "interval": number;
        /**
          * Upper time-limit for the values displayed in the list. If this attribute’s value is in the hh:mm format, it is assumed to be hh:mm AM.
         */
        "maxTime"?: string;
        /**
          * Lower time-limit for the values displayed in the list. If this attribute’s value is in the hh:mm format, it is assumed to be hh:mm AM.
         */
        "minTime"?: string;
        /**
          * Time output value
         */
        "value"?: string;
    }
    interface FwToggle {
        /**
          * Sets the selected state as the default state. If the attribute’s value is undefined, the value is set to true.
         */
        "checked": boolean;
        /**
          * Specifies whether to disable the control on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled": boolean;
        /**
          * Name of the component, saved as part of the form data.
         */
        "name": string;
        /**
          * Size of the input control.
         */
        "size": "small" | "medium" | "large";
    }
}
declare global {
    interface HTMLFwButtonElement extends Components.FwButton, HTMLStencilElement {
    }
    var HTMLFwButtonElement: {
        prototype: HTMLFwButtonElement;
        new (): HTMLFwButtonElement;
    };
    interface HTMLFwCheckboxElement extends Components.FwCheckbox, HTMLStencilElement {
    }
    var HTMLFwCheckboxElement: {
        prototype: HTMLFwCheckboxElement;
        new (): HTMLFwCheckboxElement;
    };
    interface HTMLFwIconElement extends Components.FwIcon, HTMLStencilElement {
    }
    var HTMLFwIconElement: {
        prototype: HTMLFwIconElement;
        new (): HTMLFwIconElement;
    };
    interface HTMLFwInputElement extends Components.FwInput, HTMLStencilElement {
    }
    var HTMLFwInputElement: {
        prototype: HTMLFwInputElement;
        new (): HTMLFwInputElement;
    };
    interface HTMLFwLabelElement extends Components.FwLabel, HTMLStencilElement {
    }
    var HTMLFwLabelElement: {
        prototype: HTMLFwLabelElement;
        new (): HTMLFwLabelElement;
    };
    interface HTMLFwRadioElement extends Components.FwRadio, HTMLStencilElement {
    }
    var HTMLFwRadioElement: {
        prototype: HTMLFwRadioElement;
        new (): HTMLFwRadioElement;
    };
    interface HTMLFwRadioGroupElement extends Components.FwRadioGroup, HTMLStencilElement {
    }
    var HTMLFwRadioGroupElement: {
        prototype: HTMLFwRadioGroupElement;
        new (): HTMLFwRadioGroupElement;
    };
    interface HTMLFwSelectElement extends Components.FwSelect, HTMLStencilElement {
    }
    var HTMLFwSelectElement: {
        prototype: HTMLFwSelectElement;
        new (): HTMLFwSelectElement;
    };
    interface HTMLFwSelectOptionElement extends Components.FwSelectOption, HTMLStencilElement {
    }
    var HTMLFwSelectOptionElement: {
        prototype: HTMLFwSelectOptionElement;
        new (): HTMLFwSelectOptionElement;
    };
    interface HTMLFwSpinnerElement extends Components.FwSpinner, HTMLStencilElement {
    }
    var HTMLFwSpinnerElement: {
        prototype: HTMLFwSpinnerElement;
        new (): HTMLFwSpinnerElement;
    };
    interface HTMLFwTabElement extends Components.FwTab, HTMLStencilElement {
    }
    var HTMLFwTabElement: {
        prototype: HTMLFwTabElement;
        new (): HTMLFwTabElement;
    };
    interface HTMLFwTabsElement extends Components.FwTabs, HTMLStencilElement {
    }
    var HTMLFwTabsElement: {
        prototype: HTMLFwTabsElement;
        new (): HTMLFwTabsElement;
    };
    interface HTMLFwTagElement extends Components.FwTag, HTMLStencilElement {
    }
    var HTMLFwTagElement: {
        prototype: HTMLFwTagElement;
        new (): HTMLFwTagElement;
    };
    interface HTMLFwTextareaElement extends Components.FwTextarea, HTMLStencilElement {
    }
    var HTMLFwTextareaElement: {
        prototype: HTMLFwTextareaElement;
        new (): HTMLFwTextareaElement;
    };
    interface HTMLFwTimepickerElement extends Components.FwTimepicker, HTMLStencilElement {
    }
    var HTMLFwTimepickerElement: {
        prototype: HTMLFwTimepickerElement;
        new (): HTMLFwTimepickerElement;
    };
    interface HTMLFwToggleElement extends Components.FwToggle, HTMLStencilElement {
    }
    var HTMLFwToggleElement: {
        prototype: HTMLFwToggleElement;
        new (): HTMLFwToggleElement;
    };
    interface HTMLElementTagNameMap {
        "fw-button": HTMLFwButtonElement;
        "fw-checkbox": HTMLFwCheckboxElement;
        "fw-icon": HTMLFwIconElement;
        "fw-input": HTMLFwInputElement;
        "fw-label": HTMLFwLabelElement;
        "fw-radio": HTMLFwRadioElement;
        "fw-radio-group": HTMLFwRadioGroupElement;
        "fw-select": HTMLFwSelectElement;
        "fw-select-option": HTMLFwSelectOptionElement;
        "fw-spinner": HTMLFwSpinnerElement;
        "fw-tab": HTMLFwTabElement;
        "fw-tabs": HTMLFwTabsElement;
        "fw-tag": HTMLFwTagElement;
        "fw-textarea": HTMLFwTextareaElement;
        "fw-timepicker": HTMLFwTimepickerElement;
        "fw-toggle": HTMLFwToggleElement;
    }
}
declare namespace LocalJSX {
    interface FwButton {
        /**
          * Identifier of  the theme based on which the button is styled.
         */
        "color"?: "primary" | "secondary" | "danger" | "link" | "text";
        /**
          * Disables the button on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled"?: boolean;
        /**
          * Sets the button to a full-width block. If the attribute’s value is undefined, the value is set to true.
         */
        "expand"?: boolean;
        /**
          * Triggered when the button loses focus.
         */
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Triggered when the button is clicked.
         */
        "onFwClick"?: (event: CustomEvent<void>) => void;
        /**
          * Triggered when the button comes into focus.
         */
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Size of the button.
         */
        "size"?: "normal" | "mini" | "small";
        /**
          * Button type based on which actions are performed when the button is clicked.
         */
        "type"?: "button" | "reset" | "submit";
    }
    interface FwCheckbox {
        /**
          * Sets the state of the checkbox to selected. If the attribute’s value is undefined, the value is set to true.
         */
        "checked"?: boolean;
        /**
          * Disables the check box on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled"?: boolean;
        /**
          * Label displayed on the interface, for the check box.
         */
        "label"?: string;
        /**
          * Triggered when the check box loses focus.
         */
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Triggered when the check box’s value is modified.
         */
        "onFwChange"?: (event: CustomEvent<any>) => void;
        /**
          * Triggered when the check box comes into focus.
         */
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Identifier corresponding to the component, that is saved when the form data is saved.
         */
        "value"?: string;
    }
    interface FwIcon {
        /**
          * Color in which the icon is displayed, specified as a standard CSS color or as a HEX code.
         */
        "color"?: string;
        /**
          * Identifier of the icon. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
         */
        "name"?: string;
        /**
          * Size of the icon, specified in number of  pixels.
         */
        "size"?: number;
    }
    interface FwInput {
        /**
          * Specifies whether the browser can display suggestions to autocomplete the text value.
         */
        "autocomplete"?: "on" | "off";
        /**
          * Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. If the attribute’s value is undefined, the value is set to true. For a read-only input box, the clear icon is not displayed unless a default value is specified for the input box.
         */
        "clearInput"?: boolean;
        /**
          * Disables the component on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled"?: boolean;
        /**
          * Identifier of the icon that is displayed in the left side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
         */
        "iconLeft"?: string;
        /**
          * Identifier of the icon that is displayed in the right side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
         */
        "iconRight"?: string;
        /**
          * Label displayed on the interface, for the component.
         */
        "label"?: string;
        /**
          * Maximum number of characters a user can enter in the text box.
         */
        "maxlength"?: number;
        /**
          * Minimum number of characters a user must enter in the text box for the value to be valid.
         */
        "minlength"?: number;
        /**
          * Name of the component, saved as part of form data.
         */
        "name"?: string;
        /**
          * Triggered when the input box loses focus.
         */
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Triggered when the value in the input box is modified.
         */
        "onFwChange"?: (event: CustomEvent<any>) => void;
        /**
          * Triggered when the input box comes into focus.
         */
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Triggered when a value is entered in the input box.
         */
        "onFwInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Text displayed in the text box before a user enters a value.
         */
        "placeholder"?: string | null;
        /**
          * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to true.
         */
        "readonly"?: boolean;
        /**
          * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to true.
         */
        "required"?: boolean;
        /**
          * Theme based on which the text box is styled.
         */
        "state"?: "normal" | "warning" | "error";
        /**
          * Descriptive or instructional text displayed below the text box.
         */
        "stateText"?: string;
        /**
          * Type of value accepted as the input value. If a user enters a value other than the specified type, the input box is not populated.
         */
        "type"?: "text" | "number";
        /**
          * Default value displayed in the input box.
         */
        "value"?: string | null;
    }
    interface FwLabel {
        /**
          * Theme based on which the label is styled.
         */
        "color"?: "blue" | "red" | "green" | "yellow" | "grey" | "normal";
        /**
          * Display text in the label.
         */
        "value"?: string;
    }
    interface FwRadio {
        /**
          * Sets the state to selected. If the attribute’s value is undefined, the value is set to true.
         */
        "checked"?: boolean;
        /**
          * Disables the component on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled"?: boolean;
        /**
          * Label displayed on the interface, for the component.
         */
        "label"?: string;
        /**
          * Name of the component, saved as part of form data.
         */
        "name"?: string;
        /**
          * Triggered when the radio button loses focus.
         */
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Triggered when the radio button in focus is cleared.
         */
        "onFwDeselect"?: (event: CustomEvent<any>) => void;
        /**
          * Triggered when the radio button comes into focus.
         */
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Triggered when the radio button in focus is selected.
         */
        "onFwSelect"?: (event: CustomEvent<any>) => void;
        /**
          * Identifier corresponding to the component, that is saved when the form data is saved.
         */
        "value"?: string;
    }
    interface FwRadioGroup {
        /**
          * If true, a radio group can be saved without selecting any option. If an option is selected, the selection can be cleared. If the attribute’s value is undefined, the value is set to true.
         */
        "allowEmpty"?: boolean;
        /**
          * Name of the component, saved as part of form data.
         */
        "name"?: string;
        /**
          * Triggered when an option in the Radio Group is selected or deselected.
         */
        "onFwChange"?: (event: CustomEvent<any>) => void;
        /**
          * Default option that is selected when the radio group is displayed on the interface. Must be a valid value corresponding to the fw-radio components used in the Radio Group.
         */
        "value"?: any | null;
    }
    interface FwSelect {
        /**
          * Disables the component on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled"?: boolean;
        /**
          * If true, the user must select a value. The default value is not displayed.
         */
        "forceSelect"?: boolean;
        /**
          * Label displayed on the interface, for the component.
         */
        "label"?: string;
        /**
          * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to true.
         */
        "multiple"?: boolean;
        /**
          * Name of the component, saved as part of form data.
         */
        "name"?: string;
        /**
          * Triggered when the list box loses focus.
         */
        "onFwBlur"?: (event: CustomEvent<any>) => void;
        /**
          * Triggered when a value is selected or deselected from the list box options.
         */
        "onFwChange"?: (event: CustomEvent<any>) => void;
        /**
          * Triggered when the list box comes into focus.
         */
        "onFwFocus"?: (event: CustomEvent<any>) => void;
        /**
          * Text displayed in the list box before an option is selected.
         */
        "placeholder"?: string | null;
        /**
          * If true, the user cannot modify the default value selected. If the attribute's value is undefined, the value is set to true.
         */
        "readonly"?: boolean;
        /**
          * Specifies the select field as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to true.
         */
        "required"?: boolean;
        /**
          * Theme based on which the list box is styled.
         */
        "state"?: "normal" | "warning" | "error";
        /**
          * Descriptive or instructional text displayed below the list box.
         */
        "stateText"?: string;
        /**
          * Type of option accepted as the input value. If a user tries to enter an option other than the specified type, the list is not populated.
         */
        "type"?: "text" | "number";
        /**
          * Value of the option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select.
         */
        "value"?: any;
    }
    interface FwSelectOption {
        /**
          * States that the option is an HTML value. If the attribute's value is undefined, the value is set to true.
         */
        "html"?: boolean;
        /**
          * HTML content that is displayed as the option.
         */
        "htmlContent"?: string;
        /**
          * Triggered when an option is selected.
         */
        "onFwSelected"?: (event: CustomEvent<any>) => void;
        /**
          * Alternate text displayed on the interface, in place of the actual HTML content.
         */
        "optionText"?: string;
        /**
          * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to true.
         */
        "selected"?: boolean;
        /**
          * Value corresponding to the option, that is saved  when the form data is saved.
         */
        "value"?: string;
    }
    interface FwSpinner {
        /**
          * Color in which the loader is displayed, specified as a standard CSS color.
         */
        "color"?: string;
        /**
          * Size of the loader.
         */
        "size"?: "small" | "medium" | "large" | "default";
    }
    interface FwTab {
        /**
          * Message that is displayed when a user navigates away from a tab.
         */
        "message"?: string;
        /**
          * Name of the tab displayed on the UI.
         */
        "tabHeader"?: string;
    }
    interface FwTabs {
    }
    interface FwTag {
        /**
          * Triggered when the tag is deselected.
         */
        "onFwClosed"?: (event: CustomEvent<any>) => void;
        /**
          * Display text in the tag component.
         */
        "text"?: string;
        /**
          * Value associated with the tag component, that is saved when the form data is saved.
         */
        "value"?: string;
    }
    interface FwTextarea {
        /**
          * Width of the input box, specified as number of columns.
         */
        "cols"?: number;
        /**
          * Disables the text area on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled"?: boolean;
        /**
          * Label displayed on the interface, for the component.
         */
        "label"?: string;
        /**
          * Maximum number of characters a user can enter in the input box.
         */
        "maxlength"?: number;
        /**
          * Minimum number of characters a user must enter in the input box for the value to be valid.
         */
        "minlength"?: number;
        /**
          * Name of the component, saved as part of form data.
         */
        "name"?: string;
        /**
          * Triggered when the input box loses focus.
         */
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Triggered when the value in the input box is modified.
         */
        "onFwChange"?: (event: CustomEvent<any>) => void;
        /**
          * Triggered when the input box comes into focus.
         */
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Triggered when a value is entered in the input box.
         */
        "onFwInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Text displayed in the input box before a user enters a value.
         */
        "placeholder"?: string | null;
        /**
          * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to true.
         */
        "readonly"?: boolean;
        /**
          * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to true.
         */
        "required"?: boolean;
        /**
          * Height of the input box, specified as number of rows.
         */
        "rows"?: number;
        /**
          * Theme based on which the input box is styled.
         */
        "state"?: "normal" | "warning" | "error";
        /**
          * Descriptive or instructional text displayed below the input box.
         */
        "stateText"?: string;
        /**
          * Default value displayed in the input box.
         */
        "value"?: string | null;
        /**
          * Type of text wrapping used by the input box. If the value is hard, the text in the textarea is wrapped (contains line breaks) when the form data is saved. If the value is soft, the text in the textarea is saved as a single line, when the form data is saved.
         */
        "wrap"?: "soft" | "hard";
    }
    interface FwTimepicker {
        /**
          * Format in which time values are populated in the list box. If the value is hh:mm p, the time values are in the 12-hour format. If the value is hh:mm, the time values are in the 24-hr format.
         */
        "format"?: "hh:mm A" | "HH:mm";
        /**
          * Time interval between the values displayed in the list, specified in minutes.
         */
        "interval"?: number;
        /**
          * Upper time-limit for the values displayed in the list. If this attribute’s value is in the hh:mm format, it is assumed to be hh:mm AM.
         */
        "maxTime"?: string;
        /**
          * Lower time-limit for the values displayed in the list. If this attribute’s value is in the hh:mm format, it is assumed to be hh:mm AM.
         */
        "minTime"?: string;
        /**
          * Time output value
         */
        "value"?: string;
    }
    interface FwToggle {
        /**
          * Sets the selected state as the default state. If the attribute’s value is undefined, the value is set to true.
         */
        "checked"?: boolean;
        /**
          * Specifies whether to disable the control on the interface. If the attribute’s value is undefined, the value is set to true.
         */
        "disabled"?: boolean;
        /**
          * Name of the component, saved as part of the form data.
         */
        "name"?: string;
        /**
          * Triggered when the input control is selected or deselected.
         */
        "onFwChange"?: (event: CustomEvent<any>) => void;
        /**
          * Size of the input control.
         */
        "size"?: "small" | "medium" | "large";
    }
    interface IntrinsicElements {
        "fw-button": FwButton;
        "fw-checkbox": FwCheckbox;
        "fw-icon": FwIcon;
        "fw-input": FwInput;
        "fw-label": FwLabel;
        "fw-radio": FwRadio;
        "fw-radio-group": FwRadioGroup;
        "fw-select": FwSelect;
        "fw-select-option": FwSelectOption;
        "fw-spinner": FwSpinner;
        "fw-tab": FwTab;
        "fw-tabs": FwTabs;
        "fw-tag": FwTag;
        "fw-textarea": FwTextarea;
        "fw-timepicker": FwTimepicker;
        "fw-toggle": FwToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fw-button": LocalJSX.FwButton & JSXBase.HTMLAttributes<HTMLFwButtonElement>;
            "fw-checkbox": LocalJSX.FwCheckbox & JSXBase.HTMLAttributes<HTMLFwCheckboxElement>;
            "fw-icon": LocalJSX.FwIcon & JSXBase.HTMLAttributes<HTMLFwIconElement>;
            "fw-input": LocalJSX.FwInput & JSXBase.HTMLAttributes<HTMLFwInputElement>;
            "fw-label": LocalJSX.FwLabel & JSXBase.HTMLAttributes<HTMLFwLabelElement>;
            "fw-radio": LocalJSX.FwRadio & JSXBase.HTMLAttributes<HTMLFwRadioElement>;
            "fw-radio-group": LocalJSX.FwRadioGroup & JSXBase.HTMLAttributes<HTMLFwRadioGroupElement>;
            "fw-select": LocalJSX.FwSelect & JSXBase.HTMLAttributes<HTMLFwSelectElement>;
            "fw-select-option": LocalJSX.FwSelectOption & JSXBase.HTMLAttributes<HTMLFwSelectOptionElement>;
            "fw-spinner": LocalJSX.FwSpinner & JSXBase.HTMLAttributes<HTMLFwSpinnerElement>;
            "fw-tab": LocalJSX.FwTab & JSXBase.HTMLAttributes<HTMLFwTabElement>;
            "fw-tabs": LocalJSX.FwTabs & JSXBase.HTMLAttributes<HTMLFwTabsElement>;
            "fw-tag": LocalJSX.FwTag & JSXBase.HTMLAttributes<HTMLFwTagElement>;
            "fw-textarea": LocalJSX.FwTextarea & JSXBase.HTMLAttributes<HTMLFwTextareaElement>;
            "fw-timepicker": LocalJSX.FwTimepicker & JSXBase.HTMLAttributes<HTMLFwTimepickerElement>;
            "fw-toggle": LocalJSX.FwToggle & JSXBase.HTMLAttributes<HTMLFwToggleElement>;
        }
    }
}
