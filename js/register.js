function messageBox(color, message) {
  const messageBoxContainer = document.getElementById("message-box-container");
  const messageBox = document.createElement("div");
  messageBox.classList.add("message-box");
  messageBox.style.backgroundColor = color;
  messageBox.innerText = message;
  messageBoxContainer.appendChild(messageBox);
  setTimeout(function () {
    messageBox.style.transform = "translateX(0)";
  }, 100);
  setTimeout(function () {
    messageBox.style.transform = "translateX(calc(100% + 0.5rem))";
  }, 2000);
  setTimeout(function () {
    messageBoxContainer.removeChild(messageBox);
  }, 2500);
}

function validateRegisterForm() {
  const warningColor = "rgba(255, 0, 0, 0.8)";
  const formData = {
    companyName: document.forms["register-form"]["company-name"].value,
    boothSize: document.forms["register-form"]["booth-size"].value,
    requiredTable: document.forms["register-form"]["required-table"].checked,
    numberOfChairRequired:
      document.forms["register-form"]["number-of-chair-required"].value,
    contactName: document.forms["register-form"]["contact-name"].value,
    contactTel: document.forms["register-form"]["contact-tel"].value,
  };
  if (formData.companyName.length == 0) {
    messageBox(warningColor, "Company Name must not be empty");
    document.forms["register-form"]["company-name"].focus();
    return false;
  } else if (
    formData.numberOfChairRequired.length != 0 &&
    !(
      parseInt(formData.numberOfChairRequired) >= 1 &&
      parseInt(formData.numberOfChairRequired) <= 10
    )
  ) {
    messageBox(
      warningColor,
      "If specified, Number of Chair Required must not greater than 10"
    );
    document.forms["register-form"]["number-of-chair-required"].focus();
    return false;
  } else if (formData.contactName.length == 0) {
    messageBox(warningColor, "Contact Name must not be empty");
    document.forms["register-form"]["contact-name"].focus();
    return false;
  } else if (!/^\d*$/.test(formData.contactTel)) {
    messageBox(warningColor, "Phone Number must in number only");
    document.forms["register-form"]["contact-tel"].focus();
    return false;
  } else if (
    !(formData.contactTel.length >= 9 && formData.contactTel.length <= 10)
  ) {
    messageBox(warningColor, "Phone Number must be 9-10 digits");
    document.forms["register-form"]["contact-tel"].focus();
    return false;
  }
  messageBox("rgba(0, 255, 0, 0.8)", "Register Success");
  return false;
  // Uncomment this line to submit form, No backend yet
  // return true;
}
