import Section from './classes/Section'

export default function parser(input: string) {
	const items = input
		.split('\n')
		.map(item => item.trim())
		.filter(item => item.length)

	const sections: Section[] = []
	let current: Section

	for (const item of items) {
		const first = item[0]

		switch (first) {
			case '#':
				const header = item.substr(1)
				current = new Section(header)

				sections.push(current)
				break

			case '>':
				const instructions = item
					.substr(1)
					.trim()
					.split(' ')

				break

			case '-':
			case '+':
			case '=':
			case '*':
				current.addItem(item.substr(1).trim())
				break
			default:
				current.addParagraphs(item)
		}
	}
}
