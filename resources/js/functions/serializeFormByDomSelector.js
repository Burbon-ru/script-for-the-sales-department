import jQuery from 'jquery';
const $ = jQuery;

export default function serializeFormByDomSelector (selector) {
    let serializedFormArray = $(selector).serializeArray();
    let objFormData = {};

    $.each(serializedFormArray, function () {
        objFormData[this.name] = this.value;
    });

    return objFormData;
}
