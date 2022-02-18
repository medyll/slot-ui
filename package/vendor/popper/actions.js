import Popper from './Popper.svelte';
export let popperList = {};
const openPopper = (popperId, args = {}) => {
    if (popperList[popperId]) {
        if (popperList[popperId].toggle) {
            popperList[popperId].toggle();
        }
        else {
            createPopper();
        }
        // resend props if changed
    }
    else {
        createPopper();
    }
    function createPopper() {
        popperList[popperId] = new Popper({
            target: document.body,
            intro: true,
            props: {
                code: popperId,
                ...args,
            },
        });
        popperList[popperId].$$.on_destroy.push(() => {
            delete (popperList[popperId]);
        });
    }
};
export { openPopper };
