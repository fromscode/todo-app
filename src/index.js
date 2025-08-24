import './styles/reset.css';
import './styles/styles.css';
import './styles/fonts.css';
import './styles/layout.css';
import './styles/variables.css';
import './styles/theme.css';
import './styles/form.css';

import list from './localStorage.js';
import initialize from './init.js';
import { addSidebarCollapseEventListener } from './addEventListeners.js';

addSidebarCollapseEventListener();

initialize(list, list.list[0]);