function readForm() {
    var form = document.myForm,
        text = form.myText.value,
        select = form.mySelect.value,
        checkbox = form.myCheck.checked;

    return { text, select, checkbox };
}

function writeForm(obj) {
    var form = document.myForm;
    form.myText.value = obj.text;
    form.mySelect.value = obj.select;
    form.myCheck.checked = obj.checkbox;
}

function writeFile(content) {
    var element = document.createElement("a");

    element.setAttribute("href", "data:plain/text;charse=utf-8," + encodeURIComponent(content));
    element.setAttribute("download", "formContent.txt");
    element.click();
}

function readFile(callback) {
    var element = document.createElement("input");

    element.setAttribute("type", "file");
    element.onchange = function () {
        var reader = new FileReader();

        reader.onload = function () {
            var content = reader.result;
            callback(content);
        };

        reader.readAsText(element.files[0]);
    };

    element.click();
}

function save() {
    var formContent = JSON.stringify(readForm());
    writeFile(formContent);
}

function load() {
    readFile(function (content) {
        writeForm(JSON.parse(content));
    });
}
