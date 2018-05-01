import Section from './classes/Section'

type instructionFuction = (section: Section) => void

export const instructionHandler: { [key: string]: instructionFuction } = {}
instructionAdder(['dc', 'do-confirm'], section => section.setDoConfirm())
instructionAdder(['rd', 'read-do'], section => section.setReadDo())

function instructionAdder(instructions: string[], func: instructionFuction) {
	instructions.forEach(instruction => {
		instructionHandler[instruction] = func
	})
}

function instructionRunner(instruction: string, section: Section) {}
