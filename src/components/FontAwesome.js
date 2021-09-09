import { library } from '@fortawesome/fontawesome-svg-core';
import {
    fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
    fas,
    faLink,
    faTimes,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

function initFontAwesome() {
    library.add(
        fab,
        fas,
        faLink,
        faTwitterSquare,
        faFacebook,
        faLinkedin,
        faGithub,
        faTimes,
        faBars
    );
}
export default initFontAwesome;
