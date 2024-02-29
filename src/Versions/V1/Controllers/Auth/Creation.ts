import { Request, Response } from 'express'

import Logger from 'Utils/Logger/Logger.js'

import prisma from 'Database/index.js'

interface IBody {
	username: string
}

const GetUserData = async (req: Request, res: Response) => {
	const { username } = req.body as IBody

	return res.status(200).json({
		errors: [],
		data: {},
	})
}

export default GetUserData
