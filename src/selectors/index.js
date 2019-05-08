export const getList = state => (state.data && Object.keys(state.data).length ? state.data : {});
