function submitted() {
    let txtname = document.getElementById('txtname').value;
    let txtemail = document.getElementById('txtemail').value;
    let websiteUrl = document.getElementById('txtweb').value;
    let flexRadioDefault1 = document.getElementById('flexRadioDefault1').checked ? 'Male' : 'Female'; // Use .checked to get the selected radio button
    let inlineCheckbox1 = document.getElementById('inlineCheckbox1').checked ? 'HTML' : '';
    let inlineCheckbox2 = document.getElementById('inlineCheckbox2').checked ? 'CSS' : '';
    let inlineCheckbox3 = document.getElementById('inlineCheckbox3').checked ? 'JavaScript' : '';
    let formFile = document.getElementById('formFile').files[0];

    // Check if all required fields are filled
    if (!txtname || !txtemail || !txtweb || (!flexRadioDefault1 || !flexRadioDefault2) || (!inlineCheckbox1 && !inlineCheckbox2 && !inlineCheckbox3) || !formFile) {
        alert('Please fill out all required fields.');
        return;
    }

    // Create an image element to display the uploaded image
    let img = document.createElement('img');
    img.src = URL.createObjectURL(formFile); // Set the image source to the uploaded file
    img.className = 'table-image';


    // Create a new table row with the data
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>Name: ${txtname}<br>Email: <a href="${txtemail}" target="_blank">${txtemail}</a><br>Website: <a href="${websiteUrl}" target="_blank">${websiteUrl}</a><br>Gender: ${flexRadioDefault1 || flexRadioDefault2}<br>Skills: ${inlineCheckbox1}&nbsp;${inlineCheckbox2}&nbsp;<br>${inlineCheckbox3}</td>
    <td></td>`;

    // Append the image to the second cell of the table row
    tableRow.querySelector('td:last-child').appendChild(img);

    // Append the table row to the table body
    let tableBody = document.getElementById('tble');
    tableBody.appendChild(tableRow);
    // Clear the form after submission (optional)
    document.getElementById('txtname').value = '';
    document.getElementById('txtemail').value = '';
    document.getElementById('txtweb').value = '';

    // Clear the radio buttons
    document.getElementById('flexRadioDefault1').checked = false;
    document.getElementById('flexRadioDefault2').checked = false;

    // Clear the checkboxes
    document.getElementById('inlineCheckbox1').checked = false;
    document.getElementById('inlineCheckbox2').checked = false;
    document.getElementById('inlineCheckbox3').checked = false;

    // Clear the file input element
    let fileInput = document.getElementById('formFile');
    fileInput.value = ''; // This is how you clear a file input


}
