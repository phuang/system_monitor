import m from 'mithril';

export const Home = {
    view: () => {
        return m("div", [
            m("h1.text-3xl.font-bold.mb-4", "System Dashboard"),
            m("p.text-gray-300", "Welcome to the primary interface. All subsystems are online.")
        ]);
    }
};