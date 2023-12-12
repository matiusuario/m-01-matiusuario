import { body, validationResult } from "express-validator";

const validations = {};

validations.validatePost = [
	body("title").isString().notEmpty().withMessage("Debe ingresar un título")
		.isLength({min: 2}).withMessage("El título debe tener al menos 2 caracteres"),
	body("description").isString().notEmpty().withMessage("Debe ingresar un cuerpo de publicación")
	.isLength({min: 2}).withMessage("El título debe tener al menos 2 caracteres"),
	body("author").isString().notEmpty().withMessage("Debe ingresar un identificador de usuario")
];

validations.validateUser = [
	body("username").isString().notEmpty().withMessage("Debe ingresar un nombre de usuario")
		.isLength({min: 5}).withMessage("El nombre de usuario debe tener al menos 5 caracteres"),
	body("password").isString().notEmpty().withMessage("Debe ingresar una contraseña")
		.isLength({min: 5}).withMessage("La contraseña debe tener al menos 5 caracteres"),
	body("email").isString().notEmpty().withMessage("Debe ingresar un email")
		.isEmail().withMessage("Debe ingresar un email válido"),
	body("avatarUrl").isURL().withMessage("Debe ingresar una URL de la imágen")
];

validations.validateComment = [
	body("description").isString().notEmpty().withMessage("Debe ingresar un comentario")
	.isLength({min: 2}).withMessage("El comentario debe tener al menos 2 caracteres"),
	body("author").isString().notEmpty().withMessage("Debe ingresar un identificador de usuario")
];

const handleValidation = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json(errors);
	}
	next();
}

export { validations, handleValidation };
