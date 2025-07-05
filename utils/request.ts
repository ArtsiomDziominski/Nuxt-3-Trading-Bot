import { storeToRefs } from 'pinia';
import { HEADER_PARAMETERS } from '~/const/request';
import { userStore } from '~/store/user';

export function getHeadersRequest() {
	const payload = [HEADER_PARAMETERS.content];
	const storeUser = userStore();
	const { userToken } = storeToRefs(storeUser);
	if (userToken.value) {
		payload.push(HEADER_PARAMETERS.authorization)
		payload.push(HEADER_PARAMETERS.accept)
	}
	let headers = {};
	payload.map((item) => {
		headers = {
			...headers,
			...item
				.key === HEADER_PARAMETERS.authorization.key
				? { [item.key]: userToken.value }
				: { [item.key]: item.body },
		};
	});
	return { headers };
}

export function getHeadersRequestDelete() {
	const storeUser = userStore();
	const { userToken } = storeToRefs(storeUser);
	return { 'Authorization': String(userToken.value), 'Content-Type': 'application/json' };
}
