import m from 'mithril';

export const Layout = {
    view: (vnode: m.Vnode) => {
        return m("div.min-h-screen.bg-gray-900.text-white.font-sans", [
            // Shared Navigation Bar
            m("nav.bg-gray-800.p-4.shadow-md.flex.gap-4", [
                m(m.route.Link, { href: "/", class: "text-blue-400 hover:text-blue-300 font-semibold transition-colors" }, "Home"),
                m(m.route.Link, { href: "/settings", class: "text-blue-400 hover:text-blue-300 font-semibold transition-colors" }, "Settings")
            ]),
            // Dynamic Page Content gets injected here
            m("main.p-8", vnode.children)
        ]);
    }
};