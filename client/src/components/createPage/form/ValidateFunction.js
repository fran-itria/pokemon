export default function validate(campos) {
  const imageURL = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)$/;
  let errors = {};

  if (campos.name.length != 0) {
    if (campos.name[0] != campos.name[0].toUpperCase()) {
      errors.name = "El nombre debe iniciar con letra mayuscula";
    } else if (campos.name.length <= 5)
      errors.name = "El nombre debe tener mas de 5 caracteres";
  } else errors.name = "El campo nombre debe ser completado obligatoriamente";

  if (!imageURL.test(campos.image)) {
    errors.image =
      "El campo de imagen debe ser una url valida para imagenes, debe terminar con el formato de la imagen (jpg,jpeg,png,gif)";
  }

  if (!parseInt(campos.hp)) {
    errors.hp = "La vida debe ser un número";
  } else if (campos.hp < 100) errors.hp = "La vida debe ser 100 o superior";

  if (!parseInt(campos.attack)) {
    errors.attack = "El ataque debe ser un número";
  } else if (!Number.isInteger(parseInt(campos.attack))) {
    errors.attack = "El ataque debe ser un número entero";
  }

  if (!parseInt(campos.deffence)) {
    errors.deffence = "El defensa debe ser un número";
  } else if (!Number.isInteger(parseInt(campos.deffence)))
    errors.deffence = "La defensa debe ser un número entero";

  if (campos.types.length != 0) {
    if (campos.types.length > 4)
      errors.types = "Puede haber un máximo de 4 types seleccionados";
  } else errors.types = "Debe haber mínimo un type seleccionado";

  return errors;
}
