import './styles/reset.css';
import './styles/styles.css';
import './styles/fonts.css';
import './styles/layout.css';
import './styles/variables.css';
import './styles/theme.css';
import './styles/form.css';

import projectList from './projectList.js';
import initialize from './init.js';
import { addSidebarCollapseEventListener } from './addEventListeners.js';

addSidebarCollapseEventListener();

initialize(projectList, projectList.list[0]);