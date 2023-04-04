
import { writable } from 'svelte/store'



export const createUpdateRowState = function () {

	const { subscribe, set } = writable({
		open: false,
		rowData: {},
		rowElement: null
	})

	return {
		subscribe,
		open ({ rowData, rowElement }) {
			set({ open: true, rowData, rowElement })
		},
		close () {
			set({ open: false, rowData: {}, rowElement: null })
		},
	}
}

