export const REMARKABLE = 'ReMarkable 1 & 2';
const REMARKABLE_PAPER_PRO = 'ReMarkable Paper Pro';
const SUPERNOTE_A5_X = 'Supernote A5 X';
const REMARKABLE_PAPER_PRO_MOVE = 'ReMarkable Paper Pro Move';
export const CUSTOM = 'Custom';

export const AVAILABLE_DEVICES = [
	REMARKABLE,
	REMARKABLE_PAPER_PRO,
	REMARKABLE_PAPER_PRO_MOVE,
	SUPERNOTE_A5_X,
	CUSTOM,
];

export function getPageProperties( device ) {
	switch ( device ) {
		case REMARKABLE_PAPER_PRO:
			return {
				dpi: 229,
				pageSize: [ 1620, 2160 ],
			};
		case REMARKABLE_PAPER_PRO_MOVE:
				return {
					dpi: 229,
					pageSize: [ 954, 1696 ],
				};
		case SUPERNOTE_A5_X:
		case REMARKABLE:
		default:
			return {
				dpi: 226,
				pageSize: [ 1404, 1872 ],
			};
	}
}
