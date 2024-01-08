const submitForm = () => {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;

    const formData = {
        name: name,
        lastName: lastName,
    };
    const jsonFormData = JSON.stringify(formData);
    document.getElementById("form").innerHTML = jsonFormData;
}