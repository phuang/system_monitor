import m from 'mithril';

export const Settings = {
    view: () => {
        return m("div", [
            m("h1.text-3xl.font-bold.mb-4", "Configuration"),
            m("p.text-gray-300", "Adjust your kernel parameters and UI preferences here.")
        ]);
    }
};