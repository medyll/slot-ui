import { Position } from '$lib/engine/presets.js';

export type StickToPositionType = keyof typeof Position;

type StickToProps = {
	parentNode: HTMLElement | undefined;
	position?: StickToPositionType;
	disabled?: boolean;
	stickToHookWidth?: boolean;
};

export function stickTo(node: HTMLElement, props: StickToProps) {
	const { parentNode, position, stickToHookWidth } = props;

	if (node && parentNode) {
		document.body.appendChild(node);
		setPosition(node, position, parentNode);
	} else {
		return false;
	}

	/* node.setAttribute('popover', 'auto');
	node.showPopover(); */
	window.addEventListener('scroll', () => {
		setPosition(node, position, parentNode);
	});

	const nodeObserver = new ResizeObserver(() => {
		setPosition(node, position, parentNode);
	});
	nodeObserver.observe(node);

	const parentObserver = new ResizeObserver(() => {
		setPosition(node, position, parentNode);
	});
	parentObserver.observe(parentNode);

	function checkBoundaries(node: HTMLElement, parentNode: HTMLElement, position: string) {
		const nodePos = node.getBoundingClientRect();
		let newPos: string = position;

		window.requestAnimationFrame(() => {});
		const threshold = 32;
		//node.style.transition = 'all 0.05s ease-in-out';
		if (nodePos.bottom >= window.innerHeight - threshold) {
			newPos = newPos.replace('B', 'T');
		} /*  else if (nodePos.top - threshold <= 0) {
			newPos = newPos.replace('T', 'B');
		} */
		if (nodePos.right > window.innerWidth - threshold) {
			newPos = newPos.replace('R', 'L');
		} /* else if (nodePos.left - threshold <= 0) {
			newPos = newPos.replace('L', 'R');
		} */
		//node.style.transition = '';
		return newPos;
	}

	function setMaxDimensions(node: HTMLElement, parentNode: HTMLElement) {
		const nodePos = node.getBoundingClientRect();
		const docWidth = document.documentElement.clientWidth;
		const docHeight = document.documentElement.clientHeight;

		const maxWidth = docWidth - nodePos.left;
		const maxHeight = docHeight - nodePos.top;

		node.style.maxWidth = maxWidth + 'px';
		node.style.maxHeight = maxHeight + 'px';
	}

	function setPosition(node: HTMLElement, position: any, parentNode: HTMLElement) {
		setMaxDimensions(node, parentNode);

		const parentPos = parentNode.getBoundingClientRect();

		const newPosition = checkBoundaries(node, parentNode, position);

		window.requestAnimationFrame(() => {
			if (stickToHookWidth) node.style.minWidth = String(parentPos.width) + 'px';

			if (newPosition.includes(Position.T)) {
				node.style.top = String(parentPos.top - node.offsetHeight) + 'px';
			}
			if (newPosition.includes(Position.R)) {
				node.style.left = String(parentPos.right - node.offsetWidth) + 'px';
			}
			if (newPosition.includes(Position.B)) {
				node.style.top = String(parentPos.bottom) + 'px';
			}
			if (newPosition.includes(Position.L)) {
				node.style.left = String(parentPos.left) + 'px';
			}

			if (newPosition.includes(Position.C)) {
				node.style.left =
					String(parentPos.left + parentPos.width / 2 - node.offsetWidth / 2) + 'px';
			}
		});
	}

	return {
		destroy() {
			nodeObserver.disconnect();
			parentObserver.disconnect();
			window.removeEventListener('scroll', () => {
				setPosition(node, position, parentNode);
			});
			node.remove();
		}
	};
}
