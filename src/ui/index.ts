import m from 'mithril';
// Notice we dropped the 'ui/' prefix because we are already in the directory
import { Layout } from './layout';
import { Home } from './home';
import { Settings } from './settings';

const appContainer = document.getElementById('app');

if (appContainer) {
    m.route(appContainer, "/", {
        "/": {
            render: () => m(Layout, m(Home))
        },
        "/settings": {
            render: () => m(Layout, m(Settings))
        }
    });
}