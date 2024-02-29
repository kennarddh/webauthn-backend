import { body } from 'express-validator'

import CheckValidationError from 'Middlewares/CheckValidationError.js'

const Creation = () => {
	const validator = [
		body('username')
			.trim()
			.not()
			.isEmpty()
			.withMessage('Username cannot be empty')
			.bail()
			.escape()
			.isLength({ max: 50 })
			.withMessage('Username must be a maximum of 50 characters')
			.bail(),
		CheckValidationError(),
	]

	return validator
}

export default Creation
