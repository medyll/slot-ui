import { render, fireEvent } from '@testing-library/svelte'
import Tabs from "./Tabs.svelte";
import Cartouche from "../cartouche/Cartouche.svelte";

it('should work',async()=>{
    const items = [
        {label: 'Tab 1', code: 'theTitle1'},
        {label: 'Tab 2', code: 'theTitle2'},
        {label: 'Another tab', code: 'theTitle3', component: Cartouche, componentProps: {label: 'inner component'}},
    ];

    const { getByText, getByTestId } = render(Tabs, {
        items,
        activeTabCode: 'theTitle1'
    })

    console.log(getByText('Tab 1'))
})