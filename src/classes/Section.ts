export default class Section {
	readonly items: string[] = []
	readonly paragraphs: string[] = []
	public type: 'read-do' | 'do-confirm'

	constructor(readonly header: string) {}

	addItem(items: string) {}

	addSubSection() {}

	setReadDo() {}

	setDoConfirm() {}

	addParagraphs(para: string) {
		this.paragraphs.push(para)
	}
}
