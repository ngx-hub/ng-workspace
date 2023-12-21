import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from "@angular/platform-browser/animations";

import { provideUix } from "@ngx-hub/uix/core/services";
import {
    UIX_APP_SCALE_DEFAULT,
    UIX_THEMES_CONFIG_DEFAULT,
    UIX_BREAKPOINTS_CONFIG_DEFAULT
} from "@ngx-hub/uix/core/types";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimations(),
        provideUix({
            scrollStrategy: "window",
            appScale: UIX_APP_SCALE_DEFAULT,
            themes: UIX_THEMES_CONFIG_DEFAULT,
            breakpoints: UIX_BREAKPOINTS_CONFIG_DEFAULT,
            overlayViewportMargin: 8,
            noopAnimations: false,
            cdkOverlayGlass: true,
            cdkFocusVisible: false,
            disabledPlain: false,
            interactivityType: "interactive-fast",
            rippleType: "ripple",
            disableRipple: false,
        }),
    ]
};
