const initialState = {
	items: [
		{
			id: "0",
			title: "To do",
			slug: "to-do"
		},
		{
			id: "1",
			title: "In process",
			slug: "in-process"
		},
		{
			id: "2",
			title: "Done",
			slug: "done"
		}
	]
};

export const categories = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	};
};