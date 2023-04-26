export default function validate(campos) {
  const imageURL = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)$/;
  const characters = /^[a-zA-Z0-9]+$/;
  let errors = {};

  if (campos.name.length != 0) {
    if (campos.name[0] != campos.name[0].toUpperCase()) {
      errors.name = "The name must start with a upper letter";
    } else if (campos.name.length <= 5) {
      errors.name = "The name must have more than 5 characters";
    } else if (!characters.test(campos.name)) {
      errors.name = "The name cannot contain special characters";
    }
  } else errors.name = "The name field must be completed";

  if (!imageURL.test(campos.image)) {
    errors.image =
      "The image must be a valid url for images (jpg,jpeg,png,gif)";
  }

  if (!parseInt(campos.hp)) {
    errors.hp = "Hp should be a number";
  } else if (campos.hp < 100) errors.hp = "Hp must be 100 or higher";
  else if (!Number.isInteger(Number(campos.deffence))) {
    errors.deffence = "Hp should be a integer number";
  }

  if (!parseInt(campos.attack)) {
    errors.attack = "Attack should be a number";
  } else if (!Number.isInteger(Number(campos.attack))) {
    errors.attack = "Attack should be a integer number";
  }

  if (!parseInt(campos.deffence)) {
    errors.deffence = "Deffence should be a number";
  } else if (!Number.isInteger(Number(campos.deffence)))
    errors.deffence = "Deffence should be a integer number";

  if (campos.types.length != 0) {
    if (campos.types.length > 4) errors.types = "Maximum of 4 types selected";
  } else errors.types = "There must be at least one type selected";

  return errors;
}
